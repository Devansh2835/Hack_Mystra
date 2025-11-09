import React, { useState, useEffect } from 'react';
import { Search, Plus, Bell, Settings, Menu, X, Zap, Moon, Sun } from 'lucide-react';

export default function DashboardHeader() {
  const [searchFocus, setSearchFocus] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative mb-8">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 20}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Left Side - Title & Info */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-3">
            {/* Spinning moon icon */}
            <div className="relative">
              <Moon className="w-8 h-8 text-orange-500 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>

            {/* Title with gradient */}
            <div>
              <h1 className="text-3xl md:text-5xl font-black mb-1 relative group">
                <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  COMMAND CENTER
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
              </h1>
            </div>
          </div>

          {/* Subtitle with live time */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
              <span className="text-orange-400/60 font-bold uppercase tracking-wider">
                SECTOR 7 ONLINE
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-purple-500/50 font-mono">
              <Zap className="w-3 h-3" />
              {currentTime}
            </div>
            <div className="hidden sm:block text-purple-500/50 font-mono">
              STARDATE 2099.11
            </div>
          </div>
        </div>

        {/* Right Side - Actions */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Search Bar */}
          <div 
            className={`relative flex-1 md:flex-initial transition-all duration-300 ${
              searchFocus ? 'md:w-80' : 'md:w-64'
            }`}
          >
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
              searchFocus ? 'text-orange-400' : 'text-orange-500/50'
            }`} />
            <input
              type="text"
              placeholder="search the void..."
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
              className="w-full bg-black/40 backdrop-blur-xl border-2 border-orange-900/50 text-sm rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-orange-500 focus:shadow-lg focus:shadow-orange-500/20 transition-all placeholder:text-orange-900/40 hover:border-orange-700/50 font-medium"
            />
            {searchFocus && (
              <div className="absolute inset-0 -z-10 bg-orange-500/20 rounded-lg blur-xl"></div>
            )}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Notifications */}
            <button className="relative p-2.5 bg-black/40 backdrop-blur-xl border-2 border-purple-900/50 rounded-lg hover:border-purple-500 transition-all hover:scale-110 group">
              <Bell className="w-4 h-4 text-purple-400 group-hover:animate-bounce" />
              {notifications > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-xs font-black border-2 border-black animate-pulse">
                  {notifications}
                </div>
              )}
            </button>

            {/* Settings */}
            <button className="p-2.5 bg-black/40 backdrop-blur-xl border-2 border-orange-900/50 rounded-lg hover:border-orange-500 transition-all hover:rotate-90 duration-300 group">
              <Settings className="w-4 h-4 text-orange-400" />
            </button>

            {/* Spawn Button */}
            <button className="relative bg-gradient-to-r from-orange-600 to-purple-600 hover:from-orange-500 hover:to-purple-500 px-4 py-2.5 rounded-lg text-sm font-black flex items-center gap-2 shadow-lg shadow-orange-500/30 transition-all hover:shadow-orange-500/60 hover:scale-105 border border-orange-400/30 uppercase tracking-wider overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <Plus className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Spawn</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 bg-black/40 backdrop-blur-xl border-2 border-purple-900/50 rounded-lg hover:border-purple-500 transition-all"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-purple-400" />
            ) : (
              <Menu className="w-5 h-5 text-purple-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 p-4 bg-black/60 backdrop-blur-xl border-2 border-purple-900/30 rounded-xl space-y-3 animate-slideDown">
          <button className="w-full flex items-center justify-between p-3 bg-black/40 border border-purple-900/30 rounded-lg hover:border-purple-500/50 transition-all">
            <div className="flex items-center gap-3">
              <Bell className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-bold">Notifications</span>
            </div>
            {notifications > 0 && (
              <span className="px-2 py-1 bg-orange-500 rounded-full text-xs font-black">
                {notifications}
              </span>
            )}
          </button>
          
          <button className="w-full flex items-center gap-3 p-3 bg-black/40 border border-orange-900/30 rounded-lg hover:border-orange-500/50 transition-all">
            <Settings className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-bold">Settings</span>
          </button>
          
          <button className="w-full bg-gradient-to-r from-orange-600 to-purple-600 p-3 rounded-lg text-sm font-black flex items-center justify-center gap-2 uppercase tracking-wider">
            <Plus className="w-4 h-4" />
            Spawn New
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}