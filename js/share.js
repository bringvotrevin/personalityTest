const url = 'https://qnatestbydim.netlify.app/index.html';

const kakaoShare = () => {
  Kakao.Share.createDefaultButton({
    container: '#kakaotalk-sharing-btn',
    objectType: 'feed',
    content: {
      title: 'QnA Test',
      description: 'by dim',
      imageUrl:
        '../img/bb.jpg',
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: url,
        webUrl: url,
      },
    },
    buttons: [
      {
        title: '결과 확인하기',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    ],
  });
}