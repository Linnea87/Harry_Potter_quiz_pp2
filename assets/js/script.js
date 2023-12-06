//code being used from other creators have been outlined next to the function

// Variables
const startButton = document.getElementById('start-button');
const rulesButton = document.getElementById('game-rules-button');
const answerButton = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('results-container');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const aboutGame = document.getElementById('about-game');
const nextButton = document.getElementById('next-button');
const score = document.getElementById('score');
let quizEnded = false;

// Rules Modal from w3schools and inspiration from hujanen91
var modal = document.getElementById('myModal');
var rules = document.getElementById('game-rules-button');
var span = document.getElementsByClassName('close')[0];

let currentScore = 0; 
let shuffledQuestion;
let currentQuestionIndex = 0;

//Event listeners for the buttons
startButton.addEventListener('click', startGame);
answerButton.addEventListener('click', selectAnswer);
nextButton.addEventListener('click', setNextQuestion);

// Start game. Code inspired from Web Dev Simplified
function startGame() {
    // Hide buttons that are not supposed to show on start
    startButton.classList.add('hide');
    rulesButton.classList.add('hide');
    aboutGame.classList.add('hide');
    

}

function updateScore() {

}

function renderScore() {

}

function setNextQuestion(){

}

function showQuestion(question) {

}

function resetState() {

}

function selectAnswer(e) {

}

function settingStatus(element, correct) {

}

function decrementScore() {

}

function clearUp(element) {

}

function displayEndScore() {
    
}

// Show modal when rules are clicked. Rules Modal from w3schools
rules.onclick = function() {
    modal.style.display = "block";
};
// Close modal when "x" is clicked. Rules Modal from w3schools
span.onclick = function() {
    modal.style.display = "none";
};
// Close the modal when clicking outside the modal content. Rules Modal from w3schools
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};