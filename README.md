# personalityTest 성격유형검사 테스트 만들기

인프런에서 재밌어보이는 강의가 있어서 듣고 외부 프레임워크나 라이브러리를 사용하지 않고 나만의 방법으로 구현해 보았다. <br>
[참고한 강의](https://www.inflearn.com/course/%EC%8B%AC%EB%A6%AC%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EC%A0%9C%EC%9E%91)

질문에 대한 대답을 통해서 여러 유형의 결과중 가장 알맞은 결과를 찾아내 띄워주며 그 결과를 카카오톡을 통해 공유할 수 있는 사이트이다.

### 시작 페이지

구현한 테스트(or 설문조사)에 대한 정보들이 들어감

- [x] 헤더 : 구현한 페이지 제목
- [x] 이미지 : 메인 이미지
- [x] 본문 : 페이지 내용에 대한 설명
- [x] 버튼 : 준비한 테스트를 진행하기 위한 시작버튼

### 질문 페이지

한 페이지에 하나의 질문이 올라오며 그에 대한 대답의 보기는 두가지이다. 원하는 대답을 클릭시 다음 페이지로 넘어간다.

- [x] 헤더 : 질문글
- [x] 버튼(leftQuestion) : 질문에 대한 대답 보기중 1번
- [x] 버튼(rightQuestion) : 질문에 대한 대답 보기중 2번

### 결과 페이지

- [x] 헤더 : 결과 페이지 안내
- [x] 본문 : 도출된 결과에 대한 설명
- [x] 공유 버튼(kakaoShare) : 이 사이트를 카카오톡을 통해 공유하는 버튼

### 추가된 기능

- 각 버튼들을 클릭했을 때 다음에 나와야 하는 결과물이 버튼 클릭 횟수만큼 배가 되어서 나와버리는 에러 발견 <br>
  -> 전역변수를 사용해서 첫번째 클릭시에만 이벤트가 일어나도록 수정함
