const url = 'https://qnatestbydim.netlify.app/';
const webUrl = url + 'index.html';
const imgUrl = url + 'img/bb.jpg';

const kakaoShare = () => {
  Kakao.Share.createDefaultButton({
    container: '#kakaotalk-sharing-btn',
    objectType: 'feed',
    content: {
      title: 'QnA Test',
      description: 'by dim',
      imageUrl:
        imgUrl,
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: webUrl,
        webUrl: webUrl,
      },
    },
    buttons: [
      {
        title: '결과 확인하기',
        link: {
          mobileWebUrl: webUrl,
          webUrl: webUrl,
        },
      },
    ],
  });
}