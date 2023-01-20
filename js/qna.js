const mainPart = document.querySelector('#main');
const qnaPart = document.querySelector('#qna');
const userAnswers = {
	a: 0,
	b: 0,
	c: 0,
};
const numOfClickOnAnswerButton = [0,0,0];

const displayQna = () => {
	mainPart.style.WebKitAnimation = "fadeOut 0.5s";
	mainPart.style.animation = "fadeOut 0.5s";
	setTimeout(() => {
		qnaPart.style.WebKitAnimation = "fadeIn 0.5s";
		qnaPart.style.animation = "fadeIn 0.5s";
		setTimeout(() => {
			mainPart.style.display = "none";
			qnaPart.style.display = "block";
		}, 220);
	}, 220);
}

const addQuestion = (index) => {
	if (index === 0) {
		const qnaHead = document.querySelector('#qnaHeading');
		qnaHead.innerHTML = questionList[index].question;
	} else {
		const qnaHead = document.querySelector('#qnaHeading');
		qnaHead.style.WebKitAnimation = "fadeOut 0.7s";
		qnaHead.style.animation = "fadeOut 0.7s";
		setTimeout(() => {
			qnaHead.innerHTML = questionList[index].question;
			qnaHead.style.WebKitAnimation = "fadeIn 0.7s";
			qnaHead.style.animation = "fadeIn 0.7s";
		}, 350);
	}
	addAnswers(index);
}

const getButtons = (index) => {
	if (index === 0) {
		const questions = document.querySelector('.questions');
		const leftQuestion = document.createElement('button');
		const rightQuestion = document.createElement('button');
		leftQuestion.classList.add('button', 'leftQuestion');
		rightQuestion.classList.add('button', 'rightQuestion');
		questions.appendChild(leftQuestion);
		questions.appendChild(rightQuestion);
		return {leftQuestion, rightQuestion};
	}
	const leftQuestion = document.getElementsByClassName('leftQuestion')[0];
	const rightQuestion = document.getElementsByClassName('rightQuestion')[0];
	return {leftQuestion, rightQuestion};
}

const addAnswers = (index) => {
	const {leftQuestion, rightQuestion} = getButtons(index);

	if (index === 0) {
		leftQuestion.innerHTML = questionList[index].answers[0].answer;
		rightQuestion.innerHTML = questionList[index].answers[1].answer;
	} else {
		leftQuestion.style.WebKitAnimation = "fadeOut 0.7s";
		leftQuestion.style.animation = "fadeOut 0.7s";
		rightQuestion.style.WebKitAnimation = "fadeOut 0.7s";
		rightQuestion.style.animation = "fadeOut 0.7s";
		setTimeout(() => {
			leftQuestion.innerHTML = questionList[index].answers[0].answer;
			rightQuestion.innerHTML = questionList[index].answers[1].answer;
			leftQuestion.style.WebKitAnimation = "fadeIn 0.7s";
			leftQuestion.style.animation = "fadeIn 0.7s";
			rightQuestion.style.WebKitAnimation = "fadeIn 0.7s";
			rightQuestion.style.animation = "fadeIn 0.7s";
		}, 350);
	}
}

const whenClicked = (index) => {
	const leftQuestion = document.getElementsByClassName('leftQuestion');
	const rightQuestion = document.getElementsByClassName('rightQuestion');
	leftQuestion[0].addEventListener("click", function() {
		if (numOfClickOnAnswerButton[index]++) return ;
		questionList[index].answers[0].types.forEach((type) => {
			userAnswers[type] += 1;
		});
		if (index === 2) result(Object.values(userAnswers));
		else addQuestion(++index);
	});
	rightQuestion[0].addEventListener("click", function() {
		if (numOfClickOnAnswerButton[index]++) return ;
		questionList[index].answers[1].types.forEach((type) => {
			userAnswers[type] += 1;
		});
		if (index === 2) result(Object.values(userAnswers));
		else addQuestion(++index);
	});
}

const qna = (index = 0) => {
	if (index === 0) {
		displayQna();
	}
	addQuestion(index);
	whenClicked(index);
}
