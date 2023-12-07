//code being used from other creators have been outlined next to the function

// Variables 
const startButton = document.getElementById('start-button');
const nextbutton = document.getElementById('next-button');
const questionContainer = document.getElementById('question-container');
const theQuestions = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const rulesButton = document.getElementById('game-rules-button');
const aboutGame = document.getElementById('about-game');

let shuffledQuestions;
let currentQuestionIndex = 0;

// Eventlistener that makes the different buttons visible */
startButton.addEventListener('click', startGame);
nextbutton.addEventListener('click', setNextQuestion);

function startGame(){
    // Hide buttons that are not suposed to show 
    startButton.classList.add('hide');
    rulesButton.classList.add('hide');
    aboutGame.classList.add('hide');

     // Shuffle the questions and initialize variables
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion()

}

//Next question. Code from Web Dev Simplified's Javascript tutorial and modified
function setNextQuestion(){
    resetState();
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
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
   
}  
// clear up the questions and answers and activate the clearing timer display function. Code used from WebDev Simplified's Javascript tutorial and modified
function resetState() {
    clearUp(document.body);
    nextbutton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// hide butttons- if the chosen answer is correct. Code used from WebDev Simplified's Javascript tutorial and modified
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    settingStatus(document.body, correct);
    Array.from(answerButtons.children).forEach(button => {
       settingStatus(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextbutton.classList.remove('hide');
    }


}
//show the right and wrong answers after clicking,
function settingStatus(element, correct) {
    clearUp(element);
    if (correct) {
        element.classList.add('correct');
    }else {
        element.classList.add('incorrect');
    }
}

function clearUp(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}



