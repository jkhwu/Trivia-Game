// VARIABLES
var numQuestions;
var numQuestionsAsked;
var numCorrect;
var numIncorrect;
var numUnanswered;
var currQuestion;
var currAnswer;
var userGuess;
var timeLimit;
var timeLeft;
var waitTime;
var questions;
var intervalId;
var isGameOver;

// FUNCTIONS
function displayStartPage() {
    clearPage();
    $("#startBtn").show().click(startGame);
}

function clearPage() {
    $("#timeText, #qText, .choice, #resultsText, #detailsText").empty();
    $("img").hide();
    $("#startBtn").hide();
}

function startGame() {
    numQuestions = 8;
    numQuestionsAsked = 0;
    numCorrect = 0;
    numIncorrect = 0;
    numUnanswered = 0;
    currQuestion = "";
    currAnswer = "";
    userGuess = "";
    timeLimit = 30; //seconds, change for testing
    timeLeft = timeLimit;
    waitTime = 5000; //ms, change for testing
    isGameOver = false;
    $("#startBtn").hide();
    pickQuestions();
    nextQuestion();
    // console.log("QuestionsAsked: " + numQuestionsAsked);
}

function pickQuestions() {
    questions = questionBank.slice();
    questions = shuffle(questions).slice(0, 8);
    // console.log(JSON.stringify(questions));
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function nextQuestion() {
    if (numQuestions === numQuestionsAsked) isGameOver = true;
    if (!isGameOver) {
        displayQuestion();
    } else {
        displayEndPage();
    }
}

function displayQuestion() {
    clearPage();
    $("#timeText").html(`Time Remaining: <span id="countdown">${timeLeft}</span> seconds`);
    currQuestion = questions[numQuestionsAsked].q
    currAnswer = questions[numQuestionsAsked].choices[questions[numQuestionsAsked].aIndex];
    userGuess = "";
    $("#qText").text(`${numQuestionsAsked+1}. ${currQuestion}`);
    $("#0").text(questions[numQuestionsAsked].choices[0]);
    $("#1").text(questions[numQuestionsAsked].choices[1]);
    $("#2").text(questions[numQuestionsAsked].choices[2]);
    $("#3").text(questions[numQuestionsAsked].choices[3]);
    startTimer();
    onChoiceClick();
}

function startTimer() {
    clearInterval(intervalId); // add this to keep from accelerating
    intervalId = setInterval(function() { decrement() }, 1000);
}

function decrement() {
    timeLeft--;
    $("#countdown").text(timeLeft);
    if (timeLeft <= 0) {
        stopTime();
        displayTimeoutPage();
    }
}

function stopTime() {
    clearInterval(intervalId);
    timeLeft = timeLimit;
}

function displayTimeoutPage() {
    clearPage();
    $("#resultsText").text("Out of Time!");
    $("#detailsText").html(`<p>The correct answer was: <em>${currAnswer}</em>`);
    $("img").attr("src", questions[numQuestionsAsked].image).attr("alt", currAnswer).show();
    numUnanswered++;
    numQuestionsAsked++;
    // console.log("numUnanswered: " + numUnanswered);
    // console.log("numQuestionsAsked: " + numQuestionsAsked);
    setTimeout(nextQuestion, waitTime);
}

function onChoiceClick() {
    $(".choice").off("click").click(function() {
        stopTime();
        userGuess = this.textContent;
        // console.log("You chose: " + userGuess);
        // console.log(this.textContent === currAnswer);
        if (userGuess === currAnswer) {
            displayCorrectPage();
        } else {
            displayIncorrectPage();
        }
    });
}

function displayCorrectPage() {
    clearPage();
    $("#resultsText").text("Correct!");
    $("#detailsText").html(`The answer was <span class="correct">${currAnswer}</span>`);
    $("img").attr("src", questions[numQuestionsAsked].image).attr("alt", currAnswer).show();
    numCorrect++;
    // console.log("numCorrect: " + numCorrect);
    numQuestionsAsked++;
    // console.log("numQuestionsAsked: " + numQuestionsAsked);
    setTimeout(nextQuestion, waitTime);
}

function displayIncorrectPage() {
    clearPage();
    $("#resultsText").text("Nope!");
    $("#detailsText").html(`<p>The correct answer was <em>${currAnswer}</em>`);
    $("img").attr("src", questions[numQuestionsAsked].image).attr("alt", currAnswer).show();
    numIncorrect++;
    // console.log("numIncorrect: " + numIncorrect);
    numQuestionsAsked++;
    // console.log("numQuestionsAsked: " + numQuestionsAsked);
    setTimeout(nextQuestion, waitTime);
}

function displayEndPage() {
    clearPage();
    $("#resultsText").text("All done, here's how you did!");
    $("#detailsText").html(`<p>Correct Answers: <span class="correct">${numCorrect}</span></p><p>Incorrect Answers: <em>${numIncorrect}</em></p><p>Unanswered: <em>${numUnanswered}</em></p>`);
    $("#startBtn").show().text("START OVER").click(startGame);
}

// OBJECTS
const questionBank = [{
        q: 'What was the last Broadway musical Rodgers and Hammerstein created, which starred Mary Martin and debuted in 1959?',
        aIndex: 2,
        choices: ['"Allegro"', '"South Pacific"', '"The Sound of Music"', '"The King and I"'],
        image: "assets/images/soundofmusic.gif"
    },
    {
        q: 'The TKTS booth, which has been around since 1973, offers what?',
        aIndex: 0,
        choices: ['Discount theater tickets', 'Free movie passes', 'Specialty ice cream', 'Horse and buggy rides'],
        image: "assets/images/tkts.gif"
    },
    {
        q: 'A helicopter was the unforgettable set piece of this musical, which opened in 1991:',
        aIndex: 2,
        choices: ['"Evita"', '"This is the Army"', '"Miss Saigon"', '"Big Deal"'],
        image: "assets/images/misssaigon.gif"
    },
    {
        q: 'Which of these original cast members from "Wicked" made their Broadway debut in the musical "Rent?"',
        aIndex: 1,
        choices: ['Kristin Chenoweth', 'Idina Menzel', 'Joel Grey', 'Nobert Leo Butz'],
        image: "assets/images/idina.gif"
    },
    {
        q: 'The first song in the original production of "Cabaret" opens with which of these lines?',
        aIndex: 3,
        choices: ['"Come to the cabaret"', '"Hey, big spender"', '"Come on, babe"', '"Wilkommen, bienvenue"'],
        image: "assets/images/cabaret.gif"
    },
    {
        q: 'Which titular Broadway character is the "demon barber"?',
        aIndex: 0,
        choices: ['Sweeney Todd', 'Oliver', 'Annie', 'Peter Pan'],
        image: "assets/images/sweeneytodd.gif"
    },
    {
        q: 'Which Broadway production once starred Ricky Martin?',
        aIndex: 3,
        choices: ['"West Side Story"', '"Cats"', '"The Phantom of the Opera"', '"Les Miserables"'],
        image: "assets/images/ricky.gif"
    },
    {
        q: 'What year did "The Phantom of the Opera" first entertain musical fans?',
        aIndex: 1,
        choices: ['1976', '1986', '1989', '1992'],
        image: "assets/images/phantom.gif"
    },
    {
        q: 'What musical features the song "Memory"?',
        aIndex: 3,
        choices: ['"Chicago"', '"The King and I"', '"Hairspray"', '"Cats"'],
        image: "assets/images/cats.gif"
    },
    {
        q: 'Which "Les Mis" character serves as the icon for the show?',
        aIndex: 0,
        choices: ['Cosette', 'Fantine', 'Eponine', 'Jean Valjean'],
        image: "assets/images/lesmis.gif"
    },
    {
        q: 'What group\47s music is featured in "Mamma Mia!"?',
        aIndex: 2,
        choices: ['The Partridge Family', 'The Monkees', 'ABBA', 'The Beatles'],
        image: "assets/images/abba.gif"
    },
    {
        q: 'What musical is based on a book by Gregory Maguire?',
        aIndex: 0,
        choices: ['"Wicked"', '"The Wiz"', '"Hair"', '"Rent"'],
        image: "assets/images/wicked.gif"
    },
    {
        q: 'What musical features the song "If I Were a Rich Man"?',
        aIndex: 2,
        choices: ['"The Music Man"', '"My Fair Lady"', '"Fiddler on the Roof"', '"West Side Story"'],
        image: "assets/images/fiddler.gif"
    },
    {
        q: 'What musical is based on the play "Pygmalion"?',
        aIndex: 2,
        choices: ['"The Music Man"', '"Chicago"', '"My Fair Lady"', '"The Sound of Music"'],
        image: "assets/images/audrey.gif"
    },
    {
        q: 'Which character is described in song lyrics as the "Ten dollar founding father without a father"?',
        aIndex: 0,
        choices: ['Alexander Hamilton', 'George Washington', 'Ben Franklin', 'Sam Adams'],
        image: "assets/images/hamilton.gif"
    }
];

// CALLS
displayStartPage();