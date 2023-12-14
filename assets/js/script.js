//code being used from other creators have been outlined next to the function

// imports my questions.js file to my script.js file 
import questions from '..questions.js';
console.log('here in script.js file',questions);

// Variables 
const startButton = document.getElementById('start-button');
const rulesButton = document.getElementById('game-rules-button');
const answerButtons = document.getElementById('answer-buttons');
const resultsContainer = document.getElementById('results-container');
const questionContainer = document.getElementById('question-container');
const theQuestions = document.getElementById('question');
const aboutGame = document.getElementById('about-game');
const gameText = document.getElementById('text');
const gameImage = document.getElementById('image');
const nextbutton = document.getElementById('next-button');
const score = document.getElementById('score');
const scoreValue = document.getElementById('score-value');

// Modal box for the rules, code from w3school
var modal = document.getElementById('myModal');
var rules = document.getElementById('game-rules-button'); // Open the modal box
var span = document.getElementsByClassName('close')[0]; // Close the model box

let shuffledQuestions;
let currentQuestionIndex = 0;
let currentScore = 0;
let quizOver = false;
let questionTracker = [];

// Eventlistener that makes the different buttons visible 
startButton.addEventListener('click', startGame);
nextbutton.addEventListener('click', setNextQuestion);

// Ask the player to press start game 
// no questions/answer options will be available until pressing "Start Game". 
// Code used from WebDev Simplified's Javascript tutorial and modified
function startGame() {
    // Hide buttons that are not suposed to show 
    startButton.classList.add('hide');
    rulesButton.classList.add('hide');
    aboutGame.classList.add('hide');
    gameText.classList.add('hide');
    gameImage.classList.add('hide');
    // keep track of which questions are already used
    questionTracker = [];
    // Shuffle the questions and initialize variables
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    //Clear the current score
    currentScore = 0;
    renderScore(); // Update the score 
    score.classList.remove('hide'); //show the score
    questionContainer.classList.remove('hide');
    setNextQuestion();
    answerButtons.classList.remove('hide');
    resultsContainer.classList.remove('hide');

}

//update the player's score. Code inspired from Web Dev Simplified

function updateScore() {
    currentScore++; //increment the score
    renderScore();
}
// Update the score by displaying correct clicked answers
function renderScore() {
    scoreValue.innerText = currentScore;

}
// Prepare for the next question. Code from Web Dev Simplified's Javascript tutorial and modified
function setNextQuestion() {
    resetState(); //clear the current state
    showQuestion(shuffledQuestions[currentQuestionIndex++]);

}

// displaying questions and answers. Code from Web Dev Simplified's Javascript tutorial and modified
function showQuestion(question) {
    theQuestions.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('button');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
            button.addEventListener('click', () => {
                updateScore();
            });
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

// Clear up the questions and answers and activate the clearing timer display function. Code used from WebDev Simplified's Javascript tutorial and modified
function resetState() {
    clearUp(document.body);
    nextbutton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Hide butttons- if the chosen answer is correct. Code used from WebDev Simplified's Javascript tutorial and modified
function selectAnswer(e) {
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct) {
            button.disable = true;
        }
        settingStatus(button, button.dataset.correct);
    });

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextbutton.classList.remove('hide');

    }
    if (!quizOver && currentQuestionIndex < 10) {
        let randomQuestion;
        do {
            randomQuestion = Math.floor(Math.random() * questions.length);
        } while (questionTracker.includes(randomQuestion));
        questionTracker.push(randomQuestion);
    } else {
        displayEndScore();
        quizOver = true;
        aboutGame.classList.remove('hide');

    }
}
//show the right and wrong answers after clicking, Code modified with styling from GreatStack's Javascript quiz tutorial
function settingStatus(element, correct) {
    clearUp(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}
// Clear up the buttons background colors for correct or incorrect answers when moving to the next question
function clearUp(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}
// Display final score and option to play again
function displayEndScore() {
    clearUp(document.body);
    questionContainer.classList.add('hide');
    scoreValue.innerText = `${currentScore} / 10`;
    nextbutton.classList.add('hide');
    startButton.innerText = 'Want to play again?';
    startButton.classList.remove('hide');

}
// Model box section, code from w3school
// Display model box When  user clicks on the rules button.
rules.onclick = function () {
    modal.style.display = "block";
};

// When users click on "x", the model box closes.
span.onclick = function () {
    modal.style.display = "none";
};

// The model box closes when the user clicks anywhere outside the model content.
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


