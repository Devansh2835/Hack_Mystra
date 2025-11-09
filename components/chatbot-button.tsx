'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatModal } from './chat-modal';
import { WizardIcon } from './wizard-icon';

export function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg z-50"
        size="icon"
      >
        <WizardIcon className="h-6 w-6" />
      </Button>
      
      <ChatModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}