import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  Headphones, 
  FileText, 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Shuffle, 
  Clock, 
  BookMarked,
  Info,
  Bell
} from 'lucide-react';
import { ListeningQuestion } from '../types/topik';
import { TOPIK_LISTENING_TYPES } from '../data/listeningTypes';
import { playTopikListeningSequence, playTopikChime, stopSpeaking, speakKorean } from '../utils/speech';

interface ListeningViewProps {
  questions: ListeningQuestion[];
  onSaveVocab: (term: string, meaning: string, example?: string) => void;
  onOpenAiGenerator?: () => void;
  onIncrementDailyPractice?: () => void;
}

export const ListeningView: React.FC<ListeningViewProps> = ({
  questions,
  onSaveVocab,
  onOpenAiGenerator,
  onIncrementDailyPractice,
}) => {
  const [selectedTypeId, setSelectedTypeId] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [showScript, setShowScript] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(0.95);
  const [includeChime, setIncludeChime] = useState<boolean>(true);
  const [activeLineIndex, setActiveLineIndex] = useState<number>(-1);
  const [addedTerms, setAddedTerms] = useState<Set<string>>(new Set());

  // Filter questions
  const filteredQuestions = selectedTypeId === 'all'
    ? questions
    : questions.filter(q => q.typeId === selectedTypeId);

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];
  const currentTypeInfo = TOPIK_LISTENING_TYPES.find(t => t.id === currentQ?.typeId);

  // Stop audio on unmount or question change
  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  const handlePlayDialogue = () => {
    if (!currentQ) return;
    if (isPlaying) {
      stopSpeaking();
      setIsPlaying(false);
      setActiveLineIndex(-1);
      return;
    }

    setIsPlaying(true);
    playTopikListeningSequence(
      currentQ.dialogue,
      playbackSpeed,
      includeChime,
      (lineIdx) => {
        setActiveLineIndex(lineIdx);
      },
      () => {
        setIsPlaying(false);
        setActiveLineIndex(-1);
      }
    );
  };

  const handleResetForNext = (newIndex: number) => {
    stopSpeaking();
    setIsPlaying(false);
    setActiveLineIndex(-1);
    setCurrentIndex(newIndex);
    setSelectedOption(null);
    setShowAnswer(false);
    setShowScript(false);
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      handleResetForNext(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      handleResetForNext(currentIndex - 1);
    }
  };

  const handleRandom = () => {
    if (filteredQuestions.length <= 1) return;
    let nextIdx = Math.floor(Math.random() * filteredQuestions.length);
    if (nextIdx === currentIndex) {
      nextIdx = (nextIdx + 1) % filteredQuestions.length;
    }
    handleResetForNext(nextIdx);
  };

  const handleSaveWord = (term: string, meaning: string, example?: string) => {
    onSaveVocab(term, meaning, example);
    setAddedTerms(prev => new Set(prev).add(term));
  };

  if (!currentQ) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-white p-8 rounded-2xl border border-slate-200">
          <Info className="w-12 h-12 text-blue-900 mx-auto mb-3" />
          <p className="text-slate-700">Chưa có câu hỏi nghe cho dạng này.</p>
        </div>
      </div>
    );
  }

  const isCorrect = selectedOption === currentQ.correctAnswer;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Listening Type Filter */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-xs">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Dạng câu hỏi TOPIK II Nghe (듣기)
          </span>
          <span className="text-xs text-slate-500">
            {filteredQuestions.length} câu hỏi
          </span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          <button
            onClick={() => {
              setSelectedTypeId('all');
              handleResetForNext(0);
            }}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-all ${
              selectedTypeId === 'all'
                ? 'bg-blue-950 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Tất cả dạng nghe
          </button>
          {TOPIK_LISTENING_TYPES.map((type) => (
            <button
              key={type.id}
              onClick={() => {
                setSelectedTypeId(type.id);
                handleResetForNext(0);
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
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-600 text-white">
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
                <span>{currentTypeInfo.recommendedTime}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MAIN LISTENING CARD */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
        {/* Header bar */}
        <div className="bg-slate-50/80 border-b border-slate-200 px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-bold tracking-wider text-blue-950 bg-blue-100/70 border border-blue-200 px-2.5 py-1 rounded-md flex items-center space-x-1.5">
              <Headphones className="w-3.5 h-3.5" />
              <span>Câu {currentIndex + 1} / {filteredQuestions.length}</span>
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Nguồn: <strong className="text-slate-700 font-semibold">{currentQ.sourceExam}</strong>
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowScript(!showScript)}
              className={`flex items-center space-x-1 text-xs px-2.5 py-1 rounded-lg border transition-colors ${
                showScript
                  ? 'bg-blue-950 text-white border-blue-950'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{showScript ? 'Ẩn Lời Thoại (스크립트)' : 'Hiện Lời Thoại (스크립트)'}</span>
            </button>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Question Label */}
          <div>
            <p className="text-xs sm:text-sm font-semibold text-blue-950 mb-1">
              {currentQ.questionNumberLabel}
            </p>
            <p className="text-xs text-slate-500 font-medium">
              {currentQ.instruction}
            </p>
          </div>

          {/* AUDIO PLAYER CONTROLLER */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm border border-slate-800">
            {/* TOPIK Official Exam Prompt Header */}
            <div className="bg-slate-800/80 rounded-xl px-4 py-2.5 border border-slate-700/80 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center space-x-2 text-blue-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>
                  <strong>[안내방송]:</strong> 다음을 듣고 물음에 답하십시오. 한 번 읽겠습니다.
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIncludeChime(!includeChime)}
                  className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                    includeChime
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'bg-slate-700 text-slate-400'
                  }`}
                  title="Bật/Tắt chuông báo hiệu thi NIIED"
                >
                  <Bell className="w-3 h-3" />
                  <span>Chuông hiệu lệnh (딩동): {includeChime ? 'Bật' : 'Tắt'}</span>
                </button>
                <button
                  onClick={() => playTopikChime()}
                  className="text-slate-400 hover:text-amber-300 px-2 py-1 rounded text-[11px] hover:bg-slate-700 transition-colors"
                  title="Nghe thử tiếng chuông chuẩn phòng thi TOPIK"
                >
                  Nghe thử chuông
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Play & Control Buttons */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={handlePlayDialogue}
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold shadow-lg transition-all ${
                    isPlaying
                      ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 ring-4 ring-amber-400/20'
                      : 'bg-blue-600 hover:bg-blue-500 text-white ring-4 ring-blue-500/20'
                  }`}
                  title={isPlaying ? 'Dừng phát' : 'Nghe hội thoại'}
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
                </button>

                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm sm:text-base font-bold text-white">
                      {isPlaying ? 'Đang phát bài nghe TOPIK...' : 'Bấm để nghe hội thoại'}
                    </span>
                    {isPlaying && (
                      <span className="flex space-x-1 items-end h-3">
                        <span className="w-1 bg-amber-400 h-2.5 animate-pulse"></span>
                        <span className="w-1 bg-amber-400 h-3 animate-pulse delay-75"></span>
                        <span className="w-1 bg-amber-400 h-2 animate-pulse delay-150"></span>
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400">
                    Âm thanh bám sát format đề thi công khai NIIED (Giọng Nam / Nữ bản xứ)
                  </p>
                </div>
              </div>

              {/* Speed Controller & Replay */}
              <div className="flex items-center space-x-2 self-start sm:self-auto">
                <span className="text-xs text-slate-400 mr-1">Tốc độ:</span>
                {[
                  { label: '0.8x (Chậm)', val: 0.8 },
                  { label: '1.0x (Chuẩn)', val: 0.95 },
                  { label: '1.2x (Nhanh)', val: 1.15 },
                ].map((s) => (
                  <button
                    key={s.val}
                    onClick={() => {
                      setPlaybackSpeed(s.val);
                      if (isPlaying) {
                        stopSpeaking();
                        setIsPlaying(false);
                      }
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                      playbackSpeed === s.val
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {s.label.split(' ')[0]}
                  </button>
                ))}

                <button
                  onClick={() => {
                    stopSpeaking();
                    setIsPlaying(false);
                    setTimeout(handlePlayDialogue, 200);
                  }}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors ml-1"
                  title="Nghe lại từ đầu"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Script Display (If toggled or checked) */}
            {showScript && (
              <div className="bg-slate-800/90 rounded-xl p-4 border border-slate-700 space-y-2.5 text-xs sm:text-sm animate-in fade-in">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-1">
                  Lời thoại tiếng Hàn (스크립트):
                </span>
                {currentQ.dialogue.map((line, idx) => {
                  const isCurrentLine = activeLineIndex === idx;
                  const isWoman = line.speaker === 'woman';
                  return (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-lg transition-all flex items-start space-x-2.5 ${
                        isCurrentLine
                          ? 'bg-blue-900/80 border border-blue-500 text-white font-medium ring-1 ring-blue-400'
                          : 'bg-slate-900/40 text-slate-300'
                      }`}
                    >
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded shrink-0 ${
                        isWoman ? 'bg-pink-900/80 text-pink-200' : 'bg-sky-900/80 text-sky-200'
                      }`}>
                        {isWoman ? '여자' : '남자'}
                      </span>
                      <p className="font-['Noto_Sans_KR'] leading-relaxed flex-1">
                        {line.text}
                      </p>
                      <button
                        onClick={() => speakKorean(line.text, playbackSpeed, isWoman ? 1.15 : 0.85)}
                        className="text-slate-400 hover:text-white p-1"
                        title="Nghe câu này"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* 4 Choices */}
          <div className="space-y-3 pt-2">
            {currentQ.options.map((option, idx) => {
              const optionNumber = idx + 1;
              const isSelected = selectedOption === optionNumber;
              const isOptionCorrect = optionNumber === currentQ.correctAnswer;

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
                  onClick={() => {
                    if (!showAnswer) setSelectedOption(optionNumber);
                  }}
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

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              {!showAnswer ? (
                <button
                  onClick={() => {
                    if (selectedOption !== null) {
                      setShowAnswer(true);
                      setShowScript(true); // Automatically reveal script on answer check
                      if (onIncrementDailyPractice) {
                        onIncrementDailyPractice();
                      }
                    }
                  }}
                  disabled={selectedOption === null}
                  className="bg-blue-950 text-white hover:bg-blue-900 disabled:opacity-40 disabled:cursor-not-allowed px-6 py-2.5 rounded-xl font-semibold text-sm shadow-sm transition-all"
                >
                  Kiểm tra đáp án
                </button>
              ) : (
                <div className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold flex items-center space-x-1.5 ${
                  isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                }`}>
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Nghe chính xác! (+1 điểm)</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-600" />
                      <span>Chưa chính xác (Đáp án đúng: {['①', '②', '③', '④'][currentQ.correctAnswer - 1]})</span>
                    </>
                  )}
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
                className="flex items-center space-x-1 px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 text-xs sm:text-sm font-medium transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Câu trước</span>
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex === filteredQuestions.length - 1}
                className="flex items-center space-x-1 px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-40 text-xs sm:text-sm font-medium transition-colors"
              >
                <span>Câu tiếp theo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* DETAILED EXPLANATION PANEL */}
          {showAnswer && (
            <div className="mt-6 pt-6 border-t border-slate-200 space-y-5 animate-in fade-in duration-300">
              {/* Full Vietnamese Translation */}
              <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-5 space-y-2">
                <span className="font-bold text-blue-950 text-xs sm:text-sm block">
                  Dịch nghĩa toàn bộ bài nghe & các phương án:
                </span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                  {currentQ.translation}
                </p>
              </div>

              {/* Listening Breakdown & Logic */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                <div className="flex items-center space-x-2 text-blue-950 font-bold text-sm">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>Phân tích bẫy nghe & Logic bắt từ khóa:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                  {currentQ.explanation}
                </p>
              </div>

              {/* Exam Tip */}
              {currentQ.examTip && (
                <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 flex items-start space-x-3 text-xs sm:text-sm text-amber-900">
                  <div className="p-1 rounded-md bg-amber-100 text-amber-700 shrink-0 mt-0.5">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold">Bí quyết nghe nhanh (Listening Tip): </span>
                    <span>{currentQ.examTip}</span>
                  </div>
                </div>
              )}

              {/* Key Vocabulary Table */}
              {currentQ.keyPoints && currentQ.keyPoints.length > 0 && (
                <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1.5">
                    <BookMarked className="w-4 h-4 text-blue-900" />
                    <span>Từ vựng nghe then chốt (핵심 어휘)</span>
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentQ.keyPoints.map((item, i) => {
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
                            onClick={() => handleSaveWord(item.term, item.meaning, currentQ.audioScript)}
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
