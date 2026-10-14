import React, { useState, useEffect } from 'react';
import { 
  Timer, 
  Flag, 
  CheckCircle2, 
  XCircle, 
  Award, 
  RotateCcw, 
  ArrowRight, 
  AlertCircle,
  BarChart3,
  Lightbulb,
  FileCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Question, ExamHistoryItem } from '../types/topik';
import { TOPIK_QUESTION_TYPES } from '../data/topikTypes';
import { renderFormattedKoreanPassage } from '../utils/formatKorean';

interface MockExamViewProps {
  allQuestions: Question[];
  onSaveExamResult: (result: ExamHistoryItem) => void;
}

export const MockExamView: React.FC<MockExamViewProps> = ({
  allQuestions,
  onSaveExamResult,
}) => {
  const [examStatus, setExamStatus] = useState<'idle' | 'running' | 'finished'>('idle');
  const [examLength, setExamLength] = useState<number>(10);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [secondsRemaining, setSecondsRemaining] = useState<number>(15 * 60);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState<boolean>(false);
  const [examResult, setExamResult] = useState<{
    correctCount: number;
    total: number;
    scorePercent: number;
    timeSpentSeconds: number;
    typeStats: Record<string, { total: number; correct: number }>;
  } | null>(null);

  // Timer countdown
  useEffect(() => {
    if (examStatus !== 'running' || isPaused) return;

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStatus, isPaused]);

  const handleStartExam = (count: number) => {
    // Pick questions with good distribution across types
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);

    const minutes = count === 10 ? 15 : count === 15 ? 25 : 35;
    setExamLength(count);
    setExamQuestions(selected);
    setCurrentIndex(0);
    setAnswers({});
    setFlagged({});
    setSecondsRemaining(minutes * 60);
    setIsPaused(false);
    setExamStatus('running');
    setExamResult(null);
  };

  const handleSelectAnswer = (optionNumber: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentIndex]: optionNumber
    }));
  };

  const handleToggleFlag = () => {
    setFlagged(prev => ({
      ...prev,
      [currentIndex]: !prev[currentIndex]
    }));
  };

  const handleSubmitExam = () => {
    setShowSubmitConfirm(false);
    let correct = 0;
    const typeStats: Record<string, { total: number; correct: number }> = {};

    examQuestions.forEach((q, idx) => {
      const userAnswer = answers[idx];
      const isRight = userAnswer === q.correctAnswer;
      if (isRight) correct++;

      const typeKey = q.typeId;
      if (!typeStats[typeKey]) {
        typeStats[typeKey] = { total: 0, correct: 0 };
      }
      typeStats[typeKey].total++;
      if (isRight) typeStats[typeKey].correct++;
    });

    const totalMinutes = examLength === 10 ? 15 : examLength === 15 ? 25 : 35;
    const timeSpent = (totalMinutes * 60) - secondsRemaining;
    const percentage = Math.round((correct / examQuestions.length) * 100);

    const result = {
      correctCount: correct,
      total: examQuestions.length,
      scorePercent: percentage,
      timeSpentSeconds: timeSpent,
      typeStats,
    };

    setExamResult(result);
    setExamStatus('finished');

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}

    // Save to history
    onSaveExamResult({
      id: 'exam-' + Date.now(),
      date: new Date().toLocaleDateString('vi-VN') + ' ' + new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      totalQuestions: examQuestions.length,
      correctCount: correct,
      timeSpentSeconds: timeSpent,
      scorePercentage: percentage,
      typeBreakdown: typeStats,
    });
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  const currentQ = examQuestions[currentIndex];
  const answeredCount = Object.keys(answers).length;

  // IDLE SCREEN: Select Test Mode
  if (examStatus === 'idle') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-800">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2.5 rounded-xl bg-blue-600 text-white">
              <Timer className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">
                Mô Phỏng Phòng Thi Đọc TOPIK II (읽기)
              </h1>
              <p className="text-xs sm:text-sm text-slate-300">
                Luyện tập áp lực thời gian với các câu hỏi bám sát đề thi công khai NIIED.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded">
                  Khởi động nhanh
                </span>
                <span className="text-xs text-slate-600">15 Phút</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Đề Thi 10 Câu</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Kiểm tra nhanh tốc độ phản xạ với các dạng ngữ pháp và biển báo, biểu đồ cơ bản.
              </p>
            </div>
            <button
              onClick={() => handleStartExam(10)}
              className="w-full bg-blue-950 hover:bg-blue-900 text-white py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-xs transition-colors"
            >
              Bắt đầu bài thi
            </button>
          </div>

          <div className="bg-white border-2 border-blue-900/40 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative">
            <span className="absolute -top-3 right-4 bg-blue-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
              Khuyên dùng
            </span>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded">
                  Tiêu chuẩn Trung cấp
                </span>
                <span className="text-xs text-slate-600">25 Phút</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Đề Thi 15 Câu</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Bao phủ đầy đủ các dạng từ câu 1 đến câu 31 (ngữ pháp, sắp xếp [가-나-다-라], đoạn văn).
              </p>
            </div>
            <button
              onClick={() => handleStartExam(15)}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-xs transition-colors"
            >
              Bắt đầu bài thi
            </button>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded">
                  Thử thách TOPIK 4
                </span>
                <span className="text-xs text-slate-600">35 Phút</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Đề Thi 20 Câu</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Mô phỏng áp lực thực tế với các đoạn văn dài, tiêu đề báo chí và câu hỏi tâm trạng.
              </p>
            </div>
            <button
              onClick={() => handleStartExam(20)}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-xs transition-colors"
            >
              Bắt đầu bài thi
            </button>
          </div>
        </div>

        {/* Exam Tips Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs text-slate-700 space-y-2">
          <span className="font-bold text-slate-900 flex items-center space-x-1.5">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>Quy chế thi TOPIK II Đọc:</span>
          </span>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Đề thi thật gồm 50 câu trong 70 phút (trung bình 1 phút 24 giây cho mỗi câu).</li>
            <li>Câu 1 đến 15 cần làm nhanh trong vòng 30 - 60 giây mỗi câu để dành thời gian cho đoạn văn dài.</li>
            <li>Có thể gắn cờ để xem lại các câu chưa chắc chắn trước khi nộp bài.</li>
          </ul>
        </div>
      </div>
    );
  }

  // FINISHED SCREEN: Result Report
  if (examStatus === 'finished' && examResult) {
    const isLevel4 = examResult.scorePercent >= 75;
    const isLevel3 = examResult.scorePercent >= 50;

    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Result Header Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-900 mx-auto flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Kết quả bài thi mô phỏng TOPIK II
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Đạt {examResult.correctCount} / {examResult.total} câu ({examResult.scorePercent}%)
            </h2>
            <div className="mt-2 inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-950 text-white">
              <span>Đánh giá: </span>
              <span>{isLevel4 ? 'Đạt chuẩn TOPIK Cấp 4' : isLevel3 ? 'Đạt chuẩn TOPIK Cấp 3' : 'Cần củng cố thêm'}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto pt-2 text-xs">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
              <span className="text-slate-600 block mb-0.5">Thời gian làm bài</span>
              <strong className="text-sm text-slate-900">{formatTime(examResult.timeSpentSeconds)}</strong>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
              <span className="text-slate-600 block mb-0.5">Số câu chính xác</span>
              <strong className="text-sm text-emerald-700">{examResult.correctCount} câu</strong>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 col-span-2 sm:col-span-1">
              <span className="text-slate-600 block mb-0.5">Tốc độ trung bình</span>
              <strong className="text-sm text-slate-900">
                {Math.round(examResult.timeSpentSeconds / examResult.total)} giây/câu
              </strong>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => handleStartExam(examLength)}
              className="flex items-center space-x-2 bg-blue-950 text-white hover:bg-blue-900 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-xs transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Làm đề thi khác</span>
            </button>
            <button
              onClick={() => setExamStatus('idle')}
              className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-xs sm:text-sm transition-colors"
            >
              Về màn hình chọn đề
            </button>
          </div>
        </div>

        {/* Detailed Review of All Questions */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
            <FileCheck className="w-5 h-5 text-blue-900" />
            <span>Chi tiết từng câu trong bài thi:</span>
          </h3>

          {examQuestions.map((q, idx) => {
            const userAnswer = answers[idx];
            const isCorrect = userAnswer === q.correctAnswer;

            return (
              <div
                key={idx}
                className={`bg-white rounded-xl border p-5 space-y-3 ${
                  isCorrect ? 'border-emerald-200' : 'border-rose-200'
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                    Câu {idx + 1}
                  </span>
                  <div className="flex items-center space-x-1.5">
                    {isCorrect ? (
                      <span className="text-emerald-700 font-bold flex items-center space-x-1">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Chính xác</span>
                      </span>
                    ) : (
                      <span className="text-rose-600 font-bold flex items-center space-x-1">
                        <XCircle className="w-4 h-4" />
                        <span>Sai (Bạn chọn: {userAnswer ? ['①', '②', '③', '④'][userAnswer - 1] : 'Chưa chọn'} - Đáp án đúng: {['①', '②', '③', '④'][q.correctAnswer - 1]})</span>
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm font-semibold text-slate-900 font-['Noto_Sans_KR'] whitespace-pre-line bg-slate-50 p-3 rounded-lg border border-slate-200">
                  {renderFormattedKoreanPassage(q.passage, q.typeId === 'type-2')}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {q.options.map((opt, optIdx) => {
                    const optNum = optIdx + 1;
                    const isRightOption = optNum === q.correctAnswer;
                    const isUserPick = optNum === userAnswer;

                    let optBg = 'bg-white border-slate-200 text-slate-700';
                    if (isRightOption) optBg = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
                    else if (isUserPick) optBg = 'bg-rose-50 border-rose-300 text-rose-950 line-through';

                    return (
                      <div key={optIdx} className={`p-2 rounded-lg border flex items-center space-x-2 ${optBg}`}>
                        <span>{['①', '②', '③', '④'][optIdx]}</span>
                        <span className="font-['Noto_Sans_KR']">{opt}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2 text-xs text-slate-600 border-t border-slate-100 space-y-1">
                  <p><strong className="text-slate-800">Dịch nghĩa:</strong> {q.translation}</p>
                  <p><strong className="text-slate-800">Giải thích:</strong> {q.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ACTIVE EXAM SCREEN
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Exam Header Bar */}
      <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-md border border-slate-800 sticky top-16 z-30">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-blue-950 border border-blue-800 px-3 py-1.5 rounded-xl font-mono text-sm sm:text-base font-bold text-amber-300">
            <Timer className="w-4 h-4 text-amber-400" />
            <span>{formatTime(secondsRemaining)}</span>
          </div>
          <span className="text-xs text-slate-400 hidden sm:inline">
            Đã làm: <strong className="text-white">{answeredCount}</strong> / {examQuestions.length} câu
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleToggleFlag}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
              flagged[currentIndex]
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            <Flag className="w-3.5 h-3.5" />
            <span>{flagged[currentIndex] ? 'Đã gắn cờ' : 'Gắn cờ'}</span>
          </button>

          <button
            onClick={() => setShowSubmitConfirm(true)}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-colors"
          >
            Nộp bài
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left: Question Content (3 cols) */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="text-xs sm:text-sm font-bold text-blue-950">
              Câu {currentIndex + 1} / {examQuestions.length}
            </span>
            <span className="text-xs text-slate-500">
              {currentQ?.questionNumberLabel}
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-slate-900">
            <p className="text-base sm:text-lg leading-relaxed font-normal whitespace-pre-line font-['Noto_Sans_KR']">
              {renderFormattedKoreanPassage(currentQ?.passage, currentQ?.typeId === 'type-2')}
            </p>
          </div>

          {/* 4 Choices */}
          <div className="space-y-3">
            {currentQ?.options.map((opt, idx) => {
              const optNum = idx + 1;
              const isSelected = answers[currentIndex] === optNum;

              return (
                <div
                  key={idx}
                  onClick={() => handleSelectAnswer(optNum)}
                  className={`flex items-center p-3.5 sm:p-4 rounded-xl border text-sm sm:text-base cursor-pointer transition-all ${
                    isSelected
                      ? 'border-blue-900 bg-blue-50/80 text-blue-950 font-medium ring-1 ring-blue-900'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <span className="font-bold mr-3 text-slate-700">{['①', '②', '③', '④'][idx]}</span>
                  <span className="font-['Noto_Sans_KR']">{opt}</span>
                </div>
              );
            })}
          </div>

          {/* Bottom Question Nav */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
            <button
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 text-xs sm:text-sm font-semibold transition-colors"
            >
              Câu trước
            </button>

            <button
              onClick={() => setCurrentIndex(prev => Math.min(examQuestions.length - 1, prev + 1))}
              disabled={currentIndex === examQuestions.length - 1}
              className="px-5 py-2 rounded-xl bg-blue-950 text-white hover:bg-blue-900 disabled:opacity-40 text-xs sm:text-sm font-semibold transition-colors"
            >
              Câu sau
            </button>
          </div>
        </div>

        {/* Right: Question Matrix Navigator (1 col) */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-4 h-fit">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Bảng câu hỏi
            </span>
            <span className="text-xs text-slate-500">
              {answeredCount}/{examQuestions.length}
            </span>
          </div>

          {/* Legend */}
          <div className="flex items-center space-x-3 text-[11px] text-slate-500">
            <div className="flex items-center space-x-1">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-900 inline-block"></span>
              <span>Đã làm</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
              <span>Gắn cờ</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-2.5 h-2.5 rounded-full border border-slate-300 inline-block"></span>
              <span>Chưa làm</span>
            </div>
          </div>

          {/* Matrix grid */}
          <div className="grid grid-cols-5 gap-2">
            {examQuestions.map((_, i) => {
              const isCurrent = currentIndex === i;
              const isAnswered = answers[i] !== undefined;
              const isFlag = flagged[i];

              let cellStyle = 'border-slate-200 text-slate-700 bg-slate-50 hover:bg-slate-100';
              if (isAnswered) cellStyle = 'bg-blue-950 text-white border-blue-950 font-bold';
              if (isFlag) cellStyle = 'bg-amber-400 text-slate-950 border-amber-500 font-bold';
              if (isCurrent) cellStyle += ' ring-2 ring-blue-500';

              return (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-9 rounded-lg border text-xs flex items-center justify-center transition-all ${cellStyle}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>

          <div className="pt-2">
            <button
              onClick={() => setShowSubmitConfirm(true)}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-colors"
            >
              Nộp bài thi ngay
            </button>
          </div>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl border border-slate-200 animate-in fade-in zoom-in-95">
            <div className="flex items-center space-x-3 text-amber-600">
              <AlertCircle className="w-6 h-6" />
              <h3 className="text-lg font-bold text-slate-900">Xác nhận nộp bài</h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Bạn đã hoàn thành <strong className="text-slate-900">{answeredCount}</strong> trên tổng số <strong className="text-slate-900">{examQuestions.length}</strong> câu hỏi.
              {answeredCount < examQuestions.length && (
                <span className="block mt-1 text-rose-600 font-medium">
                  Còn {examQuestions.length - answeredCount} câu chưa chọn đáp án!
                </span>
              )}
            </p>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-100"
              >
                Tiếp tục làm bài
              </button>
              <button
                onClick={handleSubmitExam}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-xs"
              >
                Đồng ý nộp bài
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
