import { ListeningTypeInfo } from '../types/topik';

export const TOPIK_LISTENING_TYPES: ListeningTypeInfo[] = [
  {
    id: 'listen-type-1',
    code: 'L4-8',
    name: 'Dạng Nghe 1: Chọn Câu Đối Đáp Tiếp Theo',
    targetQuestions: 'Câu 4 - 8',
    subtitle: '다음을 듣고 이어질 수 있는 말로 가장 알맞은 것을 고르십시오.',
    description: 'Người nam hoặc người nữ nói 1-2 câu ngắn trong ngữ cảnh giao tiếp đời sống (nhờ vả, đề nghị, xin lỗi, từ chối, hỏi thăm). Thí sinh chọn câu đối đáp tự nhiên và đúng lễ nghi nhất.',
    strategy: 'Nắm bắt câu cuối cùng của người nói để xác định mục đích giao tiếp: hỏi ý kiến (어떻게 생각해요?), đề nghị giúp đỡ (도와드릴까요?), cảm ơn hay xin lỗi. Bắt lấy đuôi câu và ngữ điệu.',
    commonTraps: [
      'Bẫy chọn câu cùng chủ đề nhưng sai vai vế người nói (ví dụ: người hỏi lại đi trả lời thay cho người kia).',
      'Bẫy câu trả lời quá trang trọng hoặc quá thân mật không đúng bối cảnh giao tiếp.'
    ],
    recommendedTime: 'Nghe 1 lần duy nhất · 15 giây chọn đáp án',
    level: 'TOPIK 3'
  },
  {
    id: 'listen-type-2',
    code: 'L9-12',
    name: 'Dạng Nghe 2: Chọn Hành Động Kế Tiếp Của Nhân Vật',
    targetQuestions: 'Câu 9 - 12',
    subtitle: '다음을 듣고 여자가/남자가 이어서 할 행동으로 가장 알맞은 것을 고르십시오.',
    description: 'Hai nhân vật nam và nữ trao đổi về một công việc cần làm (chuẩn bị cuộc họp, dọn dẹp, mua sắm, đặt vé, nộp tài liệu). Đề yêu cầu xác định xem người nữ (hoặc người nam) sẽ đi làm việc gì ngay sau đó.',
    strategy: '1. Chú ý ĐỀ BÀI hỏi người NAM (남자가) hay người NỮ (여자가). 2. Lắng nghe 2 câu thoại cuối cùng, đặc biệt là các cấu trúc phân công công việc: "제가 ~할게요" (Tôi sẽ làm việc này), "~해주세요" (Anh/chị hãy làm việc kia nhé).',
    commonTraps: [
      'Bẫy nhầm vai người: Đề hỏi người NỮ sẽ làm gì nhưng lại chọn hành động mà người NAM nhận làm.',
      'Bẫy hành động đã làm trong quá khứ chứ không phải hành động kế tiếp.'
    ],
    recommendedTime: 'Nghe 1 lần duy nhất · 20 giây chọn đáp án',
    level: 'TOPIK 3-4'
  },
  {
    id: 'listen-type-3',
    code: 'L13-16',
    name: 'Dạng Nghe 3: Chọn Nội Dung Đúng Với Đoạn Hội Thoại',
    targetQuestions: 'Câu 13 - 16',
    subtitle: '다음을 듣고 내용과 같은 것을 고르십시오.',
    description: 'Cuộc trò chuyện giữa hai người về một sự kiện, kinh nghiệm, thông tin đời sống hoặc công việc công ty. Thí sinh phải chọn câu có nội dung ĐÚNG với bài nghe.',
    strategy: 'Đọc lướt 4 phương án trước khi băng phát. Gạch chân chủ ngữ và động từ chính của 4 lựa chọn để vừa nghe vừa loại suy.',
    commonTraps: [
      'Bẫy thông tin đối lập: người nói đồng ý nhưng đáp án ghi là phản đối.',
      'Bẫy thời gian: sự việc đã xảy ra tuần trước nhưng đáp án nói tuần sau mới bắt đầu.'
    ],
    recommendedTime: 'Nghe 1 lần duy nhất · 25 giây chọn đáp án',
    level: 'TOPIK 3-4'
  },
  {
    id: 'listen-type-4',
    code: 'L17-20',
    name: 'Dạng Nghe 4: Chọn Suy Nghĩ Trọng Tâm Của Nhân Vật',
    targetQuestions: 'Câu 17 - 20',
    subtitle: '다음을 듣고 남자의/여자의 중심 생각으로 가장 알맞은 것을 고르십시오.',
    description: 'Cuộc thảo luận, phỏng vấn hoặc chia sẻ quan điểm về một vấn đề xã hội, lối sống, giáo dục, tâm lý. Cần tìm quan điểm cốt lõi nhất của nhân vật được chỉ định.',
    strategy: 'Lắng nghe các cấu trúc thể hiện quan điểm cá nhân: "~는 것이 좋다고 봐요", "~아/어야 한다고 생각해요", "중요한 건 ~예요". Quan điểm trọng tâm thường được tóm tắt ở câu kết luận.',
    commonTraps: [
      'Chọn một dẫn chứng hoặc chi tiết phụ thay vì ý nghĩ bao quát.',
      'Nhầm lẫn giữa quan điểm của người nam và ý kiến của người nữ.'
    ],
    recommendedTime: 'Nghe 1 lần duy nhất · 30 giây chọn đáp án',
    level: 'TOPIK 4'
  }
];
