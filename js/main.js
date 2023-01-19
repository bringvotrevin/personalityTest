let numOfClickOnStartButton = 0;
const start = () => {
	if (numOfClickOnStartButton++) return;
	qna();
}