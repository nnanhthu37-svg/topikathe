import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Volume2, 
  Bookmark, 
  BookmarkCheck, 
  ChevronLeft, 
  ChevronRight, 
  Shuffle, 
  Sparkles, 
  Languages, 
  Lightbulb, 
  BookMarked,
  Info,
  HelpCircle,
  Clock,
  Send,
  Loader2,
  Repeat
} from 'lucide-react';
import { Question } from '../types/topik';
import { TOPIK_QUESTION_TYPES } from '../data/topikTypes';
import { speakKorean } from '../utils/speech';
import { renderFormattedKoreanPassage, extractUnderlinedPart } from '../utils/formatKorean';

interface PracticeViewProps {
  questions: Question[];
  savedVocabIds: string[];
  favoriteIds: string[];
  onSaveVocab: (term: string, meaning: string, example?: string) => void;
  onToggleFavorite: (questionId: string) => void;
  onOpenAiGenerator: (typeId?: string) => void;
  onIncrementDailyPractice?: () => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({
  questions,
  favoriteIds,
  onSaveVocab,
  onToggleFavorite,
  onOpenAiGenerator,
  onIncrementDailyPractice,
}) => {
  const [selectedTypeId, setSelectedTypeId] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [addedTerms, setAddedTerms] = useState<Set<string>>(new Set());

  // Interactive AI Deep Explanation state
  const [aiQuestionPrompt, setAiQuestionPrompt] = useState<string>('');
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isAskingAi, setIsAskingAi] = useState<boolean>(false);

  // Filter questions
  const filteredQuestions = selectedTypeId === 'all'
    ? questions
    : questions.filter(q => q.typeId === selectedTypeId);

  const currentQuestion = filteredQuestions[currentIndex] || filteredQuestions[0];
  const currentTypeInfo = TOPIK_QUESTION_TYPES.find(t => t.id === currentQuestion?.typeId);

  const isFavorite = currentQuestion ? favoriteIds.includes(currentQuestion.id) : false;

  const handleSelectOption = (optIndex: number) => {
    if (showAnswer) return; // already locked
    setSelectedOption(optIndex);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    setShowAnswer(true);
    if (onIncrementDailyPractice) {
      onIncrementDailyPractice();
    }
  };

  const handleResetForNextQuestion = (newIndex: number) => {
    setCurrentIndex(newIndex);
    setSelectedOption(null);
    setShowAnswer(false);
    setShowTranslation(false);
    setAiExplanation(null);
    setAiQuestionPrompt('');
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      handleResetForNextQuestion(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      handleResetForNextQuestion(currentIndex - 1);
    }
  };

  const handleRandom = () => {
    if (filteredQuestions.length <= 1) return;
    let nextIdx = Math.floor(Math.random() * filteredQuestions.length);
    if (nextIdx === currentIndex) {
      nextIdx = (nextIdx + 1) % filteredQuestions.length;
    }
    handleResetForNextQuestion(nextIdx);
  };

  const handleSaveWord = (term: string, meaning: string, example?: string) => {
    onSaveVocab(term, meaning, example);
    setAddedTerms(prev => new Set(prev).add(term));
  };

