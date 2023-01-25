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
	const a = document.querySelector('.leftAnswer');
	if (a === null) {
		const answers = document.querySelector('.answers');
		const leftAnswer = document.createElement('button');
		const rightAnswer = document.createElement('button');
		leftAnswer.classList.add('button', 'leftAnswer');
		rightAnswer.classList.add('button', 'rightAnswer');
		answers.appendChild(leftAnswer);
		answers.appendChild(rightAnswer);
		return {leftAnswer, rightAnswer};
	}
	const leftAnswer = document.getElementsByClassName('leftAnswer')[0];
	const rightAnswer = document.getElementsByClassName('rightAnswer')[0];
	return {leftAnswer, rightAnswer};
}

const addAnswers = (index) => {
	const {leftAnswer, rightAnswer} = getButtons(index);
	const answers = document.querySelector('.answers');

	if (index === 0) {
		leftAnswer.innerHTML = questionList[index].answers[0].answer;
		rightAnswer.innerHTML = questionList[index].answers[1].answer;
	} else {
		answers.style.WebKitAnimation = "fadeOut 0.7s";
		answers.style.animation = "fadeOut 0.7s";
		setTimeout(() => {
			leftAnswer.innerHTML = questionList[index].answers[0].answer;
			rightAnswer.innerHTML = questionList[index].answers[1].answer;
			answers.style.WebKitAnimation = "fadeIn 0.7s";
			answers.style.animation = "fadeIn 0.7s";
		}, 350);
	}
}

const whenClicked = (index) => {
	const leftAnswer = document.getElementsByClassName('leftAnswer');
	const rightAnswer = document.getElementsByClassName('rightAnswer');
	leftAnswer[0].addEventListener("click", function() {
		if (numOfClickOnAnswerButton[index]++) return ;
		questionList[index].answers[0].types.forEach((type) => {
			userAnswers[type] += 1;
		});
		if (index === 2) result(Object.values(userAnswers));
		else addQuestion(++index);
	});
	rightAnswer[0].addEventListener("click", function() {
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
