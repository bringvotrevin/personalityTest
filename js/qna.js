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
	// const leftQuestion = document.createElement('div');
	// const rightQuestion = document.createElement('div');
	
	// questions.appendChild(leftQuestion);
	// questions.appendChild(rightQuestion);

	let leftQuestion;
	let rightQuestion;

	if (index === 0) {
		leftQuestion = document.createElement('div');
		rightQuestion = document.createElement('div');
		questions.appendChild(leftQuestion);
		questions.appendChild(rightQuestion);
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

const qna = (index = 0) => {
	if (index === 0) {
		displayQna();
	}
	addQuestion(index);
	addAnswers(index);
	// qna(++index);
}
