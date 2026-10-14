export interface GrammarEntry {
  id: string;
  pattern: string;
  meaningVi: string;
  equivalentPatterns: string[];
  usageNote: string;
  examples: { ko: string; vi: string }[];
  category: 'Nguyên nhân' | 'Mục đích' | 'Tương phản' | 'Điều kiện & Giả định' | 'Mức độ & Bổ sung' | 'Thời gian & Tiếp nối';
}

export const ESSENTIAL_GRAMMARS: GrammarEntry[] = [
  {
    id: 'g-1',
    pattern: '-느라고',
    meaningVi: 'Vì mải... nên (dẫn đến kết quả tiêu cực, tốn thời gian)',
    equivalentPatterns: ['-느라', '-(으)ㄴ 탓에'],
    usageNote: 'Chỉ đi với động từ, hai vế cùng chủ ngữ. Vế sau luôn là kết quả tiêu cực hoặc không mong muốn (mệt mỏi, ngủ quên, không kịp làm). Tuyệt đối không dùng cho đuôi mệnh lệnh hay rủ rê.',
    examples: [
      { ko: '어제 보고서를 쓰느라고 밤을 새웠어요.', vi: 'Hôm qua vì mải viết báo cáo mà tôi đã thức trắng đêm.' },
      { ko: '이사를 준비하느라고 정신이 하나도 없었다.', vi: 'Vì mải chuẩn bị chuyển nhà mà đầu óc tôi chẳng còn tâm trí đâu.' }
    ],
    category: 'Nguyên nhân'
  },
  {
    id: 'g-2',
    pattern: '-기 마련이다',
    meaningVi: 'Đương nhiên là, ắt hẳn phải thế (quy luật tự nhiên)',
    equivalentPatterns: ['-는 법이다', '-게 되어 있다'],
    usageNote: 'Cặp đồng nghĩa vàng của Dạng 2 (Câu 3-4). Thể hiện điều gì đó chắc chắn xảy ra theo lẽ thường hoặc quy luật khách quan.',
    examples: [
      { ko: '누구나 나이가 들면 건강에 관심이 많아지기 마련이다.', vi: 'Ai lớn tuổi thì đương nhiên cũng sẽ quan tâm nhiều hơn đến sức khỏe.' },
      { ko: '비 온 뒤에 땅이 굳어지는 법이다.', vi: 'Sau cơn mưa trời lại sáng (Đất sau mưa ắt sẽ cứng lại).' }
    ],
    category: 'Mức độ & Bổ sung'
  },
  {
    id: 'g-3',
    pattern: '-(으)ㄹ 뿐만 아니라',
    meaningVi: 'Không những... mà còn...',
    equivalentPatterns: ['-(으)ㄹ 뿐더러', '-(으)ㄴ/는 데다가'],
    usageNote: 'Thêm thông tin cùng chiều (cùng tốt hoặc cùng xấu) vào vế trước.',
    examples: [
      { ko: '이 식당은 음식이 맛있을 뿐만 아니라 가격도 저렴하다.', vi: 'Nhà hàng này không những đồ ăn ngon mà giá cả còn rẻ.' },
      { ko: '날씨가 추운 데다가 바람까지 세차게 불었다.', vi: 'Thời tiết đã lạnh thêm vào đó gió còn thổi rất mạnh.' }
    ],
    category: 'Mức độ & Bổ sung'
  },
  {
    id: 'g-4',
    pattern: '-기는커녕',
    meaningVi: 'Nói gì đến..., ngay cả... cũng không (Huống hồ là)',
    equivalentPatterns: ['-은/는 고사하고', '-기는커녕은커녕'],
    usageNote: 'Bác bỏ hoàn toàn khả năng ở vế trước, và khẳng định ngay cả điều đơn giản/kém hơn ở vế sau cũng không đạt được.',
    examples: [
      { ko: '칭찬을 받기는커녕 야단만 맞았다.', vi: 'Khen ngợi đâu chẳng thấy, chỉ toàn bị mắng té tát.' },
      { ko: '밥은 고사하고 물 한 모금도 못 마셨다.', vi: 'Cơm nói chi đến, ngay cả một ngụm nước cũng chưa được uống.' }
    ],
    category: 'Tương phản'
  },
  {
    id: 'g-5',
    pattern: '-기 십상이다',
    meaningVi: 'Rất dễ bị, mười phần thì chắc đến chín (nguy cơ xấu)',
    equivalentPatterns: ['-기 쉽다', '-(으)ㄹ 가능성이 높다'],
    usageNote: 'Thường dùng để cảnh báo về thói quen xấu hoặc sai lầm dẫn đến kết cục không tốt.',
    examples: [
      { ko: '밤에 스마트폰을 오래 보면 시력이 나빠지기 십상이다.', vi: 'Xem điện thoại lâu vào ban đêm rất dễ bị giảm thị lực.' }
    ],
    category: 'Mức độ & Bổ sung'
  },
  {
    id: 'g-6',
    pattern: '-(으)ㄹ 겸 (해서)',
    meaningVi: 'Tiện thể, kết hợp kiêm luôn 2 mục đích',
    equivalentPatterns: ['-(으)려고 하는 김에'],
    usageNote: 'Dùng khi thực hiện một hành động nhưng nhằm đáp ứng hai hoặc nhiều mục đích cùng lúc.',
    examples: [
      { ko: '바람도 쐴 겸 친구도 만날 겸 한강공원에 갔다.', vi: 'Vừa để hóng gió vừa tiện thể gặp bạn, tôi đã ra công viên sông Hàn.' }
    ],
    category: 'Mục đích'
  },
  {
    id: 'g-7',
    pattern: '-(으)ㄴ/는 셈이다',
    meaningVi: 'Coi như là, tính ra thì gần như là...',
    equivalentPatterns: ['-(으)ㄴ 것과 다름없다', '-은/는 편이다'],
    usageNote: 'Sau khi tính toán, cân nhắc các yếu tố thì có thể xem như kết luận như vậy.',
    examples: [
      { ko: '10명 중 9명이 찬성했으니 모두 동의한 셈이다.', vi: 'Vì 9 trên 10 người đã tán thành nên coi như tất cả đều đồng ý.' }
    ],
    category: 'Mức độ & Bổ sung'
  },
  {
    id: 'g-8',
    pattern: '-았/었더라면',
    meaningVi: 'Giá như mà, nếu mà đã... (tiếc nuối quá khứ)',
    equivalentPatterns: ['-(으)ㄹ 뻔했다 (đi kèm kết quả)', '-았/었을 텐데'],
    usageNote: 'Giả định điều trái ngược với sự thật đã xảy ra trong quá khứ, vế sau thường là tiếc nuối: -(으)ㄹ 텐데, -(으)ㄹ 뻔했다.',
    examples: [
      { ko: '조금만 더 서둘렀더라면 기차를 놓치지 않았을 텐데.', vi: 'Giá như vội thêm chút nữa thì đã không bị lỡ chuyến tàu.' }
    ],
    category: 'Điều kiện & Giả định'
  }
];
