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
        imagePath: "assets/images/question-images/q1.webp",
        imageAlt:"Image of when  mad eye moody teaches about the unforgivable curses ",
    }, 
    {
        question: "How does Harry manage to breathe underwater?",
        answers:[
            {text:"He turns into a shark", correct: false},
            {text:"He kisses a mermaid", correct: false},
            {text:"He eats gillyweed", correct: true},
            {text:"He performs a bubble-head charm", correct: false},

        ],
        imagePath: "assets/images/question-images/q2.webp",
        imageAlt:"Image of the second task of the Triwizard Tournament",
    }, 
    {
        question: "Who guards the Gryffindor common room?",
        answers:[
            {text:"The Gray Lady", correct: false},
            {text:"The fat brother", correct: false},
            {text:"The Bloody Baron", correct: false},
            {text:"The fat lady", correct: true},

        ],
        imagePath: "assets/images/question-images/q3.webp",
        imageAlt:"Image of a wall with some of the hogwarts paintings  ",
    },
    {
        question: "Who is NOT a member of the Order of the Phoenix?",
        answers:[
            {text:"Cornelius Fudge", correct: true},
            {text:"Mad-eye Moody", correct: false},
            {text:"Professor Snape", correct: false},
            {text:"Remus Lupin", correct: false},

        ],
        imagePath: "assets/images/question-images/q4.webp",
        imageAlt:"Image of some of the Order of the Phoenix members",
    },
    {
        question: "What does the spell Obliviate do?",
        answers:[
            {text: "Destroy objects", correct: false},
            {text: "Sending someone to the Netherworld", correct: false},
            {text: "Removes parts of someone's memory", correct: true },
            {text: "Make objects invisible", correct: false},
        ],
        imagePath: "assets/images/question-images/q5.webp",
        imageAlt:"Image of Hermonie when she cast the obliviate spell", 
    },
    {
        question: "The balls in Quidditch is Bludgers, Snitches and..?",
        answers:[
            {text: "Quaffles", correct: true},
            {text: "Wiffles", correct: false},
            {text: "Bocce", correct: false},
            {text: "Foozles", correct: false},
        ],
        imagePath: "assets/images/question-images/q6.webp",
        imageAlt:"Image of the different Quidditch balls ",   
    }, 
    {
        question: "How stop harry's letter from Ron and Hermione?",
        answers:[
            {text: "Dumbledor", correct: false},
            {text: "Draco Malfoy", correct: false},
            {text: "Dobby", correct: true},
            {text: "The Dursleys", correct: false},
        ],
        imagePath: "assets/images/question-images/q7.webp",
        imageAlt:"Image of the wall where you can read that the Chamber of Secrets has opend",
    },
    {
        question: "How many Weasley siblings are there?",
        answers:[
            {text:"5", correct: false},
            {text:"7", correct: true},
            {text:"10", correct: false},
            {text:"3", correct: false},
        ],
        imagePath: "assets/images/question-images/q8.webp",
        imageAlt:"Image of some of the Weasley siblings",
    },
    {
        question: "From which platform does the Hogwarts Express leave?",
        answers:[
            {text:"Platform 8 3/4", correct: false},
            {text:"Platform 9 3/4", correct: true},
            {text:"Platform 5 3/4", correct: false},
            {text:"Plattform 11 3/4", correct: false},
        ],
        imagePath: "assets/images/question-images/q9.webp",
        imageAlt:"Image of the Hogwarts Express",
    },
    {
        question: "What model is the first broom Harry ever gets?",
        answers:[
            {text:"Cleansweep One", correct: false},
            {text:"Nimbus 2000", correct: true},
            {text:"Hoover", correct: false},
            {text:"firebolt", correct: false},
        ],
        imagePath: "assets/images/question-images/q10.webp",
        imageAlt:"Image of Harry Potter flying on his broom",
        
    },
    {
        question: "Which professor teaches flying lessons?",
        answers:[
            {text:"Professor Grubbly-Plank", correct: false},
            {text:"Sybill Trelawney", correct: false},
            {text:"Charity Burbage", correct: false},
            {text:"Mrs. Hooch", correct: true},
        ],
        imagePath: "assets/images/question-images/q11.webp",
        imageAlt:"Image of flying lessons",
    },
    {
        question: "What are the names of Draco Malfoy's two cronies?",
        answers:[
            {text:"Huggs and Pucey", correct: false},
            {text:"Flint and Boyle", correct: false},
            {text:"Crabbe and Goyle", correct: true},
            {text:"Pike and Zabini", correct: false},
        ],
        imagePath: "assets/images/question-images/q12.webp",
        imageAlt:"Image of Draco Malfoy, Crabbe and Goyle",
    }, 
    {
        question: "Which Patronus belongs to Luna Lovegood?",
        answers:[
            {text:"Hind", correct: false},
            {text:"Rabbit", correct: true},
            {text:"Dog", correct: false},
            {text:"Horse", correct: false},
        ],
        imagePath: "assets/images/question-images/q13.webp",
        imageAlt:"Image of Luna Lovegood",
    }, 
    {
        question: "What spell did Harry use to kill Lord Voldemort?",
        answers:[
            {text:"Expelliarmus", correct: true},
            {text:"Expecto Patronum", correct: false},
            {text:"Avada Kedavra", correct: false},
            {text:"Accio", correct: false},
        ],
        imagePath: "assets/images/question-images/q14.webp",
        imageAlt:"Imgae of Harry Potter and Lord Voldermort",
    },
    {
        question:"What element is associated with Hufflepuff?",
        answers:[
            {text:"Nature", correct: false},
            {text:"Earth", correct: true},
            {text:"Air", correct: false},
            {text:"Water", correct: false},
        ],
        imagePath: "assets/images/question-images/q15.webp",
        imageAlt:"Image of Hufflepuff emblem",
    },
    {
        question:"Which house values courage, bravery and chivalry?",
        answers:[
            {text:"Ravenclaw", correct: false},
            {text:"Slytherin", correct: false},
            {text:"Gryffindor", correct: true},
            {text:"Hufflepuff", correct: false},
        ],
        imagePath: "assets/images/question-images/q16.webp",
        imageAlt:"Image of the four houses emblems",
    },
    {
        question:"Which of these is a type of Love Potion?",
        answers:[
            {text:"Felixfelicis", correct: false},
            {text:"Polyjuice poition", correct: false},
            {text:"Amortentia", correct: true},
            {text:"Veritaserum", correct: false},
        ],
        imagePath: "assets/images/question-images/q17.webp",
        imageAlt:"Image of a potion lessons",
    },
    {
        question:"Which of these are not one of Hagrid's many pets?",
        answers:[
            {text:"Fluffy", correct: false},
            {text:"Grawp", correct: true},
            {text:"Aragog", correct: false},
            {text:"Norberta", correct: false},
        ],
        imagePath: "assets/images/question-images/q18.webp",
        imageAlt:"Image of Hagrid and Fang",
    }, 
    {
        question:"Which class did Severus Snape always want to teach?",
        answers:[
            {text:"Defence against the Dark Art", correct: true},
            {text:"Potions", correct: false},
            {text:"Charms", correct: false},
            {text:"Transfiguration", correct: false},
        ],
        imagePath: "assets/images/question-images/q19.webp",
        imageAlt:"Image of Severus Snape",
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
        imageAlt:"Image of Moaning Myrtle ",
    },  
 
];

