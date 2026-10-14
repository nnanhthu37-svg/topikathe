import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Google GenAI on the server side
const ai = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// POST /api/generate-question: Generate standard TOPIK II reading question
app.post('/api/generate-question', async (req, res) => {
  try {
    const { typeId, topic, level } = req.body;

    if (!ai) {
      return res.status(200).json({
        fallback: true,
        message: 'No GEMINI_API_KEY configured. Utilizing built-in question library.',
      });
    }

    const typePromptDescriptions: Record<string, string> = {
      'type-1': 'Dạng 1 (Câu 1-2): Điền ngữ pháp/từ nối phù hợp vào chỗ trống ( ) trong 1-2 câu ngắn. Thường kiểm tra các cặp liên từ hoặc ngữ pháp tương phản, nguyên nhân, mục đích TOPIK II cấp 3-4 (ví dụ: -(으)려고, -느라고, -(으)ㄴ 탓에, -기 마련이다, -(으)ㄹ 뿐만 아니라, -(으)ㄹ 겸, -도록 하다, -듯이, -(으)ㄴ/는 셈이다).',
      'type-2': 'Dạng 2 (Câu 3-4): Chọn câu có cấu trúc ngữ pháp tương đương nhất với phần gạch chân. Thường kiểm tra các cặp ngữ pháp đồng nghĩa (ví dụ: -기 마련이다 = -는 법이다, -았/었더라면 = -(으)ㄹ 뻔했다, -(으)ㄹ 지경이다, -자마자 = -는 대로, -기 십상이다 = -기 쉽다, -(으)ㄹ 텐데 = -(으)ㄹ 테니까).',
      'type-3': 'Dạng 3 (Câu 5-8): Đọc biển báo, thông báo, khẩu hiệu quảng cáo hoặc áp phích ngắn (1-2 câu ngắn xúc tích) và chọn xem biển báo nói về cái gì (ví dụ: bệnh viện, giặt ủi, ngân hàng, an toàn giao thông, tiết kiệm năng lượng, bảo tàng, hiệu sách, thư viện...).',
      'type-4': 'Dạng 4 (Câu 9-10): Đọc thông báo tuyển dụng, sự kiện hoặc biểu đồ khảo sát (số liệu, tỷ lệ %) và chọn câu có nội dung ĐÚNG với bài. Đưa ra dữ liệu biểu đồ dạng văn bản rõ ràng hoặc mô tả chi tiết.',
      'type-5': 'Dạng 5 (Câu 13-15): Sắp xếp thứ tự các câu (가), (나), (다), (라) thành một đoạn văn hoàn chỉnh có tính liên kết chặt chẽ. Có 4 lựa chọn thứ tự ví dụ: 1. (가)-(다)-(나)-(라), 2. (가)-(라)-(나)-(다)...',
      'type-6': 'Dạng 6 (Câu 16-18): Đọc một đoạn văn nghị luận/khoa học/đời sống (khoảng 3-4 câu) và chọn cụm từ hoặc câu thích hợp nhất điền vào chỗ trống ( ) ở giữa hoặc cuối đoạn văn.',
      'type-7': 'Dạng 7 (Câu 25-27): Đọc tiêu đề báo chí ngắn gọn, giật tít sử dụng biện pháp ẩn dụ hoặc từ ngữ cô đọng và chọn câu diễn giải ý nghĩa chính xác nhất.',
      'type-8': 'Dạng 8 (Câu 19-24 hoặc 28-31): Đọc một đoạn văn ngắn về tâm lý, cảm xúc nhân vật hoặc triết lý cuộc sống. Yêu cầu chọn tâm trạng nhân vật (심정/태도) hoặc chọn suy nghĩ trọng tâm (중심 생각).',
    };

    const targetDesc = typePromptDescriptions[typeId] || typePromptDescriptions['type-1'];
    const chosenTopic = topic || 'đời sống sinh hoạt, văn hóa hoặc xã hội';
    const chosenLevel = level || 'TOPIK II Cấp 3-4 (Trung cấp)';

    const prompt = `Bạn là chuyên gia ra đề thi TOPIK II (한국어능력시험 II) của Viện Giáo dục Quốc tế Quốc gia Hàn Quốc (NIIED).
Hãy tạo MỘT câu hỏi trắc nghiệm ĐỌC (읽기) mới, nguyên bản 100%, bám sát tuyệt đối format đề thi công khai thật của TOPIK II.

YÊU CẦU CỤ THỂ:
- Dạng câu hỏi: ${targetDesc}
- Trình độ: ${chosenLevel}
- Chủ đề: ${chosenTopic}
- Nội dung tiếng Hàn phải tự nhiên, chuẩn phong cách bài thi TOPIK II đọc, không sai ngữ pháp hay từ vựng.
- Có đúng 4 phương án lựa chọn (1, 2, 3, 4).
- Có đúng 1 đáp án chính xác (từ 1 đến 4).
- Cung cấp dịch nghĩa tiếng Việt đầy đủ và giải thích chi tiết tại sao đáp án đó đúng, tại sao các phương án khác sai (đặc biệt giải thích rõ cấu trúc ngữ pháp).
- Trích xuất 3-5 từ vựng/ngữ pháp quan trọng nhất (핵심 어휘/문법) kèm từ loại và nghĩa tiếng Việt.

Hãy trả về định dạng JSON đúng theo schema.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            questionNumberLabel: {
              type: Type.STRING,
              description: 'Ví dụ: [1~2] ( )에 들어갈 가장 알맞은 것을 고르십시오.',
            },
            typeId: {
              type: Type.STRING,
              description: 'Mã dạng câu hỏi, ví dụ type-1, type-2...',
            },
            typeName: {
              type: Type.STRING,
              description: 'Tên dạng câu hỏi tiếng Việt',
            },
            instruction: {
              type: Type.STRING,
              description: 'Yêu cầu đề bài bằng tiếng Hàn, ví dụ: 다음을 읽고 맞게 배열한 것을 고르십시오.',
            },
            passage: {
              type: Type.STRING,
              description: 'Đoạn văn hoặc câu hỏi tiếng Hàn. Với dạng gạch chân, hãy để phần gạch chân trong dấu [ ] hoặc gạch chân rõ ràng.',
            },
            options: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'Mảng gồm đúng 4 lựa chọn tiếng Hàn',
            },
            correctAnswer: {
              type: Type.INTEGER,
              description: 'Chỉ số phương án đúng từ 1 đến 4',
            },
            translation: {
              type: Type.STRING,
              description: 'Dịch nghĩa tiếng Việt của đoạn văn/câu hỏi và các lựa chọn',
            },
            explanation: {
              type: Type.STRING,
              description: 'Phân tích chi tiết ngữ pháp, logic tìm đáp án đúng bằng tiếng Việt',
            },
            keyPoints: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  term: { type: Type.STRING },
                  meaning: { type: Type.STRING },
                },
                required: ['term', 'meaning'],
              },
              description: 'Các từ vựng hoặc ngữ pháp cốt lõi',
            },
            examTip: {
              type: Type.STRING,
              description: 'Mẹo làm bài nhanh cho dạng này',
            },
            equivalentGrammars: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  pattern: { type: Type.STRING },
                  meaningVi: { type: Type.STRING },
                  comparisonNote: { type: Type.STRING },
                  exampleKo: { type: Type.STRING },
                  exampleVi: { type: Type.STRING },
                },
                required: ['pattern', 'meaningVi', 'comparisonNote'],
              },
              description: 'Gợi ý các cặp ngữ pháp đồng nghĩa (đặc biệt cho Dạng 2)',
            },
          },
          required: [
            'questionNumberLabel',
            'instruction',
            'passage',
            'options',
            'correctAnswer',
            'translation',
            'explanation',
            'keyPoints',
            'examTip',
          ],
        },
      },
    });

    const text = response.text;
    if (!text) {
      return res.status(500).json({ error: 'Empty response from model' });
    }

    const questionData = JSON.parse(text);
    return res.status(200).json({
      success: true,
      question: questionData,
    });
  } catch (error: any) {
    console.error('Error generating TOPIK question:', error);
    return res.status(500).json({
      error: error.message || 'Failed to generate question',
    });
  }
});

// POST /api/generate-listening-question: Generate standard TOPIK II listening question
app.post('/api/generate-listening-question', async (req, res) => {
  try {
    const { typeId, topic, level } = req.body;
    if (!ai) {
      return res.status(200).json({
        fallback: true,
        message: 'No GEMINI_API_KEY. Using built-in listening question.',
      });
    }

    const typeDescriptions: Record<string, string> = {
      'listen-type-1': 'Dạng Nghe 1 (Câu 4-8): Hội thoại ngắn giữa 2 người (2-3 câu thoại) trong đời sống hàng ngày, yêu cầu chọn câu đối đáp tiếp theo phù hợp nhất (이어질 말 고르기).',
      'listen-type-2': 'Dạng Nghe 2 (Câu 9-12): Hội thoại trao đổi công việc/chuẩn bị (3-4 câu thoại), hỏi xem người nữ hoặc người nam sẽ làm hành động gì tiếp theo (다음에 할 행동 고르기).',
      'listen-type-3': 'Dạng Nghe 3 (Câu 13-16): Hội thoại về thông tin/trải nghiệm/sự kiện, yêu cầu chọn nội dung ĐÚNG với bài nghe (내용과 같은 것 고르기).',
      'listen-type-4': 'Dạng Nghe 4 (Câu 17-20): Thảo luận/phỏng vấn quan điểm xã hội, tìm suy nghĩ trọng tâm của nhân vật nam hoặc nữ (중심 생각 고르기).',
    };

    const targetDesc = typeDescriptions[typeId] || typeDescriptions['listen-type-1'];
    const chosenTopic = topic || 'đời sống sinh hoạt, công sở hoặc xã hội';
    const chosenLevel = level || 'TOPIK II Cấp 3-4';

    const prompt = `Bạn là chuyên gia ra đề thi TOPIK II phần NGHE (한국어능력시험 II 듣기) của Viện NIIED.
Hãy tạo 1 câu hỏi nghe trắc nghiệm mới bám sát đề thi thật.
- Dạng câu: ${targetDesc}
- Chủ đề: ${chosenTopic}
- Cấp độ: ${chosenLevel}
- Đoạn hội thoại gồm 2-4 lượt thoại giữa [남자] và [여자].
- Đúng 4 lựa chọn tiếng Hàn.
- Đúng 1 đáp án chính xác.
- Có dịch nghĩa tiếng Việt đầy đủ và giải thích chi tiết logic nghe.

Trả về định dạng JSON đúng theo schema.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            questionNumberLabel: { type: Type.STRING },
            instruction: { type: Type.STRING },
            dialogue: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  speaker: { type: Type.STRING, description: 'man hoặc woman' },
                  text: { type: Type.STRING },
                },
                required: ['speaker', 'text'],
              },
            },
            audioScript: { type: Type.STRING },
            options: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            correctAnswer: { type: Type.INTEGER },
            translation: { type: Type.STRING },
            explanation: { type: Type.STRING },
            keyPoints: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  term: { type: Type.STRING },
                  meaning: { type: Type.STRING },
                },
                required: ['term', 'meaning'],
              },
            },
            examTip: { type: Type.STRING },
          },
          required: [
            'questionNumberLabel',
            'instruction',
            'dialogue',
            'audioScript',
            'options',
            'correctAnswer',
            'translation',
            'explanation',
            'keyPoints',
            'examTip',
          ],
        },
      },
    });

    const text = response.text;
    if (!text) {
      return res.status(500).json({ error: 'Empty response from model' });
    }
    const qData = JSON.parse(text);
    return res.status(200).json({
      success: true,
      question: qData,
    });
  } catch (error: any) {
    console.error('Error generating listening question:', error);
    return res.status(500).json({ error: error.message });
  }
});

