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
	resultDiv.style = "width: 50%";
	resultDiv.style.height = "40%";
	resultDiv.style.margin = "30px auto";
	resultDiv.style.padding = "10px";
	resultDiv.style.border = "px solid #008C7A";
	resultDiv.style.borderRadius = "10px";
	resultDiv.style.backgroundColor = '#5EB8AB';
	// resultDiv.style = "background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%)";
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