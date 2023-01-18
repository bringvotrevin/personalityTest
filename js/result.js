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
	resultDiv.className = "resultDiv";
	resultDiv.innerHTML = userAnswer.description;
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