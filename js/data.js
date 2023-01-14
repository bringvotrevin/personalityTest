const questionList = Object.freeze([
	{
		question: '1번질문',
		answers: [
			{ answer: '1-1', types: ['a', 'b']},
			{ answer: '1-2', types: ['b', 'c']},
		]
	},
	{
		question: '2번질문',
		answers: [
			{ answer: '2-1', types: ['a', 'c']},
			{ answer: '2-2', types: ['a', 'b']},
		]
	},
	{
		question: '3번질문',
		answers: [
			{ answer: '3-1', types: ['b', 'c']},
			{ answer: '3-2', types: ['a', 'c']},
		]
	},

])

const resultList = Object.freeze([
	{
		type: 'a',
		description: 'a 결과',
	},
	{
		type: 'b',
		description: 'b 결과',
	},
	{
		type: 'c',
		description: 'c 결과',
	},
]);