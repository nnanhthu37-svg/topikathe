// Speech synthesis helper for authentic Korean pronunciation & TOPIK listening exam audio
import { ListeningDialogueLine } from '../types/topik';

let activeAudioElement: HTMLAudioElement | null = null;

/**
 * Play authentic TOPIK listening exam chime bell (ding-dong chime)
 * Using Web Audio API - instantaneous, zero lag, authentic pitch.
 */
export function playTopikChime(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve();
      return;
    }

    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) {
        resolve();
        return;
      }
      const ctx = new AudioContextClass();

      const now = ctx.currentTime;
      
      // Dual tone chime: Note 1 (E5 - 659.25Hz), Note 2 (A5 - 880Hz) or (G5 - 783.99Hz)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(659.25, now);
      gain1.gain.setValueAtTime(0.2, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.6);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(880, now + 0.25);
      gain2.gain.setValueAtTime(0.25, now + 0.25);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.25);
      osc2.stop(now + 0.9);

      setTimeout(() => {
        resolve();
      }, 950);
    } catch (e) {
      resolve();
    }
  });
}

export function stopSpeaking() {
  if (activeAudioElement) {
    activeAudioElement.pause();
    activeAudioElement.src = '';
    activeAudioElement = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

/**
 * Pronounce single Korean text or word
 */
export function speakKorean(text: string, rate: number = 0.9, pitch: number = 1.0) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }

  stopSpeaking();

  const cleanText = text.replace(/\[|\]|<u>|<\/u>/g, '');
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'ko-KR';
  utterance.rate = rate;
  utterance.pitch = pitch;

  const voices = window.speechSynthesis.getVoices();
  const koreanVoice = voices.find(v => v.lang.includes('ko') || v.lang.includes('KO'));
  if (koreanVoice) {
    utterance.voice = koreanVoice;
  }

  window.speechSynthesis.speak(utterance);
}

/**
 * Plays full TOPIK exam listening sequence:
 * 1. Chime tone
 * 2. Optional exam prompt announcement ("한 번 읽겠습니다.")
 * 3. Dialogue lines with distinct native Korean voices
 * 4. Closing chime tone
 */
export async function playTopikListeningSequence(
  dialogue: ListeningDialogueLine[],
  rate: number = 0.95,
  includeChime: boolean = true,
  onLineChange?: (lineIndex: number) => void,
  onComplete?: () => void
) {
  stopSpeaking();

  if (includeChime) {
    await playTopikChime();
  }

  playDialogueSequential(dialogue, rate, onLineChange, async () => {
    if (includeChime) {
      await playTopikChime();
    }
    if (onComplete) onComplete();
  });
}

function playDialogueSequential(
  dialogue: ListeningDialogueLine[],
  rate: number = 0.95,
  onLineChange?: (lineIndex: number) => void,
  onComplete?: () => void
) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window) || dialogue.length === 0) {
    if (onComplete) onComplete();
    return;
  }

  let currentIndex = 0;

  function speakNext() {
    if (currentIndex >= dialogue.length) {
      if (onComplete) onComplete();
      return;
    }

    if (onLineChange) {
      onLineChange(currentIndex);
    }

    const item = dialogue[currentIndex];
    const utterance = new SpeechSynthesisUtterance(item.text);
    utterance.lang = 'ko-KR';
    utterance.rate = rate;

    // Distinguish man and woman voice by pitch & voice selection
    const voices = window.speechSynthesis.getVoices();
    const koreanVoices = voices.filter(v => v.lang.includes('ko') || v.lang.includes('KO'));

    if (item.speaker === 'man') {
      utterance.pitch = 0.85; // lower pitch for man
      if (koreanVoices.length > 1) {
        utterance.voice = koreanVoices[1];
      } else if (koreanVoices.length > 0) {
        utterance.voice = koreanVoices[0];
      }
    } else {
      utterance.pitch = 1.15; // higher pitch for woman
      if (koreanVoices.length > 0) {
        utterance.voice = koreanVoices[0];
      }
    }

    utterance.onend = () => {
      currentIndex++;
      setTimeout(speakNext, 600); // authentic TOPIK pause between speakers
    };

    utterance.onerror = () => {
      currentIndex++;
      speakNext();
    };

    window.speechSynthesis.speak(utterance);
  }

  speakNext();
}
