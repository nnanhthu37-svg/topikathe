export interface VocabWord {
  id: string;
  korean: string;
  hanja?: string;
  meaningVi: string;
  partOfSpeech: 'Danh từ' | 'Động từ' | 'Tính từ' | 'Phó từ' | 'Quán từ';
  exampleKo: string;
  exampleVi: string;
  frequency: 'Cực cao' | 'Rất cao' | 'Thường gặp';
  tag: string;
}

export const VOCAB_BANK: VocabWord[] = [
  {
    id: 'v-1',
    korean: '뿌듯하다',
    meaningVi: 'Hãnh diện, mãn nguyện, tràn trề niềm vui sau khi đạt thành quả',
    partOfSpeech: 'Tính từ',
    exampleKo: '오랜 노력 끝에 시험에 합격하여 마음이 뿌듯했다.',
    exampleVi: 'Sau những nỗ lực dài lâu tôi đã thi đỗ, trong lòng cảm thấy vô cùng mãn nguyện.',
    frequency: 'Cực cao',
    tag: 'Tâm trạng (Dạng 8)'
  },
  {
    id: 'v-2',
    korean: '후련하다',
    meaningVi: 'Nhẹ nhõm, thanh thản (như trút được gánh nặng đè nặng)',
    partOfSpeech: 'Tính từ',
    exampleKo: '밀린 숙제를 다 끝내고 나니 속이 후련하다.',
    exampleVi: 'Làm xong hết bài tập bị tồn đọng, trong lòng cảm thấy thật nhẹ nhõm.',
    frequency: 'Cực cao',
    tag: 'Tâm trạng (Dạng 8)'
  },
  {
    id: 'v-3',
    korean: '안타깝다',
    meaningVi: 'Xót xa, tiếc nuối, đau lòng khi thấy điều không may',
    partOfSpeech: 'Tính từ',
    exampleKo: '열심히 준비했는데 아쉽게 떨어져서 너무 안타깝다.',
    exampleVi: 'Đã chuẩn bị chăm chỉ thế mà bị trượt tiếc quá, thật xót xa.',
    frequency: 'Cực cao',
    tag: 'Tâm trạng (Dạng 8)'
  },
  {
    id: 'v-4',
    korean: '고공행진',
    hanja: '高空行進',
    meaningVi: 'Leo thang phi mã, tăng vọt không ngừng (giá cả, lạm phát)',
    partOfSpeech: 'Danh từ',
    exampleKo: '채소 가격의 고공행진으로 장보기가 두렵다.',
    exampleVi: 'Vì giá rau leo thang phi mã nên tôi sợ cả việc đi chợ.',
    frequency: 'Cực cao',
    tag: 'Báo chí (Dạng 7)'
  },
  {
    id: 'v-5',
    korean: '불가피하다',
    hanja: '不可避',
    meaningVi: 'Không thể tránh khỏi, bất khả kháng',
    partOfSpeech: 'Tính từ',
    exampleKo: '기상 악화로 인해 항공편 결항이 불가피해졌다.',
    exampleVi: 'Do thời tiết chuyển biến xấu, việc hủy chuyến bay là không thể tránh khỏi.',
    frequency: 'Cực cao',
    tag: 'Báo chí & Đọc hiểu'
  },
  {
    id: 'v-6',
    korean: '절반을 넘다',
    meaningVi: 'Vượt quá một nửa (trên 50%)',
    partOfSpeech: 'Động từ',
    exampleKo: '스마트폰을 이용해 결제하는 비율이 절반을 넘었다.',
    exampleVi: 'Tỷ lệ thanh toán sử dụng điện thoại thông minh đã vượt quá một nửa.',
    frequency: 'Cực cao',
    tag: 'Biểu đồ (Dạng 4)'
  },
  {
    id: 'v-7',
    korean: '뒤를 잇다',
    meaningVi: 'Nối tiếp theo sau (chiếm vị trí số 2 hoặc thứ hạng kế)',
    partOfSpeech: 'Động từ',
    exampleKo: '커피가 1위를 차지했고 녹차가 그 뒤를 이었다.',
    exampleVi: 'Cà phê chiếm vị trí thứ nhất và trà xanh nối tiếp ngay theo sau.',
    frequency: 'Cực cao',
    tag: 'Biểu đồ (Dạng 4)'
  },
  {
    id: 'v-8',
    korean: '귀를 기울이다',
    meaningVi: 'Lắng tai nghe, chăm chú lắng nghe ý kiến người khác',
    partOfSpeech: 'Động từ',
    exampleKo: '좋은 지도자는 시민들의 목소리에 귀를 기울여야 한다.',
    exampleVi: 'Một nhà lãnh đạo tốt phải biết lắng tai nghe tiếng nói của người dân.',
    frequency: 'Rất cao',
    tag: 'Thành ngữ & Điền câu'
  },
  {
    id: 'v-9',
    korean: '바람직하다',
    meaningVi: 'Đáng mong đợi, là điều đúng đắn nên làm',
    partOfSpeech: 'Tính từ',
    exampleKo: '어려울 때 서로 돕는 것은 매우 바람직한 태도이다.',
    exampleVi: 'Tương trợ nhau lúc khó khăn là một thái độ vô cùng đáng quý.',
    frequency: 'Cực cao',
    tag: 'Ý chính tác giả (Dạng 8)'
  },
  {
    id: 'v-10',
    korean: '대피 요령',
    hanja: '待避要領',
    meaningVi: 'Bí quyết / hướng dẫn sơ tán, lánh nạn an toàn',
    partOfSpeech: 'Danh từ',
    exampleKo: '지진 발생 시 행동 요령과 대피 요령을 미리 숙지해야 한다.',
    exampleVi: 'Cần nắm rõ từ trước các hướng dẫn hành động và sơ tán khi xảy ra động đất.',
    frequency: 'Rất cao',
    tag: 'Biển báo (Dạng 3)'
  }
];
