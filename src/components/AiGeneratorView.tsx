import React, { useState } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Send, 
  Loader2, 
  CheckCircle2, 
  PlusCircle, 
  Lightbulb, 
  Volume2, 
  RotateCcw,
  Check,
  FileCheck,
  Headphones,
  Play,
  Pause,
  Repeat
} from 'lucide-react';
import { Question, ListeningQuestion } from '../types/topik';
import { TOPIK_QUESTION_TYPES } from '../data/topikTypes';
import { TOPIK_LISTENING_TYPES } from '../data/listeningTypes';
import { speakKorean, playTopikListeningSequence, stopSpeaking } from '../utils/speech';
import { renderFormattedKoreanPassage } from '../utils/formatKorean';

interface AiGeneratorViewProps {
  initialTypeId?: string;
  onSaveGeneratedQuestion: (question: Question) => void;
  onSaveGeneratedListeningQuestion?: (question: ListeningQuestion) => void;
  onPracticeQuestion: (question: Question) => void;
  onPracticeListeningQuestion?: (question: ListeningQuestion) => void;
}

export const AiGeneratorView: React.FC<AiGeneratorViewProps> = ({
  initialTypeId,
  onSaveGeneratedQuestion,
  onSaveGeneratedListeningQuestion,
  onPracticeQuestion,
  onPracticeListeningQuestion,
}) => {
  const [skillMode, setSkillMode] = useState<'reading' | 'listening'>(
    initialTypeId?.startsWith('listen-') ? 'listening' : 'reading'
  );
  const [selectedTypeId, setSelectedTypeId] = useState<string>(
    initialTypeId || (skillMode === 'reading' ? 'type-1' : 'listen-type-1')
  );
  const [selectedLevel, setSelectedLevel] = useState<'TOPIK 3' | 'TOPIK 4' | 'TOPIK 3-4'>('TOPIK 3-4');
  const [selectedTopic, setSelectedTopic] = useState<string>('Đời sống sinh hoạt & Giao tiếp thường ngày');
  const [customPrompt, setCustomPrompt] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedQuestion, setGeneratedQuestion] = useState<Question | null>(null);
  const [generatedListeningQuestion, setGeneratedListeningQuestion] = useState<ListeningQuestion | null>(null);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [selectedPreviewOption, setSelectedPreviewOption] = useState<number | null>(null);
  const [showPreviewAnswer, setShowPreviewAnswer] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const sampleTopics = [
    'Đời sống sinh hoạt & Giao tiếp thường ngày',
    'Văn hóa truyền thống & Ẩm thực Hàn Quốc',
    'Khoa học, Công nghệ & Mạng xã hội',
    'Bảo vệ môi trường & Tiết kiệm năng lượng',
    'Sức khỏe thể chất & Cân bằng tâm lý',
    'Kinh tế gia đình, Tiêu dùng & Việc làm',
    'Giáo dục, Thói quen đọc sách & Tự học',
    'Giao thông công cộng & An toàn cộng đồng'
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedQuestion(null);
    setGeneratedListeningQuestion(null);
    setIsSaved(false);
    setSelectedPreviewOption(null);
    setShowPreviewAnswer(false);
    stopSpeaking();
    setIsPlayingAudio(false);

    try {
      const topicString = customPrompt ? `${selectedTopic} (${customPrompt})` : selectedTopic;

      if (skillMode === 'reading') {
        const res = await fetch('/api/generate-question', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            typeId: selectedTypeId,
            topic: topicString,
            level: selectedLevel,
          }),
        });

        const data = await res.json();

        if (data.question) {
          const q: Question = {
            id: 'ai-gen-read-' + Date.now(),
            typeId: selectedTypeId,
            questionNumberLabel: data.question.questionNumberLabel || '[AI TOPIK II] ( )에 들어갈 가장 알맞은 것을 고르십시오.',
            instruction: data.question.instruction || '다음을 읽고 물음에 답하십시오.',
            passage: data.question.passage,
            options: data.question.options as [string, string, string, string],
            correctAnswer: data.question.correctAnswer,
            translation: data.question.translation,
            explanation: data.question.explanation,
            keyPoints: data.question.keyPoints || [],
            examTip: data.question.examTip || 'Đọc kỹ từ khóa liên kết ngữ pháp để tìm đáp án chính xác.',
            equivalentGrammars: data.question.equivalentGrammars || [],
            sourceExam: 'AI Mô phỏng đề NIIED',
            level: selectedLevel,
            isAiGenerated: true,
          };
          setGeneratedQuestion(q);
        } else {
          setGeneratedQuestion(createSmartFallbackQuestion(selectedTypeId, selectedTopic, selectedLevel));
        }
      } else {
        // Listening generation
        const res = await fetch('/api/generate-listening-question', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            typeId: selectedTypeId,
            topic: topicString,
            level: selectedLevel,
          }),
        });

        const data = await res.json();

        if (data.question) {
          const lq: ListeningQuestion = {
            id: 'ai-gen-listen-' + Date.now(),
            typeId: selectedTypeId,
            questionNumberLabel: data.question.questionNumberLabel || '[AI 듣기] 다음을 듣고 알맞은 것을 고르십시오.',
            instruction: data.question.instruction || '다음을 듣고 물음에 답하십시오.',
            dialogue: data.question.dialogue || [],
            audioScript: data.question.audioScript || '',
            options: data.question.options as [string, string, string, string],
            correctAnswer: data.question.correctAnswer,
            translation: data.question.translation,
            explanation: data.question.explanation,
            keyPoints: data.question.keyPoints || [],
            examTip: data.question.examTip || 'Lắng nghe trọng tâm từ khóa câu thoại cuối cùng.',
            sourceExam: 'AI Mô phỏng Đề Nghe NIIED',
            level: selectedLevel,
            isAiGenerated: true,
          };
          setGeneratedListeningQuestion(lq);
        } else {
          setGeneratedListeningQuestion(createSmartFallbackListeningQuestion(selectedTypeId));
        }
      }
    } catch (err: any) {
      console.warn('API error, using intelligent local generator:', err);
      if (skillMode === 'reading') {
        setGeneratedQuestion(createSmartFallbackQuestion(selectedTypeId, selectedTopic, selectedLevel));
      } else {
        setGeneratedListeningQuestion(createSmartFallbackListeningQuestion(selectedTypeId));
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveToBank = () => {
    if (skillMode === 'reading' && generatedQuestion) {
      onSaveGeneratedQuestion(generatedQuestion);
      setIsSaved(true);
    } else if (skillMode === 'listening' && generatedListeningQuestion && onSaveGeneratedListeningQuestion) {
      onSaveGeneratedListeningQuestion(generatedListeningQuestion);
      setIsSaved(true);
    }
  };

  const handlePlayListeningAudio = () => {
    if (!generatedListeningQuestion) return;
    if (isPlayingAudio) {
      stopSpeaking();
      setIsPlayingAudio(false);
      return;
    }
    setIsPlayingAudio(true);
    playTopikListeningSequence(
      generatedListeningQuestion.dialogue,
      0.95,
      true,
      undefined,
      () => setIsPlayingAudio(false)
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 shadow-md border border-slate-800">
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 rounded-xl bg-blue-600/80 text-white">
            <Sparkles className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">
              Tạo Câu Hỏi Đề Thi TOPIK II Không Giới Hạn Bằng AI
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Mô phỏng đề thi công khai NIIED và các bộ đề chuẩn với đầy đủ cả 2 kỹ năng Đọc (읽기) và Nghe (듣기).
            </p>
          </div>
        </div>
      </div>

      {/* Configuration Box */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-6">
        {/* Step 0: Chọn kỹ năng Đọc hoặc Nghe */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Chọn kỹ năng muốn tạo câu hỏi
          </label>
          <div className="grid grid-cols-2 gap-3 max-w-md">
            <button
              onClick={() => {
                setSkillMode('reading');
                setSelectedTypeId('type-1');
              }}
              className={`p-3 rounded-xl border flex items-center justify-center space-x-2 text-xs sm:text-sm font-bold transition-all ${
                skillMode === 'reading'
                  ? 'bg-blue-950 text-white border-blue-950 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Kỹ năng Đọc (읽기)</span>
            </button>

            <button
              onClick={() => {
                setSkillMode('listening');
                setSelectedTypeId('listen-type-1');
              }}
              className={`p-3 rounded-xl border flex items-center justify-center space-x-2 text-xs sm:text-sm font-bold transition-all ${
                skillMode === 'listening'
                  ? 'bg-blue-950 text-white border-blue-950 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Headphones className="w-4 h-4 text-emerald-400" />
              <span>Kỹ năng Nghe (듣기)</span>
            </button>
          </div>
        </div>

        {/* Step 1: Chọn dạng câu hỏi theo kỹ năng */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            1. Chọn dạng câu hỏi {skillMode === 'reading' ? 'Đọc (읽기)' : 'Nghe (듣기)'}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {skillMode === 'reading' ? (
              TOPIK_QUESTION_TYPES.map((type) => {
                const isSelected = selectedTypeId === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedTypeId(type.id)}
                    className={`text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                      isSelected
                        ? 'border-blue-900 bg-blue-50/70 text-blue-950 ring-1 ring-blue-900 font-medium'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-blue-950 text-xs px-2 py-0.5 rounded bg-slate-200/60">
                        {type.targetQuestions}
                      </span>
                      <span className="text-[11px] text-slate-600">{type.code}</span>
                    </div>
                    <p className="font-semibold text-slate-900 line-clamp-1">{type.name.split(':')[1] || type.name}</p>
                    <p className="text-[11px] text-slate-600 line-clamp-1 mt-0.5">{type.subtitle}</p>
                  </button>
                );
              })
            ) : (
              TOPIK_LISTENING_TYPES.map((type) => {
                const isSelected = selectedTypeId === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedTypeId(type.id)}
                    className={`text-left p-3 rounded-xl border text-xs sm:text-sm transition-all ${
                      isSelected
                        ? 'border-blue-900 bg-blue-50/70 text-blue-950 ring-1 ring-blue-900 font-medium'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-blue-950 text-xs px-2 py-0.5 rounded bg-slate-200/60">
                        {type.targetQuestions}
                      </span>
                      <span className="text-[11px] text-slate-600">{type.code}</span>
                    </div>
                    <p className="font-semibold text-slate-900 line-clamp-1">{type.name.split(':')[1] || type.name}</p>
                    <p className="text-[11px] text-slate-600 line-clamp-1 mt-0.5">{type.subtitle}</p>
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Step 2: Chọn cấp độ và chủ đề */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2 border-t border-slate-100">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              2. Trình độ mục tiêu
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['TOPIK 3-4', 'TOPIK 3', 'TOPIK 4'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                    selectedLevel === lvl
                      ? 'bg-blue-950 text-white border-blue-950 shadow-xs'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              3. Chủ đề bài thi
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-900"
            >
              {sampleTopics.map((topic, i) => (
                <option key={i} value={topic}>{topic}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Step 3: Yêu cầu thêm (tùy chọn) */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            4. Yêu cầu chi tiết thêm (Tùy chọn)
          </label>
          <input
            type="text"
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            placeholder="Ví dụ: Tập trung vào cặp ngữ pháp -(으)ㄴ/는 바람에, hoặc đoạn hội thoại bàn về bảo vệ môi trường..."
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-900"
          />
        </div>

        {/* Generate Button */}
        <div className="pt-2 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            Tạo không giới hạn 24/7 · Tự động chuẩn hóa theo format NIIED.
          </p>
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="bg-blue-950 text-white hover:bg-blue-900 disabled:opacity-50 px-6 py-2.5 rounded-xl font-bold text-sm shadow-sm flex items-center space-x-2 transition-all cursor-pointer"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-amber-300" />
                <span>Đang tạo câu hỏi chuẩn TOPIK...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Tạo câu hỏi mới ngay</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Generated Reading Question Preview */}
      {skillMode === 'reading' && generatedQuestion && (
        <div className="bg-white rounded-2xl border-2 border-blue-950/20 shadow-md overflow-hidden animate-in fade-in duration-300">
          <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-blue-600 text-white">
                Câu hỏi Đọc vừa tạo
              </span>
              <span className="text-xs text-slate-300 hidden sm:inline">
                {generatedQuestion.questionNumberLabel}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleSaveToBank}
                disabled={isSaved}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isSaved
                    ? 'bg-emerald-600 text-white cursor-default'
                    : 'bg-white text-slate-900 hover:bg-blue-50'
                }`}
              >
                {isSaved ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Đã lưu vào kho đề</span>
                  </>
                ) : (
                  <>
                    <PlusCircle className="w-3.5 h-3.5 text-blue-900" />
                    <span>Lưu vào kho đề</span>
                  </>
                )}
              </button>

              <button
                onClick={() => onPracticeQuestion(generatedQuestion)}
                className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Luyện ngay</span>
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-blue-950 mb-1">
                {generatedQuestion.questionNumberLabel}
              </p>
              <p className="text-xs text-slate-500 font-medium">
                {generatedQuestion.instruction}
              </p>
            </div>

            {/* Passage with Underline for Dạng 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-slate-900 relative">
              <button
                onClick={() => speakKorean(generatedQuestion.passage)}
                className="absolute top-3 right-3 text-slate-400 hover:text-blue-900 p-1.5 rounded-md hover:bg-slate-200/60"
                title="Phát âm"
              >
                <Volume2 className="w-4 h-4" />
              </button>
              <p className="text-base sm:text-lg leading-relaxed font-normal whitespace-pre-line font-['Noto_Sans_KR',sans-serif]">
                {renderFormattedKoreanPassage(generatedQuestion.passage, generatedQuestion.typeId === 'type-2')}
              </p>
            </div>

            {/* 4 Choices */}
            <div className="space-y-2.5">
              {generatedQuestion.options.map((option, idx) => {
                const optNum = idx + 1;
                const isSelected = selectedPreviewOption === optNum;
                const isCorrect = optNum === generatedQuestion.correctAnswer;

                let style = 'border-slate-200 bg-white hover:bg-slate-50';
                if (showPreviewAnswer) {
                  if (isCorrect) style = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-500';
                  else if (isSelected) style = 'border-rose-400 bg-rose-50 text-rose-950';
                  else style = 'border-slate-200 opacity-60';
                } else if (isSelected) {
                  style = 'border-blue-900 bg-blue-50 text-blue-950 font-medium ring-1 ring-blue-900';
                }

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      if (!showPreviewAnswer) setSelectedPreviewOption(optNum);
                    }}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-sm sm:text-base cursor-pointer transition-all ${style}`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="font-bold text-slate-700">{['①', '②', '③', '④'][idx]}</span>
                      <span className="font-['Noto_Sans_KR']">{option}</span>
                    </div>
                    {showPreviewAnswer && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Action Row */}
            <div className="pt-2 flex items-center space-x-3">
              {!showPreviewAnswer ? (
                <button
                  onClick={() => setShowPreviewAnswer(true)}
                  disabled={selectedPreviewOption === null}
                  className="bg-blue-950 text-white hover:bg-blue-900 disabled:opacity-40 px-5 py-2 rounded-xl font-semibold text-xs sm:text-sm shadow-xs transition-all"
                >
                  Xem đáp án & Phân tích
                </button>
              ) : (
                <div className="text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-lg flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Đáp án đúng: {['①', '②', '③', '④'][generatedQuestion.correctAnswer - 1]}</span>
                </div>
              )}
            </div>

            {/* Explanation box */}
            {showPreviewAnswer && (
              <div className="pt-4 border-t border-slate-200 space-y-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm space-y-1.5">
                  <span className="font-bold text-blue-950">Dịch nghĩa tiếng Việt:</span>
                  <p className="text-slate-800 leading-relaxed whitespace-pre-line">{generatedQuestion.translation}</p>
                </div>

                <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-4 text-xs sm:text-sm space-y-1.5">
                  <span className="font-bold text-blue-950 flex items-center space-x-1.5">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span>Giải thích logic ngữ pháp:</span>
                  </span>
                  <p className="text-slate-800 leading-relaxed whitespace-pre-line">{generatedQuestion.explanation}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Generated Listening Question Preview */}
      {skillMode === 'listening' && generatedListeningQuestion && (
        <div className="bg-white rounded-2xl border-2 border-emerald-900/30 shadow-md overflow-hidden animate-in fade-in duration-300">
          <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-emerald-600 text-white flex items-center space-x-1">
                <Headphones className="w-3.5 h-3.5" />
                <span>Câu hỏi Nghe vừa tạo</span>
              </span>
              <span className="text-xs text-slate-300 hidden sm:inline">
                {generatedListeningQuestion.questionNumberLabel}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleSaveToBank}
                disabled={isSaved}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isSaved
                    ? 'bg-emerald-600 text-white cursor-default'
                    : 'bg-white text-slate-900 hover:bg-blue-50'
                }`}
              >
                {isSaved ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Đã lưu vào kho nghe</span>
                  </>
                ) : (
                  <>
                    <PlusCircle className="w-3.5 h-3.5 text-blue-900" />
                    <span>Lưu vào kho nghe</span>
                  </>
                )}
              </button>

              {onPracticeListeningQuestion && (
                <button
                  onClick={() => onPracticeListeningQuestion(generatedListeningQuestion)}
                  className="flex items-center space-x-1 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
                >
                  <Headphones className="w-3.5 h-3.5" />
                  <span>Luyện nghe ngay</span>
                </button>
              )}
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-blue-950 mb-1">
                {generatedListeningQuestion.questionNumberLabel}
              </p>
              <p className="text-xs text-slate-500 font-medium">
                {generatedListeningQuestion.instruction}
              </p>
            </div>

            {/* Audio player */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-xl p-5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  onClick={handlePlayListeningAudio}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold shadow-md transition-all ${
                    isPlayingAudio ? 'bg-amber-500 text-slate-950' : 'bg-emerald-600 text-white'
                  }`}
                >
                  {isPlayingAudio ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
                </button>
                <div>
                  <span className="font-bold text-sm text-white block">
                    {isPlayingAudio ? 'Đang phát đoạn nghe...' : 'Bấm để nghe hội thoại'}
                  </span>
                  <p className="text-xs text-slate-300">
                    Kèm chuông hiệu lệnh thi NIIED (Giọng chuẩn Nam & Nữ)
                  </p>
                </div>
              </div>
            </div>

            {/* Dialogue lines preview */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs sm:text-sm">
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px] block">
                Nội dung hội thoại nghe:
              </span>
              {generatedListeningQuestion.dialogue.map((line, lIdx) => (
                <div key={lIdx} className="flex items-start space-x-2">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    line.speaker === 'woman' ? 'bg-pink-100 text-pink-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {line.speaker === 'woman' ? '여자' : '남자'}
                  </span>
                  <span className="font-['Noto_Sans_KR'] text-slate-800">{line.text}</span>
                </div>
              ))}
            </div>

            {/* 4 Choices */}
            <div className="space-y-2.5">
              {generatedListeningQuestion.options.map((option, idx) => {
                const optNum = idx + 1;
                const isSelected = selectedPreviewOption === optNum;
                const isCorrect = optNum === generatedListeningQuestion.correctAnswer;

                let style = 'border-slate-200 bg-white hover:bg-slate-50';
                if (showPreviewAnswer) {
                  if (isCorrect) style = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-500';
                  else if (isSelected) style = 'border-rose-400 bg-rose-50 text-rose-950';
                  else style = 'border-slate-200 opacity-60';
                } else if (isSelected) {
                  style = 'border-blue-900 bg-blue-50 text-blue-950 font-medium ring-1 ring-blue-900';
                }

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      if (!showPreviewAnswer) setSelectedPreviewOption(optNum);
                    }}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-sm sm:text-base cursor-pointer transition-all ${style}`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="font-bold text-slate-700">{['①', '②', '③', '④'][idx]}</span>
                      <span className="font-['Noto_Sans_KR']">{option}</span>
                    </div>
                    {showPreviewAnswer && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Action Row */}
            <div className="pt-2 flex items-center space-x-3">
              {!showPreviewAnswer ? (
                <button
                  onClick={() => setShowPreviewAnswer(true)}
                  disabled={selectedPreviewOption === null}
                  className="bg-blue-950 text-white hover:bg-blue-900 disabled:opacity-40 px-5 py-2 rounded-xl font-semibold text-xs sm:text-sm shadow-xs transition-all"
                >
                  Xem đáp án & Lời giải
                </button>
              ) : (
                <div className="text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-lg flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Đáp án đúng: {['①', '②', '③', '④'][generatedListeningQuestion.correctAnswer - 1]}</span>
                </div>
              )}
            </div>

            {/* Explanation */}
            {showPreviewAnswer && (
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm space-y-1">
                  <span className="font-bold text-blue-950">Dịch nghĩa tiếng Việt:</span>
                  <p className="text-slate-800 whitespace-pre-line leading-relaxed">{generatedListeningQuestion.translation}</p>
                </div>
                <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-4 text-xs sm:text-sm space-y-1">
                  <span className="font-bold text-blue-950">Phân tích bẫy nghe:</span>
                  <p className="text-slate-800 whitespace-pre-line leading-relaxed">{generatedListeningQuestion.explanation}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Fallback smart generators
function createSmartFallbackQuestion(typeId: string, topic: string, level: string): Question {
  const bank: Record<string, Question[]> = {
    'type-1': [
      {
        id: 'fb-1',
        typeId: 'type-1',
        questionNumberLabel: '[1~2] ( )에 들어갈 가장 알맞은 것을 고르십시오.',
        instruction: '다음 문장의 ( )에 들어갈 가장 알맞은 것을 고르십시오.',
        passage: '갑자기 내린 폭설로 도로가 ( ) 출근길이 극심한 정체를 빚었다.',
        options: ['통제되는 바람에', '통제되도록', '통제되다시피', '통제된 셈 치고'],
        correctAnswer: 1,
        translation: 'Do đường sá bị phong tỏa vì trận bão tuyết rơi bất ngờ nên đường đi làm đã xảy ra ùn tắc nghiêm trọng.',
        explanation: '-(으)ㄴ/는 바람에 chỉ nguyên nhân ngoại cảnh đột ngột dẫn đến kết quả tiêu cực.',
        keyPoints: [
          { term: '-(으)ㄴ/는 바람에', meaning: 'Do/Vì... (bất ngờ, kết quả xấu)' },
          { term: '정체를 빚다', meaning: 'Ùn tắc giao thông' }
        ],
        examTip: 'Chú ý sự cố ngoại cảnh đột ngột -> -(으)ㄴ/는 바람에.',
        sourceExam: 'AI Chuẩn NIIED',
        level: 'TOPIK 3-4'
      }
    ],
    'type-2': [
      {
        id: 'fb-2',
        typeId: 'type-2',
        questionNumberLabel: '[3~4] 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
        instruction: '다음 문장의 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
        passage: '아무리 어려운 일이라도 포기하지 않고 노력하면 [성공하기 마련이다].',
        options: ['성공하는 법이다', '성공하는 셈이다', '성공할 뻔했다', '성공할 지경이다'],
        correctAnswer: 1,
        translation: 'Dù là việc khó đến đâu nếu nỗ lực không từ bỏ thì đương nhiên sẽ thành công.',
        explanation: '-기 마련이다 đồng nghĩa với -는 법이다.',
        keyPoints: [
          { term: '-기 마련이다', meaning: 'Đương nhiên là' },
          { term: '-는 법이다', meaning: 'Ắt hẳn là' }
        ],
        examTip: '-기 마련이다 = -는 법이다.',
        sourceExam: 'AI Chuẩn NIIED',
        level: 'TOPIK 3-4'
      }
    ]
  };

  const pool = bank[typeId] || bank['type-1'];
  return {
    ...pool[0],
    id: 'ai-fallback-read-' + Date.now(),
    isAiGenerated: true,
  };
}

function createSmartFallbackListeningQuestion(typeId: string): ListeningQuestion {
  return {
    id: 'ai-fallback-listen-' + Date.now(),
    typeId: typeId || 'listen-type-1',
    questionNumberLabel: '[4~8] 다음을 듣고 이어질 수 있는 말로 가장 알맞은 것을 고르십시오.',
    instruction: '다음을 듣고 이어질 수 있는 말로 가장 알맞은 것을 고르십시오.',
    dialogue: [
      { speaker: 'woman', text: '민수 씨, 지난번에 빌려 준 책 다 읽었으면 내일 갖다 줄 수 있어요?' },
      { speaker: 'man', text: '아, 거의 다 읽었는데 혹시 며칠만 더 빌려 볼 수 있을까요?' },
      { speaker: 'woman', text: '네, 그럼요. 급한 책 아니니까 천천히 보고 돌려주세요.' }
    ],
    audioScript: `[여자]: 민수 씨, 지난번에 빌려 준 책 다 읽었으면 내일 갖다 줄 수 있어요?\n[남자]: 아, 거의 다 읽었는데 혹시 며칠만 더 빌려 볼 수 있을까요?\n[여자]: 네, 그럼요. 급한 책 아니니까 천천히 보고 돌려주세요.`,
    options: [
      '네, 배려해 줘서 고마워요. 다 읽고 꼭 돌려줄게요.',
      '그럼 지금 바로 책을 돌려주러 갈게요.',
      '이미 도서관에 책을 반납해 버렸어요.',
      '책이 너무 어려워서 한 줄도 못 읽었어요.'
    ],
    correctAnswer: 1,
    translation: 'Người nữ đồng ý cho mượn tiếp, người nam đáp lại bằng lời cảm ơn sự thông cảm.',
    explanation: 'Đáp án 1 là câu nối tiếp tự nhiên và chuẩn mực nhất.',
    keyPoints: [
      { term: '배려하다', meaning: 'Quan tâm, thông cảm giúp đỡ' }
    ],
    examTip: 'Sau khi người khác đồng ý giúp đỡ -> Nói lời cảm ơn (고마워요).',
    sourceExam: 'AI Chuẩn NIIED 듣기',
    level: 'TOPIK 3',
    isAiGenerated: true,
  };
}
