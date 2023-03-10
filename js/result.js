const resultPart = document.querySelector('#result');

const displayResultPage = () => {
	applyAnimation(qnaPart, "fadeOut 1s");
	setTimeout(() => {
		applyAnimation(resultPart, "fadeIn 1s");
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

const addResetButton = () => {
	const reset = document.createElement('button');

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