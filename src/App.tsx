import React, { useState, useEffect } from 'react';
import { Navbar, ActiveTab } from './components/Navbar';
import { PracticeView } from './components/PracticeView';
import { ListeningView } from './components/ListeningView';
import { AiGeneratorView } from './components/AiGeneratorView';
import { MockExamView } from './components/MockExamView';
import { VocabGrammarView } from './components/VocabGrammarView';
import { StrategyGuideView } from './components/StrategyGuideView';
import { Question, ListeningQuestion, SavedVocabulary, ExamHistoryItem } from './types/topik';
import { 
  getStoredQuestions, 
  saveQuestion, 
  getStoredListeningQuestions,
  saveListeningQuestion,
  getSavedVocab, 
  addSavedVocab, 
  removeSavedVocab, 
  getFavorites, 
  toggleFavorite,
  saveExamResult,
  getTodayPracticeCount,
  incrementTodayPracticeCount
} from './utils/storage';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('practice');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [listeningQuestions, setListeningQuestions] = useState<ListeningQuestion[]>([]);
  const [savedVocab, setSavedVocab] = useState<SavedVocabulary[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [generatorTypeId, setGeneratorTypeId] = useState<string | undefined>(undefined);
  const [todayPracticeCount, setTodayPracticeCount] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load stored data on mount
  useEffect(() => {
    setQuestions(getStoredQuestions());
    setListeningQuestions(getStoredListeningQuestions());
    setSavedVocab(getSavedVocab());
    setFavoriteIds(getFavorites());
    setTodayPracticeCount(getTodayPracticeCount());
  }, []);

  const handleIncrementDailyPractice = () => {
    const updated = incrementTodayPracticeCount();
    setTodayPracticeCount(updated);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleSaveVocab = (term: string, meaning: string, example?: string) => {
    const updated = addSavedVocab({
      korean: term,
      meaning: meaning,
      exampleKo: example,
    });
    setSavedVocab(updated);
    showToast(`Đã lưu "${term}" vào Sổ tay từ vựng!`);
  };

  const handleRemoveVocab = (id: string) => {
    const updated = removeSavedVocab(id);
    setSavedVocab(updated);
    showToast('Đã xóa từ khỏi sổ tay.');
  };

  const handleToggleFavorite = (questionId: string) => {
    const updated = toggleFavorite(questionId);
    setFavoriteIds(updated);
  };

  const handleSaveGeneratedQuestion = (newQuestion: Question) => {
    const updated = saveQuestion(newQuestion);
    setQuestions(updated);
    showToast('Đã lưu câu hỏi mới vào kho đề thi!');
  };

  const handleSaveGeneratedListeningQuestion = (newQuestion: ListeningQuestion) => {
    const updated = saveListeningQuestion(newQuestion);
    setListeningQuestions(updated);
    showToast('Đã lưu câu hỏi nghe mới vào kho đề thi!');
  };

  const handleOpenAiGenerator = (typeId?: string) => {
    setGeneratorTypeId(typeId);
    setActiveTab('ai-generator');
  };

  const handlePracticeQuestion = (question: Question) => {
    // Add to questions if not yet present
    if (!questions.some(q => q.id === question.id)) {
      const updated = saveQuestion(question);
      setQuestions(updated);
    }
    setActiveTab('practice');
  };

  const handlePracticeListeningQuestion = (question: ListeningQuestion) => {
    if (!listeningQuestions.some(q => q.id === question.id)) {
      const updated = saveListeningQuestion(question);
      setListeningQuestions(updated);
    }
    setActiveTab('listening');
  };

  const handleSaveExamResult = (result: ExamHistoryItem) => {
    saveExamResult(result);
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-xl border border-slate-800 text-xs sm:text-sm font-semibold flex items-center space-x-2 animate-in fade-in slide-in-from-bottom-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedVocabCount={savedVocab.length}
        totalQuestionsCount={questions.length}
        listeningQuestionsCount={listeningQuestions.length}
        todayCount={todayPracticeCount}
      />

      {/* Unlimited Learning Banner */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-300 py-1.5 px-4 text-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Chế độ học không giới hạn: Thoải mái ôn tập Đọc & Nghe 24/7, không giới hạn số câu hay lượt tạo đề trong ngày.</span>
          </div>
          <span className="hidden sm:inline text-slate-400">
            Hôm nay: <strong className="text-white font-semibold">{todayPracticeCount} câu đã làm</strong>
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {activeTab === 'practice' && (
          <PracticeView
            questions={questions}
            savedVocabIds={savedVocab.map(v => v.korean)}
            favoriteIds={favoriteIds}
            onSaveVocab={handleSaveVocab}
            onToggleFavorite={handleToggleFavorite}
            onOpenAiGenerator={handleOpenAiGenerator}
            onIncrementDailyPractice={handleIncrementDailyPractice}
          />
        )}

        {activeTab === 'listening' && (
          <ListeningView
            questions={listeningQuestions}
            onSaveVocab={handleSaveVocab}
            onOpenAiGenerator={() => setActiveTab('ai-generator')}
            onIncrementDailyPractice={handleIncrementDailyPractice}
          />
        )}

        {activeTab === 'ai-generator' && (
          <AiGeneratorView
            initialTypeId={generatorTypeId}
            onSaveGeneratedQuestion={handleSaveGeneratedQuestion}
            onSaveGeneratedListeningQuestion={handleSaveGeneratedListeningQuestion}
            onPracticeQuestion={handlePracticeQuestion}
            onPracticeListeningQuestion={handlePracticeListeningQuestion}
          />
        )}

        {activeTab === 'mock-exam' && (
          <MockExamView
            allQuestions={questions}
            onSaveExamResult={handleSaveExamResult}
          />
        )}

        {activeTab === 'vocab-notebook' && (
          <VocabGrammarView
            savedVocabList={savedVocab}
            onRemoveVocab={handleRemoveVocab}
            onAddFromBank={handleSaveVocab}
          />
        )}

        {activeTab === 'strategy' && (
          <StrategyGuideView />
        )}
      </main>

      {/* Clean Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-6 text-xs text-center">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white">TOPIK 시험</span>
            <span>·</span>
            <span>Luyện Đọc & Nghe TOPIK II Trung cấp (Cấp 3 - 4)</span>
          </div>
          <div className="text-slate-500">
            Bám sát format đề thi công khai NIIED · Hỗ trợ luyện nghe tương tác giọng chuẩn bản xứ
          </div>
        </div>
      </footer>
    </div>
  );
}

