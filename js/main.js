
const mainPart = document.querySelector('#main');
const qnaPart = document.querySelector('#qna');
// const resultPart = document.querySelector('#result');

const start = () => {
	mainPart.style.display = 'none';
	qnaPart.style.display = 'block';
	qna();
}