import React from 'react';
import { BookOpen, Headphones, Sparkles, Timer, BookmarkCheck, Lightbulb, GraduationCap, Infinity } from 'lucide-react';

export type ActiveTab = 'practice' | 'listening' | 'ai-generator' | 'mock-exam' | 'vocab-notebook' | 'strategy';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  savedVocabCount: number;
  totalQuestionsCount: number;
  listeningQuestionsCount: number;
  todayCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  savedVocabCount,
  totalQuestionsCount,
  listeningQuestionsCount,
  todayCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div 
            onClick={() => setActiveTab('practice')}
            className="flex items-center space-x-3 cursor-pointer select-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20 group-hover:bg-blue-500 transition-colors">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-blue-200 transition-colors">
                  TOPIK 시험
                </span>
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800/80">
                  읽기 · 듣기 중급
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Luyện Đọc & Nghe TOPIK II Trung Cấp (Cấp 3 - 4)
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
            <button
              onClick={() => setActiveTab('practice')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'practice'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Luyện Đọc (읽기)</span>
            </button>

            <button
              onClick={() => setActiveTab('listening')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'listening'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Headphones className="w-4 h-4 text-emerald-400" />
              <span>Luyện Nghe (듣기)</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold">
                Mới
              </span>
            </button>

            <button
              onClick={() => setActiveTab('ai-generator')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'ai-generator'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Tạo đề AI</span>
            </button>

            <button
              onClick={() => setActiveTab('mock-exam')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'mock-exam'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Timer className="w-4 h-4" />
              <span>Thi thử</span>
            </button>

            <button
              onClick={() => setActiveTab('vocab-notebook')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'vocab-notebook'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <BookmarkCheck className="w-4 h-4" />
              <span>Từ vựng</span>
              {savedVocabCount > 0 && (
                <span className="ml-1 text-[11px] px-1.5 py-0.2 rounded-full bg-blue-500 text-white font-semibold">
                  {savedVocabCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('strategy')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'strategy'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Lightbulb className="w-4 h-4 text-yellow-400" />
              <span>Chiến thuật</span>
            </button>
          </nav>

          {/* Quick Info & Stats */}
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            {/* Unlimited Daily Practice Badge */}
            <div className="hidden xl:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800/80 text-emerald-300">
              <Infinity className="w-3.5 h-3.5 text-emerald-400" />
              <span>Luyện không giới hạn · Hôm nay: <strong className="text-white font-bold">{todayCount} câu</strong></span>
            </div>

            <div className="hidden lg:flex items-center space-x-2 text-slate-300 bg-slate-800/70 border border-slate-700/60 px-3 py-1.5 rounded-lg">
              <span>Đọc: <strong className="text-white">{totalQuestionsCount}</strong></span>
              <span className="text-slate-600">|</span>
              <span>Nghe: <strong className="text-emerald-400">{listeningQuestionsCount}</strong></span>
            </div>

            <button
              onClick={() => setActiveTab('listening')}
              className="md:hidden flex items-center space-x-1 bg-emerald-600 text-white px-2.5 py-1.5 rounded-lg text-xs font-semibold"
            >
              <Headphones className="w-3.5 h-3.5" />
              <span>Nghe</span>
            </button>

            <button
              onClick={() => setActiveTab('ai-generator')}
              className="md:hidden flex items-center space-x-1 bg-blue-600 text-white px-2.5 py-1.5 rounded-lg text-xs font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Tạo AI</span>
            </button>
          </div>
        </div>

        {/* Mobile secondary tab strip */}
        <div className="flex md:hidden items-center space-x-1 py-2 overflow-x-auto no-scrollbar border-t border-slate-800/80 text-xs">
          <button
            onClick={() => setActiveTab('practice')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium transition-colors ${
              activeTab === 'practice' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            Luyện Đọc
          </button>
          <button
            onClick={() => setActiveTab('listening')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium transition-colors flex items-center space-x-1 ${
              activeTab === 'listening' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Headphones className="w-3 h-3 text-emerald-400" />
            <span>Luyện Nghe</span>
          </button>
          <button
            onClick={() => setActiveTab('ai-generator')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium transition-colors flex items-center space-x-1 ${
              activeTab === 'ai-generator' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>Tạo đề AI</span>
          </button>
          <button
            onClick={() => setActiveTab('mock-exam')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium transition-colors ${
              activeTab === 'mock-exam' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            Thi thử
          </button>
          <button
            onClick={() => setActiveTab('vocab-notebook')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium transition-colors ${
              activeTab === 'vocab-notebook' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            Từ vựng ({savedVocabCount})
          </button>
          <button
            onClick={() => setActiveTab('strategy')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap font-medium transition-colors ${
              activeTab === 'strategy' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            Chiến thuật
          </button>
        </div>
      </div>
    </header>
  );
};
