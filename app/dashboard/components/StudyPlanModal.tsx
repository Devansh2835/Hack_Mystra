"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface StudyPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StudyPlanModal({ isOpen, onClose }: StudyPlanModalProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const bookmarks = [
    { date: 15, title: "React Hooks", type: "lesson" },
    { date: 18, title: "JavaScript Arrays", type: "practice" },
    { date: 22, title: "CSS Grid", type: "lesson" },
    { date: 25, title: "Web3 Basics", type: "course" },
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + (direction === 'next' ? 1 : -1), 1));
  };

  const hasBookmark = (day: number) => {
    return bookmarks.some(bookmark => bookmark.date === day);
  };

  const getBookmark = (day: number) => {
    return bookmarks.find(bookmark => bookmark.date === day);
  };

  if (!isOpen) return null;

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card/90 backdrop-blur-lg border border-purple-900/30 rounded-2xl w-full max-w-lg">
        <div className="flex items-center justify-between p-6 border-b border-purple-800/30">
          <h3 className="text-xl font-bold text-white">Study Plan</h3>
          <Button onClick={onClose} variant="ghost" size="icon" className="text-purple-300 hover:text-purple-100">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <Button onClick={() => navigateMonth('prev')} variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h4 className="text-lg font-semibold text-white">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h4>
            <Button onClick={() => navigateMonth('next')} variant="ghost" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-4">
            {dayNames.map(day => (
              <div key={day} className="text-center text-xs font-medium text-purple-300 p-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDay }).map((_, index) => (
              <div key={index} className="p-2"></div>
            ))}
            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1;
              const bookmark = getBookmark(day);
              const isToday = new Date().getDate() === day && 
                             new Date().getMonth() === currentDate.getMonth() && 
                             new Date().getFullYear() === currentDate.getFullYear();
              
              return (
                <div key={day} className="relative">
                  <button
                    className={`w-full aspect-square p-1 text-sm rounded-lg transition-colors ${
                      isToday 
                        ? "bg-primary text-white font-bold" 
                        : hasBookmark(day)
                        ? "bg-purple-900/50 text-purple-200 hover:bg-purple-900/70"
                        : "text-purple-300 hover:bg-purple-900/30"
                    }`}
                  >
                    {day}
                    {hasBookmark(day) && (
                      <Bookmark className="w-3 h-3 absolute top-0 right-0 text-yellow-400 fill-current" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-6 space-y-3">
            <h5 className="text-sm font-medium text-purple-200">Bookmarked Items</h5>
            {bookmarks.map((bookmark, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-purple-900/20">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                  {bookmark.date}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">{bookmark.title}</p>
                  <Badge variant="secondary" className="text-xs bg-purple-900/50 text-purple-200 border-purple-700/50 mt-1">
                    {bookmark.type}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}