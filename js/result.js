const resultPart = document.querySelector('#result');

const displayResultPage = () => {
	qnaPart.style.WebKitAnimation = "fadeOut 1s";
	qnaPart.style.animation = "fadeOut 1s";
	setTimeout(() => {
		resultPart.style.WebKitAnimation = "fadeIn 1s";
		resultPart.style.animation = "fadeIn 1s";
		setTimeout(() => {
			qnaPart.style.display = "none";
			resultPart.style.display = "block";
		}, 450);
	}, 450);
}

const getResultBody = (userAnswers) => {
	const max = Math.max(...userAnswers);
	const resultIndex = userAnswers.indexOf(max);
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