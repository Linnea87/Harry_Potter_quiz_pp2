//code being used from other creators have been outlined next to the function

// Variables 
const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('question-container');
const theQuestions = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');

let shuffledQuestions;

// Eventlistener that makes the different buttons visible */
startButton.addEventListener('click', startGame);
answerButtons.addEventListener('click', selectAnswer);

function startGame(){
    console.log('started');
    // Hide buttons that are not suposed to show 
    startButton.classList.add('hide');
     // Shuffle the questions and initialize variables
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion()
}

//Next question. Code from Web Dev Simplified's Javascript tutorial and modified
function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

//Get questions and answers. Code from Web Dev Simplified's Javascript tutorial and modified
function showQuestion(question) {
    theQuestions.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('button');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        answerButtons.appendChild(button);
    });
   
}   
function selectAnswer() {

}

