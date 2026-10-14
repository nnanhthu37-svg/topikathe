import { Question } from '../types/topik';

export const INITIAL_QUESTIONS: Question[] = [
  // --- DẠNG 1: Điền ngữ pháp vào chỗ trống (Câu 1-2) ---
  {
    id: 'q-d1-1',
    typeId: 'type-1',
    questionNumberLabel: '[1~2] ( )에 들어갈 가장 알맞은 것을 고르십시오.',
    instruction: '다음 문장의 ( )에 들어갈 가장 알맞은 것을 고르십시오.',
    passage: '어제 밤늦게까지 시험공부를 ( ) 아침에 늦잠을 자고 말았다.',
    options: [
      '하느라고',
      '하더라도',
      '하더니',
      '하길래'
    ],
    correctAnswer: 1,
    translation: 'Vì tối qua mải học thi đến tận khuya (하느라고) nên sáng nay tôi đã ngủ quên mất.',
    explanation: 'Cấu trúc "-느라고" dùng để chỉ nguyên nhân dẫn đến một kết quả tiêu cực hoặc việc không mong muốn. Thường đi kèm với việc tốn thời gian, công sức cho hành động ở vế trước khiến vế sau bị cản trở (ngủ quên). Phương án 2 (-더라도: cho dù), 3 (-더니: thế mà), 4 (-길래: vì thấy... nên - dùng trong văn nói) đều không phù hợp ngữ cảnh thi TOPIK.',
    keyPoints: [
      { term: '-느라고', meaning: 'Vì mải... nên (kết quả tiêu cực, tốn thời gian)' },
      { term: '늦잠을 자다', meaning: 'Ngủ nướng, ngủ quên mất' },
      { term: '-고 말다', meaning: 'Rốt cuộc đành/đã lỡ... mất (thể hiện sự tiếc nuối)' }
    ],
    examTip: 'Gặp vế sau là kết quả không tốt (mệt mỏi, ngủ quên, không kịp làm gì) do tốn nhiều thì giờ vế trước -> Hãy ưu tiên ngay đáp án có -느라고!',
    sourceExam: 'TOPIK II 64회 기출',
    level: 'TOPIK 3-4',
    category: 'Ngữ pháp chỉ nguyên nhân'
  },
  {
    id: 'q-d1-2',
    typeId: 'type-1',
    questionNumberLabel: '[1~2] ( )에 들어갈 가장 알맞은 것을 고르십시오.',
    instruction: '다음 문장의 ( )에 들어갈 가장 알맞은 것을 고르십시오.',
    passage: '한국 전통문화를 직접 ( ) 인사동에 자주 가곤 한다.',
    options: [
      '체험할 겸',
      '체험하는 척',
      '체험한 셈 치고',
      '체험하도록'
    ],
    correctAnswer: 1,
    translation: 'Để vừa kết hợp trải nghiệm trực tiếp văn hóa truyền thống Hàn Quốc (체험할 겸), tôi thường hay ghé Insadong.',
    explanation: 'Cấu trúc "-(으)ㄹ 겸 (해서)" biểu thị mục đích kép: làm hành động này kết hợp tiện thể làm hành động khác. Phương án 2 (-는 척: giả vờ), 3 (-ㄴ 셈 치고: coi như là), 4 (-도록: để/khiến cho) không hợp logic câu.',
    keyPoints: [
      { term: '-(으)ㄹ 겸', meaning: 'Tiện thể, kiêm luôn (thực hiện 2 mục đích cùng lúc)' },
      { term: '체험하다', meaning: 'Trải nghiệm' },
      { term: '-곤 하다', meaning: 'Thường hay làm gì đó (thói quen định kỳ)' }
    ],
    examTip: 'Khi câu nói về việc đi đến một địa điểm để thực hiện mục đích vừa A vừa B -> Cấu trúc -(으)ㄹ 겸 rất hay xuất hiện trong 2 câu đầu của TOPIK II.',
    sourceExam: 'TOPIK II 60회 기출',
    level: 'TOPIK 3-4',
    category: 'Ngữ pháp chỉ mục đích'
  },
  {
    id: 'q-d1-3',
    typeId: 'type-1',
    questionNumberLabel: '[1~2] ( )에 들어갈 가장 알맞은 것을 고르십시오.',
    instruction: '다음 문장의 ( )에 들어갈 가장 알맞은 것을 고르십시오.',
    passage: '비가 올 때 우산을 챙기지 않으면 감기에 ( ).',
    options: [
      '걸릴 뻔했다',
      '걸리기 십상이다',
      '걸릴 리가 없다',
      '걸리는 편이다'
    ],
    correctAnswer: 2,
    translation: 'Nếu trời mưa mà không mang theo ô thì rất dễ bị cảm cúm (걸리기 십상이다).',
    explanation: 'Cấu trúc "-기 십상이다" mang ý nghĩa "rất dễ, khả năng cao sẽ xảy ra việc không hay". Phương án 1 (-ㄹ 뻔했다: suýt nữa thì - thì quá khứ), 3 (-ㄹ 리가 없다: làm sao có lý nào lại), 4 (-는 편이다: thuộc diện/thuộc tuýp) không khớp với điều kiện giả định vế trước.',
    keyPoints: [
      { term: '-기 십상이다', meaning: 'Rất dễ bị, mười phần thì chắc chín (việc xấu)' },
      { term: '챙기다', meaning: 'Chuẩn bị, đem theo chu đáo' }
    ],
    examTip: 'Khi gặp vế trước là giả định sai lầm ("nếu không làm...") dẫn đến hậu quả tất yếu -> Đáp án -기 십상이다 là từ vựng ngữ pháp kinh điển TOPIK II.',
    sourceExam: 'TOPIK II 83회 기출',
    level: 'TOPIK 4',
    category: 'Ngữ pháp trung cấp'
  },

  // --- DẠNG 2: Chọn câu có cấu trúc ngữ pháp tương đương (Câu 3-4) ---
  {
    id: 'q-d2-1',
    typeId: 'type-2',
    questionNumberLabel: '[3~4] 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    instruction: '다음 문장의 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    passage: '누구나 살다 보면 실수를 [하기 마련이다].',
    options: [
      '하는 법이다',
      '하는 셈이다',
      '할 턱이 없다',
      '할 뿐이다'
    ],
    correctAnswer: 1,
    translation: 'Ai sống trên đời thì đương nhiên cũng sẽ có lúc phạm sai lầm.',
    explanation: 'Ngữ pháp "-기 마련이다" biểu thị quy luật tự nhiên, điều tất yếu xảy ra ("đương nhiên là như vậy"), hoàn toàn đồng nghĩa với cấu trúc "-는 법이다". Các phương án khác: -는 셈이다 (coi như là), -ㄹ 턱이 없다 (lẽ nào lại thế), -ㄹ 뿐이다 (chỉ có thể).',
    keyPoints: [
      { term: '-기 마련이다', meaning: 'Đương nhiên là, ắt hẳn phải vậy' },
      { term: '-는 법이다', meaning: 'Theo lẽ thường, đương nhiên như vậy' },
      { term: '실수하다', meaning: 'Phạm sai sót, nhầm lẫn' }
    ],
    equivalentGrammars: [
      {
        pattern: '-는 법이다',
        meaningVi: 'Đương nhiên là, theo lẽ thường tình ắt sẽ xảy ra',
        comparisonNote: 'Đồng nghĩa 100% với -기 마련이다 trong các câu châm ngôn, quy luật tự nhiên hoặc hiện tượng xã hội tất yếu.',
        exampleKo: '시간이 지나면 슬픔도 잊혀지는 법이다.',
        exampleVi: 'Thời gian trôi qua thì nỗi buồn ắt cũng sẽ nguôi ngoai.'
      },
      {
        pattern: '-게 마련이다',
        meaningVi: 'Đương nhiên là (biến thể trợ từ)',
        comparisonNote: 'Hoàn toàn tương đương với -기 마련이다, thường xuất hiện trong văn nói hoặc văn phong báo chí.',
        exampleKo: '노력하지 않으면 뒤처지게 마련이다.',
        exampleVi: 'Nếu không nỗ lực thì đương nhiên sẽ bị tụt lại phía sau.'
      },
      {
        pattern: '-게 되어 있다',
        meaningVi: 'Được định sẵn sẽ như vậy, theo quy luật tự nhiên',
        comparisonNote: 'Nhấn mạnh vào tính quy luật khách quan, tiến trình tự nhiên không thể đảo ngược.',
        exampleKo: '모든 비밀은 언젠가 밝혀지게 되어 있다.',
        exampleVi: 'Mọi bí mật rồi cũng sẽ có ngày bị phơi bày ra ánh sáng.'
      }
    ],
    examTip: 'Cặp đồng nghĩa vàng TOPIK: "-기 마련이다 = -는 법이다 = -게 되어 있다". Khi thấy 1 trong các cấu trúc này, chọn ngay cấu trúc còn lại!',
    sourceExam: 'TOPIK II 52회 기출',
    level: 'TOPIK 3-4',
    category: 'Cặp ngữ pháp đồng nghĩa'
  },
  {
    id: 'q-d2-2',
    typeId: 'type-2',
    questionNumberLabel: '[3~4] 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    instruction: '다음 문장의 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    passage: '그 친구는 [공부를 잘할 뿐만 아니라] 성격도 참 좋다.',
    options: [
      '공부를 잘하는 데다가',
      '공부를 잘할 텐데',
      '공부를 잘할 지경이라서',
      '공부를 잘하기는커녕'
    ],
    correctAnswer: 1,
    translation: 'Người bạn đó không những học giỏi mà tính tình cũng rất tốt.',
    explanation: 'Cấu trúc "-(으)ㄹ 뿐만 아니라" mang nghĩa bổ sung "không những... mà còn...", tương đương với cấu trúc "-는 데다가 (thêm vào đó / hơn nữa)". Lựa chọn 1 "공부를 잘하는 데다가" hoàn toàn đồng nghĩa.',
    keyPoints: [
      { term: '-(으)ㄹ 뿐만 아니라', meaning: 'Không những... mà còn...' },
      { term: '-는 데다가', meaning: 'Thêm vào đó, hơn nữa (cùng chiều hướng tốt/xấu)' },
      { term: '성격', meaning: 'Tính cách' }
    ],
    equivalentGrammars: [
      {
        pattern: '-(으)ㄴ/는 데다가',
        meaningVi: 'Thêm vào đó, hơn nữa (cùng chiều tốt hoặc xấu)',
        comparisonNote: 'Dùng để cộng dồn thêm một tính chất hoặc sự việc cùng chiều hướng với vế trước (tốt + tốt, xấu + xấu).',
        exampleKo: '비가 오는 데다가 바람까지 세차게 분다.',
        exampleVi: 'Trời vừa mưa thêm vào đó gió còn thổi rất mạnh.'
      },
      {
        pattern: '-(으)ㄹ 뿐더러',
        meaningVi: 'Không những... mà còn... (văn viết trang trọng)',
        comparisonNote: 'Đồng nghĩa hoàn toàn với -(으)ㄹ 뿐만 아니라 nhưng mang sắc thái văn viết trang trọng, học thuật hơn.',
        exampleKo: '이 책은 내용이 유익할 뿐더러 재미도 있다.',
        exampleVi: 'Cuốn sách này không những nội dung bổ ích mà còn rất thú vị.'
      },
      {
        pattern: '-(으)ㄹ 겸 (해서)',
        meaningVi: 'Tiện thể kiêm luôn mục đích thứ 2',
        comparisonNote: 'Cũng mang tính chất bổ sung nhưng tập trung vào MỤC ĐÍCH của hành động (vừa để A vừa để B).',
        exampleKo: '운동도 할 겸 산책도 할 겸 공원에 나왔다.',
        exampleVi: 'Vừa để tập thể dục vừa tiện thể đi dạo tôi đã ra công viên.'
      }
    ],
    examTip: 'Cặp bổ sung cộng dồn: "-(으)ㄹ 뿐만 아니라 = -(으)ㄹ 뿐더러 = -(으)ㄴ/는 데다가".',
    sourceExam: 'TOPIK II 64회 기출',
    level: 'TOPIK 3-4',
    category: 'Cặp ngữ pháp đồng nghĩa'
  },
  {
    id: 'q-d2-3',
    typeId: 'type-2',
    questionNumberLabel: '[3~4] 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    instruction: '다음 문장의 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    passage: '퇴근 시간이 [되자마자] 직원들은 일제히 사무실을 나섰다.',
    options: [
      '되기가 무섭게',
      '될 정도로',
      '될 리 만무하게',
      '되자니'
    ],
    correctAnswer: 1,
    translation: 'Ngay khi vừa đến giờ tan sở, các nhân viên đồng loạt rời khỏi văn phòng.',
    explanation: '"-자마자" đồng nghĩa với "-기가 무섭게" hoặc "-는 대로" (ngay khi làm xong việc gì thì lập tức làm việc tiếp theo). Phương án 1 "되기가 무섭게" thể hiện tính chất tiếp nối tức thì chuẩn xác nhất.',
    keyPoints: [
      { term: '-자마자', meaning: 'Ngay khi, vừa mới... thì' },
      { term: '-기가 무섭게', meaning: 'Vừa mới... đã lập tức (tính tức thì)' },
      { term: '일제히', meaning: 'Đồng loạt, nhất tề' }
    ],
    equivalentGrammars: [
      {
        pattern: '-기가 무섭게 / -기가 바쁘게',
        meaningVi: 'Vừa mới... đã lập tức (tính tức thì cực cao)',
        comparisonNote: 'Nhấn mạnh hành động ở vế sau xảy ra ngay tắp lự sau vế trước như không có khoảng cách thời gian.',
        exampleKo: '수업이 끝나기가 무섭게 학생들이 교실을 빠져나갔다.',
        exampleVi: 'Tiết học vừa dứt một cái là học sinh đã lập tức ùa ra khỏi lớp.'
      },
      {
        pattern: '-는 대로',
        meaningVi: 'Ngay khi làm xong... thì liền làm tiếp',
        comparisonNote: 'Tương đương với -자마자 khi gắn với động từ ở hiện tại/tương lai (làm xong A thì làm ngay B).',
        exampleKo: '도착하는 대로 바로 전화해 주세요.',
        exampleVi: 'Ngay khi đến nơi hãy gọi điện cho tôi ngay nhé.'
      }
    ],
    examTip: 'Cặp tương đương thời gian liên tục: "-자마자 = -기가 무섭게 = -는 대로".',
    sourceExam: 'TOPIK II 47회 기출',
    level: 'TOPIK 3-4',
    category: 'Cặp ngữ pháp đồng nghĩa'
  },
  {
    id: 'q-d2-4',
    typeId: 'type-2',
    questionNumberLabel: '[3~4] 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    instruction: '다음 문장의 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    passage: '거짓말을 [하느니 차라리] 솔직하게 털어놓겠다.',
    options: [
      '할 바에야',
      '하는 셈 치고',
      '할 리 없이',
      '하는 한이 있어도'
    ],
    correctAnswer: 1,
    translation: 'Thà là thẳng thắn thú nhận còn hơn là nói dối rồi phải hối hận.',
    explanation: 'Cấu trúc "-느니 차라리" mang nghĩa "thà... còn hơn là...", có cấu trúc tương đương kinh điển là "-(으)ㄹ 바에야 / -(으)ㄹ 바에는" (thà làm việc này còn hơn chấp nhận việc tệ hại ở vế kia).',
    keyPoints: [
      { term: '-느니 차라리', meaning: 'Thà... còn hơn là...' },
      { term: '-(으)ㄹ 바에야', meaning: 'Thà... còn hơn là' },
      { term: '털어놓다', meaning: 'Bộc bạch, thú nhận, nói toạc ra' }
    ],
    equivalentGrammars: [
      {
        pattern: '-(으)ㄹ 바에야 / -(으)ㄹ 바에는',
        meaningVi: 'Thà rằng... còn hơn chấp nhận cái tệ hại kia',
        comparisonNote: 'Cặp tương đương số 1 của -느니 차라리 trong đề thi TOPIK II. Cả hai đều thể hiện sự lựa chọn phương án ít tồi tệ hơn.',
        exampleKo: '하루 종일 굶을 바에야 라면이라도 먹겠다.',
        exampleVi: 'Thà ăn tạm gói mì còn hơn là nhịn đói cả ngày.'
      },
      {
        pattern: '-(으)ㄴ/는 대신에',
        meaningVi: 'Bù lại, thay vì...',
        comparisonNote: 'Dùng khi đánh đổi hoặc bù trừ giữa hai việc.',
        exampleKo: '월급이 적은 대신에 근무 시간이 자유롭다.',
        exampleVi: 'Bù lại lương thấp thì giờ giấc làm việc tự do.'
      }
    ],
    examTip: 'Cặp so sánh thà... còn hơn: "-느니 차라리 = -(으)ㄹ 바에야".',
    sourceExam: 'TOPIK II 83회 기출',
    level: 'TOPIK 4',
    category: 'Cặp ngữ pháp đồng nghĩa'
  },
  {
    id: 'q-d2-5',
    typeId: 'type-2',
    questionNumberLabel: '[3~4] 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    instruction: '다음 문장의 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    passage: '그 사람은 무슨 일을 맡기든지 빈틈없이 [처리하는 편이다].',
    options: [
      '처리하는 셈이다',
      '처리할 턱이 없다',
      '처리하는 척한다',
      '처리할 지경이다'
    ],
    correctAnswer: 1,
    translation: 'Người đó dù có giao việc gì đi nữa thì cũng thuộc diện xử lý chu toàn, không kẽ hở.',
    explanation: 'Cấu trúc "-(으)ㄴ/는 편이다" (thuộc diện, coi như là) rất gần nghĩa và hoán đổi được với "-(으)ㄴ/는 셈이다" (tính ra là, xem như là). Các đáp án khác: -ㄹ 턱이 없다 (lẽ nào lại), -는 척하다 (giả vờ), -ㄹ 지경이다 (đến mức).',
    keyPoints: [
      { term: '-(으)ㄴ/는 편이다', meaning: 'Thuộc diện, thiên về' },
      { term: '-(으)ㄴ/는 셈이다', meaning: 'Coi như là, tính ra là' },
      { term: '빈틈없이', meaning: 'Không một kẽ hở, chu toàn' }
    ],
    equivalentGrammars: [
      {
        pattern: '-(으)ㄴ/는 셈이다',
        meaningVi: 'Coi như là, tính ra là',
        comparisonNote: 'Được sử dụng khi sau khi cân nhắc, đánh giá tổng thể thì có thể xem sự việc ở mức độ đó.',
        exampleKo: '이번 시험은 공부를 거의 안 했으니 떨어진 셈이다.',
        exampleVi: 'Kỳ thi này hầu như tôi chẳng học gì nên coi như là trượt rồi.'
      },
      {
        pattern: '-다름없다',
        meaningVi: 'Không khác nào, chẳng khác gì',
        comparisonNote: 'Thường đi với -(으)ㄴ/는 것과 다름없다 mang nghĩa tương đương với -(으)ㄴ/는 셈이다.',
        exampleKo: '그는 내 친형이나 다름없는 사람이다.',
        exampleVi: 'Anh ấy chẳng khác nào anh ruột của tôi.'
      }
    ],
    examTip: 'Cặp đánh giá mức độ tương đối: "-(으)ㄴ/는 편이다 = -(으)ㄴ/는 셈이다 = 다름없다".',
    sourceExam: 'TOPIK II 41회 기출',
    level: 'TOPIK 3-4',
    category: 'Cặp ngữ pháp đồng nghĩa'
  },
  {
    id: 'q-d2-6',
    typeId: 'type-2',
    questionNumberLabel: '[3~4] 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    instruction: '다음 문장의 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    passage: '일기예보를 확인하지 않으면 비를 [맞기 십상이다].',
    options: [
      '맞기 쉽다',
      '맞을 턱이 없다',
      '맞는 셈이다',
      '맞으려던 참이다'
    ],
    correctAnswer: 1,
    translation: 'Nếu không xem dự báo thời tiết thì rất dễ bị dính mưa.',
    explanation: 'Cấu trúc "-기 십상이다" nghĩa là "mười phần thì chắc tới chín, rất dễ bị việc xấu", tương đương hoàn toàn với cấu trúc "-기 쉽다" (dễ bị).',
    keyPoints: [
      { term: '-기 십상이다', meaning: 'Rất dễ bị (việc xấu), 9/10 phần là bị' },
      { term: '-기 쉽다', meaning: 'Dễ xảy ra' }
    ],
    equivalentGrammars: [
      {
        pattern: '-기 쉽다',
        meaningVi: 'Dễ làm gì / Dễ xảy ra (khả năng cao)',
        comparisonNote: 'Cặp hoán đổi trực tiếp của -기 십상이다 trong đề thi TOPIK.',
        exampleKo: '겨울철에는 빙판길에서 넘어지기 쉽다.',
        exampleVi: 'Vào mùa đông rất dễ bị ngã trên đường đóng băng.'
      },
      {
        pattern: '-(으)ㄹ 위험이 있다',
        meaningVi: 'Có nguy cơ bị...',
        comparisonNote: 'Nhấn mạnh rủi ro hoặc hậu quả xấu có thể xảy ra.',
        exampleKo: '무리하게 운동하면 다칠 위험이 있다.',
        exampleVi: 'Nếu vận động quá sức thì có nguy cơ bị chấn thương.'
      }
    ],
    examTip: 'Cặp khả năng xảy ra việc xấu: "-기 십상이다 = -기 쉽다".',
    sourceExam: 'TOPIK II 35회 기출',
    level: 'TOPIK 3',
    category: 'Cặp ngữ pháp đồng nghĩa'
  },
  {
    id: 'q-d2-7',
    typeId: 'type-2',
    questionNumberLabel: '[3~4] 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    instruction: '다음 문장의 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    passage: '평소에 성실한 그 친구가 약속을 [어길 리가 없다].',
    options: [
      '어길 턱이 없다',
      '어기기 마련이다',
      '어길 지경이다',
      '어긴 셈이다'
    ],
    correctAnswer: 1,
    translation: 'Một người bạn bình thường luôn thành thật như cậu ấy thì lẽ nào lại thất hứa.',
    explanation: '"-(으)ㄹ 리가 없다" (không có lý nào lại...) hoàn toàn đồng nghĩa với "-(으)ㄹ 턱이 없다" (lẽ nào lại thế, tuyệt đối không có lý do/cơ sở nào).',
    keyPoints: [
      { term: '-(으)ㄹ 리가 없다', meaning: 'Làm sao có lý nào lại...' },
      { term: '-(으)ㄹ 턱이 없다', meaning: 'Không có lý do/cơ sở nào để như vậy' },
      { term: '어기다', meaning: 'Vi phạm, thất hứa' }
    ],
    equivalentGrammars: [
      {
        pattern: '-(으)ㄹ 턱이 없다',
        meaningVi: 'Không có lý nào lại... (bác bỏ mạnh mẽ)',
        comparisonNote: 'Hoán đổi 100% với -(으)ㄹ 리가 없다 trong các câu phủ định tính khả năng.',
        exampleKo: '열심히 준비했는데 실패할 턱이 없다.',
        exampleVi: 'Đã chuẩn bị chăm chỉ như thế thì không có lý nào lại thất bại.'
      },
      {
        pattern: '-(으)ㄹ 리 만무하다',
        meaningVi: 'Chắc chắn không có chuyện đó (văn viết cao cấp)',
        comparisonNote: 'Sắc thái phủ định tuyệt đối hơn cả -(으)ㄹ 리가 없다.',
        exampleKo: '그 사람이 그 사실을 모를 리 만무하다.',
        exampleVi: 'Người đó tuyệt đối không thể nào không biết sự thật đó được.'
      }
    ],
    examTip: 'Cặp phủ định chắc chắn: "-(으)ㄹ 리가 없다 = -(으)ㄹ 턱이 없다 = -(으)ㄹ 리 만무하다".',
    sourceExam: 'TOPIK II 52회 기출',
    level: 'TOPIK 3-4',
    category: 'Cặp ngữ pháp đồng nghĩa'
  },
  {
    id: 'q-d2-8',
    typeId: 'type-2',
    questionNumberLabel: '[3~4] 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    instruction: '다음 문장의 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    passage: '한국 기업에 취업을 [하고자] 한국어 능력을 꾸준히 길렀다.',
    options: [
      '하려고',
      '하느라고',
      '하더니',
      '한들'
    ],
    correctAnswer: 1,
    translation: 'Nhằm mục đích xin việc vào doanh nghiệp Hàn Quốc, tôi đã kiên trì trau dồi năng lực tiếng Hàn.',
    explanation: 'Đuôi câu "-고자" là ngữ pháp chỉ mục đích mang sắc thái trang trọng, văn viết, tương đương trực tiếp với "-(으)려고" (để, nhằm mục đích). Các đáp án khác: -느라고 (chỉ nguyên nhân tiêu cực), -더니 (nhận định sự thay đổi), -한들 (cho dù có làm vậy đi nữa).',
    keyPoints: [
      { term: '-고자', meaning: 'Để, nhằm mục đích (trang trọng)' },
      { term: '-(으)려고', meaning: 'Để, định (mục đích hành động)' },
      { term: '기르다', meaning: 'Nuôi dưỡng, trau dồi' }
    ],
    equivalentGrammars: [
      {
        pattern: '-(으)려고',
        meaningVi: 'Để, nhằm mục đích',
        comparisonNote: 'Là dạng thông dụng, phổ biến nhất của -고자.',
        exampleKo: '건강을 유지하려고 매일 아침 조깅을 한다.',
        exampleVi: 'Để duy trì sức khỏe, mỗi sáng tôi đều chạy bộ.'
      },
      {
        pattern: '-(으)려던 참이다',
        meaningVi: 'Đang đúng lúc định làm...',
        comparisonNote: 'Dùng khi hành động dự định trùng khớp với thời điểm người khác nhắc đến.',
        exampleKo: '나도 마침 커피를 마시려던 참이었다.',
        exampleVi: 'Tôi cũng vừa đúng lúc đang định uống cà phê.'
      },
      {
        pattern: '-기 위해서',
        meaningVi: 'Để, vì mục đích',
        comparisonNote: 'Chỉ mục đích rõ ràng cho hành động vế sau.',
        exampleKo: '꿈을 이루기 위해서 최선을 다하겠다.',
        exampleVi: 'Để thực hiện ước mơ, tôi sẽ nỗ lực hết mình.'
      }
    ],
    examTip: 'Cặp mục đích: "-고자 = -(으)려고 = -기 위해".',
    sourceExam: 'TOPIK II 60회 기출',
    level: 'TOPIK 3-4',
    category: 'Cặp ngữ pháp đồng nghĩa'
  },
  {
    id: 'q-d2-9',
    typeId: 'type-2',
    questionNumberLabel: '[3~4] 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    instruction: '다음 문장의 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    passage: '시험 합격 여부가 너무 [궁금한 나머지] 밤에 잠을 잘 수가 없었다.',
    options: [
      '너무 궁금해서',
      '궁금할 뿐더러',
      '궁금한 셈 치고',
      '궁금하기는커녕'
    ],
    correctAnswer: 1,
    translation: 'Vì quá tò mò và bồn chồn về kết quả thi nên ban đêm tôi không thể chợp mắt được.',
    explanation: 'Cấu trúc "-(으)ㄴ 나머지" diễn tả tình trạng mức độ cảm xúc hoặc trạng thái quá cao (quá mức) dẫn đến kết quả tiêu cực ở vế sau, tương đương với "너무 -아서/어서" (vì quá... nên).',
    keyPoints: [
      { term: '-(으)ㄴ 나머지', meaning: 'Vì quá... đến nỗi (cảm xúc tột cùng)' },
      { term: '합격 여부', meaning: 'Việc đỗ hay trượt' }
    ],
    equivalentGrammars: [
      {
        pattern: '너무 -아/어서',
        meaningVi: 'Vì quá... nên dẫn tới kết quả',
        comparisonNote: 'Diễn giải trực tiếp nghĩa của -(으)ㄴ 나머지.',
        exampleKo: '너무 긴장해서 말문이 막혔다.',
        exampleVi: 'Vì quá căng thẳng nên nghẹn lời không nói được.'
      },
      {
        pattern: '-(으)ㄴ 탓에',
        meaningVi: 'Tại vì... (nguyên nhân xấu)',
        comparisonNote: 'Quy trách nhiệm nguyên nhân tiêu cực cho vế trước.',
        exampleKo: '잠을 설친 탓에 아침부터 머리가 아프다.',
        exampleVi: 'Tại trằn trọc mất ngủ nên từ sáng đầu đã đau như búa bổ.'
      }
    ],
    examTip: 'Cặp nguyên nhân cực độ: "-(으)ㄴ 나머지 = 너무 -아서/어서 = -느라고".',
    sourceExam: 'TOPIK II 64회 기출',
    level: 'TOPIK 3-4',
    category: 'Cặp ngữ pháp đồng nghĩa'
  },
  {
    id: 'q-d2-10',
    typeId: 'type-2',
    questionNumberLabel: '[3~4] 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    instruction: '다음 문장의 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    passage: '온종일 걸어 다녔더니 다리가 아파서 [주저앉을 지경이다].',
    options: [
      '주저앉을 정도이다',
      '주저앉을 턱이 없다',
      '주저앉는 셈이다',
      '주저앉으려던 참이다'
    ],
    correctAnswer: 1,
    translation: 'Đi bộ suốt cả ngày khiến chân tôi đau đến mức sắp khuỵu ngã xuống.',
    explanation: 'Cấu trúc "-(으)ㄹ 지경이다" diễn tả mức độ sự việc nghiêm trọng đến một trạng thái cận kề, đồng nghĩa với "-(으)ㄹ 정도이다" (đến mức độ).',
    keyPoints: [
      { term: '-(으)ㄹ 지경이다', meaning: 'Đến mức gần như, suýt chừng (tình trạng khốn đốn)' },
      { term: '-(으)ㄹ 정도이다', meaning: 'Đến mức độ' },
      { term: '주저앉다', meaning: 'Ngã khuỵu xuống, ngồi bệt xuống' }
    ],
    equivalentGrammars: [
      {
        pattern: '-(으)ㄹ 정도이다',
        meaningVi: 'Đến mức độ như vậy',
        comparisonNote: 'Tương đương nghĩa 100% với -(으)ㄹ 지경이다 nhưng dùng được cho cả tình huống trung tính và tiêu cực.',
        exampleKo: '목이 마려워서 쓰러질 정도였다.',
        exampleVi: 'Cổ họng khát khô đến mức muốn ngất đi.'
      },
      {
        pattern: '-(으)ㄹ 뻔하다',
        meaningVi: 'Suýt chút nữa thì...',
        comparisonNote: 'Chỉ một sự việc xấu suýt xảy ra nhưng trong thực tế đã không xảy ra.',
        exampleKo: '넘어져서 다칠 뻔했다.',
        exampleVi: 'Suýt chút nữa thì ngã bị thương.'
      }
    ],
    examTip: 'Cặp mức độ cao: "-(으)ㄹ 지경이다 = -(으)ㄹ 정도이다".',
    sourceExam: 'TOPIK II 47회 기출',
    level: 'TOPIK 4',
    category: 'Cặp ngữ pháp đồng nghĩa'
  },

  // --- DẠNG 3: Đọc biển báo, quảng cáo, khẩu hiệu (Câu 5-8) ---
  {
    id: 'q-d3-1',
    typeId: 'type-3',
    questionNumberLabel: '[5~8] 다음은 무엇에 대한 글인지 고르십시오.',
    instruction: '다음 글이 무엇에 대해 설명하고 있는지 가장 알맞은 것을 고르십시오.',
    passage: '입안의 상쾌함이 하루 종일!\n식사 후 3분, 충치 걱정 끝!',
    options: [
      '치약',
      '비누',
      '샴푸',
      '화장수'
    ],
    correctAnswer: 1,
    translation: 'Cảm giác sảng khoái trong khoang miệng suốt cả ngày!\n3 phút sau bữa ăn, hết lo sâu răng!',
    explanation: 'Các từ khóa cốt lõi: "입안" (trong miệng), "상쾌함" (sảng khoái), "식사 후 3분" (3 phút sau ăn), "충치" (sâu răng) -> Rõ ràng đây là quảng cáo cho Kem đánh răng (치약).',
    keyPoints: [
      { term: '치약', meaning: 'Kem đánh răng' },
      { term: '입안', meaning: 'Khoang miệng, trong miệng' },
      { term: '충치', meaning: 'Sâu răng' },
      { term: '상쾌하다', meaning: 'Sảng khoái, thơm mát' }
    ],
    examTip: 'Gạch chân ngay các danh từ và tính từ chỉ công dụng sản phẩm. 충치 (sâu răng) là từ khóa quyết định 100% là 치약 (kem đánh răng).',
    sourceExam: 'TOPIK II 64회 기출',
    level: 'TOPIK 3',
    category: 'Biển quảng cáo'
  },
  {
    id: 'q-d3-2',
    typeId: 'type-3',
    questionNumberLabel: '[5~8] 다음은 무엇에 대한 글인지 고르십시오.',
    instruction: '다음 글이 무엇에 대해 설명하고 있는지 가장 알맞은 것을 고르십시오.',
    passage: '불이 났을 때는 엘리베이터를 타지 마시고\n계단을 이용하여 신속히 대피하십시오.',
    options: [
      '교통안전',
      '화재 예방',
      '대피 요령',
      '전기 절약'
    ],
    correctAnswer: 3,
    translation: 'Khi xảy ra hỏa hoạn, vui lòng không đi thang máy\nmà hãy sử dụng cầu thang bộ để sơ tán nhanh chóng.',
    explanation: 'Đoạn văn hướng dẫn hành động cụ thể cần làm khi có sự cố cháy (không đi thang máy, dùng cầu thang bộ, sơ tán nhanh chóng) -> Đây là "Hướng dẫn/bí quyết sơ tán" (대피 요령). Phương án "화재 예방" (phòng chống cháy nổ) là bẫy vì phòng chống là việc làm trước khi cháy xảy ra.',
    keyPoints: [
      { term: '대피 요령', meaning: 'Bí quyết / hướng dẫn sơ tán, lánh nạn' },
      { term: '화재 예방', meaning: 'Phòng ngừa hỏa hoạn (trước khi xảy ra)' },
      { term: '신속히', meaning: 'Một cách nhanh chóng, thần tốc' }
    ],
    examTip: 'Cảnh giác bẫy: Phân biệt giữa "Hành động xử lý khi sự cố xảy ra" (대피/대처 요령) và "Phòng ngừa trước sự cố" (예방 안내).',
    sourceExam: 'TOPIK II 52회 기출',
    level: 'TOPIK 3',
    category: 'Khẩu hiệu an toàn'
  },

  // --- DẠNG 4: Đọc biểu đồ & thông báo (Câu 9-10) ---
  {
    id: 'q-d4-1',
    typeId: 'type-4',
    questionNumberLabel: '[9~10] 다음 도표의 내용과 같은 것을 고르십시오.',
    instruction: '다음 도표의 내용과 일치하는 것을 고르십시오.',
    passage: `[직장인의 여가 활동 현황 조사]
조사 대상: 직장인 1,000명
1위: 동영상 및 TV 시청 (42%)
2위: 운동 및 스포츠 (26%)
3위: 친구 및 지인 모임 (18%)
4위: 독서 및 자기계발 (14%)`,
    options: [
      '운동을 즐기는 직장인이 전체의 절반을 넘었다.',
      '동영상 및 TV 시청이 가장 높은 비율을 차지했다.',
      '자기계발을 한다는 응답이 모임 활동보다 더 많았다.',
      '친구 및 지인 모임이 두 번째로 많은 것으로 나타났다.'
    ],
    correctAnswer: 2,
    translation: '[Khảo sát hiện trạng hoạt động giải trí của người đi làm]\n1. Xem video & TV: 42%\n2. Tập thể dục & thể thao: 26%\n3. Gặp gỡ bạn bè: 18%\n4. Đọc sách & phát triển bản thân: 14%',
    explanation: 'Đối chiếu phương án với số liệu:\n- Phương án 1: Vận động chiếm 26%, không thể "vượt quá một nửa" (절반을 넘다 = >50%) -> Sai.\n- Phương án 2: Xem video/TV chiếm 42% là hạng 1 (가장 높은 비율) -> Đúng hoàn toàn.\n- Phương án 3: Tự phát triển bản thân (14%) ít hơn họp mặt (18%) -> Sai.\n- Phương án 4: Gặp bạn bè xếp thứ 3, không phải thứ 2 (thứ 2 là thể thao) -> Sai.',
    keyPoints: [
      { term: '가장 높은 비율을 차지하다', meaning: 'Chiếm tỷ lệ cao nhất' },
      { term: '절반을 넘다', meaning: 'Vượt quá một nửa (>50%)' },
      { term: '뒤를 잇다', meaning: 'Nối tiếp theo sau (xếp hạng kế tiếp)' }
    ],
    examTip: 'Đọc kỹ các cụm: "절반 이상" (>50%), "가장 많다/적다", "그 뒤를 잇다" (đứng thứ 2). Đọc 4 lựa chọn rồi dò ngược lên biểu đồ để tiết kiệm 1 phút.',
    sourceExam: 'TOPIK II 60회 기출',
    level: 'TOPIK 3-4',
    category: 'Biểu đồ khảo sát'
  },

  // --- DẠNG 5: Sắp xếp thứ tự đoạn văn [가-나-다-라] (Câu 13-15) ---
  {
    id: 'q-d5-1',
    typeId: 'type-5',
    questionNumberLabel: '[13~15] 다음을 순서대로 맞게 배열한 것을 고르십시오.',
    instruction: '다음을 순서대로 맞게 배열한 것을 고르십시오.',
    passage: `(가) 하지만 지나친 운동은 오히려 관절과 근육에 무리를 줄 수 있다.
(나) 건강을 지키기 위해 규칙적으로 운동을 시작하는 사람들이 많다.
(다) 따라서 자신의 체력 수준에 맞춰 서서히 운동량을 늘려 가는 것이 바람직하다.
(라) 적당한 운동은 면역력을 높이고 스트레스를 해소하는 데 큰 도움이 된다.`,
    options: [
      '(나) - (라) - (가) - (다)',
      '(나) - (가) - (라) - (다)',
      '(라) - (나) - (다) - (가)',
      '(가) - (나) - (라) - (다)'
    ],
    correctAnswer: 1,
    translation: '(가) Tuy nhiên, việc vận động quá mức lại có thể gây áp lực lên khớp và cơ bắp.\n(나) Có rất nhiều người bắt đầu tập thể dục đều đặn để giữ gìn sức khỏe.\n(다) Do đó, việc nâng dần lượng vận động phù hợp với thể lực bản thân là điều cần thiết.\n(라) Tập luyện điều độ mang lại sự trợ giúp lớn trong việc nâng cao miễn dịch và giải tỏa căng thẳng.',
    explanation: 'Phân tích logic liên kết đoạn:\n1. Câu mở đầu giới thiệu bối cảnh chung: (나) "Nhiều người bắt đầu tập thể dục để giữ sức khỏe" (loại câu có Nhưng "하지만" như (가) và Vì vậy "따라서" như (다)).\n2. Nối tiếp tác dụng tích cực của việc tập: (라) "Tập điều độ giúp tăng miễn dịch, giảm stress".\n3. Chuyển ý phản biện bằng liên từ: (가) "하지만..." (Tuy nhiên tập quá sức sẽ hại xương khớp).\n4. Rút ra kết luận/giải pháp bằng liên từ: (다) "따라서..." (Do đó nên tăng lượng tập từ từ phù hợp thể lực).\n-> Thứ tự hoàn chỉnh là: (나) - (라) - (가) - (다).',
    keyPoints: [
      { term: '지나치다', meaning: 'Quá mức, thái quá' },
      { term: '무리를 주다', meaning: 'Gây quá tải, làm tổn hại' },
      { term: '바람직하다', meaning: 'Đáng mong đợi, là điều nên làm' }
    ],
    examTip: 'Công thức sắp xếp đoạn văn TOPIK II: [Giới thiệu vấn đề] -> [Mở rộng/Mặt tốt] -> [하지만 (Mặt trái/vấn đề nảy sinh)] -> [따라서 (Giải pháp/Lời khuyên)].',
    sourceExam: 'TOPIK II 64회 기출',
    level: 'TOPIK 4',
    category: 'Sắp xếp đoạn văn'
  },
  {
    id: 'q-d5-2',
    typeId: 'type-5',
    questionNumberLabel: '[13~15] 다음을 순서대로 맞게 배열한 것을 고르십시오.',
    instruction: '다음을 순서대로 맞게 배열한 것을 고르십시오.',
    passage: `(가) 이러한 습관이 반복되면 목 주변 근육이 굳어져 통증이 발생한다.
(나) 최근 스마트폰을 장시간 사용하는 사람들이 늘고 있다.
(다) 스마트폰을 볼 때 고개를 숙이는 자세를 오래 유지하기 때문이다.
(라) 따라서 스마트폰을 사용할 때는 눈높이에 맞추고 자주 스트레칭을 해야 한다.`,
    options: [
      '(나) - (다) - (가) - (라)',
      '(나) - (가) - (다) - (라)',
      '(다) - (가) - (나) - (라)',
      '(라) - (나) - (다) - (가)'
    ],
    correctAnswer: 1,
    translation: '(가) Nếu thói quen này lặp lại, các cơ quanh cổ sẽ bị cứng lại gây đau nhức.\n(나) Gần đây, số người sử dụng điện thoại thông minh trong thời gian dài ngày càng tăng.\n(다) Đó là do khi nhìn điện thoại họ duy trì tư thế cúi đầu quá lâu.\n(라) Do đó, khi dùng điện thoại cần đặt vừa tầm mắt và thường xuyên vươn vai thư giãn.',
    explanation: '1. Câu (나) nêu hiện tượng xã hội mở đầu: người dùng smartphone tăng.\n2. Câu (다) giải thích lý do tư thế cúi đầu ("~때문이다").\n3. Câu (가) nêu hậu quả: "Thói quen này lặp lại..." (이러한 습관 dẫn chiếu từ câu 다).\n4. Câu (라) kết luận giải pháp bắt đầu bằng "따라서".\n-> Thứ tự chuẩn: (나) - (다) - (가) - (라).',
    keyPoints: [
      { term: '고개를 숙이다', meaning: 'Cúi đầu xuống' },
      { term: '눈높이에 맞추다', meaning: 'Điều chỉnh vừa với tầm mắt' },
      { term: '이러한', meaning: 'Như thế này (từ liên kết dẫn chiếu câu trước)' }
    ],
    examTip: 'Từ chỉ định "이러한 + danh từ" luôn luôn phải đứng sau câu đã nhắc đến khái niệm đó.',
    sourceExam: 'TOPIK II 83회 기출',
    level: 'TOPIK 4',
    category: 'Sắp xếp đoạn văn'
  },

  // --- DẠNG 6: Điền câu vào chỗ trống đoạn văn (Câu 16-18) ---
  {
    id: 'q-d6-1',
    typeId: 'type-6',
    questionNumberLabel: '[16~18] 다음을 읽고 ( )에 들어갈 내용으로 가장 알맞은 것을 고르십시오.',
    instruction: '다음 글을 읽고 ( )에 들어갈 가장 알맞은 것을 고르십시오.',
    passage: '사람들은 보통 어려운 문제를 만나면 혼자 고민하기 쉽다. 그러나 다른 사람들과 대화를 나누다 보면 미처 생각하지 못했던 새로운 해결책을 찾기도 한다. 생각의 폭을 넓히고 문제 해결 능력을 기르기 위해서는 ( ) 것이 필요하다.',
    options: [
      '스스로 끝까지 해결하려는',
      '다른 사람의 의견에 귀를 기울이는',
      '문제가 생기기 전에 미리 피하는',
      '결과보다 과정에 만족하는'
    ],
    correctAnswer: 2,
    translation: 'Con người khi gặp vấn đề khó khăn thường dễ một mình trăn trở. Thế nhưng nếu chia sẻ trò chuyện với người khác, ta có thể tìm ra phương án giải quyết mới mà trước đó chưa từng nghĩ tới. Để mở rộng tầm suy nghĩ và rèn luyện năng lực giải quyết vấn đề, việc (lắng nghe ý kiến của người khác) là điều cần thiết.',
    explanation: 'Toàn bộ mạch lập luận nhấn mạnh: một mình trăn trở không bằng "nói chuyện với người khác" (대화를 나누다) để tìm giải pháp mới. Chỗ trống cần một hành động tương ứng với việc trao đổi với mọi người -> "다른 사람의 의견에 귀를 기울이다" (Lắng nghe ý kiến người khác) là đáp án hoàn hảo.',
    keyPoints: [
      { term: '귀를 기울이다', meaning: 'Lắng tai nghe, chú ý lắng nghe ý kiến' },
      { term: '미처', meaning: '(Chưa) kịp, còn chưa tới mức' },
      { term: '생각의 폭을 넓히다', meaning: 'Mở rộng tầm suy nghĩ, tầm nhìn' }
    ],
    examTip: 'Chú ý liên từ đối lập "그러나/하지만" ở câu trước. Nó biến ý từ "một mình" thành "với người khác", giúp định hình ngay nội dung cần điền.',
    sourceExam: 'TOPIK II 64회 기출',
    level: 'TOPIK 4',
    category: 'Điền vào đoạn văn'
  },

  // --- DẠNG 7: Đọc tiêu đề báo chí (Câu 25-27) ---
  {
    id: 'q-d7-1',
    typeId: 'type-7',
    questionNumberLabel: '[25~27] 다음 신문 기사의 제목을 가장 잘 설명한 것을 고르십시오.',
    instruction: '다음 신문 기사의 제목을 가장 잘 설명한 것을 고르십시오.',
    passage: '기름값 고공행진, 서민 지갑 꽁꽁',
    options: [
      '기름값이 많이 올라 서민들이 돈을 잘 쓰지 않고 있다.',
      '기름값이 떨어지자 서민들이 지갑을 새로 사고 있다.',
      '서민들의 생활비가 넉넉해져 기름 소비가 크게 늘었다.',
      '날씨가 추워지면서 기름을 아끼려는 사람들이 늘어났다.'
    ],
    correctAnswer: 1,
    translation: '[Tiêu đề báo]: Giá xăng dầu leo thang phi mã, ví tiền người dân đóng băng cứng ngắc.',
    explanation: '- "고공행진" (diễu hành trên trời cao): ẩn dụ của việc giá cả tăng liên tục, leo thang chóng mặt.\n- "서민 지갑 꽁꽁" (ví người dân đóng băng/thắt chặt): người dân thắt lưng buộc bụng, không dám chi tiêu.\n-> Nghĩa tương đương hoàn chỉnh: "기름값이 많이 올라 서민들이 돈을 잘 쓰지 않고 있다" (Phương án 1).',
    keyPoints: [
      { term: '고공행진', meaning: 'Tăng vọt, leo thang phi mã (giá cả, lạm phát)' },
      { term: '지갑이 꽁꽁 얼어붙다', meaning: 'Ví tiền đóng băng, thắt chặt chi tiêu' },
      { term: '서민', meaning: 'Người dân thường, bình dân' }
    ],
    examTip: 'Từ vựng tiêu đề báo chí rất cô đọng. "고공행진" = tăng cao, "꽁꽁" = đóng băng / thắt chặt không tiêu tiền.',
    sourceExam: 'TOPIK II 52회 기출',
    level: 'TOPIK 4',
    category: 'Tiêu đề báo chí'
  },
  {
    id: 'q-d7-2',
    typeId: 'type-7',
    questionNumberLabel: '[25~27] 다음 신문 기사의 제목을 가장 잘 설명한 것을 고르십시오.',
    instruction: '다음 신문 기사의 제목을 가장 잘 설명한 것을 고르십시오.',
    passage: '시청률 부진 드라마, 조기 종영 불가피',
    options: [
      '드라마의 인기가 높아져 방송 횟수를 늘리기로 했다.',
      '드라마 시청률이 낮아서 예정보다 일찍 끝낼 수밖에 없다.',
      '시청자들의 요구로 인해 드라마의 방영 시간이 앞당겨졌다.',
      '드라마가 큰 호평을 받아 예정대로 모든 방송을 마쳤다.'
    ],
    correctAnswer: 2,
    translation: '[Tiêu đề báo]: Phim truyền hình tỷ suất người xem ảm đạm, kết thúc sớm là điều không thể tránh khỏi.',
    explanation: '- "시청률 부진": rating kém, lượng xem lẹt đẹt.\n- "조기 종영": kết thúc phát sóng sớm hơn lịch ban đầu.\n- "불가피": không thể tránh khỏi, buộc phải làm vậy.\n-> Đồng nghĩa với câu 2: "시청률이 낮아서 예정보다 일찍 끝낼 수밖에 없다".',
    keyPoints: [
      { term: '부진', meaning: 'Trì trệ, ảm đạm, kém cỏi' },
      { term: '조기 종영', meaning: 'Kết thúc phát sóng sớm hơn dự kiến' },
      { term: '불가피하다', meaning: 'Bất khả kháng, không thể tránh khỏi' }
    ],
    examTip: 'Ghi nhớ mẫu báo chí: "A 부진, B 불가피" -> Do A kém nên bắt buộc phải B.',
    sourceExam: 'TOPIK II 64회 기출',
    level: 'TOPIK 4',
    category: 'Tiêu đề báo chí'
  },

  // --- DẠNG 8: Cảm xúc nhân vật & Ý chính tác giả (Câu 19-24, 28-31) ---
  {
    id: 'q-d8-1',
    typeId: 'type-8',
    questionNumberLabel: '[19~24] 다음 글을 읽고 물음에 답하십시오.',
    instruction: '다음 글에 나타난 글쓴이의 심정으로 가장 알맞은 것을 고르십시오.',
    passage: '오랫동안 준비해 온 첫 사진 전시회의 문을 닫는 날이었다. 한 달 동안 수많은 관람객들이 찾아와 내 사진 앞에서 발걸음을 멈추고 고개를 끄덕여 주었다. 사진들을 하나씩 떼어 포장하면서 지나간 시간들이 주마등처럼 스쳐 지나갔다. 비록 몸은 녹초가 되었지만 가슴 깊은 곳에서 말로 다 표현할 수 없는 만족감과 벅찬 감동이 차올랐다.',
    options: [
      '뿌듯하다',
      '억울하다',
      '불안하다',
      '섭섭하다'
    ],
    correctAnswer: 1,
    translation: 'Đó là ngày bế mạc buổi triển lãm ảnh đầu tiên mà tôi đã dày công chuẩn bị suốt bấy lâu nay. Suốt một tháng, vô số khách tham quan đã ghé thăm, dừng bước và gật gù đồng cảm trước những bức ảnh của tôi. Khi tháo từng tấm ảnh xuống đóng gói, những ngày tháng đã qua hiện về như thước phim quay chậm. Dù cơ thể đã kiệt sức rã rời, nhưng tận sâu trong đáy lòng, cảm giác mãn nguyện và niềm xúc động nghẹn ngào khôn xiết cứ dâng trào.',
    explanation: 'Các biểu hiện cảm xúc quyết định: "만족감" (sự mãn nguyện), "벅찬 감동" (cảm động nghẹn ngào, hạnh phúc tràn ngập sau khi hoàn thành mục tiêu lớn) -> Tâm trạng chính xác là "뿌듯하다" (Tự hào, mãn nguyện, tràn trề niềm vui sau thành quả xứng đáng). Các từ khác: 억울하다 (oan ức), 불안하다 (bất an), 섭섭하다 (tiếc nuối, chạnh lòng) đều sai.',
    keyPoints: [
      { term: '뿌듯하다', meaning: 'Hãnh diện, mãn nguyện, tràn ngập tự hào vì làm được việc tốt' },
      { term: '녹초가 되다', meaning: 'Mệt rã rời, kiệt sức' },
      { term: '벅차다', meaning: 'Dâng trào, nghẹn ngào (cảm xúc)' },
      { term: '주마등처럼 스치다', meaning: 'Chớp qua như chiếc đèn kéo quân' }
    ],
    examTip: 'Bộ từ vựng tâm trạng thường gặp trong TOPIK II: 뿌듯하다 (mãn nguyện), 후련하다 (nhẹ nhõm trút được gánh nặng), 안타깝다 (xót xa), 초조하다 (bồn chồn), 쑥스럽다 (ngại ngùng).',
    sourceExam: 'TOPIK II 60회 기출',
    level: 'TOPIK 4',
    category: 'Tâm trạng nhân vật'
  },
  {
    id: 'q-d8-2',
    typeId: 'type-8',
    questionNumberLabel: '[28~31] 다음 글의 중심 생각으로 가장 알맞은 것을 고르십시오.',
    instruction: '다음 글을 읽고 글쓴이의 중심 생각으로 가장 알맞은 것을 고르십시오.',
    passage: '실패를 두려워하는 사람은 새로운 도전을 시도하지 않는다. 그러나 역사적으로 위대한 발견이나 혁신은 모두 수많은 실패의 축적 위에서 탄생했다. 실패는 단순히 목표를 달성하지 못한 것이 아니라, 성공으로 나아가기 위한 귀중한 학습의 기회이다. 그러므로 우리는 실패를 피하려 하기보다 실패를 통해 배우는 자세를 가져야 한다.',
    options: [
      '실패를 피하려면 철저한 준비가 우선되어야 한다.',
      '실패를 두려워하지 말고 배움의 계기로 삼아야 한다.',
      '역사적 발견을 위해서는 과거의 실패를 잊어야 한다.',
      '새로운 도전을 하기 전에 현실적인 목표를 세워야 한다.'
    ],
    correctAnswer: 2,
    translation: 'Người sợ thất bại sẽ không dám thử thách những điều mới mẻ. Tuy nhiên trong lịch sử, mọi phát minh vĩ đại hay đổi mới đều ra đời trên sự tích lũy của vô số lần thất bại. Thất bại không đơn thuần là không đạt được mục tiêu, mà là cơ hội học hỏi quý báu để tiến tới thành công. Vì vậy, thay vì trốn tránh thất bại, chúng ta phải có thái độ học hỏi từ thất bại.',
    explanation: 'Câu văn then chốt nằm ở kết luận cuối bài sau liên từ "그러므로" (Vì vậy): "우리는 실패를 피하려 하기보다 실패를 통해 배우는 자세를 가져야 한다" (Thay vì tránh né, hãy có thái độ học hỏi từ thất bại). Câu này đồng nghĩa trọn vẹn với đáp án 2: "실패를 두려워하지 말고 배움의 계기로 삼아야 한다".',
    keyPoints: [
      { term: '중심 생각', meaning: 'Ý nghĩ trọng tâm / Quan điểm cốt lõi của tác giả' },
      { term: '축적', meaning: 'Tích lũy' },
      { term: '계기로 삼다', meaning: 'Lấy làm động lực/cơ hội để làm gì' }
    ],
    examTip: 'Công thức tìm Ý CHÍNH (중심 생각): Tìm các câu chứa liên từ kết luận như 그러므로, 따라서, 결국 và các đuôi câu đề xuất như -아야 한다, -ㄹ 필요가 있다, -는 것이 바람직하다.',
    sourceExam: 'TOPIK II 83회 기출',
    level: 'TOPIK 4',
    category: 'Ý chính tác giả'
  },

  // --- DẠNG 1 MỞ RỘNG: ĐA DẠNG NGỮ PHÁP TRUNG CẤP (CÂU 1-2) ---
  {
    id: 'q-d1-4',
    typeId: 'type-1',
    questionNumberLabel: '[1~2] ( )에 들어갈 가장 알맞은 것을 고르십시오.',
    instruction: '다음 문장의 ( )에 들어갈 가장 알맞은 것을 고르십시오.',
    passage: '갑자기 내린 폭설로 도로가 ( ) 출근길이 극심한 정체를 빚었다.',
    options: [
      '통제되는 바람에',
      '통제되도록',
      '통제되다시피',
      '통제된 셈 치고'
    ],
    correctAnswer: 1,
    translation: 'Do đường sá bị phong tỏa vì trận bão tuyết rơi bất ngờ (통제되는 바람에) nên đường đi làm đã xảy ra ùn tắc nghiêm trọng.',
    explanation: 'Cấu trúc "-(으)ㄴ/는 바람에" biểu thị nguyên nhân bất ngờ, ngoại cảnh ngoài ý muốn dẫn đến kết quả tiêu cực ở vế sau. Phương án 2 (-도록: để/khiến), 3 (-다시피: như đã), 4 (-ㄴ 셈 치고: coi như là) đều không diễn tả nguyên nhân khách quan gây hậu quả xấu.',
    keyPoints: [
      { term: '-(으)ㄴ/는 바람에', meaning: 'Do/Vì... (nguyên nhân ngoại cảnh bất ngờ, kết quả xấu)' },
      { term: '폭설', meaning: 'Bão tuyết, tuyết rơi dữ dội' },
      { term: '정체를 빚다', meaning: 'Gây ra sự ùn tắc, tắc nghẽn giao thông' }
    ],
    examTip: 'Khi nguyên nhân là thời tiết bất thường (폭우, 폭설, 태풍) hoặc sự cố bất ngờ dẫn đến trễ giờ, hỏng việc -> "-는 바람에" luôn là đáp án số 1!',
    sourceExam: 'TOPIK II 83회 기출 변형',
    level: 'TOPIK 3-4',
    category: 'Ngữ pháp chỉ nguyên nhân'
  },
  {
    id: 'q-d1-5',
    typeId: 'type-1',
    questionNumberLabel: '[1~2] ( )에 들어갈 가장 알맞은 것을 고르십시오.',
    instruction: '다음 문장의 ( )에 들어갈 가장 알맞은 것을 고르십시오.',
    passage: '약을 먹고 푹 쉬었지만 감기가 ( ) 열이 더 심하게 올랐다.',
    options: [
      '낫기는커녕',
      '낫는 편이지만',
      '낫는 척하면서',
      '낫는 한편'
    ],
    correctAnswer: 1,
    translation: 'Dù đã uống thuốc và nghỉ ngơi kỹ nhưng bệnh cảm chẳng những không thuyên giảm (낫기는커녕) mà sốt còn tăng cao hơn.',
    explanation: '"-기는커녕" dùng để phủ định hoàn toàn điều được kỳ vọng ở vế trước ("nói chi đến việc khỏi bệnh"), và nêu ra một thực tế tồi tệ hơn ở vế sau ("sốt còn nặng hơn").',
    keyPoints: [
      { term: '-기는커녕', meaning: 'Nói chi đến..., đâu chẳng thấy mà lại...' },
      { term: '낫다', meaning: 'Khỏi bệnh, thuyên giảm' },
      { term: '열이 오르다', meaning: 'Phát sốt, sốt tăng cao' }
    ],
    examTip: 'Gặp vế sau tồi tệ hơn vế trước và có ý phủ định kỳ vọng -> Đáp án "-기는커녕" hoặc "-은/는 고사하고".',
    sourceExam: 'TOPIK II 60회 기출 변형',
    level: 'TOPIK 3-4',
    category: 'Ngữ pháp tương phản'
  },
  {
    id: 'q-d1-6',
    typeId: 'type-1',
    questionNumberLabel: '[1~2] ( )에 들어갈 가장 알맞은 것을 고르십시오.',
    instruction: '다음 문장의 ( )에 들어갈 가장 알맞은 것을 고르십시오.',
    passage: '어젯밤 늦게까지 진한 커피를 ( ) 밤새 한숨도 못 잤다.',
    options: [
      '마신 탓에',
      '마신 덕분에',
      '마실 테지만',
      '마시느니'
    ],
    correctAnswer: 1,
    translation: 'Tại vì tối qua uống cà phê đặc quá muộn (마신 탓에) nên suốt cả đêm tôi đã không chợp mắt được tý nào.',
    explanation: '"-(으)ㄴ 탓에" dùng để đổ lỗi cho một nguyên nhân gây ra kết quả tiêu cực. Phương án 2 (-덕분에) chỉ dùng cho nguyên nhân mang lại kết quả tích cực, tốt đẹp.',
    keyPoints: [
      { term: '-(으)ㄴ/는 탓에', meaning: 'Tại vì, do lỗi của... (chỉ kết quả xấu)' },
      { term: '한숨도 못 자다', meaning: 'Không chợp mắt được tý nào' },
      { term: '진하다', meaning: 'Đậm đặc (cà phê, trà)' }
    ],
    examTip: 'Phân biệt rõ: "-탓에" đi với kết quả xấu (mất ngủ, trượt thi) $\\leftrightarrow$ "-덕분에" đi với kết quả tốt (đỗ đạt, thành công).',
    sourceExam: 'TOPIK II 모의평가',
    level: 'TOPIK 3',
    category: 'Ngữ pháp nguyên nhân'
  },
  {
    id: 'q-d1-7',
    typeId: 'type-1',
    questionNumberLabel: '[1~2] ( )에 들어갈 가장 알맞은 것을 고르십시오.',
    instruction: '다음 문장의 ( )에 들어갈 가장 알맞은 것을 고르십시오.',
    passage: '그때 친구의 충고에 조금만 더 귀를 ( ) 이런 큰 낭패를 겪지 않았을 것이다.',
    options: [
      '기울였더라면',
      '기울였을망정',
      '기울이더라도',
      '기울이려거든'
    ],
    correctAnswer: 1,
    translation: 'Lúc đó nếu như tôi chịu lắng tai nghe lời khuyên của bạn thêm chút nữa (기울였더라면) thì đã không phải nếm trải nỗi thất bại ê chề thế này.',
    explanation: '"-았/었더라면" giả định một điều trái ngược với sự thật trong quá khứ, vế sau thường kết hợp với đuôi tiếc nuối: "-(으)ㄹ 텐데", "-(으)ㄹ 뻔했다", "-(으)ㄹ 것이다".',
    keyPoints: [
      { term: '-았/었더라면', meaning: 'Giá như mà, nếu mà đã... (tiếc nuối quá khứ)' },
      { term: '충고', meaning: 'Lời khuyên can chân thành' },
      { term: '낭패를 겪다', meaning: 'Gặp thất bại ê chề, lâm vào thế bí' }
    ],
    examTip: 'Khi vế sau có "-(으)ㄹ 텐데" hoặc "-(으)ㄹ 뻔했다" mang ý tiếc nuối việc quá khứ -> Chọn ngay "-았/었더라면"!',
    sourceExam: 'TOPIK II 73회 기출 변형',
    level: 'TOPIK 4',
    category: 'Ngữ pháp giả định'
  },
  {
    id: 'q-d1-8',
    typeId: 'type-1',
    questionNumberLabel: '[1~2] ( )에 들어갈 가장 알맞은 것을 고르십시오.',
    instruction: '다음 문장의 ( )에 들어갈 가장 알맞은 것을 고르십시오.',
    passage: '온라인 쇼핑은 가격이 저렴하고 ( ) 제품의 실물을 직접 확인할 수 없다는 단점이 있다.',
    options: [
      '편리한 반면에',
      '편리할세라',
      '편리한 셈 치고',
      '편리하느니'
    ],
    correctAnswer: 1,
    translation: 'Mua sắm trực tuyến tuy giá rẻ và tiện lợi nhưng ngược lại (편리한 반면에) lại có nhược điểm là không thể tự tay kiểm tra sản phẩm thật.',
    explanation: '"-(으)ㄴ/는 반면에" dùng để so sánh hai mặt đối lập (ưu điểm vs nhược điểm) của cùng một sự vật hoặc hiện tượng.',
    keyPoints: [
      { term: '-(으)ㄴ/는 반면에', meaning: 'Ngược lại, mặt khác (so sánh 2 mặt đối lập)' },
      { term: '실물', meaning: 'Vật thật, đồ thật' },
      { term: '단점', meaning: 'Khuyết điểm, nhược điểm' }
    ],
    examTip: 'Khi câu nêu 1 vế là mặt tốt (장점) và 1 vế là mặt xấu (단점) -> Đáp án luôn là "-(으)ㄴ/는 반면에".',
    sourceExam: 'TOPIK II 64회 기출 변형',
    level: 'TOPIK 3-4',
    category: 'Ngữ pháp tương phản'
  },

  // --- DẠNG 2 MỞ RỘNG: ĐA DẠNG CẶP ĐỒNG NGHĨA (CÂU 3-4) ---
  {
    id: 'q-d2-5',
    typeId: 'type-2',
    questionNumberLabel: '[3~4] 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    instruction: '다음 문장의 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    passage: '하루 종일 뙤약볕 아래서 일했더니 [피로가 극에 달할 지경이다].',
    options: [
      '피로가 극에 달할 정도로',
      '피로가 극에 달할 텐데',
      '피로가 극에 달할 리 없이',
      '피로가 극에 달한 셈 치고'
    ],
    correctAnswer: 1,
    translation: 'Làm việc cả ngày dưới trời nắng chang chang mệt đến mức kiệt quệ sắp không chịu nổi nữa (극에 달할 지경이다).',
    explanation: 'Cấu trúc "-(으)ㄹ 지경이다" diễn tả mức độ sự việc trầm trọng đến nỗi gần như sắp xảy ra tình trạng đó, hoàn toàn tương đương với "-(으)ㄹ 정도로" (đến mức độ mà).',
    keyPoints: [
      { term: '-(으)ㄹ 지경이다', meaning: 'Đến mức gần như sắp...' },
      { term: '-(으)ㄹ 정도로', meaning: 'Đến mức độ mà...' },
      { term: '극에 달하다', meaning: 'Đạt đến đỉnh điểm, tột cùng' }
    ],
    equivalentGrammars: [
      {
        pattern: '-(으)ㄹ 정도로 / -(으)ㄹ 정도이다',
        meaningVi: 'Đến mức độ mà...',
        comparisonNote: 'Hoàn toàn tương đương với -(으)ㄹ 지경이다 khi phóng đại mức độ nghiêm trọng của trạng thái mệt mỏi, đau đớn.',
        exampleKo: '숨이 턱까지 차오를 정도로 달렸다.',
        exampleVi: 'Tôi đã chạy đến mức thở không ra hơi.'
      },
      {
        pattern: '-(으)ㄹ 뻔하다',
        meaningVi: 'Suýt nữa thì (việc tồi tệ suýt xảy ra)',
        comparisonNote: 'Nhấn mạnh việc đã suýt xảy ra nhưng may mắn không xảy ra.',
        exampleKo: '너무 피곤해서 쓰러질 뻔했다.',
        exampleVi: 'Mệt quá suýt chút nữa là ngã quỵ.'
      }
    ],
    examTip: 'Cặp biểu thị mức độ cực hạn: "-(으)ㄹ 지경이다 = -(으)ㄹ 정도로".',
    sourceExam: 'TOPIK II 83회 기출',
    level: 'TOPIK 4',
    category: 'Cặp ngữ pháp đồng nghĩa'
  },
  {
    id: 'q-d2-6',
    typeId: 'type-2',
    questionNumberLabel: '[3~4] 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    instruction: '다음 문장의 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    passage: '그는 모든 진실을 알고 있으면서도 [모르는 척했다].',
    options: [
      '모르는 체했다',
      '모르는 법이었다',
      '모르는 셈이었다',
      '모를 턱이 없었다'
    ],
    correctAnswer: 1,
    translation: 'Anh ta biết rõ mọi sự thật thế nhưng vẫn giả vờ như không biết gì (모르는 척했다).',
    explanation: '"-는 척하다" biểu thị hành động giả vờ, đóng kịch, hoàn toàn đồng nghĩa 100% với "-는 체하다".',
    keyPoints: [
      { term: '-는 척하다', meaning: 'Giả vờ, làm ra vẻ như' },
      { term: '-는 체하다', meaning: 'Giả vờ, làm bộ làm tịch' }
    ],
    equivalentGrammars: [
      {
        pattern: '-(으)ㄴ/는 체하다',
        meaningVi: 'Giả vờ như...',
        comparisonNote: 'Đồng nghĩa 100% với -(으)ㄴ/는 척하다 trong mọi ngữ cảnh văn phong.',
        exampleKo: '그는 보고도 못 본 체하며 지나쳤다.',
        exampleVi: 'Anh ấy thấy rồi mà vẫn giả vờ như không thấy rồi đi lướt qua.'
      },
      {
        pattern: '시치미를 떼다',
        meaningVi: 'Giả ngơ, vờ như không biết (thành ngữ)',
        comparisonNote: 'Dạng thành ngữ quán dụng biểu thị thái độ vờ ngây thơ vô tội.',
        exampleKo: '자기가 해 놓고 시치미를 떼고 있다.',
        exampleVi: 'Chính mình làm mà lại đang giả ngơ như không biết.'
      }
    ],
    examTip: 'Cặp giả vờ kinh điển: "-는 척하다 = -는 체하다".',
    sourceExam: 'TOPIK II 64회 기출',
    level: 'TOPIK 3-4',
    category: 'Cặp ngữ pháp đồng nghĩa'
  },
  {
    id: 'q-d2-7',
    typeId: 'type-2',
    questionNumberLabel: '[3~4] 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    instruction: '다음 문장의 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오.',
    passage: '매사에 성실하고 정직한 그 사람이 [남을 속였을 리가 없다].',
    options: [
      '남을 속였을 턱이 없다',
      '남을 속였을 텐데',
      '남을 속인 셈이다',
      '남을 속이기 십상이다'
    ],
    correctAnswer: 1,
    translation: 'Người luôn cần mẫn và chính trực trong mọi việc như anh ấy làm sao có lý nào lại lừa gạt người khác (속였을 리가 없다).',
    explanation: '"-(으)ㄹ 리가 없다" dùng để phủ định mạnh mẽ một phỏng đoán ("không thể nào có chuyện đó"), hoàn toàn tương đương với "-(으)ㄹ 턱이 없다" hoặc "-(으)ㄹ 리 만무하다".',
    keyPoints: [
      { term: '-(으)ㄹ 리가 없다', meaning: 'Làm sao có lý nào, không thể nào...' },
      { term: '-(으)ㄹ 턱이 없다', meaning: 'Lẽ nào lại thế, chẳng có lý nào' },
      { term: '속이다', meaning: 'Lừa dối, đánh lừa' }
    ],
    equivalentGrammars: [
      {
        pattern: '-(으)ㄹ 턱이 없다',
        meaningVi: 'Chẳng có lý do/cớ gì để như vậy (không thể nào)',
        comparisonNote: 'Đồng nghĩa hoàn toàn với -(으)ㄹ 리가 없다, biểu thị sự bác bỏ phỏng đoán dứt khoát.',
        exampleKo: '그가 약속을 잊었을 턱이 없다.',
        exampleVi: 'Chẳng có lý nào anh ấy lại quên cuộc hẹn.'
      },
      {
        pattern: '-(으)ㄹ 리 만무하다',
        meaningVi: 'Vạn phần không thể có lý nào (văn viết trang trọng)',
        comparisonNote: 'Dạng trang trọng cao cấp hơn của -(으)ㄹ 리가 없다.',
        exampleKo: '그런 무모한 계획이 성공할 리 만무하다.',
        exampleVi: 'Kế hoạch liều lĩnh như vậy thì vạn phần không thể thành công.'
      }
    ],
    examTip: 'Cặp phủ định phỏng đoán: "-(으)ㄹ 리가 없다 = -(으)ㄹ 턱이 없다 = -(으)ㄹ 리 만무하다".',
    sourceExam: 'TOPIK II 52회 기출',
    level: 'TOPIK 4',
    category: 'Cặp ngữ pháp đồng nghĩa'
  },

  // --- DẠNG 3 MỞ RỘNG: ĐA DẠNG CHỦ ĐỀ BIỂN BÁO, ÁP PHÍCH (CÂU 5-8) ---
  {
    id: 'q-d3-3',
    typeId: 'type-3',
    questionNumberLabel: '[5~8] 다음은 무엇에 대한 글인지 고르십시오.',
    instruction: '다음 글이 무엇에 대해 설명하고 있는지 가장 알맞은 것을 고르십시오.',
    passage: '흐릿했던 세상이 선명하게!\n정밀 시력 검사부터 맞춤 렌즈까지 한 번에!',
    options: [
      '안경점',
      '사진관',
      '미술관',
      '서점'
    ],
    correctAnswer: 1,
    translation: 'Thế giới mờ ảo trở nên rõ nét tinh tường!\nTừ đo khám thị lực chuẩn xác đến tròng kính theo yêu cầu chỉ trong một lần!',
    explanation: 'Các từ khóa: "흐릿하다" (mờ ảo), "선명하게" (rõ nét), "시력 검사" (đo thị lực), "맞춤 렌즈" (kính thuốc/tròng kính) -> Chắc chắn là Tiệm kính mắt (안경점).',
    keyPoints: [
      { term: '안경점', meaning: 'Tiệm kính mắt' },
      { term: '시력 검사', meaning: 'Đo khám thị lực mắt' },
      { term: '선명하다', meaning: 'Rõ ràng, sắc nét' }
    ],
    examTip: 'Bắt từ khóa chuyên ngành: 시력 검사 + 렌즈 = 안경점 (tiệm kính).',
    sourceExam: 'TOPIK II 47회 기출',
    level: 'TOPIK 3',
    category: 'Biển quảng cáo dịch vụ'
  },
  {
    id: 'q-d3-4',
    typeId: 'type-3',
    questionNumberLabel: '[5~8] 다음은 무엇에 대한 글인지 고르십시오.',
    instruction: '다음 글이 무엇에 대해 설명하고 있는지 가장 알맞은 것을 고르십시오.',
    passage: '작은 불씨도 다시 보자!\n아름다운 푸른 산, 담배꽁초 하나로 잿더미가 될 수 있습니다.',
    options: [
      '산불 예방',
      '환경 보호',
      '쓰레기 분리배출',
      '등산 안내'
    ],
    correctAnswer: 1,
    translation: 'Tàn lửa nhỏ cũng phải cẩn trọng coi chừng!\nNgọn núi xanh tươi tươi đẹp có thể hóa thành đống tro tàn chỉ vì một mẩu tàn thuốc.',
    explanation: 'Từ khóa: "불씨" (tàn lửa), "푸른 산" (ngọn núi xanh), "담배꽁초" (mẩu thuốc lá), "잿더미" (đống tro tàn) -> Khẩu hiệu phòng chống cháy rừng (산불 예방).',
    keyPoints: [
      { term: '산불 예방', meaning: 'Phòng chống cháy rừng' },
      { term: '불씨', meaning: 'Tàn lửa, đóm lửa' },
      { term: '담배꽁초', meaning: 'Đầu mẩu tàn thuốc lá' },
      { term: '잿더미', meaning: 'Đống tro tàn' }
    ],
    examTip: 'Gặp "불씨 / 담배꽁초" kết hợp với "산" -> 100% là 산불 예방 (phòng cháy rừng).',
    sourceExam: 'TOPIK II 60회 기출',
    level: 'TOPIK 3',
    category: 'Khẩu hiệu nơi công cộng'
  },

  // --- DẠNG 4 MỞ RỘNG: BIỂU ĐỒ & KHẢO SÁT (CÂU 9-10) ---
  {
    id: 'q-d4-2',
    typeId: 'type-4',
    questionNumberLabel: '[9~10] 다음 도표의 내용과 일치하는 것을 고르십시오.',
    instruction: '다음 도표의 내용과 같은 것을 고르십시오.',
    passage: `[20·30대 직장인 이직 사유 조사]
조사 기관: 취업 포털 / 대상: 1,500명
1위: 연봉 및 복지 불만족 (38%)
2위: 개인의 성장 및 역량 개발 부족 (29%)
3위: 직장 내 인간관계 스트레스 (21%)
4위: 출퇴근 거리 및 잦은 야근 (12%)`,
    options: [
      '연봉 불만족을 꼽은 응답자가 전체의 40%를 넘었다.',
      '개인의 성장 부족이 두 번째로 높은 이유로 나타났다.',
      '인간관계 스트레스가 가장 낮은 비율을 차지했다.',
      '출퇴근 거리 문제로 이직한다는 응답이 2위를 차지했다.'
    ],
    correctAnswer: 2,
    translation: '[Khảo sát lý do nhảy việc của nhân viên 20-30 tuổi]\n1. Lương & phúc lợi: 38%\n2. Thiếu cơ hội phát triển bản thân: 29%\n3. Áp lực quan hệ đồng nghiệp: 21%\n4. Đi lại xa & tăng ca nhiều: 12%',
    explanation: 'Đối chiếu các lựa chọn:\n- Câu 1: Lương chiếm 38%, không vượt quá 40% (40%를 넘다) -> Sai.\n- Câu 2: Phát triển bản thân chiếm 29%, là lý do cao thứ hai (두 번째로 높다) -> Đúng chính xác.\n- Câu 3: Thấp nhất là đi lại xa (12%), không phải quan hệ nhân sự -> Sai.\n- Câu 4: Đi lại xa xếp thứ 4, không phải thứ 2 -> Sai.',
    keyPoints: [
      { term: '이직 사유', meaning: 'Lý do thay đổi nơi làm việc, chuyển việc' },
      { term: '두 번째로 높은', meaning: 'Cao thứ hai (xếp hạng 2)' },
      { term: '역량 개발', meaning: 'Phát triển năng lực bản thân' }
    ],
    examTip: 'Đọc kỹ các cụm từ thứ hạng: "가장 높다/낮다", "두 번째로 높다", "그 뒤를 잇다".',
    sourceExam: 'TOPIK II 77회 모의평가',
    level: 'TOPIK 3-4',
    category: 'Biểu đồ khảo sát'
  },

  // --- DẠNG 5 MỞ RỘNG: SẮP XẾP ĐOẠN VĂN [가-나-다-라] (CÂU 13-15) ---
  {
    id: 'q-d5-3',
    typeId: 'type-5',
    questionNumberLabel: '[13~15] 다음을 순서대로 맞게 배열한 것을 고르십시오.',
    instruction: '다음을 순서대로 맞게 배열한 것을 고르십시오.',
    passage: `(가) 반면에 30분 이상 길게 자면 오히려 깊은 수면에 빠져 잠에서 깬 후 더 피곤해질 수 있다.
(나) 적절한 낮잠은 피로를 풀고 업무 집중력을 높이는 데 효과적이다.
(다) 그러므로 낮잠은 15분에서 20분 내외로 가볍게 자는 것이 가장 바람직하다.
(라) 잠깐의 수면만으로도 뇌가 휴식을 취해 기억력이 향상되기 때문이다.`,
    options: [
      '(나) - (라) - (가) - (다)',
      '(나) - (가) - (라) - (다)',
      '(라) - (나) - (가) - (다)',
      '(가) - (나) - (라) - (다)'
    ],
    correctAnswer: 1,
    translation: '(가) Ngược lại, nếu ngủ kéo dài quá 30 phút, cơ thể sẽ rơi vào giấc ngủ sâu khiến sau khi tỉnh dậy lại càng mệt mỏi hơn.\n(나) Một giấc ngủ trưa điều độ đem lại hiệu quả trong việc giải tỏa mệt mỏi và nâng cao sự tập trung công việc.\n(다) Vì vậy, việc chợp mắt nhẹ nhàng trong khoảng 15 đến 20 phút là điều lý tưởng nhất.\n(라) Đó là bởi chỉ cần một giấc ngủ ngắn ngủi, não bộ đã được nghỉ ngơi giúp cải thiện trí nhớ.',
    explanation: '1. (나) Mở đầu giới thiệu lợi ích của giấc ngủ trưa điều độ.\n2. (라) Giải thích nguyên nhân tại sao lại có tác dụng ("~때문이다").\n3. (가) Nêu mặt ngược lại ("반면에...") nếu ngủ quá 30 phút.\n4. (다) Đưa ra kết luận lời khuyên sau liên từ "그러므로..." (khoảng 15-20 phút là tốt nhất).\n-> Thứ tự hoàn hảo: (나) - (라) - (가) - (다).',
    keyPoints: [
      { term: '적절한 낮잠', meaning: 'Giấc ngủ trưa vừa phải, hợp lý' },
      { term: '깊은 수면에 빠지다', meaning: 'Rơi vào giấc ngủ sâu' },
      { term: '내외로', meaning: 'Trong khoảng xấp xỉ, loanh quanh' }
    ],
    examTip: 'Cấu trúc sắp xếp logic: [Chủ đề] -> [Giải thích lý do: ~때문이다] -> [Mặt ngược lại: 반면에] -> [Kết luận: 그러므로/따라서].',
    sourceExam: 'TOPIK II 64회 기출',
    level: 'TOPIK 4',
    category: 'Sắp xếp đoạn văn'
  },

  // --- DẠNG 7 MỞ RỘNG: TIÊU ĐỀ BÁO CHÍ (CÂU 25-27) ---
  {
    id: 'q-d7-3',
    typeId: 'type-7',
    questionNumberLabel: '[25~27] 다음 신문 기사의 제목을 가장 잘 설명한 것을 고르십시오.',
    instruction: '다음 신문 기사의 제목을 가장 잘 설명한 것을 고르십시오.',
    passage: '수출 훈풍에 제조업 기지개... 고용 시장도 ‘활짝’',
    options: [
      '수출이 호조를 보이자 제조업이 살아나고 일자리도 크게 늘고 있다.',
      '수출 감소로 인해 제조업 공장들이 문을 닫아 실업자가 급증했다.',
      '제조업 경기 침체로 인해 정부가 새로운 수출 정책을 발표했다.',
      '고용 시장이 얼어붙자 제조업 근로자들이 수출 기업으로 이직하고 있다.'
    ],
    correctAnswer: 1,
    translation: '[Tiêu đề báo]: Làn gió ấm xuất khẩu giúp ngành chế tạo vươn vai thức giấc... Thị trường việc làm cũng "nở rộ tươi sáng".',
    explanation: '- "훈풍" (gió ấm áp): ám chỉ tín hiệu tích cực, khởi sắc.\n- "기지개를 켜다" (vươn vai thức dậy): ngành sản xuất hồi phục sau thời gian trầm lắng.\n- "고용 시장도 활짝" (thị trường việc làm nở rộ): số lượng tuyển dụng, cơ hội việc làm tăng vọt.\n-> Tương đương trọn vẹn với câu 1: "수출이 호조를 보이자 제조업이 살아나고 일자리도 크게 늘고 있다".',
    keyPoints: [
      { term: '훈풍', meaning: 'Làn gió ấm (tín hiệu tích cực, thuận lợi)' },
      { term: '기지개를 켜다', meaning: 'Vươn vai thức dậy (phục hồi, khởi sắc lại)' },
      { term: '활짝', meaning: 'Nở rộ tươi sáng, rộng mở' }
    ],
    examTip: 'Từ vựng báo chí mang ý tích cực: 훈풍 (gió ấm), 기지개 (vươn vai hồi phục), 활짝 (nở rộ/tươi sáng).',
    sourceExam: 'TOPIK II 83회 기출',
    level: 'TOPIK 4',
    category: 'Tiêu đề báo chí'
  }
];
