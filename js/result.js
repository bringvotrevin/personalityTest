const resultPart = document.querySelector('#result');

const getResult = (userAnswers) => {
	const max = Math.max(...userAnswers);
	const resultIndex = userAnswers.indexOf(max);
	console.log('resultList: ', resultList[resultIndex]);
	return resultList[resultIndex];
}

const displayResult = (userAnswer) => {
	const resultDiv = document.createElement('div');
	const shareButton = document.getElementById('kakaotalk-sharing-btn');

	resultPart.insertBefore(resultDiv, shareButton);
	// resultPart.appendChild(resultDiv);
	resultDiv.innerHTML = userAnswer.description;
	resultDiv.style.height = "40%";
	resultDiv.style.margin = "30px 30px";
	resultDiv.style.padding = "10px";
}

const addShareButton = () => {

}

const result = (userAnswers) => {
	qnaPart.style.display = 'none';
	resultPart.style.display = 'block';
	const userAnswer = getResult(userAnswers);
	displayResult(userAnswer);
	addShareButton();
}