"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { javascriptSheet } from "./data/javascriptSheet";
import CodeChallenge from "./components/CodeChallenge";
import StarryBackground from "@/components/star-background";
import MouseTrail from "@/components/mouse-trail";

export default function JavaScriptCoursePage() {
  const [selectedTopic, setSelectedTopic] = useState(javascriptSheet[0].topics[0]);
  const [completedTopics, setCompletedTopics] = useState<Set<number>>(new Set());

  const handleTopicComplete = (topicId: number) => {
    setCompletedTopics(prev => new Set([...prev, topicId]));
  };

  return (
    <div className="min-h-screen bg-[#0a0016] text-white relative overflow-hidden">
      <StarryBackground />
      <MouseTrail />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold magic-text mb-4">
            🏰 Hogwarts School of Codecraft
          </h1>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto leading-relaxed">
            Welcome, First-Year! I am Professor Filius Flitwick, Head of the Charms Department. 
            You are about to learn the most powerful magic of all: <span className="text-yellow-400 font-bold">SpellScript</span> (JavaScript)!
          </p>
          <div className="mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg max-w-2xl mx-auto">
            <p className="text-red-300 text-sm">
              ⚠️ <strong>Warning:</strong> Lord Voldenull and his Syntax-Serpents are trying to corrupt the digital world with broken code. 
              Only you can master the logical charms needed to become a true Code-Weaver!
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Course Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm sticky top-8">
              <h2 className="text-2xl font-bold text-purple-300 mb-6 flex items-center gap-2">
                📜 Course Scrolls
              </h2>
              
              {javascriptSheet.map((section) => (
                <div key={section.id} className="mb-6">
                  <h3 className="text-lg font-semibold text-purple-200 mb-3 border-b border-purple-500/30 pb-2">
                    {section.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {section.topics.map((topic) => (
                      <motion.button
                        key={topic.id}
                        onClick={() => setSelectedTopic(topic)}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className={`w-full text-left p-3 rounded-lg transition-all ${
                          selectedTopic.id === topic.id
                            ? "bg-purple-600/50 border border-purple-400"
                            : "bg-purple-800/20 hover:bg-purple-700/30"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-purple-100">
                            {topic.title}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-yellow-400">+{topic.xp} XP</span>
                            {completedTopics.has(topic.id) && (
                              <span className="text-green-400">✓</span>
                            )}
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={selectedTopic.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Topic Header */}
              <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold text-purple-100">
                    {selectedTopic.title}
                  </h2>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-500/30 rounded-full text-yellow-300 text-sm font-medium">
                      +{selectedTopic.xp} XP
                    </span>
                    {completedTopics.has(selectedTopic.id) && (
                      <span className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium">
                        ✓ Completed
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Topic Content */}
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="prose prose-invert max-w-none">
                  <div 
                    className="text-purple-100 leading-relaxed"
                    dangerouslySetInnerHTML={{ 
                      __html: selectedTopic.content
                        .replace(/### /g, '<h3 class="text-2xl font-bold text-purple-300 mb-4 mt-6">')
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-purple-200">$1</strong>')
                        .replace(/`([^`]+)`/g, '<code class="bg-gray-800 text-green-400 px-2 py-1 rounded text-sm">$1</code>')
                        .replace(/```javascript\n([\s\S]*?)\n```/g, '<pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto my-4"><code>$1</code></pre>')
                        .replace(/\n/g, '<br>')
                    }}
                  />
                </div>
              </div>

              {/* Interactive Code Challenge */}
              {selectedTopic.starterCode && (
                <CodeChallenge
                  title={`🧪 ${selectedTopic.title} - Practice`}
                  description="Complete the quest by writing the correct SpellScript!"
                  starterCode={selectedTopic.starterCode}
                  solution={selectedTopic.solution || ""}
                  onComplete={() => handleTopicComplete(selectedTopic.id)}
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}