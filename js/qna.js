const mainPart = document.querySelector('#main');
const qnaPart = document.querySelector('#qna');


const displayQna = () => {
	mainPart.style.display = 'none';
	qnaPart.style.display = 'block';
}

const addQuestion = (index) => {
	const qnaHead = document.querySelector('#qnaHeading');
	qnaHead.innerHTML = questionList[index].question;
}

const addAnswers = (index) => {
	const questions = document.querySelector('.questions');
	let leftQuestion;
	let rightQuestion;

	if (index === 0) {
		leftQuestion = document.createElement('div');
		rightQuestion = document.createElement('div');
		leftQuestion.setAttribute('id', 'leftQuestion');
		rightQuestion.setAttribute('id', 'rightQuestion');
		questions.appendChild(leftQuestion);
		questions.appendChild(rightQuestion);
	} else {
		leftQuestion = document.getElementById('leftQuestion');
		rightQuestion = document.getElementById('rightQuestion');
	}
	leftQuestion.innerHTML = questionList[index].answers[0].answer;
	leftQuestion.style.width = "30%";
	leftQuestion.style.height = "500px";
	leftQuestion.style.margin = "50px 50px";
	leftQuestion.style.padding = "10px";
	
	leftQuestion.style.border = "3px solid #a9a"
	rightQuestion.innerHTML = questionList[index].answers[1].answer;
	rightQuestion.style.width = "30%";
	rightQuestion.style.height = "500px";
	rightQuestion.style.margin = "50px 50px";
	rightQuestion.style.padding = "10px";
	rightQuestion.style.border = "3px solid #a9a"
}

const whenClicked = (index) => {
	const leftQuestion = document.getElementById('leftQuestion');
	const rightQuestion = document.getElementById('rightQuestion');
	leftQuestion.addEventListener("click", function() {
		if (index !== 2) qna(++index);
	});
	rightQuestion.addEventListener("click", function() {
		if (index !== 2) qna(++index);
	})
}

const qna = (index = 0) => {
	if (index === 0) {
		displayQna();
	}
	addQuestion(index);
	addAnswers(index);
	whenClicked(index);
}
