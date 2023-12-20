//code being used from other creators have been outlined next to the function

// Variables 
const startButton = document.getElementById('start-button');
const rulesButton = document.getElementById('game-rules-button');
const answerButtons = document.getElementById('answer-buttons');
const resultsContainer = document.getElementById('results-container');
const questionContainer = document.getElementById('question-container');
const theQuestions = document.getElementById('question');
const aboutGame = document.getElementById('about-game');
const nextButton = document.getElementById('next-button');
const score = document.getElementById('score');
const scoreValue = document.getElementById('score-value');
const againButton = document.getElementById('again-button');// Reload the quiz so user can play again

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
nextButton.addEventListener('click', setNextQuestion);
againButton.addEventListener('click', function (e) {
    location.reload();
}, false);


// Ask the player to press start game 
// no questions/answer options will be available until pressing "Start Game". 
// Code used from WebDev Simplified's Javascript tutorial and modified
function startGame() {
    // Hide buttons that are not suposed to show 
    startButton.classList.add('hide');
    rulesButton.classList.add('hide');
    againButton.classList.add('hide');
    aboutGame.classList.add('hide');

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
    if (!quizOver && currentQuestionIndex < 10) {
        let randomQuestion;
        do {
            randomQuestion = Math.floor(Math.random() * questions.length);
        } while (questionTracker.includes(randomQuestion));
        questionTracker.push(randomQuestion);
        showQuestion(shuffledQuestions[currentQuestionIndex++]);


    } else {
        quizOver = true;
        questionContainer.classList.add('hide');
        nextButton.classList.add('hide');
        aboutGame.classList.remove('hide');
        againButton.classList.remove('hide');
        displayEndScore(scoreValue);
    }

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
    // display my images to every question
    const image = document.getElementById('question-image');
    image.src = question.imagePath;
    image.alt = question.imageAlt;
   

}


// Clear up the questions and answers and activate the clearing timer display function. Code used from WebDev Simplified's Javascript tutorial and modified
function resetState() {

    nextButton.classList.add('hide');
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
        // Removes hover effect when user have select a answer
        button.classList.add('answered');
    });

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');

    }
    else {
        displayEndScore();
        quizOver = true;
        questionContainer.classList.add('hide');
        nextButton.classList.add('hide');
        againButton.classList.remove('hide');
        aboutGame.classList.remove('hide');
        displayEndScore();

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
    aboutGame.innerText = ""
    scoreValue.innerText = `${currentScore} / 10`;



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


