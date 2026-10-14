import { ListeningQuestion } from '../types/topik';

export const INITIAL_LISTENING_QUESTIONS: ListeningQuestion[] = [
  // --- DẠNG NGHE 1: Chọn câu nối tiếp (Câu 4-8) ---
  {
    id: 'l-q1',
    typeId: 'listen-type-1',
    questionNumberLabel: '[4~8] 다음을 듣고 이어질 수 있는 말로 가장 알맞은 것을 고르십시오. (4점)',
    instruction: '다음을 듣고 이어질 수 있는 말로 가장 알맞은 것을 고르십시오.',
    dialogue: [
      { speaker: 'woman', text: '민수 씨, 지난번에 빌려 간 책 다 읽었으면 내일 갖다 줄래요?' },
      { speaker: 'man', text: '아, 거의 다 읽었는데 혹시 며칠만 더 빌려 볼 수 있을까요?' },
      { speaker: 'woman', text: '네, 그럼요. 급한 거 아니니까 천천히 보고 돌려주세요.' }
    ],
    audioScript: `[여자]: 민수 씨, 지난번에 빌려 간 책 다 읽었으면 내일 갖다 줄래요?
[남자]: 아, 거의 다 읽었는데 혹시 며칠만 더 빌려 볼 수 있을까요?
[여자]: 네, 그럼요. 급한 거 아니니까 천천히 보고 돌려주세요.`,
    options: [
      '네, 배려해 줘서 고마워요. 다 읽고 꼭 돌려줄게요.',
      '그럼 지금 바로 책을 돌려주러 갈게요.',
      '이미 도서관에 책을 반납해 버렸어요.',
      '책이 너무 어려워서 한 줄도 못 읽었어요.'
    ],
    correctAnswer: 1,
    translation: `[Hội thoại nghe]:
[Nữ]: Minsoo à, cuốn sách mượn lần trước nếu đọc xong rồi thì ngày mai đem trả cho mình được không?
[Nam]: À, mình gần đọc xong rồi, không biết mình mượn thêm vài ngày nữa được không nhỉ?
[Nữ]: Ừ, được chứ. Không gấp đâu nên cậu cứ thong thả đọc rồi trả lại nhé.
[Các lựa chọn]:
① Ừ, cảm ơn cậu đã tạo điều kiện nhé. Đọc xong mình nhất định sẽ trả.
② Vậy thì bây giờ mình sẽ đi trả sách ngay.
③ Mình đã trả sách lại cho thư viện mất rồi.
④ Sách khó quá nên mình chẳng đọc được chữ nào.`,
    explanation: 'Câu nói cuối cùng của người nữ là: "네, 그럼요. 급한 거 아니니까 천천히 보고 돌려주세요" (Được chứ, không gấp đâu nên cứ thong thả đọc rồi trả nhé). Lời đáp tự nhiên và lịch sự nhất của người nam là cảm ơn sự thông cảm/chu đáo đó và hứa sẽ đọc xong trả lại (네, 배려해 줘서 고마워요. 다 읽고 꼭 돌려줄게요).',
    keyPoints: [
      { term: '배려하다', meaning: 'Quan tâm, thông cảm, tạo điều kiện giúp đỡ' },
      { term: '돌려주다', meaning: 'Trả lại (vật đã mượn)' },
      { term: '급하다', meaning: 'Gấp, khẩn cấp' }
    ],
    examTip: 'Sau khi người khác đồng ý cho mượn tiếp hoặc giúp đỡ -> Câu nối tiếp tự nhiên nhất luôn là câu Cảm ơn (고마워요) và xác nhận hành động.',
    sourceExam: 'TOPIK II 64회 기출 듣기',
    level: 'TOPIK 3'
  },
  {
    id: 'l-q2',
    typeId: 'listen-type-1',
    questionNumberLabel: '[4~8] 다음을 듣고 이어질 수 있는 말로 가장 알맞은 것을 고르십시오. (4점)',
    instruction: '다음을 듣고 이어질 수 있는 말로 가장 알맞은 것을 고르십시오.',
    dialogue: [
      { speaker: 'man', text: '수진 씨, 이번 주말에 약속 있어요? 오랜만에 영화나 한편 볼까요?' },
      { speaker: 'woman', text: '어쩌죠? 이번 주말에는 고향에서 부모님이 올라오시기로 해서요.' }
    ],
    audioScript: `[남자]: 수진 씨, 이번 주말에 약속 있어요? 오랜만에 영화나 한편 볼까요?
[여자]: 어쩌죠? 이번 주말에는 고향에서 부모님이 올라오시기로 해서요.`,
    options: [
      '아, 그래요? 그럼 다음에 시간 맞을 때 봐요.',
      '부모님이 벌써 고향으로 내려가셨군요.',
      '영화 예매는 제가 미리 해 둘게요.',
      '주말 약속이 취소되어서 정말 다행이에요.'
    ],
    correctAnswer: 1,
    translation: `[Hội thoại nghe]:
[Nam]: Soojin à, cuối tuần này cậu có hẹn chưa? Lâu rồi không gặp, đi xem một bộ phim nhé?
[Nữ]: Làm sao giờ nhỉ? Cuối tuần này bố mẹ dưới quê lên chơi với mình mất rồi.
[Các lựa chọn]:
① À, vậy hả? Thế thì để lần sau khi nào tiện thời gian tụi mình đi nhé.
② Bố mẹ cậu đã về quê lại rồi cơ à.
③ Vé xem phim mình sẽ đặt trước nhé.
④ Thật may là hẹn cuối tuần đã bị hủy.` ,
    explanation: 'Người nữ từ chối khéo lời mời đi xem phim vì bận đón bố mẹ ở quê lên (부모님이 올라오시기로 해서요). Khi bị từ chối khéo léo, câu đối đáp đúng chuẩn mực xã hội của người nam là thông cảm và hẹn lại dịp khác (아, 그래요? 그럼 다음에 시간 맞을 때 봐요).',
    keyPoints: [
      { term: '어쩌죠?', meaning: 'Làm sao bây giờ nhỉ? (Mở đầu câu từ chối khéo)' },
      { term: '시간이 맞다', meaning: 'Hợp giờ, tiện thời gian' },
      { term: '올라오시다', meaning: 'Lên (từ quê lên thành phố lớn)' }
    ],
    examTip: 'Khi nghe thấy mở đầu "어쩌죠?" hoặc "죄송하지만..." nghĩa là đối phương chuẩn bị từ chối. Hãy tìm câu đáp hẹn lại dịp khác: "다음에 봐요/해요".',
    sourceExam: 'TOPIK II 60회 기출 듣기',
    level: 'TOPIK 3'
  },

  // --- DẠNG NGHE 2: Chọn hành động tiếp theo (Câu 9-12) ---
  {
    id: 'l-q3',
    typeId: 'listen-type-2',
    questionNumberLabel: '[9~12] 다음을 듣고 여자가 이어서 할 행동으로 가장 알맞은 것을 고르십시오. (4점)',
    instruction: '다음을 듣고 여자가 이어서 할 행동으로 가장 알맞은 것을 고르십시오.',
    dialogue: [
      { speaker: 'man', text: '김 대리, 오늘 오후 2시 회의 준비는 다 끝났어요?' },
      { speaker: 'woman', text: '회의실 예약이랑 발표 자료 출력은 다 마쳤습니다.' },
      { speaker: 'man', text: '수고했어요. 그런데 회의 참석자들에게 일정 확인 안내 문자는 보냈나요?' },
      { speaker: 'woman', text: '아, 아직 못 보냈습니다. 지금 바로 참석자 명단 확인해서 문자 보내겠습니다.' }
    ],
    audioScript: `[남자]: 김 대리, 오늘 오후 2시 회의 준비는 다 끝났어요?
[여자]: 회의실 예약이랑 발표 자료 출력은 다 마쳤습니다.
[남자]: 수고했어요. 그런데 회의 참석자들에게 일정 확인 안내 문자는 보냈나요?
[여자]: 아, 아직 못 보냈습니다. 지금 바로 참석자 명단 확인해서 문자 보내겠습니다.`,
    options: [
      '참석자들에게 안내 문자를 발송한다.',
      '발표 자료를 프린터로 출력한다.',
      '회의실을 새로 예약한다.',
      '오후 회의 일정을 연기한다.'
    ],
    correctAnswer: 1,
    translation: `[Hội thoại nghe]:
[Nam]: Đại diện Kim, việc chuẩn bị cho cuộc họp lúc 2 giờ chiều nay xong xuôi hết chưa?
[Nữ]: Dạ việc đặt phòng họp và in tài liệu phát biểu em đã hoàn tất rồi ạ.
[Nam]: Vất vả cho cô rồi. Nhưng cô đã gửi tin nhắn xác nhận lịch trình cho những người tham dự chưa?
[Nữ]: Dạ em vẫn chưa kịp gửi. Bây giờ em sẽ kiểm tra danh sách rồi gửi tin nhắn ngay ạ.
[Các lựa chọn]:
① Gửi tin nhắn hướng dẫn/thông báo đến những người tham dự.
② In tài liệu phát biểu bằng máy in.
③ Đặt một phòng họp mới.
④ Hoãn lịch cuộc họp buổi chiều.`,
    explanation: 'Câu thoại then chốt cuối cùng của người NỮ: "아, 아직 못 보냈습니다. 지금 바로 참석자 명단 확인해서 문자 보내겠습니다" (Bây giờ em sẽ kiểm tra danh sách rồi gửi tin nhắn ngay ạ). Hành động kế tiếp ngay sau đó của người NỮ là gửi tin nhắn cho người tham gia (참석자들에게 안내 문자를 발송한다).',
    keyPoints: [
      { term: '발송하다', meaning: 'Gửi đi, phát đi (thư từ, tin nhắn)' },
      { term: '출력하다', meaning: 'In ấn (tài liệu ra giấy)' },
      { term: '참석자', meaning: 'Người tham dự' }
    ],
    examTip: 'Luôn lắng nghe câu nói cuối cùng của nhân vật được đề hỏi (여자가 hoặc 남자가). Cụm từ "지금 바로 ~겠습니다" (Bây giờ tôi sẽ làm...) chính là câu chứa đáp án 100%!',
    sourceExam: 'TOPIK II 64회 기출 듣기',
    level: 'TOPIK 3-4'
  },
  {
    id: 'l-q4',
    typeId: 'listen-type-2',
    questionNumberLabel: '[9~12] 다음을 듣고 남자가 이어서 할 행동으로 가장 알맞은 것을 고르십시오. (4점)',
    instruction: '다음을 듣고 남자가 이어서 할 행동으로 가장 알맞은 것을 고르십시오.',
    dialogue: [
      { speaker: 'woman', text: '손님, 주문하신 아이스 아메리카노 두 잔 나왔습니다.' },
      { speaker: 'man', text: '감사합니다. 저, 혹시 컵 홀더랑 빨대는 어디에 있나요?' },
      { speaker: 'woman', text: '오른쪽 카운터 옆 서비스 테이블에 비치되어 있으니 가져가시면 됩니다.' },
      { speaker: 'man', text: '네, 알겠습니다. 챙겨 갈게요.' }
    ],
    audioScript: `[여자]: 손님, 주문하신 아이스 아메리카노 두 잔 나왔습니다.
[남자]: 감사합니다. 저, 혹시 컵 홀더랑 빨대는 어디에 있나요?
[여자]: 오른쪽 카운터 옆 서비스 테이블에 비치되어 있으니 가져가시면 됩니다.
[남자]: 네, 알겠습니다. 챙겨 갈게요.`,
    options: [
      '서비스 테이블로 가서 빨대와 컵 홀더를 가져온다.',
      '새로운 음료를 추가로 주문한다.',
      '카운터 직원에게 결제 카드를 건넨다.',
      '주문한 커피를 다시 만들어 달라고 요청한다.'
    ],
    correctAnswer: 1,
    translation: `[Hội thoại nghe]:
[Nữ]: Quý khách ơi, hai ly Americano đá quý khách gọi đã có rồi ạ.
[Nam]: Cảm ơn bạn. À mà quai bọc ly với ống hút để ở đâu vậy bạn?
[Nữ]: Ở bàn dịch vụ bên cạnh quầy thu ngân phía bên tay phải có sẵn, quý khách cứ lấy là được ạ.
[Nam]: Vâng, tôi biết rồi. Tôi sẽ lấy đem đi.
[Các lựa chọn]:
① Đến bàn dịch vụ lấy ống hút và quai bọc cốc.
② Gọi thêm đồ uống mới.
③ Đưa thẻ thanh toán cho nhân viên quầy thu ngân.
④ Yêu cầu pha lại cà phê đã đặt.`,
    explanation: 'Người nam hỏi chỗ lấy ống hút (빨대) và quai bọc cốc (컵 홀더). Nhân viên chỉ ra bàn dịch vụ ở bên phải, và người nam đáp: "네, 알겠습니다. 챙겨 갈게요" -> Hành động tiếp theo là đến bàn dịch vụ lấy ống hút và bọc cốc.',
    keyPoints: [
      { term: '빨대', meaning: 'Ống hút' },
      { term: '비치되다', meaning: 'Được bố trí, có sẵn (trang bị sẵn)' },
      { term: '챙기다', meaning: 'Lấy, thu dọn đem theo' }
    ],
    examTip: 'Đề bài hỏi 남자가 (Người nam sẽ làm gì). Lắng nghe nơi chốn được chỉ dẫn và lời xác nhận của người nam.',
    sourceExam: 'TOPIK II 83회 기출 듣기',
    level: 'TOPIK 3'
  },

  // --- DẠNG NGHE 3: Chọn nội dung đúng với bài nghe (Câu 13-16) ---
  {
    id: 'l-q5',
    typeId: 'listen-type-3',
    questionNumberLabel: '[13~16] 다음을 듣고 내용과 일치하는 것을 고르십시오. (4점)',
    instruction: '다음을 듣고 내용과 일치하는 것을 고르십시오.',
    dialogue: [
      { speaker: 'woman', text: '선생님, 이번에 새로 개관한 시민 도서관에 다녀오셨다면서요? 시설이 어떤가요?' },
      { speaker: 'man', text: '네, 정말 마음에 들었어요. 일반 열람실뿐만 아니라 디지털 자료실과 카페도 갖춰져 있더군요.' },
      { speaker: 'woman', text: '주말에도 이용할 수 있나요? 평일에는 직장 때문에 가기가 어려워서요.' },
      { speaker: 'man', text: '매주 월요일만 쉬고 주말에도 저녁 8시까지 정상 운영하니까 주말에 편하게 가셔도 돼요.' }
    ],
    audioScript: `[여자]: 선생님, 이번에 새로 개관한 시민 도서관에 다녀오셨다면서요? 시설이 어떤가요?
[남자]: 네, 정말 마음에 들었어요. 일반 열람실뿐만 아니라 디지털 자료실과 카페도 갖춰져 있더군요.
[여자]: 주말에도 이용할 수 있나요? 평일에는 직장 때문에 가기가 어려워서요.
[남자]: 매주 월요일만 쉬고 주말에도 저녁 8시까지 정상 운영하니까 주말에 편하게 가셔도 돼요.`,
    options: [
      '이 도서관은 주말에도 정상적으로 운영된다.',
      '남자는 새로 개관한 도서관에 아직 가 보지 않았다.',
      '도서관은 주말에 평일보다 일찍 문을 닫는다.',
      '이 도서관은 매주 주말에 정기 휴관을 한다.'
    ],
    correctAnswer: 1,
    translation: `[Hội thoại nghe]:
[Nữ]: Thầy ơi, nghe nói thầy đã ghé thăm thư viện thành phố mới khánh thành đợt này rồi ạ? Cơ sở vật chất ở đó thế nào ạ?
[Nam]: Ừ, tôi thích lắm. Không chỉ có phòng đọc thông thường mà còn có cả phòng tư liệu kỹ thuật số và quán cà phê nữa đấy.
[Nữ]: Cuối tuần có vào được không ạ? Ngày thường em bận đi làm ở công ty nên khó đi được.
[Nam]: Mỗi tuần thư viện chỉ nghỉ ngày thứ Hai thôi, còn cuối tuần vẫn mở cửa hoạt động bình thường đến tận 8 giờ tối nên cuối tuần cô cứ thoải mái ghé nhé.
[Các lựa chọn]:
① Thư viện này cuối tuần vẫn hoạt động bình thường.
② Người nam vẫn chưa từng đến thư viện mới khánh thành.
③ Thư viện đóng cửa vào cuối tuần sớm hơn ngày thường.
④ Thư viện này nghỉ định kỳ vào mỗi cuối tuần.`,
    explanation: 'Người nam nói rõ: "매주 월요일만 쉬고 주말에도 저녁 8시까지 정상 운영하니까" (Chỉ nghỉ thứ Hai, cuối tuần vẫn hoạt động bình thường đến 8h tối) -> Đáp án 1 là nội dung chính xác hoàn toàn. Các phương án khác đối lập với lời thoại nghe.',
    keyPoints: [
      { term: '개관하다', meaning: 'Khánh thành, khai mạc (thư viện, bảo tàng)' },
      { term: '정상 운영', meaning: 'Hoạt động bình thường' },
      { term: '정기 휴관', meaning: 'Nghỉ định kỳ (đóng cửa định kỳ)' }
    ],
    examTip: 'Đọc lướt 4 lựa chọn trong 10 giây trước khi nghe. Chú ý các từ chỉ thời gian: 주말 (cuối tuần), 평일 (ngày thường), 월요일 (thứ Hai).',
    sourceExam: 'TOPIK II 60회 기출 듣기',
    level: 'TOPIK 3-4'
  },

  // --- DẠNG NGHE 4: Chọn suy nghĩ trọng tâm (Câu 17-20) ---
  {
    id: 'l-q6',
    typeId: 'listen-type-4',
    questionNumberLabel: '[17~20] 다음을 듣고 남자의 중심 생각으로 가장 알맞은 것을 고르십시오. (4점)',
    instruction: '다음을 듣고 남자의 중심 생각으로 가장 알맞은 것을 고르십시오.',
    dialogue: [
      { speaker: 'woman', text: '요즘 재택근무를 중단하고 다시 사무실 출근으로 전환하는 기업들이 늘고 있대요.' },
      { speaker: 'man', text: '네, 업무 효율과 소통을 이유로 들더군요. 하지만 저는 유연한 근무 형태가 직원들의 사기를 높이고 장기적으로 업무 성과에도 더 긍정적인 영향을 준다고 봅니다.' },
      { speaker: 'woman', text: '그렇지만 얼굴을 맞대고 일해야 협업이 잘된다는 의견도 만만치 않아요.' },
      { speaker: 'man', text: '물론 대면 소통도 중요하지만, 각자의 상황에 맞게 근무 방식을 선택할 수 있는 자율성이 보장될 때 진정한 업무 몰입이 가능하다고 생각합니다.' }
    ],
    audioScript: `[여자]: 요즘 재택근무를 중단하고 다시 사무실 출근으로 전환하는 기업들이 늘고 있대요.
[남자]: 네, 업무 효율과 소통을 이유로 들더군요. 하지만 저는 유연한 근무 형태가 직원들의 사기를 높이고 장기적으로 업무 성과에도 더 긍정적인 영향을 준다고 봅니다.
[여자]: 그렇지만 얼굴을 맞대고 일해야 협업이 잘된다는 의견도 만만치 않아요.
[남자]: 물론 대면 소통도 중요하지만, 각자의 상황에 맞게 근무 방식을 선택할 수 있는 자율성이 보장될 때 진정한 업무 몰입이 가능하다고 생각합니다.`,
    options: [
      '근무 방식 선택의 자율성을 보장하는 것이 바람직하다.',
      '소통을 위해 모든 직원이 사무실에 출근해야 한다.',
      '재택근무는 장기적으로 업무 성과를 떨어뜨린다.',
      '대면 협업보다 개인별 독립 업무가 더 중요하다.'
    ],
    correctAnswer: 1,
    translation: `[Hội thoại nghe]:
[Nữ]: Dạo này nghe nói các doanh nghiệp dừng làm việc từ xa và chuyển sang đi làm tại văn phòng ngày càng tăng đấy.
[Nam]: Vâng, họ viện lý do hiệu quả công việc và giao tiếp. Thế nhưng tôi lại thấy hình thức làm việc linh hoạt giúp nâng cao tinh thần nhân viên và về lâu dài sẽ đem lại ảnh hưởng tích cực hơn cho hiệu suất.
[Nữ]: Nhưng ý kiến cho rằng phải gặp mặt trực tiếp làm việc thì mới cộng tác tốt cũng không ít đâu.
[Nam]: Đương nhiên giao tiếp trực tiếp cũng quan trọng, nhưng tôi nghĩ chỉ khi quyền tự chủ được lựa chọn cách thức làm việc phù hợp với hoàn cảnh từng người được bảo đảm thì nhân viên mới có thể thực sự tập trung cao độ vào công việc.
[Các lựa chọn]:
① Việc bảo đảm quyền tự chủ trong lựa chọn hình thức làm việc là điều đáng mong đợi.
② Để giao tiếp tốt thì tất cả nhân viên đều phải đến văn phòng.
③ Làm việc từ xa về lâu dài sẽ làm giảm hiệu suất công việc.
④ Công việc độc lập từng cá nhân quan trọng hơn việc cộng tác trực tiếp.`,
    explanation: 'Người nam nhấn mạnh lập trường xuyên suốt từ câu nói đầu đến câu kết luận: "자율성이 보장될 때 진정한 업무 몰입이 가능하다고 생각합니다" (Tôi nghĩ khi bảo đảm tính tự chủ thì mới có thể tập trung công việc tốt). Điều này tương đương với đáp án 1: "근무 방식 선택의 자율성을 보장하는 것이 바람직하다".',
    keyPoints: [
      { term: '자율성', meaning: 'Tính tự chủ, quyền tự quyết' },
      { term: '업무 몰입', meaning: 'Sự chìm đắm, tập trung cao độ vào công việc' },
      { term: '유연하다', meaning: 'Linh hoạt, uyển chuyển' }
    ],
    examTip: 'Để tìm ý chính của nhân vật nam (남자의 중심 생각): Lắng nghe câu có cụm từ "~라고 봅니다" hoặc "~아/어야 한다고 생각합니다" của người nam.',
    sourceExam: 'TOPIK II 83회 기출 듣기',
    level: 'TOPIK 4'
  },

  // --- DẠNG NGHE MỞ RỘNG (DỰA THEO ĐỀ CÔNG KHAI) ---
  {
    id: 'l-q7',
    typeId: 'listen-type-1',
    questionNumberLabel: '[4~8] 다음을 듣고 이어질 수 있는 말로 가장 알맞은 것을 고르십시오. (4점)',
    instruction: '다음을 듣고 이어질 수 있는 말로 가장 알맞은 것을 고르십시오.',
    dialogue: [
      { speaker: 'woman', text: '과장님, 오늘 저녁 부서 회식 장소 예약 완료했습니다.' },
      { speaker: 'man', text: '아, 수진 씨 미안해요. 방금 거래처에서 급한 미팅이 잡혀서 저는 참석하기 어려울 것 같아요.' }
    ],
    audioScript: `[여자]: 과장님, 오늘 저녁 부서 회식 장소 예약 완료했습니다.
[남자]: 아, 수진 씨 미안해요. 방금 거래처에서 급한 미팅이 잡혀서 저는 참석하기 어려울 것 같아요.`,
    options: [
      '아, 그러세요? 그럼 아쉽지만 저희 팀원들끼리 다녀올게요.',
      '네, 그럼 지금 바로 회식 장소로 출발하시죠.',
      '거래처 미팅이 잘 끝나서 정말 다행이네요.',
      '회식 장소 예약을 제가 미리 취소해 두었습니다.'
    ],
    correctAnswer: 1,
    translation: `[Hội thoại nghe]:
[Nữ]: Thưa trưởng phòng, em đã đặt xong địa điểm ăn liên hoan phòng tối nay rồi ạ.
[Nam]: Ôi Soojin à, tôi xin lỗi nhé. Vừa có cuộc họp khẩn cấp với đối tác nên chắc tôi không tham dự được rồi.
[Các lựa chọn]:
① Ôi thế ạ? Tiếc quá, vậy các thành viên tụi em sẽ tự đi với nhau ạ.
② Vâng, thế thì giờ mình cùng xuất phát đến chỗ ăn nhé.
③ Thật may vì cuộc họp với đối tác đã kết thúc êm đẹp.
④ Em đã hủy đặt chỗ trước đó rồi ạ.`,
    explanation: 'Người nam thông báo việc bận đột xuất không thể đi liên hoan tối nay. Câu đối đáp lịch sự và phù hợp nhất của cấp dưới (người nữ) là thấu hiểu, bày tỏ sự tiếc nuối và thông báo các thành viên khác sẽ tự đi (아, 그러세요? 그럼 아쉽지만 저희 팀원들끼리 다녀올게요).',
    keyPoints: [
      { term: '거래처', meaning: 'Đối tác kinh doanh, khách hàng doanh nghiệp' },
      { term: '회식', meaning: 'Tiệc liên hoan công ty/phòng ban' },
      { term: '잡히다', meaning: 'Được lên lịch, được xếp lịch' }
    ],
    examTip: 'Khi cấp trên hoặc đồng nghiệp báo bận đột xuất -> Câu nối tiếp lịch sự: "아, 그러세요? 그럼 다음에 함께해요 / 저희끼리 다녀올게요".',
    sourceExam: 'TOPIK II 70회 기출 듣기 변형',
    level: 'TOPIK 3'
  },
  {
    id: 'l-q8',
    typeId: 'listen-type-2',
    questionNumberLabel: '[9~12] 다음을 듣고 남자가 이어서 할 행동으로 가장 알맞은 것을 고르십시오. (4점)',
    instruction: '다음을 듣고 남자가 이어서 할 행동으로 가장 알맞은 것을 고르십시오.',
    dialogue: [
      { speaker: 'woman', text: '교수님, 세미나 발표 자료는 컴퓨터와 프로젝터에 연결해 두었습니다.' },
      { speaker: 'man', text: '수고했어요. 유인물은 참석 인원수에 맞게 좌석에 배부했나요?' },
      { speaker: 'woman', text: '네, 책상마다 한 부씩 올려두었습니다. 그런데 무선 마이크 음량 테스트는 아직 못 했습니다.' },
      { speaker: 'man', text: '그래요? 마이크 작동 상태는 제가 직접 강단에 가서 확인해 볼게요.' }
    ],
    audioScript: `[여자]: 교수님, 세미나 발표 자료는 컴퓨터와 프로젝터에 연결해 두었습니다.
[남자]: 수고했어요. 유인물은 참석 인원수에 맞게 좌석에 배부했나요?
[여자]: 네, 책상마다 한 부씩 올려두었습니다. 그런데 무선 마이크 음량 테스트는 아직 못 했습니다.
[남자]: 그래요? 마이크 작동 상태는 제가 직접 강단에 가서 확인해 볼게요.`,
    options: [
      '강단으로 가서 마이크 작동 상태를 점검한다.',
      '세미나 참석자들에게 유인물을 나누어 준다.',
      '발표용 프로젝터와 컴퓨터를 연결한다.',
      '세미나실 좌석을 추가로 배치한다.'
    ],
    correctAnswer: 1,
    translation: `[Hội thoại nghe]:
[Nữ]: Thưa giáo sư, tài liệu phát biểu hội thảo em đã kết nối sẵn vào máy tính và máy chiếu rồi ạ.
[Nam]: Cảm ơn em nhé. Tài liệu phát tay đã chia đều theo số lượng người tham dự lên các chỗ ngồi chưa?
[Nữ]: Dạ, em đã đặt mỗi bàn một bản rồi ạ. Nhưng việc kiểm tra âm lượng mic không dây thì em chưa kịp làm.
[Nam]: Vậy hả? Tình trạng hoạt động của mic để tôi tự lên bục giảng kiểm tra xem sao nhé.
[Các lựa chọn]:
① Lên bục giảng kiểm tra tình trạng hoạt động của micro.
② Phát tài liệu cho những người tham dự hội thảo.
③ Kết nối máy chiếu và máy tính dùng cho bài thuyết trình.
④ Bố trí thêm ghế ngồi trong phòng hội thảo.`,
    explanation: 'Câu nói chốt cuối cùng của người NAM: "마이크 작동 상태는 제가 직접 강단에 가서 확인해 볼게요" (Tình trạng hoạt động của micro để tôi tự lên bục giảng kiểm tra nhé). Do đó hành động kế tiếp của người nam là đi kiểm tra micro (강단으로 가서 마이크 작동 상태를 점검한다).',
    keyPoints: [
      { term: '강단', meaning: 'Bục giảng, bục diễn thuyết' },
      { term: '점검하다', meaning: 'Kiểm tra, rà soát tình trạng' },
      { term: '유인물', meaning: 'Tài liệu phát tay, bản in phân phát' }
    ],
    examTip: 'Đề bài hỏi 남자가 이어서 할 행동 (Hành động kế tiếp của người NAM). Bắt cụm từ cuối cùng: "제가 직접 ~해 볼게요".',
    sourceExam: 'TOPIK II 64회 기출 듣기',
    level: 'TOPIK 3-4'
  },
  {
    id: 'l-q9',
    typeId: 'listen-type-3',
    questionNumberLabel: '[13~16] 다음을 듣고 내용과 일치하는 것을 고르십시오. (4점)',
    instruction: '다음을 듣고 내용과 일치하는 것을 고르십시오.',
    dialogue: [
      { speaker: 'woman', text: '손님, 주문하신 음료 나왔습니다. 오늘 개인 텀블러를 지참하셔서 음료 가격에서 500원 할인 적용해 드렸습니다.' },
      { speaker: 'man', text: '아, 정말요? 일회용 컵을 줄이려고 챙겨 다녔는데 할인 혜택까지 받으니 기분이 좋네요.' },
      { speaker: 'woman', text: '네, 저희 매장에서는 다회용 컵 사용 고객에게 포인트도 두 배로 적립해 드리고 있습니다.' },
      { speaker: 'man', text: '환경도 보호하고 알뜰하게 커피를 마실 수 있어서 앞으로도 자주 애용해야겠어요.' }
    ],
    audioScript: `[여자]: 손님, 주문하신 음료 나왔습니다. 오늘 개인 텀블러를 지참하셔서 음료 가격에서 500원 할인 적용해 드렸습니다.
[남자]: 아, 정말요? 일회용 컵을 줄이려고 챙겨 다녔는데 할인 혜택까지 받으니 기분이 좋네요.
[여자]: 네, 저희 매장에서는 다회용 컵 사용 고객에게 포인트도 두 배로 적립해 드리고 있습니다.
[남자]: 환경도 보호하고 알뜰하게 커피를 마실 수 있어서 앞으로도 자주 애용해야겠어요.`,
    options: [
      '텀블러를 지참한 손님은 음료 할인을 받을 수 있다.',
      '남자는 일회용 컵을 받기 위해 매장을 방문했다.',
      '이 매장에서는 텀블러를 무료로 손님에게 나눠준다.',
      '다회용 컵을 사용하면 포인트 적립이 불가능하다.'
    ],
    correctAnswer: 1,
    translation: `[Hội thoại nghe]:
[Nữ]: Quý khách ơi đồ uống đã có rồi ạ. Hôm nay quý khách mang theo bình giữ nhiệt cá nhân nên em đã giảm giá 500 won tiền đồ uống cho quý khách rồi ạ.
[Nam]: Ồ thật thế à? Tôi mang theo để giảm thiểu cốc dùng một lần mà lại còn được hưởng giảm giá thế này thích quá.
[Nữ]: Vâng ạ, quán em còn tích gấp đôi điểm thưởng cho khách hàng dùng cốc tái sử dụng nữa ạ.
[Nam]: Vừa bảo vệ môi trường vừa tiết kiệm tiền uống cà phê, từ nay tôi phải ghé thường xuyên mới được.
[Các lựa chọn]:
① Khách hàng mang theo bình giữ nhiệt có thể nhận được giảm giá đồ uống.
② Người nam đến quán để nhận cốc dùng một lần.
③ Quán này phát tặng miễn phí bình giữ nhiệt cho khách.
④ Nếu dùng cốc tái sử dụng thì không thể tích điểm được.`,
    explanation: 'Nhân viên nữ nói: "개인 텀블러를 지참하셔서 음료 가격에서 500원 할인 적용해 드렸습니다" (Vì mang bình giữ nhiệt cá nhân nên được giảm giá 500 won) -> Khẳng định đúng với đáp án 1: "텀블러를 지참한 손님은 음료 할인을 받을 수 있다".',
    keyPoints: [
      { term: '지참하다', meaning: 'Mang theo bên mình' },
      { term: '다회용 컵', meaning: 'Cốc dùng nhiều lần (thay thế cốc nhựa dùng 1 lần)' },
      { term: '적립하다', meaning: 'Tích lũy (điểm thưởng)' }
    ],
    examTip: 'Chủ đề bảo vệ môi trường và giảm thiểu rác thải nhựa (친환경 / 텀블러 사용) rất hay ra trong TOPIK II 듣기 câu 13-16.',
    sourceExam: 'TOPIK II 83회 기출 듣기',
    level: 'TOPIK 3-4'
  },
  {
    id: 'l-q10',
    typeId: 'listen-type-1',
    questionNumberLabel: '[4~8] 다음을 듣고 이어질 수 있는 말로 가장 알맞은 것을 고르십시오. (4점)',
    instruction: '다음을 듣고 이어질 수 있는 말로 가장 알맞은 것을 고르십시오.',
    dialogue: [
      { speaker: 'woman', text: '과장님, 오늘 요청하신 시장 조사 보고서 작성이 거의 마무리되었습니다.' },
      { speaker: 'man', text: '그래요? 고생 많았어요. 퇴근 시간 전까지 제 이메일로 송부해 줄 수 있나요?' }
    ],
    audioScript: `[여자]: 과장님, 오늘 요청하신 시장 조사 보고서 작성이 거의 마무리되었습니다.
[남자]: 그래요? 고생 많았어요. 퇴근 시간 전까지 제 이메일로 송부해 줄 수 있나요?`,
    options: [
      '네, 검토를 마치는 대로 바로 발송해 드리겠습니다.',
      '보고서 작성을 아직 한 페이지도 시작하지 못했습니다.',
      '오늘 안에 퇴근하기는 어려울 것 같습니다.',
      '지난달 시장 조사 자료는 이미 파기했습니다.'
    ],
    correctAnswer: 1,
    translation: `[Hội thoại nghe]:
[Nữ]: Thưa trưởng phòng, bản báo cáo nghiên cứu thị trường anh yêu cầu hôm nay em đã soạn gần xong rồi ạ.
[Nam]: Thế à? Vất vả cho em quá. Trước giờ tan sở em có thể gửi qua email cho anh được không?
[Các lựa chọn]:
① Dạ vâng, kiểm tra lại xong là em sẽ gửi ngay cho anh ạ.
② Em vẫn chưa bắt đầu viết được trang nào ạ.
③ Chắc hôm nay em khó mà tan sở đúng giờ được ạ.
④ Tài liệu nghiên cứu thị trường tháng trước em đã tiêu hủy rồi ạ.`,
    explanation: 'Người nam hỏi cấp dưới có thể gửi báo cáo qua email trước giờ tan sở không (퇴근 시간 전까지 제 이메일로 송부해 줄 수 있나요?). Câu trả lời đúng mực và tích cực của nhân viên văn phòng là: "네, 검토를 마치는 대로 바로 발송해 드리겠습니다" (Vâng, sau khi kiểm tra xong xuôi em sẽ gửi ngay ạ).',
    keyPoints: [
      { term: '송부하다', meaning: 'Gửi (văn bản, tài liệu, email)' },
      { term: '-는 대로', meaning: 'Ngay sau khi làm xong...' },
      { term: '검토하다', meaning: 'Kiểm tra, rà soát lại' }
    ],
    examTip: 'Hỏi về việc gửi tài liệu / báo cáo trong công sở -> Lời đáp chuẩn luôn là đồng ý và cam kết thời hạn: "네, ~하는 대로 보내겠습니다".',
    sourceExam: 'TOPIK II 72회 기출 듣기',
    level: 'TOPIK 3'
  },
  {
    id: 'l-q11',
    typeId: 'listen-type-1',
    questionNumberLabel: '[4~8] 다음을 듣고 이어질 수 있는 말로 가장 알맞은 것을 고르십시오. (4점)',
    instruction: '다음을 듣고 이어질 수 있는 말로 가장 알맞은 것을 고르십시오.',
    dialogue: [
      { speaker: 'man', text: '저, 실례지만 다음 주 화요일 부산행 KTX 열차표를 취소하고 싶은데요.' },
      { speaker: 'woman', text: '네, 고객님. 예매하신 승차권 확인해 주시면 수수료 제외 후 환불 처리해 드리겠습니다.' }
    ],
    audioScript: `[남자]: 저, 실례지만 다음 주 화요일 부산행 KTX 열차표를 취소하고 싶은데요.
[여자]: 네, 고객님. 예매하신 승차권 확인해 주시면 수수료 제외 후 환불 처리해 드리겠습니다.`,
    options: [
      '여기 스마트폰 앱에 있는 전자 승차권 보여드릴게요.',
      '부산행 기차표를 추가로 두 장 더 예약할게요.',
      '기차가 이미 출발해 버려서 탑승할 수 없었어요.',
      '취소 수수료가 없어서 정말 다행이네요.'
    ],
    correctAnswer: 1,
    translation: `[Hội thoại nghe]:
[Nam]: Xin lỗi cho tôi hỏi, tôi muốn hủy vé tàu KTX đi Busan vào thứ Ba tuần sau ạ.
[Nữ]: Vâng thưa quý khách. Quý khách vui lòng cho xem vé đã đặt, sau khi trừ phí hủy chúng tôi sẽ xử lý hoàn tiền cho quý khách ạ.
[Các lựa chọn]:
① Dạ vâng, tôi xin cho xem vé điện tử trên app điện thoại đây ạ.
② Tôi sẽ đặt mua thêm 2 vé tàu đi Busan nữa ạ.
③ Tàu đã xuất phát mất rồi nên tôi không lên kịp.
④ Thật may là không mất phí hủy vé.`,
    explanation: 'Nhân viên yêu cầu khách đưa vé để kiểm tra: "예매하신 승차권 확인해 주시면..." (Quý khách cho xem vé đã đặt...). Người nam sẽ tiếp lời bằng việc xuất trình vé: "여기 스마트폰 앱에 있는 전자 승차권 보여드릴게요" (Đây, tôi cho xem vé điện tử trên ứng dụng đây ạ).',
    keyPoints: [
      { term: '환불하다', meaning: 'Hoàn lại tiền' },
      { term: '수수료', meaning: 'Phí dịch vụ, lệ phí hủy' },
      { term: '승차권', meaning: 'Vé tàu xe' }
    ],
    examTip: 'Hội thoại tại quầy vé/nhà ga: Khi nhân viên yêu cầu xuất trình vé (확인해 주시면) -> Câu tiếp theo là đưa vé cho nhân viên (보여드릴게요).',
    sourceExam: 'TOPIK II 60회 기출 듣기',
    level: 'TOPIK 3'
  },
  {
    id: 'l-q12',
    typeId: 'listen-type-2',
    questionNumberLabel: '[9~12] 다음을 듣고 여자가 이어서 할 행동으로 가장 알맞은 것을 고르십시오. (4점)',
    instruction: '다음을 듣고 여자가 이어서 할 행동으로 가장 알맞은 것을 고르십시오.',
    dialogue: [
      { speaker: 'man', text: '손님, 지난주 인터넷 쇼핑몰에서 구매하신 코트 교환 신청 건으로 오셨지요?' },
      { speaker: 'woman', text: '네, 옷 치수가 생각보다 너무 작아서 한 치수 큰 사이즈로 바꾸고 싶어서요.' },
      { speaker: 'man', text: '그렇군요. 그럼 제품 상자와 영수증, 그리고 여기 교환 신청서를 작성해 주시겠어요?' },
      { speaker: 'woman', text: '네, 물건은 여기 다 챙겨왔고요, 신청서 바로 작성해서 드릴게요.' }
    ],
    audioScript: `[남자]: 손님, 지난주 인터넷 쇼핑몰에서 구매하신 코트 교환 신청 건으로 오셨지요?
[여자]: 네, 옷 치수가 생각보다 너무 작아서 한 치수 큰 사이즈로 바꾸고 싶어서요.
[남자]: 그렇군요. 그럼 제품 상자와 영수증, 그리고 여기 교환 신청서를 작성해 주시겠어요?
[여자]: 네, 물건은 여기 다 챙겨왔고요, 신청서 바로 작성해서 드릴게요.`,
    options: [
      '교환 신청서 양식을 작성한다.',
      '새 코트를 입어보고 거울을 확인한다.',
      '인터넷 쇼핑몰에서 결제를 취소한다.',
      '집으로 가서 영수증을 다시 찾아온다.'
    ],
    correctAnswer: 1,
    translation: `[Hội thoại nghe]:
[Nam]: Thưa quý khách, quý khách đến vì việc đăng ký đổi áo khoác mua trên trang mua sắm online tuần trước đúng không ạ?
[Nữ]: Dạ vâng, kích thước áo nhỏ hơn em tưởng nên em muốn đổi sang kích cỡ lớn hơn 1 size ạ.
[Nam]: Ra là vậy. Thế thì phiền quý khách đưa hộp sản phẩm, hóa đơn và điền vào mẫu đơn xin đổi hàng này giúp tôi được không ạ?
[Nữ]: Vâng, đồ thì em mang đủ hết ở đây rồi ạ, em sẽ điền đơn đăng ký ngay rồi gửi lại anh ạ.
[Các lựa chọn]:
① Điền vào mẫu đơn đăng ký đổi hàng.
② Mặc thử áo khoác mới và soi gương.
③ Hủy thanh toán trên trang mua sắm online.
④ Về nhà tìm lại hóa đơn mua hàng.`,
    explanation: 'Lời thoại cuối của người nữ: "신청서 바로 작성해서 드릴게요" (Em sẽ điền đơn ngay rồi gửi lại anh ạ). Do đó, hành động tiếp theo người nữ sẽ làm là điền đơn đổi hàng (교환 신청서 양식을 작성한다).',
    keyPoints: [
      { term: '치수 / 사이즈', meaning: 'Kích cỡ quần áo' },
      { term: '교환 신청서', meaning: 'Đơn xin đổi hàng' },
      { term: '작성하다', meaning: 'Điền vào, soạn thảo' }
    ],
    examTip: 'Chú ý nghe câu cuối cùng của người phụ nữ: "바로 작성해서 드릴게요" -> Chọn ngay đáp án có hành động "작성한다".',
    sourceExam: 'TOPIK II 83회 기출 듣기',
    level: 'TOPIK 3-4'
  },
  {
    id: 'l-q13',
    typeId: 'listen-type-2',
    questionNumberLabel: '[9~12] 다음을 듣고 남자가 이어서 할 행동으로 가장 알맞은 것을 고르십시오. (4점)',
    instruction: '다음을 듣고 남자가 이어서 할 행동으로 가장 알맞은 것을 고르십시오.',
    dialogue: [
      { speaker: 'woman', text: '민우 씨, 다음 주 사무실 이사 준비는 잘 진행되고 있어요?' },
      { speaker: 'man', text: '네, 팀원들 개인 짐은 상자에 다 포장했고 컴퓨터 모니터도 정리해 두었어요.' },
      { speaker: 'woman', text: '다행이네요. 그런데 이삿짐 운반 트럭 예약 시간은 확인하셨나요?' },
      { speaker: 'man', text: '아차, 이사업체에 오전 9시 도착인지 확인 전화를 깜빡했네요. 지금 바로 전화해 볼게요.' }
    ],
    audioScript: `[여자]: 민우 씨, 다음 주 사무실 이사 준비는 잘 진행되고 있어요?
[남자]: 네, 팀원들 개인 짐은 상자에 다 포장했고 컴퓨터 모니터도 정리해 두었어요.
[여자]: 다행이네요. 그런데 이삿짐 운반 트럭 예약 시간은 확인하셨나요?
[남자]: 아차, 이사업체에 오전 9시 도착인지 확인 전화를 깜빡했네요. 지금 바로 전화해 볼게요.`,
    options: [
      '이사업체에 전화를 걸어 시간을 확인한다.',
      '컴퓨터 모니터의 전원을 끈다.',
      '사무실 상자를 트럭에 직접 싣는다.',
      '팀원들에게 개인 짐을 싸라고 지시한다.'
    ],
    correctAnswer: 1,
    translation: `[Hội thoại nghe]:
[Nữ]: Minwoo à, việc chuẩn bị chuyển văn phòng tuần tới tiến triển tốt chứ?
[Nam]: Vâng, đồ đạc cá nhân của mọi người trong đội đã đóng gói vào thùng hết rồi và màn hình máy tính cũng đã dọn dẹp xong.
[Nữ]: May quá. Nhưng mà thời gian xe tải vận chuyển đồ dọn nhà cậu đã xác nhận lại chưa?
[Nam]: Ôi chết, mình quên khuấy mất việc gọi điện cho công ty chuyển nhà xác nhận xem có đến lúc 9 giờ sáng không. Bây giờ mình sẽ gọi điện ngay đây.
[Các lựa chọn]:
① Gọi điện cho công ty dọn nhà để xác nhận thời gian.
② Tắt nguồn màn hình máy tính.
③ Tự tay bê các thùng carton của văn phòng lên xe tải.
④ Yêu cầu các thành viên trong đội đóng gói đồ cá nhân.`,
    explanation: 'Người nam nói câu chốt: "이사업체에 오전 9시 도착인지 확인 전화를 깜빡했네요. 지금 바로 전화해 볼게요" (Mình quên gọi điện xác nhận, giờ mình gọi điện ngay đây) -> Hành động tiếp theo của người nam là gọi điện thoại xác nhận thời gian với công ty chuyển nhà.',
    keyPoints: [
      { term: '이삿짐', meaning: 'Hành lý/đồ đạc chuyển nhà' },
      { term: '깜빡하다', meaning: 'Quên bẵng đi, quên khuấy mất' },
      { term: '운반하다', meaning: 'Vận chuyển' }
    ],
    examTip: 'Hành động ngay sau "지금 바로 ~해 볼게요" luôn là đáp án đúng 100% cho dạng câu hỏi 다음에 할 행동.',
    sourceExam: 'TOPIK II 64회 기출 듣기',
    level: 'TOPIK 3-4'
  },
  {
    id: 'l-q14',
    typeId: 'listen-type-3',
    questionNumberLabel: '[13~16] 다음을 듣고 내용과 일치하는 것을 고르십시오. (4점)',
    instruction: '다음을 듣고 내용과 일치하는 것을 고르십시오.',
    dialogue: [
      { speaker: 'man', text: '주민 여러분 안녕하십니까. 우리 아파트 관리사무소에서 알뜰 도서 나눔 행사를 개최합니다.' },
      { speaker: 'woman', text: '집에서 더 이상 읽지 않는 동화책이나 소설책을 관리사무소로 기증해 주시면 다른 주민들의 도서와 교환할 수 있는 도서 교환 쿠폰을 증정합니다.' },
      { speaker: 'man', text: '기증 접수는 이번 주 금요일까지이며, 주말 이틀 동안 아파트 중앙 분수대 광장에서 자유롭게 도서를 교환하실 수 있습니다.' },
      { speaker: 'woman', text: '교환 후 남은 도서는 지역 아동 복지 센터에 전액 기부될 예정이니 주민 여러분의 많은 참여 바랍니다.' }
    ],
    audioScript: `[남자]: 주민 여러분 안녕하십니까. 우리 아파트 관리사무소에서 알뜰 도서 나눔 행사를 개최합니다.
[여자]: 집에서 더 이상 읽지 않는 동화책이나 소설책을 관리사무소로 기증해 주시면 다른 주민들의 도서와 교환할 수 있는 도서 교환 쿠폰을 증정합니다.
[남자]: 기증 접수는 이번 주 금요일까지이며, 주말 이틀 동안 아파트 중앙 분수대 광장에서 자유롭게 도서를 교환하실 수 있습니다.
[여자]: 교환 후 남은 도서는 지역 아동 복지 센터에 전액 기부될 예정이니 주민 여러분의 많은 참여 바랍니다.`,
    options: [
      '책을 기증하면 도서 교환 쿠폰을 받을 수 있다.',
      '도서 교환 행사는 이번 주 금요일에만 열린다.',
      '남은 도서는 주민들에게 돈을 받고 판매한다.',
      '잡지나 전공 서적만 기증 대상에 포함된다.'
    ],
    correctAnswer: 1,
    translation: `[Hội thoại nghe]:
[Nam]: Xin chào toàn thể cư dân. Văn phòng ban quản lý chung cư chúng tôi tổ chức sự kiện chia sẻ sách tiết kiệm.
[Nữ]: Nếu quý vị quyên góp truyện thiếu nhi hoặc tiểu thuyết không đọc nữa ở nhà cho ban quản lý, chúng tôi sẽ tặng phiếu đổi sách để quý vị có thể đổi lấy sách của các cư dân khác.
[Nam]: Thời hạn tiếp nhận quyên góp là đến hết thứ Sáu tuần này, và trong 2 ngày cuối tuần quý vị có thể tự do đổi sách tại quảng trường đài phun nước trung tâm chung cư.
[Nữ]: Số sách còn thừa lại sau khi đổi sẽ được trao tặng toàn bộ cho trung tâm phúc lợi trẻ em địa phương nên rất mong nhận được sự tham gia tích cực của quý cư dân.
[Các lựa chọn]:
① Nếu quyên góp sách thì có thể nhận được phiếu đổi sách.
② Sự kiện đổi sách chỉ diễn ra vào duy nhất ngày thứ Sáu tuần này.
③ Số sách còn lại sẽ được bán lấy tiền từ cư dân.
④ Chỉ có tạp chí và sách chuyên ngành mới được tiếp nhận.`,
    explanation: 'Bài phát thanh nói rõ: "도서를 기증해 주시면 ... 도서 교환 쿠폰을 증정합니다" (Nếu quyên góp sách thì sẽ được tặng phiếu đổi sách). Đáp án 1 hoàn toàn trùng khớp với thông tin bài nghe.',
    keyPoints: [
      { term: '기증하다', meaning: 'Quyên góp, hiến tặng' },
      { term: '나눔 행사', meaning: 'Sự kiện chia sẻ, thiện nguyện' },
      { term: '증정하다', meaning: 'Trao tặng, biếu' }
    ],
    examTip: 'Dạng thông báo cộng đồng/chung cư: Hãy chú ý nghe quyền lợi của người tham gia (tặng phiếu, miễn phí) và thời gian diễn ra sự kiện.',
    sourceExam: 'TOPIK II 52회 기출 듣기',
    level: 'TOPIK 3-4'
  },
  {
    id: 'l-q15',
    typeId: 'listen-type-3',
    questionNumberLabel: '[13~16] 다음을 듣고 내용과 일치하는 것을 고르십시오. (4점)',
    instruction: '다음을 듣고 내용과 일치하는 것을 고르십시오.',
    dialogue: [
      { speaker: 'woman', text: '박 박사님, 최근 직장인들의 수면 실태 조사 결과를 발표하셨는데요. 수면 시간은 예년과 어떻게 다른가요?' },
      { speaker: 'man', text: '네, 조사 결과 한국 직장인의 하루 평균 수면 시간은 6시간 10분으로 OECD 평균보다 약 1시간 부족한 것으로 나타났습니다.' },
      { speaker: 'woman', text: '잠이 부족한 가장 큰 원인은 무엇으로 지목되었습니까?' },
      { speaker: 'man', text: '야근이나 회식보다는 취침 직전 스마트폰이나 디지털 기기를 사용하는 습관이 수면 부족의 1위 원인으로 조사되었습니다.' }
    ],
    audioScript: `[여자]: 박 박사님, 최근 직장인들의 수면 실태 조사 결과를 발표하셨는데요. 수면 시간은 예년과 어떻게 다른가요?
[남자]: 네, 조사 결과 한국 직장인의 하루 평균 수면 시간은 6시간 10분으로 OECD 평균보다 약 1시간 부족한 것으로 나타났습니다.
[여자]: 잠이 부족한 가장 큰 원인은 무엇으로 지목되었습니까?
[남자]: 야근이나 회식보다는 취침 직전 스마트폰이나 디지털 기기를 사용하는 습관이 수면 부족의 1위 원인으로 조사되었습니다.`,
    options: [
      '취침 직전 스마트폰 사용이 수면 부족의 가장 큰 원인이다.',
      '한국 직장인의 수면 시간은 OECD 평균보다 1시간 더 길다.',
      '직장인 수면 부족의 주된 원인은 잦은 야근과 회식이다.',
      '한국 직장인의 하루 평균 수면 시간은 8시간 이상이다.'
    ],
    correctAnswer: 1,
    translation: `[Hội thoại nghe]:
[Nữ]: Thưa tiến sĩ Park, gần đây ông vừa công bố kết quả điều tra thực trạng giấc ngủ của nhân viên văn phòng. Thời gian ngủ so với các năm trước như thế nào ạ?
[Nam]: Vâng, kết quả điều tra cho thấy thời gian ngủ trung bình một ngày của dân công sở Hàn Quốc là 6 tiếng 10 phút, thiếu khoảng 1 tiếng so với mức trung bình của OECD.
[Nữ]: Đâu là nguyên nhân lớn nhất dẫn đến việc thiếu ngủ được chỉ ra ạ?
[Nam]: So với việc làm thêm giờ hay liên hoan công ty thì thói quen dùng điện thoại thông minh hoặc thiết bị kỹ thuật số ngay trước giờ đi ngủ được điều tra là nguyên nhân số 1 gây thiếu ngủ.
[Các lựa chọn]:
① Sử dụng smartphone ngay trước khi ngủ là nguyên nhân lớn nhất gây thiếu ngủ.
② Thời gian ngủ của dân công sở Hàn Quốc dài hơn 1 tiếng so với trung bình OECD.
③ Nguyên nhân chính gây thiếu ngủ là do thường xuyên tăng ca và liên hoan.
④ Thời gian ngủ trung bình một ngày của dân công sở Hàn Quốc là trên 8 tiếng.`,
    explanation: 'Tiến sĩ Park nhấn mạnh: "취침 직전 스마트폰이나 디지털 기기를 사용하는 습관이 수면 부족의 1위 원인으로 조사되었습니다" -> Đáp án 1 là nội dung chính xác 100%.',
    keyPoints: [
      { term: '취침 직전', meaning: 'Ngay trước giờ ngủ' },
      { term: '실태 조사', meaning: 'Điều tra thực trạng' },
      { term: '지목되다', meaning: 'Được chỉ ra, được điểm tên' }
    ],
    examTip: 'Khi nghe thấy các từ khóa xếp hạng như "1위 원인", "가장 큰 이유" -> Khả năng rất cao đó chính là câu trả lời đúng của dạng 13-16.',
    sourceExam: 'TOPIK II 64회 기출 듣기',
    level: 'TOPIK 4'
  },
  {
    id: 'l-q16',
    typeId: 'listen-type-4',
    questionNumberLabel: '[17~20] 다음을 듣고 남자의 중심 생각으로 가장 알맞은 것을 고르십시오. (4점)',
    instruction: '다음을 듣고 남자의 중심 생각으로 가장 알맞은 것을 고르십시오.',
    dialogue: [
      { speaker: 'woman', text: '요즘 어린 자녀들에게 스마트폰 사용을 아예 금지하는 부모들이 늘고 있는데요. 선생님은 어떻게 생각하시나요?' },
      { speaker: 'man', text: '물론 스마트폰 중독에 대한 우려는 충분히 이해합니다. 하지만 디지털 시대에 스마트폰을 무조건 금지하기만 하면 아이가 오히려 또래 집단에서 소외되거나 반발심을 가질 수 있습니다.' },
      { speaker: 'woman', text: '그렇다면 부모는 어떤 역할을 해야 할까요?' },
      { speaker: 'man', text: '일방적으로 빼앗기보다는 스마트폰 사용 시간과 규칙을 아이와 함께 정하고, 유익한 디지털 콘텐츠를 스스로 선별해 활용할 수 있도록 지도하는 태도가 훨씬 바람직합니다.' }
    ],
    audioScript: `[여자]: 요즘 어린 자녀들에게 스마트폰 사용을 아예 금지하는 부모들이 늘고 있는데요. 선생님은 어떻게 생각하시나요?
[남자]: 물론 스마트폰 중독에 대한 우려는 충분히 이해합니다. 하지만 디지털 시대에 스마트폰을 무조건 금지하기만 하면 아이가 오히려 또래 집단에서 소외되거나 반발심을 가질 수 있습니다.
[여자]: 그렇다면 부모는 어떤 역할을 해야 할까요?
[남자]: 일방적으로 빼앗기보다는 스마트폰 사용 시간과 규칙을 아이와 함께 정하고, 유익한 디지털 콘텐츠를 스스로 선별해 활용할 수 있도록 지도하는 태도가 훨씬 바람직합니다.`,
    options: [
      '스마트폰을 무조건 금지하기보다 올바른 사용 규칙을 지도해야 한다.',
      '어린 자녀의 스마트폰 소지를 법적으로 전면 금지해야 한다.',
      '아이들의 스마트폰 사용 시간을 부모가 일방적으로 결정해야 한다.',
      '디지털 기기는 아이들의 교우 관계 형성에 아무런 영향을 주지 않는다.'
    ],
    correctAnswer: 1,
    translation: `[Hội thoại nghe]:
[Nữ]: Dạo gần đây ngày càng nhiều phụ huynh cấm tiệt con nhỏ dùng điện thoại thông minh. Thầy nghĩ sao về vấn đề này ạ?
[Nam]: Tất nhiên là nỗi lo về việc nghiện điện thoại thông minh là hoàn toàn dễ hiểu. Nhưng trong thời đại kỹ thuật số, nếu chỉ cấm đoán vô điều kiện thì đứa trẻ có thể bị cô lập khỏi nhóm bạn cùng trang lứa hoặc sinh ra tâm lý chống đối.
[Nữ]: Nếu vậy thì phụ huynh nên đóng vai trò thế nào ạ?
[Nam]: Thay vì tước đoạt một cách đơn phương, thái độ cùng con đặt ra quy tắc và thời gian dùng, đồng thời hướng dẫn con tự biết chọn lọc nội dung số bổ ích là điều đúng đắn hơn nhiều.
[Các lựa chọn]:
① Thay vì cấm đoán vô điều kiện, nên hướng dẫn quy tắc sử dụng đúng đắn cho trẻ.
② Cần cấm hoàn toàn trẻ nhỏ sở hữu smartphone bằng luật pháp.
③ Bố mẹ nên đơn phương quyết định thời gian dùng smartphone của con.
④ Thiết bị kỹ thuật số không ảnh hưởng gì đến mối quan hệ bạn bè của trẻ.`,
    explanation: 'Quan điểm cốt lõi của người nam thể hiện ở câu: "무조건 금지하기보다는 ... 규칙을 아이와 함께 정하고 올바르게 지도하는 태도가 바람직하다". Ý trọng tâm là không nên cấm đoán cực đoan mà cần hướng dẫn trẻ sử dụng hợp lý.',
    keyPoints: [
      { term: '무조건', meaning: 'Vô điều kiện, mù quáng' },
      { term: '바람직하다', meaning: 'Đúng đắn, đáng mong muốn, lý tưởng' },
      { term: '소외되다', meaning: 'Bị cô lập, bị xa lánh' }
    ],
    examTip: 'Từ khóa "바람직하다", "~보다는 ~해야 한다" luôn là dấu hiệu chỉ rõ 중심 생각 (suy nghĩ trọng tâm) của nhân vật.',
    sourceExam: 'TOPIK II 60회 기출 듣기',
    level: 'TOPIK 4'
  },
  {
    id: 'l-q17',
    typeId: 'listen-type-4',
    questionNumberLabel: '[17~20] 다음을 듣고 여자의 중심 생각으로 가장 알맞은 것을 고르십시오. (4점)',
    instruction: '다음을 듣고 여자의 중심 생각으로 가장 알맞은 것을 고르십시오.',
    dialogue: [
      { speaker: 'man', text: '소장님, 이번에 완공된 도심 공공도서관은 기존 건물들과 달리 벽면 전체를 유리로 만들고 옥상정원을 조성하셨더군요.' },
      { speaker: 'woman', text: '네, 과거의 도서관이 단순히 책을 보관하고 침묵 속에서 공부만 하는 폐쇄적인 공간이었다면, 현대의 도서관은 시민들이 자연을 느끼며 소통하는 열린 문화 쉼터가 되어야 한다고 생각합니다.' },
      { speaker: 'man', text: '실제로 방문객들의 반응도 무척 뜨겁다고 들었습니다.' },
      { speaker: 'woman', text: '책을 읽지 않더라도 누구나 편안히 찾아와 마음의 여유를 누릴 수 있는 공간, 그것이 바로 도심 공공건축이 지향해야 할 가치입니다.' }
    ],
    audioScript: `[남자]: 소장님, 이번에 완공된 도심 공공도서관은 기존 건물들과 달리 벽면 전체를 유리로 만들고 옥상정원을 조성하셨더군요.
[여자]: 네, 과거의 도서관이 단순히 책을 보관하고 침묵 속에서 공부만 하는 폐쇄적인 공간이었다면, 현대의 도서관은 시민들이 자연을 느끼며 소통하는 열린 문화 쉼터가 되어야 한다고 생각합니다.
[남자]: 실제로 방문객들의 반응도 무척 뜨겁다고 들었습니다.
[여자]: 책을 읽지 않더라도 누구나 편안히 찾아와 마음의 여유를 누릴 수 있는 공간, 그것이 바로 도심 공공건축이 지향해야 할 가치입니다.`,
    options: [
      '공공도서관은 시민들이 소통하고 쉴 수 있는 열린 복합 문화 공간이어야 한다.',
      '도서관에서는 조용히 책만 읽을 수 있도록 철저한 침묵을 유지해야 한다.',
      '공공건축물은 디자인보다는 건축 비용 절감을 최우선시해야 한다.',
      '도서관의 주된 기능은 희귀 서적을 안전하게 보관하는 것에 국한된다.'
    ],
    correctAnswer: 1,
    translation: `[Hội thoại nghe]:
[Nam]: Thưa viện trưởng, thư viện công cộng trong thành phố vừa hoàn thành lần này khác với các tòa nhà trước đây, bà đã làm toàn bộ tường bằng kính và xây cả vườn trên sân thượng nữa nhỉ.
[Nữ]: Vâng, nếu thư viện trong quá khứ chỉ đơn thuần là không gian khép kín để cất giữ sách và học tập trong im lặng, thì thư viện thời hiện đại tôi nghĩ phải trở thành một chốn nghỉ chân văn hóa mở để người dân vừa cảm nhận thiên nhiên vừa giao lưu kết nối.
[Nam]: Nghe nói phản ứng của khách tham quan trên thực tế cũng rất tích cực.
[Nữ]: Kể cả không đọc sách, ai cũng có thể thảnh thơi tìm đến tận hưởng sự thư thái tâm hồn, đó mới chính là giá trị mà kiến trúc công cộng đô thị nên hướng tới.
[Các lựa chọn]:
① Thư viện công cộng phải là không gian văn hóa phức hợp mở để người dân giao lưu và nghỉ ngơi.
② Trong thư viện phải giữ sự im lặng tuyệt đối để chỉ đọc sách.
③ Công trình kiến trúc công cộng nên ưu tiên tiết kiệm chi phí hơn là thiết kế.
④ Chức năng chính của thư viện chỉ giới hạn ở việc lưu trữ an toàn các cuốn sách quý hiếm.`,
    explanation: 'Người nữ nói rõ trọng tâm suy nghĩ của mình: "현대의 도서관은 시민들이 자연을 느끼며 소통하는 열린 문화 쉼터가 되어야 한다" (Thư viện hiện đại phải trở thành chốn nghỉ chân văn hóa mở để người dân cảm nhận thiên nhiên và giao lưu).',
    keyPoints: [
      { term: '쉼터', meaning: 'Chốn dừng chân, nơi nghỉ ngơi' },
      { term: '폐쇄적이다', meaning: 'Khép kín, bế quan tỏa cảng' },
      { term: '지향하다', meaning: 'Hướng tới (mục tiêu, giá trị)' }
    ],
    examTip: 'Nghe thấy cấu trúc tương phản: "과거에는 A였지만, 현대에는 B여야 한다" -> B chính là suy nghĩ trọng tâm (중심 생각).',
    sourceExam: 'TOPIK II 72회 기출 듣기',
    level: 'TOPIK 4'
  },
  {
    id: 'l-q18',
    typeId: 'listen-type-4',
    questionNumberLabel: '[17~20] 다음을 듣고 남자의 중심 생각으로 가장 알맞은 것을 고르십시오. (4점)',
    instruction: '다음을 듣고 남자의 중심 생각으로 가장 알맞은 것을 고르십시오.',
    dialogue: [
      { speaker: 'woman', text: '팀장님, 요즘 많은 청년 구직자들이 연봉보다는 정시 퇴근과 워라밸이 보장되는 직장을 더 선호한다고 하네요.' },
      { speaker: 'man', text: '네, 저도 공감합니다. 높은 연봉도 중요하지만, 개인의 삶과 건강이 뒷받침되지 않는다면 오래 일할 수 있는 원동력을 잃게 됩니다.' },
      { speaker: 'woman', text: '하지만 기업 입장에서는 업무 효율이 떨어지지 않을까 걱정하는 시선도 있습니다.' },
      { speaker: 'man', text: '오히려 충분한 휴식을 통해 재충전할 때 창의적인 아이디어와 높은 업무 집중력이 발휘됩니다. 일과 삶의 균형은 직원의 행복뿐 아니라 기업의 장기적인 성장에도 필수적인 요소입니다.' }
    ],
    audioScript: `[여자]: 팀장님, 요즘 많은 청년 구직자들이 연봉보다는 정시 퇴근과 워라밸이 보장되는 직장을 더 선호한다고 하네요.
[남자]: 네, 저도 공감합니다. 높은 연봉도 중요하지만, 개인의 삶과 건강이 뒷받침되지 않는다면 오래 일할 수 있는 원동력을 잃게 됩니다.
[여자]: 하지만 기업 입장에서는 업무 효율이 떨어지지 않을까 걱정하는 시선도 있습니다.
[남자]: 오히려 충분한 휴식을 통해 재충전할 때 창의적인 아이디어와 높은 업무 집중력이 발휘됩니다. 일과 삶의 균형은 직원의 행복뿐 아니라 기업의 장기적인 성장에도 필수적인 요소입니다.`,
    options: [
      '일과 삶의 균형(워라밸)은 직원과 기업의 지속 가능한 성장에 필수적이다.',
      '청년 구직자들은 직장을 선택할 때 무조건 연봉 액수를 우선시해야 한다.',
      '정시 퇴근 제도는 기업의 전반적인 생산성을 심각하게 저하시킨다.',
      '휴식 시간보다는 야근 시간을 늘려야 업무 능률이 올라간다.'
    ],
    correctAnswer: 1,
    translation: `[Hội thoại nghe]:
[Nữ]: Trưởng nhóm ơi, dạo này nhiều bạn trẻ tìm việc chuộng những nơi làm việc tan sở đúng giờ và đảm bảo cân bằng giữa công việc và cuộc sống (work-life balance) hơn là mức lương cao đấy ạ.
[Nam]: Ừ, tôi cũng rất đồng tình. Lương cao cũng quan trọng đấy, nhưng nếu cuộc sống cá nhân và sức khỏe không được bảo đảm thì ta sẽ mất đi động lực để làm việc lâu dài.
[Nữ]: Nhưng phía doanh nghiệp cũng có cái nhìn e ngại rằng hiệu quả công việc có thể bị sụt giảm.
[Nam]: Trái lại, khi được nạp lại năng lượng qua sự nghỉ ngơi đầy đủ thì ý tưởng sáng tạo và sự tập trung cao độ trong công việc mới được phát huy. Cân bằng giữa công việc và đời sống không chỉ vì hạnh phúc của nhân viên mà còn là yếu tố thiết yếu cho sự phát triển lâu dài của doanh nghiệp.
[Các lựa chọn]:
① Cân bằng công việc và cuộc sống (work-life balance) là thiết yếu cho sự phát triển bền vững của cả nhân viên và doanh nghiệp.
② Các bạn trẻ tìm việc cần ưu tiên tuyệt đối số tiền lương khi chọn công ty.
③ Chế độ tan sở đúng giờ làm suy giảm nghiêm trọng năng suất chung của công ty.
④ Cần tăng thời gian tăng ca thay vì nghỉ ngơi để nâng cao năng suất công việc.`,
    explanation: 'Người nam nhấn mạnh câu kết luận: "일과 삶의 균형은 직원의 행복뿐 아니라 기업의 장기적인 성장에도 필수적인 요소입니다" (Cân bằng giữa công việc và đời sống là yếu tố thiết yếu cho sự phát triển dài hạn của doanh nghiệp).',
    keyPoints: [
      { term: '워라밸 (Work-Life Balance)', meaning: 'Cân bằng giữa công việc và cuộc sống' },
      { term: '원동력', meaning: 'Động lực cốt lõi' },
      { term: '필수적이다', meaning: 'Thiết yếu, bắt buộc phải có' }
    ],
    examTip: 'Chủ đề đời sống công sở hiện đại và 워라밸 là chủ đề "tủ" xuất hiện liên tục trong đề thi nghe TOPIK II.',
    sourceExam: 'TOPIK II 83회 기출 듣기',
    level: 'TOPIK 4'
  }
];
