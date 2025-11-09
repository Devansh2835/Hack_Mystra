'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { WizardIcon } from '@/components/wizard-icon';
import Link from 'next/link';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m Harry Potter. Im here to help with your coding journey?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let botResponse = '';

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: '',
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data === '[DONE]') {
                setIsLoading(false);
                return;
              }
              try {
                const parsed = JSON.parse(data);
                if (parsed.text) {
                  botResponse += parsed.text;
                  setMessages(prev => 
                    prev.map(msg => 
                      msg.id === botMessage.id 
                        ? { ...msg, text: botResponse }
                        : msg
                    )
                  );
                }
              } catch (e) {
                // Ignore parsing errors
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0018] text-purple-100">
      <div className="container mx-auto max-w-4xl h-screen flex flex-col">
        <div className="flex items-center gap-4 p-4 border-b border-purple-800">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-purple-300 hover:text-purple-100">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-purple-100">AI Assistant</h1>
        </div>

        <ScrollArea ref={scrollAreaRef} className="flex-1 p-6 overflow-hidden">
          <div className="space-y-6 pr-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-4 ${
                  message.sender === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`flex-shrink-0 p-3 rounded-full ${
                  message.sender === 'user' 
                    ? 'bg-purple-600' 
                    : 'bg-purple-800'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="h-5 w-5" />
                  ) : (
                    <WizardIcon className="h-5 w-5" />
                  )}
                </div>
                <div
                  className={`flex-1 min-w-0 p-4 rounded-lg break-words ${
                    message.sender === 'user'
                      ? 'bg-purple-600 text-white max-w-[75%] ml-auto'
                      : 'bg-purple-900/50 text-purple-100 border border-purple-800 max-w-[75%]'
                  }`}
                >
                  <p className="chat-message">{message.text}</p>
                  <span className="text-xs opacity-70 mt-2 block">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-full bg-purple-800">
                  <WizardIcon className="h-5 w-5" />
                </div>
                <div className="bg-purple-900/50 text-purple-100 border border-purple-800 p-4 rounded-lg max-w-[75%]">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="p-6 border-t border-purple-800">
          <div className="flex gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about web development, coding, or your learning journey..."
              className="flex-1 bg-purple-900/20 border-purple-700 text-purple-100 placeholder:text-purple-400 h-12"
              disabled={isLoading}
            />
            <Button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="bg-purple-600 hover:bg-purple-700 h-12 px-6"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}