import React from 'react';
import { Lightbulb, Clock, Target, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { TOPIK_QUESTION_TYPES } from '../data/topikTypes';

export const StrategyGuideView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-800">
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2.5 rounded-xl bg-blue-600 text-white">
            <Lightbulb className="w-6 h-6 text-amber-300" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">
              Chiến Thuật Phá Bẫy Đề Thi Đọc TOPIK II
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Cẩm nang phân bổ thời gian và mẹo nhận diện bẫy đề thi công khai NIIED cho mục tiêu TOPIK Cấp 3 - 4.
            </p>
          </div>
        </div>
      </div>

      {/* Target & Time Distribution Matrix */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center space-x-2 text-blue-950 font-bold text-base border-b border-slate-100 pb-2">
          <Clock className="w-5 h-5 text-blue-900" />
          <span>Chiến lược Phân Bổ Thời Gian 70 Phút (50 Câu)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-blue-950 text-sm">Mục tiêu TOPIK Cấp 3 (Trung cấp 1)</span>
              <span className="bg-blue-950 text-white text-[11px] font-bold px-2 py-0.5 rounded">120+ Điểm</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Tập trung làm <strong>chắc chắn đúng 100% từ câu 1 đến câu 24</strong>. Không nên tốn quá nhiều thời gian vào các bài đọc dài học thuật phức tạp từ câu 32 trở đi.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1 pt-1 text-xs">
              <li>Câu 1 - 4: Giải quyết trong 2 - 3 phút.</li>
              <li>Câu 5 - 10: Hoàn thành trong 6 - 8 phút.</li>
              <li>Câu 11 - 20: Tối đa 15 - 18 phút.</li>
            </ul>
          </div>

          <div className="bg-slate-900 text-white rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-sm">Mục tiêu TOPIK Cấp 4 (Trung cấp 2)</span>
              <span className="bg-amber-400 text-slate-950 text-[11px] font-bold px-2 py-0.5 rounded">150+ Điểm</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Giải quyết hoàn hảo từ câu 1 đến câu 31 và làm thêm các câu đọc ngắn chọn ý chính từ câu 32 đến 40.
            </p>
            <ul className="list-disc list-inside text-slate-400 space-y-1 pt-1 text-xs">
              <li>Luyện tốc độ câu 1-15 dưới 45 giây mỗi câu.</li>
              <li>Nắm vững phương pháp sắp xếp đoạn văn câu 13-15 không bao giờ sai.</li>
              <li>Hiểu nghĩa bóng của tiêu đề báo chí câu 25-27.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Breakdown Strategy for Each Question Type */}
      <div className="space-y-5">
        <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
          <Target className="w-5 h-5 text-blue-900" />
          <span>Tuyệt chiêu làm bài theo từng dạng câu hỏi:</span>
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {TOPIK_QUESTION_TYPES.map((type, idx) => (
            <div
              key={type.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-xs px-2.5 py-1 rounded bg-blue-950 text-white">
                    {type.targetQuestions}
                  </span>
                  <h3 className="font-bold text-base text-slate-900">
                    {type.name}
                  </h3>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-700">
                  <Clock className="w-3.5 h-3.5 text-blue-900" />
                  <span>Thời gian lý tưởng: <strong>{type.recommendedTime}</strong></span>
                </div>
              </div>

              {/* Strategy Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 text-xs sm:text-sm">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5">
                  <span className="font-bold text-blue-950 flex items-center space-x-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Chiến thuật phá giải nhanh:</span>
                  </span>
                  <p className="text-slate-700 leading-relaxed">
                    {type.strategy}
                  </p>
                </div>

                <div className="bg-rose-50/70 border border-rose-100 rounded-xl p-4 space-y-1.5">
                  <span className="font-bold text-rose-950 flex items-center space-x-1.5">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>Bẫy đề thi thường gài:</span>
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-rose-900/90 text-xs">
                    {type.commonTraps.map((trap, tIdx) => (
                      <li key={tIdx}>{trap}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
