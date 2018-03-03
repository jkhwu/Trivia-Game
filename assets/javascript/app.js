// VARIABLES
const questionBank = [{
        q: 'What was the last Broadway musical Rodgers and Hammerstein created, which starred Mary Martin and debuted in 1959?',
        a: 2,
        choices: ['"Allegro"', '"South Pacific"', '"The Sound of Music"', '"The King and I"'],
        image: "assets/images/soundofmusic.gif"
    },
    {
        q: 'The TKTS booth, which has been around since 1973, offers what?',
        aIndex: 0,
        choices: ['Discount theater tickets', 'Free movie passes', 'Specialty ice cream', 'Horse and buggy rides'],
        image: "assets/images/"
    },
    {
        q: 'A helicopter was the unforgettable set piece of this musical, which opened in 1991:',
        aIndex: 2,
        choices: ["Evita", "This is the Army", "Miss Saigon", "Big Deal"],
        image: "assets/images/"
    },
    {
        q: 'Which of these original cast members from "Wicked" made their Broadway debut in the musical "Rent?"',
        aIndex: 1,
        choices: ['Kristin Chenoweth', 'Idina Menzel', 'Joel Grey', 'Nobert Leo Butz'],
        image: "assets/images/"
    },
    {
        q: 'The first song in the original production of "Cabaret" opens with which of these lines?',
        aIndex: 3,
        choices: ['"Come to the cabaret"', '"Hey, big spender"', '"Come on, babe"', '"Wilkommen, bienvenue"'],
        image: "assets/images/"
    },
    {
        q: 'Which titular Broadway character is the "demon barber"?',
        aIndex: 0,
        choices: ['Sweeney Todd', 'Oliver', 'Annie', 'Peter Pan'],
        image: "assets/images/"
    },
    {
        q: 'Which Broadway production once starred Ricky Martin?',
        aIndex: 3,
        choices: ['"West Side Story"', '"Cats"', '"The Phantom of the Opera"', '"Les Miserables"'],
        image: "assets/images/"
    },
    {
        q: 'What year did "The Phantom of the Opera" first entertain musical fans?',
        aIndex: 1,
        choices: ['1976', '1986', '1989', '1992'],
        image: "assets/images/"
    },
    {
        q: 'What musical features the song "Memory"?',
        aIndex: 3,
        choices: ['Chicago', 'The King and I', 'Hairspray', 'Cats'],
        image: "assets/images/"
    },
    {
        q: 'Which "Les Mis" character serves as the icon for the show?',
        aIndex: 0,
        choices: ['Cosette', 'Fantine', 'Eponine', 'Jean Valjean'],
        image: "assets/images/"
    },
    {
        q: 'What group\47s music is featured in "Mamma Mia!"?',
        aIndex: 2,
        choices: ['The Partridge Family', 'The Monkees', 'ABBA', 'The Beatles'],
        image: "assets/images/"
    },
    {
        q: 'What musical is based on a book by Gregory Maguire?',
        aIndex: 0,
        choices: ['"Wicked"', '"The Wiz"', '"Hair"', '"Rent"'],
        image: "assets/images/"
    },
    {
        q: 'What musical features the song "If I Were a Rich Man"?',
        aIndex: 2,
        choices: ['"The Music Man"', '"My Fair Lady"', '"Fiddler on the Roof"', '"West Side Story"'],
        image: "assets/images/"
    },
    {
        q: 'What musical is based on the play "Pygmalion"?',
        aIndex: 2,
        choices: ['"The Music Man"', '"Chicago"', '"My Fair Lady"', '"The Sound of Music"'],
        image: "assets/images/"
    },
    {
        q: 'Which character is described in song lyrics as the "Ten dollar founding father without a father"?',
        aIndex: 1,
        choices: ['"Alexander Hamilton"', '"George Washington"', '"Ben Franklin"', '"Sam Adams"'],
        image: "assets/images/"
    }
];

var numQuestions;
var questionsAsked;
var timeLimit;
var correctAnswers;
var incorrectAnswers;
var unanswered;
var isGameOver;

var isQuestionUp;
var isCorrect;

var questions;
var intervalId;

// FUNCTIONS
function startPage() {
    $("#timeText, #qText, .choice, #resultsText, #detailsText").empty();
    $("#startBtn").click(startGame);
}

function startGame() {
    numQuestions = 8;
    questionsAsked = 0;
    timeLimit = 10; //seconds
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;
    isQuestionUp = false;
    isGameOver = false;
    isCorrect = false;
    $("#startBtn").hide();
    pickQuestions();
    if (!isGameOver) {
        nextQuestion();
    } else {
        displayEndPage();
    }
}

function pickQuestions() {
    questions = questionBank.slice();
    questions = shuffle(questions).slice(0, 8);
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function nextQuestion() {
    displayQuestion();
    startTimer();
    // onChoiceClick();

}

function displayQuestion() {
    $("#timeText").html(`Time Remaining: <span id="countdown">${timeLimit}</span> seconds`);
    $("#qText").text(questions[questionsAsked].q);
    $("#0").text(questions[questionsAsked].choices[0]);
    $("#1").text(questions[questionsAsked].choices[1]);
    $("#2").text(questions[questionsAsked].choices[2]);
    $("#3").text(questions[questionsAsked].choices[3]);
}

function startTimer() {
    clearInterval(intervalId); // add this to keep from accelerating
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    console.log("started");
    timeLimit--;
    console.log(timeLimit);
    $("#countdown").text(timeLimit);
    if (timeLimit <= 0) {
        clearInterval(intervalId);
        displayTimeoutPage();
        timeLimit = 10;
    }
}

displayTimeoutPage() {
    $("#timeText, #qText, .choice, #resultsText, #detailsText").empty();
    $("#resultsText").text("All done, here's how you did!");
    $("#detailsText").html(`<p>Correct Answers: ${correctAnswers}</p><p>Incorrect Answers: ${incorrectAnswers}</p><p>Unanswered: ${unanswered}</p>`);
}

function onChoiceClick() {
    questionsAsked++;
}

function displayEndPage() {
    $("#timeText, #qText, .choice, #resultsText, #detailsText").empty();
    $("#resultsText").text("All done, here's how you did!");
    $("#detailsText").html(`<p>Correct Answers: ${correctAnswers}</p><p>Incorrect Answers: ${incorrectAnswers}</p><p>Unanswered: ${unanswered}</p>`);
}



// OBJECTS


// CALLS
startPage();