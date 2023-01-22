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

const init = () => {
	numOfClickOnStartButton = 0;
	numOfClickOnAnswerButton.forEach((element) => {
		element = 0;
	});
	for (num in userAnswers) {
		num = 0;
	}
	mainPart.style.display = 'block';
	qnaPart.style.display = 'none';
	resultPart.style.display = 'none';
}

const addResetButton = () => {
	const reset = document.createElement('button');
	// const re = document.createElement('input');
	// re.setAttribute('type', 'reset');
	// resultPart.appendChild(re);

	reset.className = 'reset';
	reset.innerHTML = '처음으로';
	reset.addEventListener('click', () => {
		window.location.reload();
	})
	resultPart.appendChild(reset);

}

const result = (userAnswers) => {
	displayResultPage();
	const userAnswer = getResultBody(userAnswers);
	displayResultBody(userAnswer);
	addResetButton();
}