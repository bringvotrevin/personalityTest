const qna = () => {
	const questions = document.querySelector('.questions');
	const leftQuestion = document.createElement('div');
	const rightQuestion = document.createElement('div');

	questions.appendChild(leftQuestion);
	questions.appendChild(rightQuestion);
	leftQuestion.innerHTML = questionList[0].answers[0].answer;
	leftQuestion.style.width = "30%";
	leftQuestion.style.height = "500px";
	leftQuestion.style.margin = "50px 50px";
	leftQuestion.style.padding = "10px";

	leftQuestion.style.border = "3px solid #a9a"
	rightQuestion.innerHTML = questionList[0].answers[1].answer;
	rightQuestion.style.width = "30%";
	rightQuestion.style.height = "500px";
	rightQuestion.style.margin = "50px 50px";
	rightQuestion.style.padding = "10px";
	rightQuestion.style.border = "3px solid #a9a"
}
