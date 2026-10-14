import { Question, ListeningQuestion, SavedVocabulary, ExamHistoryItem } from '../types/topik';
import { INITIAL_QUESTIONS } from '../data/questionBank';
import { INITIAL_LISTENING_QUESTIONS } from '../data/listeningBank';

const QUESTIONS_KEY = 'topik_exam_questions';
const LISTENING_QUESTIONS_KEY = 'topik_exam_listening_questions';
const VOCAB_KEY = 'topik_exam_vocab';
const EXAM_HISTORY_KEY = 'topik_exam_history';
const FAVORITES_KEY = 'topik_exam_favorites';

export function getStoredQuestions(): Question[] {
  if (typeof window === 'undefined') return INITIAL_QUESTIONS;
  try {
    const raw = localStorage.getItem(QUESTIONS_KEY);
    if (!raw) {
      localStorage.setItem(QUESTIONS_KEY, JSON.stringify(INITIAL_QUESTIONS));
      return INITIAL_QUESTIONS;
    }
    const parsed: Question[] = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(QUESTIONS_KEY, JSON.stringify(INITIAL_QUESTIONS));
      return INITIAL_QUESTIONS;
    }
    // Refresh initial bank questions with latest updates, while keeping all user-generated AI questions
    const initialMap = new Map(INITIAL_QUESTIONS.map(q => [q.id, q]));
    const userCreated = parsed.filter(q => q.isAiGenerated || !initialMap.has(q.id));
    const merged = [...INITIAL_QUESTIONS, ...userCreated];
    localStorage.setItem(QUESTIONS_KEY, JSON.stringify(merged));
    return merged;
  } catch (e) {
    return INITIAL_QUESTIONS;
  }
}

export function saveQuestion(newQuestion: Question): Question[] {
  const current = getStoredQuestions();
  const updated = [newQuestion, ...current];
  localStorage.setItem(QUESTIONS_KEY, JSON.stringify(updated));
  return updated;
}

export function getStoredListeningQuestions(): ListeningQuestion[] {
  if (typeof window === 'undefined') return INITIAL_LISTENING_QUESTIONS;
  try {
    const raw = localStorage.getItem(LISTENING_QUESTIONS_KEY);
    if (!raw) {
      localStorage.setItem(LISTENING_QUESTIONS_KEY, JSON.stringify(INITIAL_LISTENING_QUESTIONS));
      return INITIAL_LISTENING_QUESTIONS;
    }
    const parsed: ListeningQuestion[] = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(LISTENING_QUESTIONS_KEY, JSON.stringify(INITIAL_LISTENING_QUESTIONS));
      return INITIAL_LISTENING_QUESTIONS;
    }
    // Refresh initial listening questions with latest updates, while keeping all user-generated AI questions
    const initialListenMap = new Map(INITIAL_LISTENING_QUESTIONS.map(q => [q.id, q]));
    const userCreatedListening = parsed.filter(q => q.isAiGenerated || !initialListenMap.has(q.id));
    const merged = [...INITIAL_LISTENING_QUESTIONS, ...userCreatedListening];
    localStorage.setItem(LISTENING_QUESTIONS_KEY, JSON.stringify(merged));
    return merged;
  } catch (e) {
    return INITIAL_LISTENING_QUESTIONS;
  }
}

export function saveListeningQuestion(newQuestion: ListeningQuestion): ListeningQuestion[] {
  const current = getStoredListeningQuestions();
  const updated = [newQuestion, ...current];
  localStorage.setItem(LISTENING_QUESTIONS_KEY, JSON.stringify(updated));
  return updated;
}

export function getSavedVocab(): SavedVocabulary[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(VOCAB_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function addSavedVocab(item: Omit<SavedVocabulary, 'id' | 'dateAdded'>): SavedVocabulary[] {
  const list = getSavedVocab();
  // Check if already exists
  if (list.some(v => v.korean.trim() === item.korean.trim())) {
    return list;
  }
  const newItem: SavedVocabulary = {
    ...item,
    id: 'vocab-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
    dateAdded: new Date().toLocaleDateString('vi-VN'),
  };
  const updated = [newItem, ...list];
  localStorage.setItem(VOCAB_KEY, JSON.stringify(updated));
  return updated;
}

export function removeSavedVocab(id: string): SavedVocabulary[] {
  const list = getSavedVocab().filter(v => v.id !== id);
  localStorage.setItem(VOCAB_KEY, JSON.stringify(list));
  return list;
}

export function getFavorites(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleFavorite(questionId: string): string[] {
  const favs = getFavorites();
  const index = favs.indexOf(questionId);
  let updated: string[];
  if (index >= 0) {
    updated = favs.filter(id => id !== questionId);
  } else {
    updated = [...favs, questionId];
  }
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  return updated;
}

export function getExamHistory(): ExamHistoryItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(EXAM_HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveExamResult(result: ExamHistoryItem): ExamHistoryItem[] {
  const list = getExamHistory();
  const updated = [result, ...list];
  localStorage.setItem(EXAM_HISTORY_KEY, JSON.stringify(updated));
  return updated;
}

const TODAY_PRACTICE_KEY = 'topik_today_practice_stat';

interface DailyPracticeRecord {
  date: string; // YYYY-MM-DD
  count: number;
}

export function getTodayPracticeCount(): number {
  if (typeof window === 'undefined') return 0;
  try {
    const today = new Date().toISOString().split('T')[0];
    const raw = localStorage.getItem(TODAY_PRACTICE_KEY);
    if (!raw) return 0;
    const record: DailyPracticeRecord = JSON.parse(raw);
    if (record.date === today) {
      return record.count || 0;
    }
    return 0;
  } catch {
    return 0;
  }
}

export function incrementTodayPracticeCount(): number {
  if (typeof window === 'undefined') return 1;
  try {
    const today = new Date().toISOString().split('T')[0];
    const current = getTodayPracticeCount();
    const newCount = current + 1;
    const record: DailyPracticeRecord = { date: today, count: newCount };
    localStorage.setItem(TODAY_PRACTICE_KEY, JSON.stringify(record));
    return newCount;
  } catch {
    return 1;
  }
}

