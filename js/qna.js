const mainPart = document.querySelector('#main');
const qnaPart = document.querySelector('#qna');
const userAnswers = {
	a: 0,
	b: 0,
	c: 0,
};

const displayQna = () => {
	mainPart.style.display = 'none';
	qnaPart.style.display = 'block';
}

const addQuestion = (index) => {
	const qnaHead = document.querySelector('#qnaHeading');
	qnaHead.innerHTML = questionList[index].question;
	addAnswers(index);
}

const addAnswers = (index) => {
	const questions = document.querySelector('.questions');
	let leftQuestion;
	let rightQuestion;

	if (index === 0) {
		leftQuestion = document.createElement('button');
		rightQuestion = document.createElement('button');
		leftQuestion.setAttribute('id', 'leftQuestion');
		rightQuestion.setAttribute('id', 'rightQuestion');
		questions.appendChild(leftQuestion);
		questions.appendChild(rightQuestion);
	} else {
		leftQuestion = document.getElementById('leftQuestion');
		rightQuestion = document.getElementById('rightQuestion');
	}
	leftQuestion.innerHTML = questionList[index].answers[0].answer;
	leftQuestion.style.width = "25%";
	leftQuestion.style.height = "300px";
	leftQuestion.style.margin = "20px 20px";
	leftQuestion.style.padding = "10px";
	rightQuestion.innerHTML = questionList[index].answers[1].answer;
	rightQuestion.style.width = "25%";
	rightQuestion.style.height = "300px";
	rightQuestion.style.margin = "20px 20px";
	rightQuestion.style.padding = "10px";
}

const whenClicked = (index) => {
	const leftQuestion = document.getElementById('leftQuestion');
	const rightQuestion = document.getElementById('rightQuestion');
	leftQuestion.addEventListener("click", function() {
		questionList[index].answers[0].types.forEach((type) => {
			userAnswers[type] += 1;
		})
		if (index === 2) result(Object.values(userAnswers));
		else addQuestion(++index);
	});
	rightQuestion.addEventListener("click", function() {
		questionList[index].answers[1].types.forEach((type) => {
			userAnswers[type]++;
		})
		if (index === 2) result(Object.values(userAnswers));
		else addQuestion(++index);
	})
}

const qna = (index = 0) => {
	if (index === 0) {
		displayQna();
	}
	addQuestion(index);
	whenClicked(index);
}
