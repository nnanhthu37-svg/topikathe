export type TopicLevel = 'TOPIK 3' | 'TOPIK 4' | 'TOPIK 3-4';

export interface KeyPoint {
  term: string;
  meaning: string;
  example?: string;
}

export interface EquivalentGrammarItem {
  pattern: string;
  meaningVi: string;
  comparisonNote: string;
  exampleKo: string;
  exampleVi: string;
}

export interface Question {
  id: string;
  typeId: string;
  questionNumberLabel: string; // e.g. "[1~2] ( )에 들어갈 가장 알맞은 것을 고르십시오."
  instruction: string;
  passage: string; // The Korean passage or text
  subPassage?: string; // For questions with multiple items or secondary text
  options: [string, string, string, string]; // exactly 4 choices
  correctAnswer: number; // 1, 2, 3, or 4
  translation: string;
  explanation: string;
  keyPoints: KeyPoint[];
  examTip: string;
  sourceExam: string; // e.g. "TOPIK II 64회 Đề công khai", "AI Phỏng đề NIIED"
  level: TopicLevel;
  category?: string; // e.g. "Ngữ pháp", "Biển báo", "Biểu đồ", "Đoạn văn"
  userNotes?: string;
  isAiGenerated?: boolean;
  equivalentGrammars?: EquivalentGrammarItem[]; // Specific for Dạng 2
}

export interface ListeningDialogueLine {
  speaker: 'man' | 'woman' | 'narrator';
  text: string;
}

export interface ListeningQuestion {
  id: string;
  typeId: string;
  questionNumberLabel: string; // e.g. "[4~8] 다음을 듣고 이어질 수 있는 말로 가장 알맞은 것을 고르십시오."
  instruction: string;
  dialogue: ListeningDialogueLine[];
  audioScript: string;
  options: [string, string, string, string];
  correctAnswer: number;
  translation: string;
  explanation: string;
  keyPoints: KeyPoint[];
  examTip: string;
  sourceExam: string;
  level: TopicLevel;
  isAiGenerated?: boolean;
}

export interface ListeningTypeInfo {
  id: string;
  name: string;
  code: string;
  targetQuestions: string; // e.g. "Câu 4 - 8"
  subtitle: string;
  description: string;
  strategy: string;
  commonTraps: string[];
  recommendedTime: string;
  level: TopicLevel;
}


export interface QuestionTypeInfo {
  id: string;
  name: string;
  code: string;
  targetQuestions: string; // e.g. "Câu 1 - 2"
  subtitle: string;
  description: string;
  strategy: string;
  commonTraps: string[];
  recommendedTime: string; // e.g. "40 giây / câu"
  level: TopicLevel;
  iconName: string;
}

export interface SavedVocabulary {
  id: string;
  korean: string;
  hanja?: string;
  meaning: string;
  exampleKo?: string;
  exampleVi?: string;
  questionSourceId?: string;
  dateAdded: string;
}

export interface ExamHistoryItem {
  id: string;
  date: string;
  totalQuestions: number;
  correctCount: number;
  timeSpentSeconds: number;
  scorePercentage: number;
  typeBreakdown: Record<string, { total: number; correct: number }>;
}
