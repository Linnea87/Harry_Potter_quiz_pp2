// Questions used for the quiz 

const questions = [
 
    {
        question: "Which of these is NOT one of the unforgivable curses?",
        answers:[
            {text:"Curse of the Cruciatus", correct: false},
            {text:"Imperius' Curse", correct: false},
            {text:"sectumsempra", correct: true},
            {text:"Avada Kedavra", correct: false},

        ],
        imagepath: "assets/images/question-images/q20.webp"
    }, 
    {
        question: "How does Harry manage to breathe underwater during the second task of the Triwizard Tournament?",
        answers:[
            {text:"He turns into a shark", correct: false},
            {text:"He kisses a mermaid", correct: false},
            {text:"He eats gillyweed", correct: true},
            {text:"He performs a bubble-head charm", correct: false},

        ],
        imagepath: "assets/images/question-images/q20.webp"
    }, 
    {
        question: "Who guards the entrance to the Gryffindor common room?",
        answers:[
            {text:"The Gray Lady", correct: false},
            {text:"The fat brother", correct: false},
            {text:"The Bloody Baron", correct: false},
            {text:"The fat lady", correct: true},

        ],
        imagepath: "assets/images/question-images/q20.webp"
    },
    {
        question: "Who is NOT a member of the Order of the Phoenix?",
        answers:[
            {text:"Cornelius Fudge", correct: true},
            {text:"Mad-eye Moody", correct: false},
            {text:"Professor Snape", correct: false},
            {text:"Remus Lupin", correct: false},

        ],
        imagepath: "assets/images/question-images/q20.webp"
    },
    {
        question: "What does the spell Obliviate do?",
        answers:[
            {text: "Destroy objects", correct: false},
            {text: "Sending someone to the Netherworld", correct: false},
            {text: "Removes parts of someone's memory", correct: true },
            {text: "Make objects invisible", correct: false},
        ],
        imagepath: "assets/images/question-images/q20.webp"  
    },
    {
        question: "The three types of balls used in Quidditch are Bludgers, Snitches and...?",
        answers:[
            {text: "Quaffles", correct: true},
            {text: "Wiffles", correct: false},
            {text: "Bocce", correct: false},
            {text: "Foozles", correct: false},
        ],
        imagepath: "assets/images/question-images/q20.webp"   
    }, 
    {
        question: "Who has stolen Harry's letter from Ron and Hermione at the beginning of Harry Potter and the Chamber of Secrets?",
        answers:[
            {text: "Dumbledor", correct: false},
            {text: "Draco Malfoy", correct: false},
            {text: "Dobby", correct: true},
            {text: "The Dursleys", correct: false},
        ],
        imagepath: "assets/images/question-images/q20.webp"
    },
    {
        question: "How many Weasley siblings are there?",
        answers:[
            {text:"5", correct: false},
            {text:"7", correct: true},
            {text:"10", correct: false},
            {text:"3", correct: false},
        ],
        imagepath: "assets/images/question-images/q20.webp"
    },
    {
        question: "From which King's Cross platform does the Hogwarts Express leave?",
        answers:[
            {text:"Platform 8 3/4", correct: false},
            {text:"Platform 9 3/4", correct: true},
            {text:"Platform 5 3/4", correct: false},
            {text:"Plattform 11 3/4", correct: false},
        ],
        imagepath: "assets/images/question-images/q20.webp"
    },
    {
        question: "What model is the first broom Harry ever gets?",
        answers:[
            {text:"Cleansweep One", correct: false},
            {text:"Nimbus 2000", correct: true},
            {text:"Hoover", correct: false},
            {text:"firebolt", correct: false},
        ],
        imagepath: "assets/images/question-images/q20.webp"
        
    },
    {
        question: "Which professor teaches flying lessons?",
        answers:[
            {text:"Professor Grubbly-Plank", correct: false},
            {text:"Sybill Trelawney", correct: false},
            {text:"Charity Burbage", correct: false},
            {text:"Mrs. Hooch", correct: true},
        ],
        imagepath: "assets/images/question-images/q20.webp"
    },
    {
        question: "What are the names of Draco Malfoy's two cronies?",
        answers:[
            {text:"Huggs and Pucey", correct: false},
            {text:"Flint and Boyle", correct: false},
            {text:"Crabbe and Goyle", correct: true},
            {text:"Pike and Zabini", correct: false},
        ],
        imagepath: "assets/images/question-images/q20.webp"
    }, 
    {
        question: "Which Patronus belongs to Luna Lovegood?",
        answers:[
            {text:"Hind", correct: false},
            {text:"Rabbit", correct: true},
            {text:"Dog", correct: false},
            {text:"Horse", correct: false},
        ],
        imagepath: "assets/images/question-images/q20.webp"
    }, 
    {
        question: "What spell did Harry use to kill Lord Voldemort?",
        answers:[
            {text:"Expelliarmus", correct: true},
            {text:"Expecto Patronum", correct: false},
            {text:"Avada Kedavra", correct: false},
            {text:"Accio", correct: false},
        ],
        imagepath: "assets/images/question-images/q20.webp"
    },
    {
        question:"What element is associated with Hufflepuff?",
        answers:[
            {text:"Nature", correct: false},
            {text:"Earth", correct: true},
            {text:"Air", correct: false},
            {text:"Water", correct: false},
        ],
        imagepath: "assets/images/question-images/q20.webp"
    },
    {
        question:"Which house values courage, bravery and chivalry?",
        answers:[
            {text:"Ravenclaw", correct: false},
            {text:"Slytherin", correct: false},
            {text:"Gryffindor", correct: true},
            {text:"Hufflepuff", correct: false},
        ],
        imagepath: "assets/images/question-images/q20.webp"
    },
    {
        question:"Which of these is a type of Love Potion?",
        answers:[
            {text:"Felixfelicis", correct: false},
            {text:"Polyjuice poition", correct: false},
            {text:"Amortentia", correct: true},
            {text:"Veritaserum", correct: false},
        ],
        imagepath: "assets/images/question-images/q20.webp"
    },
    {
        question:"Which of these are not one of Hagrid's many pets?",
        answers:[
            {text:"Fluffy", correct: false},
            {text:"Grawp", correct: true},
            {text:"Aragog", correct: false},
            {text:"Norberta", correct: false},
        ],
        imagepath: "assets/images/question-images/q20.webp"
    }, 
    {
        question:"Which class did Severus Snape always want to teach?",
        answers:[
            {text:"Defence against the Dark Art", correct: true},
            {text:"Potions", correct: false},
            {text:"Charms", correct: false},
            {text:"Transfiguration", correct: false},
        ],
        imagepath: "assets/images/question-images/q20.webp"
    },
    {
        question:"What Hogwarts house was Moaning Myrtle in?",
        answers:[
            {text:"Gryffindor", correct: false},
            {text:"Slytherin", correct: false},
            {text:"Ravenclaw", correct: true},
            {text:"Hufflepuff", correct: false},
        ],
        imagePath: "assets/images/question-images/q20.webp",
        imageAlt:"",
    },  
 
];

