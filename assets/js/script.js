//code being used from other creators have been outlined next to the function

const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('question-container');

/* Eventlistener that makes the different buttons visible */
startButton.addEventListener('click', startGame);

function startGame(){
    console.log('started');
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    setNextQuestion()
}

function setNextQuestion(){

}

function selectAnswer() {

}

