import React from 'react';

/**
 * Extracts the underlined/bracketed grammar or expression from a passage.
 */
export function extractUnderlinedPart(text: string): string | null {
  if (!text) return null;
  const match = text.match(/\[(.*?)\]|<u>(.*?)<\/u>/);
  if (match) {
    return match[1] || match[2] || null;
  }
  return null;
}

/**
 * Common TOPIK II Intermediate Grammar anchors for automatic fallback underline
 */
const COMMON_TOPIK_GRAMMARS = [
  '하기 마련이다', '게 마련이다', '기 마련이다',
  '하는 법이다', '는 법이다', '은 법이다',
  '잘할 뿐만 아니라', '할 뿐만 아니라', '을 뿐만 아니라', 'ㄹ 뿐만 아니라', '뿐만 아니라',
  '공부를 잘하는 데다가', '하는 데다가', 'ㄴ 데다가', '은 데다가', '는 데다가',
  '되자마자', '자마자', '되기가 무섭게', '기가 무섭게', '기가 바쁘게',
  '하느니 차라리', '느니 차라리', '할 바에야', '을 바에야', 'ㄹ 바에야',
  '하는 셈이다', '은 셈이다', 'ㄴ 셈이다', '는 셈이다',
  '하기 십상이다', '기 십상이다', '하기 쉽다',
  '할 텐데', '을 텐데', 'ㄹ 텐데',
  '할 지경이다', '을 지경이다', 'ㄹ 지경이다',
  '할 턱이 없다', '을 턱이 없다', '할 리가 없다',
  '하는 한', '는 한', '있느니만큼', '느니만큼'
];

/**
 * Formats Korean passages matching authentic NIIED exam sheets:
 * Converts `[text]` or `<u>text</u>` into a distinct, authentic exam underline for Dạng 2 (Câu 3-4).
 */
export function renderFormattedKoreanPassage(text: string, isUnderlineType: boolean = false): React.ReactNode {
  if (!text) return null;

  let targetText = text;

  // Fallback: If it's Dạng 2 but doesn't have [ ... ] or <u> ... </u> yet, auto-bracket the first detected pattern
  if (isUnderlineType && !text.includes('[') && !text.includes('<u>')) {
    for (const pattern of COMMON_TOPIK_GRAMMARS) {
      if (text.includes(pattern)) {
        targetText = text.replace(pattern, `[${pattern}]`);
        break;
      }
    }
  }

  // Split by [ ... ] or <u> ... </u>
  const regex = /(\[.*?\]|<u>.*?<\/u>)/g;
  const parts = targetText.split(regex);

  return (
    <span className="leading-relaxed">
      {parts.map((part, index) => {
        if (!part) return null;

        // Check if bracketed [ ... ]
        if (part.startsWith('[') && part.endsWith(']')) {
          const content = part.slice(1, -1);
          return (
            <span
              key={index}
              className="inline-block font-bold text-slate-950 border-b-[2.5px] border-slate-900 pb-0.5 px-1.5 mx-0.5 bg-amber-100/80 rounded-xs shadow-xs hover:bg-amber-200/90 transition-colors"
              title="밑줄 친 부분 (Phần gạch chân đề thi NIIED)"
            >
              {content}
            </span>
          );
        }

        // Check if <u> ... </u>
        if (part.startsWith('<u>') && part.endsWith('</u>')) {
          const content = part.slice(3, -4);
          return (
            <span
              key={index}
              className="inline-block font-bold text-slate-950 border-b-[2.5px] border-slate-900 pb-0.5 px-1.5 mx-0.5 bg-amber-100/80 rounded-xs shadow-xs hover:bg-amber-200/90 transition-colors"
              title="밑줄 친 부분 (Phần gạch chân đề thi NIIED)"
            >
              {content}
            </span>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </span>
  );
}
