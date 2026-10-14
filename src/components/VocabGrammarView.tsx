import React, { useState } from 'react';
import { 
  Volume2, 
  Trash2, 
  Search, 
  Layers, 
  BookmarkCheck, 
  Repeat, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  BookMarked
} from 'lucide-react';
import { SavedVocabulary } from '../types/topik';
import { VOCAB_BANK, VocabWord } from '../data/vocabBank';
import { ESSENTIAL_GRAMMARS, GrammarEntry } from '../data/grammarBank';
import { speakKorean } from '../utils/speech';

interface VocabGrammarViewProps {
  savedVocabList: SavedVocabulary[];
  onRemoveVocab: (id: string) => void;
  onAddFromBank: (korean: string, meaning: string, exampleKo?: string) => void;
}

export const VocabGrammarView: React.FC<VocabGrammarViewProps> = ({
  savedVocabList,
  onRemoveVocab,
  onAddFromBank,
}) => {
  const [subTab, setSubTab] = useState<'my-notebook' | 'vocab-bank' | 'grammar-pairs' | 'flashcard'>('my-notebook');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Flashcard mode state
  const [flashcardIndex, setFlashcardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Active flashcard items
  const flashcardItems = VOCAB_BANK;
  const currentFlashcard = flashcardItems[flashcardIndex] || flashcardItems[0];

  const handleNextFlashcard = () => {
    setIsFlipped(false);
    setFlashcardIndex((prev) => (prev + 1) % flashcardItems.length);
  };

  const handlePrevFlashcard = () => {
    setIsFlipped(false);
    setFlashcardIndex((prev) => (prev - 1 + flashcardItems.length) % flashcardItems.length);
  };

  // Filtered lists
  const filteredMyVocab = savedVocabList.filter(
    v => v.korean.toLowerCase().includes(searchQuery.toLowerCase()) ||
         v.meaning.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredVocabBank = VOCAB_BANK.filter(
    v => v.korean.toLowerCase().includes(searchQuery.toLowerCase()) ||
         v.meaningVi.toLowerCase().includes(searchQuery.toLowerCase()) ||
         v.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredGrammar = ESSENTIAL_GRAMMARS.filter(
    g => g.pattern.toLowerCase().includes(searchQuery.toLowerCase()) ||
         g.meaningVi.toLowerCase().includes(searchQuery.toLowerCase()) ||
         g.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 shadow-md border border-slate-800">
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2.5 rounded-xl bg-blue-600 text-white">
            <BookmarkCheck className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">
              Sổ Tay Từ Vựng & Ngữ Pháp TOPIK II Đọc
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Tổng hợp từ vựng tần suất cao và các cặp cấu trúc ngữ pháp tương đương thường xuất hiện trong đề thi công khai.
            </p>
          </div>
        </div>
      </div>

      {/* Sub Tabs Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white border border-slate-200/90 rounded-2xl p-3 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar text-xs">
          <button
            onClick={() => setSubTab('my-notebook')}
            className={`px-3.5 py-2 rounded-xl font-semibold whitespace-nowrap transition-all ${
              subTab === 'my-notebook'
                ? 'bg-blue-950 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <span>Sổ tay của bạn</span>
            <span className="ml-1.5 px-1.5 py-0.5 rounded-full bg-blue-700 text-white text-[11px]">
              {savedVocabList.length}
            </span>
          </button>

          <button
            onClick={() => setSubTab('vocab-bank')}
            className={`px-3.5 py-2 rounded-xl font-semibold whitespace-nowrap transition-all ${
              subTab === 'vocab-bank'
                ? 'bg-blue-950 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <span>Từ vựng đề thi NIIED</span>
            <span className="ml-1.5 px-1.5 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[11px]">
              {VOCAB_BANK.length}
            </span>
          </button>

          <button
            onClick={() => setSubTab('grammar-pairs')}
            className={`px-3.5 py-2 rounded-xl font-semibold whitespace-nowrap transition-all ${
              subTab === 'grammar-pairs'
                ? 'bg-blue-950 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <span>Cặp ngữ pháp đồng nghĩa (Câu 1-4)</span>
          </button>

          <button
            onClick={() => setSubTab('flashcard')}
            className={`px-3.5 py-2 rounded-xl font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
              subTab === 'flashcard'
                ? 'bg-blue-950 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-amber-500" />
            <span>Lật thẻ Flashcard</span>
          </button>
        </div>

        {subTab !== 'flashcard' && (
          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm từ hoặc nghĩa..."
              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-900"
            />
          </div>
        )}
      </div>

      {/* TAB 1: Sổ tay cá nhân */}
      {subTab === 'my-notebook' && (
        <div className="space-y-4">
          {savedVocabList.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
              <BookMarked className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">Sổ tay hiện đang trống</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Khi luyện câu hỏi ở mục "Luyện theo dạng", hãy bấm vào nút "+ Lưu từ" ở bảng phân tích để lưu lại từ vựng bạn muốn ôn tập!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {filteredMyVocab.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-xs space-y-2 flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-lg text-blue-950 font-['Noto_Sans_KR']">
                          {item.korean}
                        </span>
                        <button
                          onClick={() => speakKorean(item.korean)}
                          className="text-slate-400 hover:text-blue-900 p-1 rounded-md transition-colors"
                          title="Phát âm"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => onRemoveVocab(item.id)}
                        className="text-slate-400 hover:text-rose-600 p-1 rounded-md transition-colors"
                        title="Xóa khỏi sổ tay"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-800 font-medium">{item.meaning}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                    <span>Ngày lưu: {item.dateAdded}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: Từ vựng đề thi NIIED */}
      {subTab === 'vocab-bank' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredVocabBank.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200/90 p-4.5 shadow-xs space-y-2.5 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-lg text-blue-950 font-['Noto_Sans_KR']">
                      {item.korean}
                    </span>
                    {item.hanja && (
                      <span className="text-xs text-slate-600 font-serif">({item.hanja})</span>
                    )}
                    <button
                      onClick={() => speakKorean(item.korean)}
                      className="text-slate-400 hover:text-blue-900 transition-colors"
                      title="Phát âm"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-900 bg-blue-50 px-2 py-0.5 rounded inline-block mt-1">
                    {item.tag} · {item.partOfSpeech}
                  </span>
                </div>

                <button
                  onClick={() => onAddFromBank(item.korean, item.meaningVi, item.exampleKo)}
                  className="text-xs font-medium text-slate-700 hover:text-blue-950 bg-slate-100 hover:bg-blue-50 border border-slate-200 px-2.5 py-1 rounded-lg transition-colors"
                >
                  + Lưu từ
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-800 font-medium">
                {item.meaningVi}
              </p>

              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs space-y-0.5">
                <p className="text-slate-900 font-['Noto_Sans_KR'] font-normal">{item.exampleKo}</p>
                <p className="text-slate-600 italic">{item.exampleVi}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: Cặp ngữ pháp đồng nghĩa */}
      {subTab === 'grammar-pairs' && (
        <div className="space-y-4">
          {filteredGrammar.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-bold text-blue-950 font-['Noto_Sans_KR']">
                    {item.pattern}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100/80 text-blue-900">
                    {item.category}
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
                  <Repeat className="w-3.5 h-3.5 text-blue-900" />
                  <span>Tương đương: <strong>{item.equivalentPatterns.join(', ')}</strong></span>
                </div>
              </div>

              <div>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">
                  Ý nghĩa: <span className="font-normal text-slate-700">{item.meaningVi}</span>
                </p>
                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <strong className="text-blue-950 font-semibold">Lưu ý bẫy đề thi:</strong> {item.usageNote}
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Ví dụ minh họa:</span>
                {item.examples.map((ex, i) => (
                  <div key={i} className="text-xs space-y-0.5 pl-2 border-l-2 border-blue-900">
                    <p className="font-medium text-slate-900 font-['Noto_Sans_KR']">{ex.ko}</p>
                    <p className="text-slate-600">{ex.vi}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: Lật thẻ Flashcard */}
      {subTab === 'flashcard' && (
        <div className="max-w-xl mx-auto space-y-5 py-4">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Thẻ {flashcardIndex + 1} / {flashcardItems.length}</span>
            <span>Chạm vào thẻ để lật xem nghĩa & ví dụ</span>
          </div>

          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[300px] bg-white rounded-3xl border-2 border-blue-950/20 shadow-md p-8 flex flex-col justify-between cursor-pointer transition-all hover:shadow-lg relative select-none"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md">
                {currentFlashcard.tag}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  speakKorean(currentFlashcard.korean);
                }}
                className="text-slate-400 hover:text-blue-900 p-2 rounded-lg hover:bg-slate-100"
                title="Phát âm"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            <div className="my-auto text-center py-6">
              {!isFlipped ? (
                <div className="space-y-2">
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-['Noto_Sans_KR']">
                    {currentFlashcard.korean}
                  </h2>
                  {currentFlashcard.hanja && (
                    <p className="text-sm text-slate-600 font-serif">{currentFlashcard.hanja}</p>
                  )}
                  <p className="text-xs text-slate-600 mt-4">(Bấm để lật xem đáp án)</p>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-950">
                    {currentFlashcard.meaningVi}
                  </h3>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-left space-y-1">
                    <p className="font-semibold text-slate-900 font-['Noto_Sans_KR']">
                      {currentFlashcard.exampleKo}
                    </p>
                    <p className="text-slate-600 italic">
                      {currentFlashcard.exampleVi}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="text-center text-[11px] text-slate-600 uppercase tracking-widest font-semibold">
              {isFlipped ? 'Mặt sau: Ý nghĩa & Ví dụ' : 'Mặt trước: Thuật ngữ tiếng Hàn'}
            </div>
          </div>

          {/* Flashcard navigation buttons */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrevFlashcard}
              className="flex items-center space-x-1 px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Thẻ trước</span>
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="px-5 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold"
            >
              {isFlipped ? 'Lật lại mặt trước' : 'Lật xem nghĩa'}
            </button>

            <button
              onClick={handleNextFlashcard}
              className="flex items-center space-x-1 px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold"
            >
              <span>Thẻ kế tiếp</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
