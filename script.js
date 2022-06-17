const btnStart = document.getElementById('main-start');
const questionsContainer = document.getElementById('question-container');
const questionTitleElement = document.getElementById('question-title');
const questionAnswers = document.getElementById('question-answers');
const btnNextQuestion = document.getElementById('next'); 
const finishedBlock = document.getElementById('end');
const scoreElement = document.getElementById('score');

const questions = [
	{
		question: 'Кто основатель html',
		answers: [
			{text: 'almaz', correct: false},
			{text: 'adilet', correct: false},
			{text: 'amantur', correct: false},
			{text: 'Tim Berneres Lee', correct:true},
		] 
	},

	{
		question: 'Кто основатель css',
		answers: [
			{text: 'Хокон Виум Ли', correct:true},
			{text: 'almaz', correct: false},
			{text: 'adilet', correct: false},
			{text: 'amantur', correct: false},
			
		] 
	},

	{
		question: 'Кто основатель js',
		answers: [
			{text: 'Бренданом Эйхом', correct:true},
			{text: 'almaz', correct: false},
			{text: 'adilet', correct: false},
			{text: 'amantur', correct: false},
			
		] 
	},

	{
		question: 'Кто основатель react',
		answers: [
			{text: 'facebook', correct:true},
			{text: 'google', correct: false},
			{text: 'netflix', correct: false},
			{text: 'twitter', correct: false},
			
		] 
	},

	{
		question: 'Кто основатель angular',
		answers: [
			{text: 'facebook', correct:false},
			{text: 'google', correct: true},
			{text: 'netflix', correct: false},
			{text: 'twitter', correct: false},
			
		] 
	},

];


let currentQuestinIndex;
let score = 0;

btnStart.addEventListener('click', startTest);


// next question 
btnNextQuestion.addEventListener('click', function() {
	currentQuestinIndex++;
	
	if(currentQuestinIndex <= 4) {
		resetQustionContainer();
		showQuestion();
	}

	else {
		finishedBlock.classList.remove('hide');
		questionsContainer.classList.add('hide');
		scoreElement.textContent = `🏆${score}`;
	}
	
});


function startTest() {
	questionsContainer.classList.remove('hide');
	btnStart.classList.add('hide');
	currentQuestinIndex = 0;
	showQuestion();
	
}

function showQuestion() {
	const questionTitle = questions[currentQuestinIndex].question;
	questionTitleElement.textContent = questionTitle;

	const allAnswers = questions[currentQuestinIndex].answers;
	
	for(let prop of allAnswers) {
		const buttonAnswer = document.createElement('button');
		buttonAnswer.classList.add('btn');
		buttonAnswer.textContent = prop.text;
		questionAnswers.append(buttonAnswer);

		if(prop.correct) {
			buttonAnswer.dataset.correct = prop.correct;
		}

		buttonAnswer.addEventListener('click', selectAnswers)
	}
}



function resetQustionContainer() {
	questionAnswers.innerHTML = '';
	document.body.classList.remove('success');
	document.body.classList.remove('error');
}


function selectAnswers(e) {
	if(e.target.dataset.correct) {
		document.body.classList.add('success');
		this.classList.add('success');
		score++;
	}

	else {
		document.body.classList.add('error');
		this.classList.add('error');
	}
}