  const handleAskAi = async (customPrompt?: string) => {
    if (!currentQuestion) return;
    setIsAskingAi(true);
    setAiExplanation(null);
    try {
      const response = await fetch('/api/explain-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          passage: currentQuestion.passage,
          selectedOption: selectedOption ? currentQuestion.options[selectedOption - 1] : undefined,
          userQuestion: customPrompt || aiQuestionPrompt || 'Phân tích bản chất ngữ pháp và cách phân biệt bẫy câu này.',
        }),
      });
      const data = await response.json();
      if (data.explanation) {
        setAiExplanation(data.explanation);
      } else {
        setAiExplanation('Không thể lấy lời giải thích lúc này. Vui lòng thử lại sau.');
      }
    } catch (err: any) {
      setAiExplanation('Có lỗi kết nối: ' + (err.message || 'Lỗi mạng'));
    } finally {
      setIsAskingAi(false);
    }
  };

  if (!currentQuestion) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <Info className="w-12 h-12 text-blue-900 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-2">Chưa có câu hỏi cho dạng này</h2>
          <p className="text-slate-600 mb-6">Bạn có thể dùng AI để tạo ngay câu hỏi chuẩn đề thi công khai!</p>
          <button
            onClick={() => onOpenAiGenerator(selectedTypeId !== 'all' ? selectedTypeId : undefined)}
            className="inline-flex items-center space-x-2 bg-blue-900 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-blue-800 transition-colors shadow"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Tạo câu hỏi mới bằng AI</span>
          </button>
        </div>
      </div>
    );
  }

  const isCorrect = selectedOption === currentQuestion.correctAnswer;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Question Type Filter Selector */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-xs">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Dạng câu hỏi TOPIK II Đọc (읽기)
          </span>
          <span className="text-xs text-slate-500">
            {filteredQuestions.length} câu hỏi
          </span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          <button
            onClick={() => {
              setSelectedTypeId('all');
              handleResetForNextQuestion(0);
            }}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all ${
              selectedTypeId === 'all'
                ? 'bg-blue-950 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Tất cả dạng
          </button>
          {TOPIK_QUESTION_TYPES.map((type) => (
            <button
              key={type.id}
              onClick={() => {
                setSelectedTypeId(type.id);
                handleResetForNextQuestion(0);
              }}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all flex items-center space-x-1 ${
                selectedTypeId === type.id
                  ? 'bg-blue-950 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>{type.code}</span>
              <span className="opacity-80">({type.name.split(':')[0]})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Type Info Bar */}
      {currentTypeInfo && (
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-600/80 text-white">
                  {currentTypeInfo.targetQuestions}
                </span>
                <h2 className="text-base sm:text-lg font-bold text-white">
                  {currentTypeInfo.name}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                {currentTypeInfo.description}
              </p>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <div className="flex items-center space-x-1.5 text-xs text-blue-200 bg-blue-900/60 border border-blue-700/50 px-3 py-1.5 rounded-xl">
                <Clock className="w-3.5 h-3.5 text-blue-300" />
                <span>Mục tiêu: {currentTypeInfo.recommendedTime}</span>
              </div>
              <button
                onClick={() => onOpenAiGenerator(currentTypeInfo.id)}
                className="flex items-center space-x-1.5 text-xs font-semibold bg-white text-blue-950 hover:bg-blue-50 px-3 py-1.5 rounded-xl shadow-xs transition-colors"
                title="Tạo câu hỏi mới cùng dạng này bằng AI"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Tạo câu mới</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MAIN TEST CARD: Styled like authentic NIIED exam sheet */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
        {/* Exam Card Header */}
        <div className="bg-slate-50/80 border-b border-slate-200 px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-bold tracking-wider text-blue-950 bg-blue-100/70 border border-blue-200 px-2.5 py-1 rounded-md">
              Câu {currentIndex + 1} / {filteredQuestions.length}
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Nguồn: <strong className="text-slate-700 font-semibold">{currentQuestion.sourceExam}</strong>
            </span>
            {currentQuestion.isAiGenerated && (
              <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md flex items-center space-x-1">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>AI Sinh theo NIIED</span>
              </span>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => speakKorean(currentQuestion.passage)}
              className="p-1.5 text-slate-600 hover:text-blue-900 hover:bg-slate-200/60 rounded-lg transition-colors"
              title="Nghe phát âm tiếng Hàn chuẩn"
            >
              <Volume2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onToggleFavorite(currentQuestion.id)}
              className={`p-1.5 rounded-lg transition-colors ${
                isFavorite
                  ? 'text-amber-500 bg-amber-50'
                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-200/60'
              }`}
              title={isFavorite ? 'Bỏ lưu câu hỏi' : 'Lưu câu hỏi yêu thích'}
            >
              {isFavorite ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setShowTranslation(!showTranslation)}
              className={`flex items-center space-x-1 text-xs px-2.5 py-1 rounded-lg border transition-colors ${
                showTranslation
                  ? 'bg-blue-950 text-white border-blue-950'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{showTranslation ? 'Ẩn dịch' : 'Dịch nghĩa'}</span>
            </button>
          </div>
        </div>

        {/* Question Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Question Number Box Label */}
          <div>
            <p className="text-xs sm:text-sm font-semibold text-blue-950 mb-1">
              {currentQuestion.questionNumberLabel}
            </p>
            <p className="text-xs text-slate-500 font-medium">
              {currentQuestion.instruction}
            </p>
          </div>

          {/* Dạng 2 Underline & Grammar Target Indicator */}
          {currentQuestion.typeId === 'type-2' && (
            <div className="flex flex-wrap items-center justify-between gap-2 bg-amber-50 border border-amber-200/90 rounded-xl px-4 py-2.5 text-xs text-amber-950">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
                <span>
                  <strong>Yêu cầu đề thi:</strong> Quan sát cụm từ <u>được gạch chân</u> trong câu dưới đây và tìm cấu trúc đồng nghĩa nhất:
                </span>
              </div>
              {extractUnderlinedPart(currentQuestion.passage) && (
                <div className="text-xs font-bold bg-white text-slate-900 border border-amber-300 px-2.5 py-0.5 rounded-md flex items-center space-x-1.5 shadow-xs font-['Noto_Sans_KR']">
                  <span className="text-amber-800 text-[11px]">밑줄:</span>
                  <span className="underline decoration-slate-900 decoration-2 font-bold text-blue-950">
                    {extractUnderlinedPart(currentQuestion.passage)}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Korean Passage Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 text-slate-900">
            <p className="text-base sm:text-lg leading-relaxed sm:leading-loose font-normal tracking-wide whitespace-pre-line font-['Noto_Sans_KR',sans-serif]">
              {renderFormattedKoreanPassage(currentQuestion.passage, currentQuestion.typeId === 'type-2')}
            </p>
          </div>

          {/* Translation Reveal Box (Optional) */}
          {showTranslation && (
            <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-1">
              <span className="font-bold text-blue-950 flex items-center space-x-1">
                <Languages className="w-3.5 h-3.5" />
                <span>Bản dịch tiếng Việt tham khảo:</span>
              </span>
              <p className="whitespace-pre-line text-slate-800">
                {currentQuestion.translation}
              </p>
            </div>
          )}

          {/* 4 Choices */}
          <div className="space-y-3 pt-2">
            {currentQuestion.options.map((option, idx) => {
              const optionNumber = idx + 1;
              const isSelected = selectedOption === optionNumber;
              const isOptionCorrect = optionNumber === currentQuestion.correctAnswer;

              let optionStyle = 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-800';

              if (showAnswer) {
                if (isOptionCorrect) {
                  optionStyle = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 ring-1 ring-emerald-500';
                } else if (isSelected && !isOptionCorrect) {
                  optionStyle = 'border-rose-400 bg-rose-50/80 text-rose-950 ring-1 ring-rose-400';
                } else {
                  optionStyle = 'border-slate-200 bg-slate-50/60 text-slate-400 opacity-70';
                }
              } else if (isSelected) {
                optionStyle = 'border-blue-900 bg-blue-50/80 text-blue-950 ring-1 ring-blue-900 font-medium';
              }

              const circularSymbols = ['①', '②', '③', '④'];

              return (
                <div
                  key={idx}
                  onClick={() => handleSelectOption(optionNumber)}
                  className={`flex items-center justify-between p-4 rounded-xl border text-sm sm:text-base cursor-pointer transition-all ${optionStyle}`}
                >
                  <div className="flex items-center space-x-3.5">
                    <span className="text-base sm:text-lg font-bold text-slate-700 shrink-0 font-['Noto_Sans_KR']">
                      {circularSymbols[idx]}
                    </span>
                    <span className="font-['Noto_Sans_KR'] leading-normal">
                      {option}
                    </span>
                  </div>

                  {showAnswer && (
                    <div className="shrink-0 ml-3">
                      {isOptionCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : isSelected ? (
                        <XCircle className="w-5 h-5 text-rose-500" />
                      ) : null}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Row: Check Answer or Next */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              {!showAnswer ? (
                <button
                  onClick={handleCheckAnswer}
                  disabled={selectedOption === null}
                  className="bg-blue-950 text-white hover:bg-blue-900 disabled:opacity-40 disabled:cursor-not-allowed px-6 py-2.5 rounded-xl font-semibold text-sm shadow-sm transition-all"
                >
                  Kiểm tra đáp án
                </button>
              ) : (
                <div className="flex items-center space-x-2">
                  <div className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold flex items-center space-x-1.5 ${
                    isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Chính xác! (+1 điểm)</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-600" />
                        <span>Chưa chính xác (Đáp án đúng: {['①', '②', '③', '④'][currentQuestion.correctAnswer - 1]})</span>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center space-x-2 ml-auto">
              <button
                onClick={handleRandom}
                className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors"
                title="Câu ngẫu nhiên"
              >
                <Shuffle className="w-4 h-4" />
              </button>

              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="flex items-center space-x-1 px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed text-xs sm:text-sm font-medium transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Câu trước</span>
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex === filteredQuestions.length - 1}
                className="flex items-center space-x-1 px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-xs sm:text-sm font-medium transition-colors"
              >
                <span>Câu tiếp theo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* DETAILED EXPLANATION PANEL (Shows when answer checked) */}
          {showAnswer && (
            <div className="mt-6 pt-6 border-t border-slate-200 space-y-5 animate-in fade-in duration-300">
              {/* Detailed Logic & Grammar Analysis */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                <div className="flex items-center space-x-2 text-blue-950 font-bold text-sm">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>Phân tích ngữ pháp & Logic giải đề:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                  {currentQuestion.explanation}
                </p>
              </div>

              {/* SPECIFIC FOR DẠNG 2: GỢI Ý CÁC NGỮ PHÁP ĐỒNG NGHĨA (유사 문법 추천) */}
              {(currentQuestion.typeId === 'type-2' || (currentQuestion.equivalentGrammars && currentQuestion.equivalentGrammars.length > 0)) && (
                <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-5 sm:p-6 space-y-4 border border-blue-900 shadow-md animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-800/80 pb-3">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-1.5 rounded-lg bg-blue-600 text-white">
                        <Repeat className="w-4 h-4 text-amber-300" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base text-white">
                          Gợi Ý Các Cặp Ngữ Pháp Đồng Nghĩa (유사 문법 추천)
                        </h3>
                        <p className="text-xs text-blue-200">
                          Trọng tâm bắt buộc phải nhớ của Dạng 2 (Câu 3 - 4) TOPIK II
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-amber-300 bg-blue-900/80 px-2.5 py-1 rounded-md border border-blue-700/60 self-start sm:self-auto">
                      Học theo cụm để phản xạ 30s
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Trong đề thi thật, NIIED thường xuyên ra các câu hỏi hoán đổi giữa các cấu trúc đồng nghĩa sau đây. Bạn nên học thuộc trọn bộ cấu trúc tương đương:
                  </p>

                  <div className="grid grid-cols-1 gap-3 pt-1">
                    {(currentQuestion.equivalentGrammars || [
                      {
                        pattern: '-는 법이다',
                        meaningVi: 'Đương nhiên là, theo lẽ thường tình',
                        comparisonNote: 'Đồng nghĩa 100% với -기 마련이다, -게 되어 있다.',
                        exampleKo: '시간이 지나면 잊혀지는 법이다.',
                        exampleVi: 'Thời gian trôi qua thì chuyện gì cũng nguôi ngoai.'
                      },
                      {
                        pattern: '-게 마련이다',
                        meaningVi: 'Đương nhiên là (biến thể trợ từ)',
                        comparisonNote: 'Hoàn toàn tương đương với -기 마련이다.',
                        exampleKo: '노력하면 좋은 결과가 오게 마련이다.',
                        exampleVi: 'Nếu nỗ lực thì đương nhiên kết quả tốt sẽ đến.'
                      }
                    ]).map((eq, eqIdx) => {
                      const isAdded = addedTerms.has(eq.pattern);
                      return (
                        <div
                          key={eqIdx}
                          className="bg-slate-800/90 border border-slate-700 rounded-xl p-4 space-y-2.5 hover:border-slate-600 transition-colors"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-base sm:text-lg font-bold text-amber-300 font-['Noto_Sans_KR']">
                                {eq.pattern}
                              </span>
                              <button
                                onClick={() => speakKorean(eq.pattern)}
                                className="text-slate-400 hover:text-white p-1 rounded transition-colors"
                                title="Phát âm"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <button
                              onClick={() => handleSaveWord(eq.pattern, eq.meaningVi, eq.exampleKo)}
                              disabled={isAdded}
                              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors shrink-0 ${
                                isAdded
                                  ? 'bg-emerald-600 text-white cursor-default'
                                  : 'bg-blue-600 hover:bg-blue-500 text-white'
                              }`}
                            >
                              {isAdded ? 'Đã lưu' : '+ Lưu vào sổ tay'}
                            </button>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-100 font-medium">
                            <strong className="text-blue-300">Nghĩa:</strong> {eq.meaningVi}
                          </p>

                          <div className="text-xs bg-slate-900/60 p-2.5 rounded-lg border border-slate-700/60 text-slate-300 space-y-1">
                            <p className="text-blue-200">
                              <span className="font-semibold text-amber-200">Ghi chú bẫy thi:</span> {eq.comparisonNote}
                            </p>
                            <p className="font-['Noto_Sans_KR'] text-slate-200 pt-0.5">
                              {eq.exampleKo}
                            </p>
                            <p className="italic text-slate-400">
                              {eq.exampleVi}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* NIIED Strategy Tip */}
              {currentQuestion.examTip && (
                <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 flex items-start space-x-3 text-xs sm:text-sm text-amber-900">
                  <div className="p-1 rounded-md bg-amber-100 text-amber-700 shrink-0 mt-0.5">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold">Mẹo làm bài nhanh (Exam Tip): </span>
                    <span>{currentQuestion.examTip}</span>
                  </div>
                </div>
              )}

              {/* Key Vocabulary & Grammar Table */}
              {currentQuestion.keyPoints && currentQuestion.keyPoints.length > 0 && (
                <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1.5">
                      <BookMarked className="w-4 h-4 text-blue-900" />
                      <span>Từ vựng & Ngữ pháp then chốt (핵심 어휘/문법)</span>
                    </span>
                    <span className="text-xs text-slate-500">
                      Bấm vào loa để nghe phát âm
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentQuestion.keyPoints.map((item, i) => {
                      const isAdded = addedTerms.has(item.term);
                      return (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm"
                        >
                          <div className="space-y-0.5">
                            <div className="flex items-center space-x-2">
                              <span className="font-bold text-blue-950 font-['Noto_Sans_KR']">
                                {item.term}
                              </span>
                              <button
                                onClick={() => speakKorean(item.term)}
                                className="text-slate-400 hover:text-blue-900 transition-colors"
                                title="Phát âm"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <p className="text-slate-600 text-xs">{item.meaning}</p>
                          </div>

                          <button
                            onClick={() => handleSaveWord(item.term, item.meaning, currentQuestion.passage)}
                            disabled={isAdded}
                            className={`ml-2 px-2.5 py-1 rounded-md text-xs font-medium transition-colors shrink-0 ${
                              isAdded
                                ? 'bg-emerald-100 text-emerald-800 cursor-default'
                                : 'bg-white border border-slate-300 text-slate-700 hover:bg-blue-50 hover:text-blue-900'
                            }`}
                          >
                            {isAdded ? 'Đã lưu' : '+ Lưu từ'}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Ask AI for Deeper Grammar Explanation */}
              <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-xs sm:text-sm font-bold">Hỏi AI chuyên gia TOPIK:</span>
                  </div>
                  <span className="text-[11px] text-blue-300 bg-blue-900/60 px-2 py-0.5 rounded border border-blue-800">
                    Phân tích bẫy thi & Ngữ pháp
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={aiQuestionPrompt}
                    onChange={(e) => setAiQuestionPrompt(e.target.value)}
                    placeholder="Ví dụ: Tại sao không chọn câu 3? Phân biệt ngữ pháp này với cấu trúc khác..."
                    className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAskAi()}
                      disabled={isAskingAi}
                      className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-center space-x-1.5 transition-colors shrink-0"
                    >
                      {isAskingAi ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Đang giải thích...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Hỏi AI</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => handleAskAi('Phân tích chi tiết các bẫy thường gặp ở dạng câu hỏi này và cách làm trong 30 giây.')}
                      disabled={isAskingAi}
                      className="bg-slate-800 hover:bg-slate-700 text-blue-200 border border-slate-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors shrink-0"
                    >
                      Phân tích bẫy 30s
                    </button>
                  </div>
                </div>

                {/* AI Explanation Result Box */}
                {aiExplanation && (
                  <div className="bg-slate-800/90 border border-slate-700 rounded-lg p-4 text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line animate-in fade-in">
                    <p className="font-semibold text-amber-300 mb-1 flex items-center space-x-1">
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>Giải đáp chuyên sâu từ AI:</span>
                    </p>
                    {aiExplanation}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
