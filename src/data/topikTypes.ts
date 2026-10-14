import { QuestionTypeInfo } from '../types/topik';

export const TOPIK_QUESTION_TYPES: QuestionTypeInfo[] = [
  {
    id: 'type-1',
    code: 'Q1-2',
    name: 'Dạng 1: Điền Ngữ Pháp Vào Chỗ Trống',
    targetQuestions: 'Câu 1 - 2',
    subtitle: '( )에 들어갈 가장 알맞은 것을 고르십시오.',
    description: 'Kiểm tra khả năng sử dụng liên từ và cấu trúc ngữ pháp liên kết câu ở trình độ trung cấp (nguyên nhân, mục đích, tương phản, giả định, điều kiện).',
    strategy: 'Đọc kỹ mối quan hệ logic giữa vế trước và vế sau của dấu ngoặc đơn. Chú ý tính chất tích cực hay tiêu cực của kết quả để loại trừ phương án sai.',
    commonTraps: [
      'Nhầm lẫn giữa nguyên nhân tiêu cực (-느라고, -(으)ㄴ 탓에) và nguyên nhân tích cực (-덕분에).',
      'Cấu trúc -느라고 chỉ đi với động từ, chủ ngữ 2 vế phải đồng nhất và thường dẫn đến kết quả tiêu cực.',
      'Nhầm lẫn giữa mục đích -(으)려고 và -(으)러 (chỉ đi với 가다/오다/다니다).'
    ],
    recommendedTime: '30 - 40 giây/câu',
    level: 'TOPIK 3-4',
    iconName: 'Sparkles',
  },
  {
    id: 'type-2',
    code: 'Q3-4',
    name: 'Dạng 2: Chọn Cấu Trúc Ngữ Pháp Tương Đương',
    targetQuestions: 'Câu 3 - 4',
    subtitle: '밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    description: 'Tìm câu hoặc cụm ngữ pháp có ý nghĩa tương đương nhất với phần được gạch chân trong câu đề bài.',
    strategy: 'Học thuộc theo từng cặp ngữ pháp đồng nghĩa quen thuộc của TOPIK II trung cấp. Không cần dịch quá sâu nội dung bài, nhìn vào ngữ pháp gạch chân là có thể tìm ngay đáp án.',
    commonTraps: [
      '-기 마련이다 đồng nghĩa với -는 법이다 (đương nhiên là).',
      '-(으)ㄹ 뻔했다 (suýt nữa thì) khác với -았/었더라면 (nếu như đã).',
      '-자마자 đồng nghĩa với -는 대로 (ngay sau khi).',
      '-기 십상이다 đồng nghĩa với -기 쉽다 (rất dễ bị, có nguy cơ cao).'
    ],
    recommendedTime: '30 - 45 giây/câu',
    level: 'TOPIK 3-4',
    iconName: 'Repeat',
  },
  {
    id: 'type-3',
    code: 'Q5-8',
    name: 'Dạng 3: Đọc Biển Báo, Áp Phích, Khẩu Hiệu',
    targetQuestions: 'Câu 5 - 8',
    subtitle: '다음은 무엇에 대한 글인지 고르십시오.',
    description: 'Đọc các đoạn văn ngắn 1-2 câu trích từ biển thông báo, quảng cáo sản phẩm, khẩu hiệu công cộng và xác định chủ đề hoặc địa điểm liên quan.',
    strategy: 'Gạch chân từ khóa chỉ hành động đặc trưng hoặc đối tượng phục vụ. Chú ý câu 5-6 thường là biển quảng cáo/dịch vụ đời sống, câu 7-8 thường là khẩu hiệu nơi công cộng (an toàn giao thông, bảo vệ môi trường, tiết kiệm).',
    commonTraps: [
      'Nhầm lẫn giữa nơi bán sản phẩm (마트/백화점) và cơ sở dịch vụ (세탁소/병원).',
      'Khẩu hiệu nhắc nhở an toàn (안전 안내) bị nhầm với thông tin khuyến mãi (할인 행사).'
    ],
    recommendedTime: '40 - 50 giây/câu',
    level: 'TOPIK 3',
    iconName: 'Compass',
  },
  {
    id: 'type-4',
    code: 'Q9-10',
    name: 'Dạng 4: Đọc Biểu Đồ & Thông Báo Sự Kiện',
    targetQuestions: 'Câu 9 - 10',
    subtitle: '다음 글 또는 도표의 내용과 같은 것을 고르십시오.',
    description: 'Câu 9 thường là thông báo/vé xem phim/tờ rơi sự kiện. Câu 10 là biểu đồ khảo sát số liệu, biểu đồ tròn hoặc cột về các chủ đề đời sống, xã hội.',
    strategy: 'Đọc 4 đáp án trước rồi mới đối chiếu lên biểu đồ/thông báo. Chú ý các từ vựng so sánh: 가장 많다/적다, 절반을 넘다, 뒤를 잇다, 급증하다/감소하다, 전년 대비.',
    commonTraps: [
      'Bẫy thứ hạng: nhầm lẫn vị trí số 1 (1위) và số 2 (2위 - 그 뒤를 잇다).',
      'Bẫy từ tuyệt đối: "mọi người đều", "chỉ có", "không có ai".',
      'Bẫy tỷ lệ % vs số người tuyệt đối.'
    ],
    recommendedTime: '60 - 75 giây/câu',
    level: 'TOPIK 3-4',
    iconName: 'BarChart2',
  },
  {
    id: 'type-5',
    code: 'Q13-15',
    name: 'Dạng 5: Sắp Xếp Trật Tự Đoạn Văn [가-나-다-라]',
    targetQuestions: 'Câu 13 - 15',
    subtitle: '다음을 순서대로 맞게 배열한 것을 고르십시오.',
    description: 'Sắp xếp 4 câu văn (가), (나), (다), (라) thành một chỉnh thể logic, mạch lạc về mặt nguyên nhân - kết quả, thời gian hoặc diễn giải.',
    strategy: '1. Nhìn 4 đáp án để xem câu nào được chọn làm câu mở đầu (thường chỉ có 2 câu tiềm năng). 2. Loại câu mở đầu có liên từ (그러나, 그래서, 또한, 왜냐하면) hoặc đại từ chỉ định (이, 그, 저). 3. Tìm cặp câu liên kết mật thiết.',
    commonTraps: [
      'Chọn câu có từ chỉ định "이러한 / 그" làm câu đầu tiên là sai ngay.',
      'Bỏ qua sự chuyển ý của từ nối mang tính đảo ngược như "하지만 / 그러나".'
    ],
    recommendedTime: '70 - 90 giây/câu',
    level: 'TOPIK 3-4',
    iconName: 'ListOrdered',
  },
  {
    id: 'type-6',
    code: 'Q16-18',
    name: 'Dạng 6: Điền Câu Vào Chỗ Trống Đoạn Văn',
    targetQuestions: 'Câu 16 - 18',
    subtitle: '다음을 읽고 ( )에 들어갈 내용으로 가장 알맞은 것을 고르십시오.',
    description: 'Đoạn văn ngắn về chủ đề văn hóa, tâm lý học, sinh hoạt. Người học cần tìm câu hoặc cụm từ phù hợp nhất điền vào khoảng trống giữa hoặc cuối đoạn.',
    strategy: 'Đọc kỹ câu văn ngay trước và ngay sau chỗ trống. Tìm liên từ đứng ngay đầu câu chứa chỗ trống (ví dụ: "따라서" -> kết luận, "반면에" -> tương phản với câu trước).',
    commonTraps: [
      'Chọn đáp án đúng theo kiến thức thực tế nhưng lại không hề được nhắc tới hoặc đi ngược lại lập luận của tác giả trong bài.',
      'Bị phân tâm bởi từ ngữ mới mà quên chú ý vào cấu trúc liên kết mạch văn.'
    ],
    recommendedTime: '80 - 100 giây/câu',
    level: 'TOPIK 4',
    iconName: 'FileText',
  },
  {
    id: 'type-7',
    code: 'Q25-27',
    name: 'Dạng 7: Giải Mã Tiêu Đề Báo Chí Giật Tít',
    targetQuestions: 'Câu 25 - 27',
    subtitle: '다음 신문 기사의 제목을 가장 잘 설명한 것을 고르십시오.',
    description: 'Tiêu đề báo chí tiếng Hàn thường dùng lối nói ẩn dụ, từ tượng hình, tĩnh lược trợ từ và dùng danh từ hóa để tạo sự chú ý.',
    strategy: 'Nắm vững các từ vựng báo chí thường gặp: 고공행진 (tăng vọt), 꽁꽁 얼어붙다 (đóng băng/trầm lắng), 활짝 (nở rộ/tươi sáng), 발목 잡히다 (bị cản trở), 줄이어 (liên tiếp).',
    commonTraps: [
      'Dịch theo nghĩa đen từng chữ thay vì hiểu nghĩa bóng/nghĩa chuyển của tiêu đề báo chí.',
      'Nhầm lẫn giữa xu hướng tăng trưởng và sụt giảm do các từ biểu cảm phóng đại.'
    ],
    recommendedTime: '60 - 75 giây/câu',
    level: 'TOPIK 4',
    iconName: 'Newspaper',
  },
  {
    id: 'type-8',
    code: 'Q19-24',
    name: 'Dạng 8: Cảm Xúc Nhân Vật & Ý Chính Tác Giả',
    targetQuestions: 'Câu 19 - 24 / 28 - 31',
    subtitle: '글쓴이의 심정이나 태도 / 글의 중심 생각을 고르십시오.',
    description: 'Đọc đoạn trích tản văn, truyện ký hoặc bài luận và xác định tâm trạng nhân vật (후련하다, 안타깝다, 뿌듯하다...) hoặc quan điểm trọng tâm của tác giả.',
    strategy: 'Để tìm tâm trạng: chú ý các tính từ biểu cảm ở cuối bài hoặc hành động thể hiện tâm lý. Để tìm ý chính: tìm câu kết luận, câu chứa các biểu hiện "바람직하다, -아/어야 한다, 중요하다".',
    commonTraps: [
      'Chọn một chi tiết nhỏ đúng trong bài nhưng không phải là "ý chính bao quát" (중심 생각).',
      'Nhầm lẫn giữa cảm xúc ban đầu và cảm xúc kết thúc của nhân vật khi câu chuyện chuyển biến.'
    ],
    recommendedTime: '90 - 120 giây/câu',
    level: 'TOPIK 4',
    iconName: 'HeartHandshake',
  },
];
