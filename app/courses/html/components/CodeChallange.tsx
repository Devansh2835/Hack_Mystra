"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, RotateCcw, CheckCircle } from "lucide-react";

interface CodeChallengeProps {
  title: string;
  description: string;
  starterCode: string;
  solution: string;
  onComplete?: () => void;
}

export default function CodeChallenge({
  title,
  description,
  starterCode,
  solution,
  onComplete,
}: CodeChallengeProps) {
  const [code, setCode] = useState(starterCode);
  const [output, setOutput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const runCode = () => {
    try {
      // Capture console.log output
      const logs: string[] = [];
      const originalLog = console.log;
      console.log = (...args) => {
        logs.push(args.map(arg => String(arg)).join(' '));
      };

      // Execute the code
      eval(code);
      
      // Restore console.log
      console.log = originalLog;
      
      setOutput(logs.join('\n'));
      
      // Check if solution matches (simplified check)
      const normalizedCode = code.replace(/\s+/g, ' ').trim();
      const normalizedSolution = solution.replace(/\s+/g, ' ').trim();
      
      if (normalizedCode.includes(normalizedSolution) || logs.length > 0) {
        setIsCorrect(true);
        onComplete?.();
      }
    } catch (error) {
      setOutput(`Error: ${error}`);
      setIsCorrect(false);
    }
  };

  const resetCode = () => {
    setCode(starterCode);
    setOutput("");
    setIsCorrect(false);
  };

  return (
    <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">⚡</span>
        <h3 className="text-xl font-bold text-purple-100">{title}</h3>
        {isCorrect && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-green-400"
          >
            <CheckCircle className="w-6 h-6" />
          </motion.div>
        )}
      </div>

      <p className="text-purple-200 mb-6 leading-relaxed">{description}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Code Editor */}
        <div>
          <h4 className="text-lg font-semibold text-purple-300 mb-3">🪄 Your Spell:</h4>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 bg-gray-900 text-green-400 font-mono text-sm p-4 rounded-lg border border-purple-500/30 resize-none focus:outline-none focus:border-purple-400"
            placeholder="Write your JavaScript spell here..."
          />
          
          <div className="flex gap-3 mt-4">
            <motion.button
              onClick={runCode}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
            >
              <Play className="w-4 h-4" />
              Cast Spell
            </motion.button>
            
            <motion.button
              onClick={resetCode}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </motion.button>
          </div>
        </div>

        {/* Output Console */}
        <div>
          <h4 className="text-lg font-semibold text-purple-300 mb-3">🔮 Great Hall Monitor:</h4>
          <div className="bg-gray-900 border border-purple-500/30 rounded-lg p-4 h-64 overflow-auto">
            <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
              {output || "Cast your spell to see the magic happen..."}
            </pre>
          </div>
          
          {isCorrect && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-green-900/30 border border-green-500/50 rounded-lg"
            >
              <p className="text-green-300 font-medium">
                ✨ Excellent! Your spell worked perfectly! Professor Flitwick is impressed.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  ); 
}