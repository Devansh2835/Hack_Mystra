"use client";

import { useState } from "react";
import { X, Plus, Check, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface GoalsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GoalsModal({ isOpen, onClose }: GoalsModalProps) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", text: "Complete React Fundamentals", completed: true },
    { id: "2", text: "Learn TypeScript basics", completed: false },
    { id: "3", text: "Build a portfolio project", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now().toString(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card/90 backdrop-blur-lg border border-purple-900/30 rounded-2xl w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b border-purple-800/30">
          <h3 className="text-xl font-bold text-white">Learning Goals</h3>
          <Button onClick={onClose} variant="ghost" size="icon" className="text-purple-300 hover:text-purple-100">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex gap-2">
            <Input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTodo()}
              placeholder="Add a new goal..."
              className="flex-1 bg-purple-900/20 border-purple-700/50 text-white placeholder:text-purple-400"
            />
            <Button onClick={addTodo} size="icon" className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2 max-h-64 overflow-y-auto">
            {todos.map((todo) => (
              <div key={todo.id} className="flex items-center gap-3 p-3 rounded-xl bg-purple-900/20 hover:bg-purple-900/30 transition-colors">
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    todo.completed 
                      ? "bg-green-500 border-green-500" 
                      : "border-purple-400 hover:border-purple-300"
                  }`}
                >
                  {todo.completed && <Check className="w-3 h-3 text-white" />}
                </button>
                <span className={`flex-1 text-sm ${todo.completed ? "text-purple-300 line-through" : "text-white"}`}>
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-purple-400 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}