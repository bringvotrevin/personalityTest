const resultPart = document.querySelector('#result');

const displayResultPage = () => {
	qnaPart.style.WebKitAnimation = "fadeOut 0.5s";
	qnaPart.style.animation = "fadeOut 0.5s";
	setTimeout(() => {
		resultPart.style.WebKitAnimation = "fadeIn 0.5s";
		resultPart.style.animation = "fadeIn 0.5s";
		setTimeout(() => {
			qnaPart.style.display = "none";
			resultPart.style.display = "block";
		}, 220);
	}, 220);
}

const getResultBody = (userAnswers) => {
	const max = Math.max(...userAnswers);
	const resultIndex = userAnswers.indexOf(max);
	console.log('resultList: ', resultList[resultIndex]);
	return resultList[resultIndex];
}

const displayResultBody = (userAnswer) => {
	const resultDiv = document.createElement('div');
	const shareButton = document.getElementById('kakaotalk-sharing-btn');

	resultPart.insertBefore(resultDiv, shareButton);
	resultDiv.className = "resultDiv";
	resultDiv.innerHTML = userAnswer.description;
}

const result = (userAnswers) => {
	displayResultPage();
	const userAnswer = getResultBody(userAnswers);
	displayResultBody(userAnswer);
}