// POST /api/explain-question: Explain specific Korean question or grammar
app.post('/api/explain-question', async (req, res) => {
  try {
    const { passage, selectedOption, userQuestion } = req.body;
    if (!ai) {
      return res.status(200).json({
        explanation: 'Tính năng AI giải thích chuyên sâu yêu cầu API key. Bạn có thể xem phần giải thích chi tiết dựng sẵn ở tab bên dưới!',
      });
    }

    const prompt = `Bạn là giáo viên luyện thi TOPIK II cao cấp.
Hãy giải thích thắc mắc của học viên sau đây về câu hỏi đọc TOPIK:
- Đoạn văn/Câu hỏi: ${passage}
- Phương án học viên quan tâm: ${selectedOption || 'chung'}
- Câu hỏi của học viên: ${userQuestion || 'Phân tích sự khác biệt ngữ pháp và cách làm câu này nhanh nhất.'}

Hãy trả lời súc tích, dễ hiểu bằng tiếng Việt, chỉ ra bản chất ngữ pháp tiếng Hàn, ví dụ tương đương và cách phân biệt bẫy trong kỳ thi thật.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    return res.status(200).json({
      explanation: response.text || 'Không có phản hồi.',
    });
  } catch (error: any) {
    console.error('Error explaining question:', error);
    return res.status(500).json({ error: error.message });
  }
});

// POST /api/tts: Studio quality Korean TTS for authentic TOPIK listening
app.post('/api/tts', async (req, res) => {
  try {
    const { text, voiceName, style } = req.body;
    if (!ai || !text) {
      return res.status(200).json({ fallback: true });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash-lite-tts',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: text,
              speechMetadata: {
                style: style || 'Clear, authentic Korean NIIED TOPIK exam listening test announcer style',
              },
            },
          ],
        },
      ],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: voiceName || 'Kore' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      return res.status(200).json({
        success: true,
        audioBase64: base64Audio,
        mimeType: 'audio/wav',
      });
    }

    return res.status(200).json({ fallback: true });
  } catch (err: any) {
    console.warn('TTS API warning (will fallback to browser Web Speech):', err.message);
    return res.status(200).json({ fallback: true });
  }
});

// Setup Vite middleware in dev or static serving in prod
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

startServer();
