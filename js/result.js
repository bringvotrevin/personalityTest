const resultPart = document.querySelector('#result');

const getResult = (userAnswers) => {
	const max = Math.max(...userAnswers);
	const resultIndex = userAnswers.indexOf(max);
	console.log('resultList: ', resultList[resultIndex]);
	return resultList[resultIndex];
}

const displayResult = (userAnswer) => {
	const resultDiv = document.createElement('div');

	resultPart.appendChild(resultDiv);
	resultDiv.innerHTML = userAnswer.description;
	resultDiv.style.height = '500px';
	// resultDiv.style.width = '50%';
	resultDiv.style.margin = "50px 50px";
	// resultDiv.style.backgroundColor = "#a9a";
	resultDiv.style.padding = "10px";
}

const result = (userAnswers) => {
	qnaPart.style.display = 'none';
	resultPart.style.display = 'block';
	const userAnswer = getResult(userAnswers);
	displayResult(userAnswer);
}