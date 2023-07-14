//All Elements
var btnStartEl = document.querySelector("#btnStart");
var timerEl = document.querySelector("#timer");
var hideStartEl = document.querySelector("#startContainer");
var hideQuestionsEl = document.querySelector("#questions");
var questionParEl = document.querySelector("#questionPar");
var initialsEl = document.querySelector("#initials");
var submitBtnEl = document.querySelector("#submitBtn");
var textEl = document.querySelector("#text");
var scoreEl = document.querySelector("#score");
var finalScoreEl = document.querySelector("#finalScore");
var textareaEl = document.querySelector("#textarea");
var startAgainEl = document.querySelector("#startAgain");
var olScoreEl = document.querySelector("#olScore");
var clearHighScoreEl = document.querySelector("#clearHighScore");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");


//Variables
var secondsLeft = 75;
var questionIndex = 0;

//Array that has all the questions inside
var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<javascript>", correct: false },
      { text: "<js>", correct: false },
      { text: "<script>", correct: true },
      { text: "<scripting>", correct: false },
    ],
  },

  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
      { text: "The <head> and <body> section", correct: false },
      { text: "The <body> section", correct: true },
      { text: "The <head> section", correct: false },
      { text: "The <footer> section", correct: false },
    ],
  },
  {
    question: "How do you write Hello World in an alert box?",
    answers: [
      { text: "msg(Hello World)", correct: false },
      { text: "msgBox(Hello World)", correct: false },
      { text: "alertBox(Hello World)", correct: false },
      { text: "alert(Hello World)", correct: true },
    ],
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answers: [
      { text: "if (i==5) then", correct: true },
      { text: "if i==5 then", correct: false },
      { text: "if i=5 then", correct: false },
      { text: "if i=5 ", correct: false },
    ],
  },
  {
    question: "How to write an IF statement for executing some code if i is NOT equal to 5?",
    answers: [
      { text: "if (i<>5)", correct: false },
      { text: "if (i!=5)", correct: true },
      { text: "if (i=!5) then", correct: false },
      { text: "if i<>5", correct: false },
    ],
  },
];

//Hide the Start Container and Show the Questions Container
function displayQuestions() {
  hideStartEl.setAttribute("style", "display:none");
  hideQuestionsEl.setAttribute("style", "display: flex");

  questionParEl.textContent = questions[questionIndex].question;
  answer1El.textContent = questions[questionIndex].answers[0].text;
  answer2El.textContent = questions[questionIndex].answers[1].text;
  answer3El.textContent = questions[questionIndex].answers[2].text;
  answer4El.textContent = questions[questionIndex].answers[3].text;

  answer1El.setAttribute(
    "data-correct",
    questions[questionIndex].answers[0].correct
  );
  answer2El.setAttribute(
    "data-correct",
    questions[questionIndex].answers[1].correct
  );
  answer3El.setAttribute(
    "data-correct",
    questions[questionIndex].answers[2].correct
  );
  answer4El.setAttribute(
    "data-correct",
    questions[questionIndex].answers[3].correct
  );

  //If you make click in the childrens of answerDiv is going to next question
  hideQuestionsEl.addEventListener("click", nextQuestion);
  return;
}

/*----------------Start the Count Down------------------------*/
function timerCountDown() {
   timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " Seconds Left";
    if (secondsLeft <= 0) {
      clearTimeout(timerInterval);
      return;
      //When time runs out something happend missing code here
    }
    
  }, 1000);
}
/*------------------------------------------------------------*/

function nextQuestion(event) {
  var currentElement = event.target;
  if (currentElement.matches("button")) {
    questionIndex++;

    if (currentElement.getAttribute("data-correct") === "false") {
      secondsLeft = secondsLeft - 10;
    }
    //This if says that when questions are done its going to call the function initials
    if (questionIndex === 5 ) {
      hideQuestionsEl.setAttribute("style", "display: none");
      clearInterval(timerInterval)
      scoreEl.textContent = secondsLeft * 3;
      timerEl.setAttribute("style", "display: none");
      initialsEl.setAttribute("style", "display: block");
      return;
    }
    displayQuestions();
  }
}

// this function print the score
function initialsFunction() {
  initialsEl.setAttribute("style", "display: none");
  finalScoreEl.setAttribute("style", "display: block");
 
  var textValue = textEl.value.trim();
  var allScoreData = JSON.parse(localStorage.getItem("highScore")) || [];

  if (textValue !== null) {
    var newScore = {
      initials: textValue,
      score: secondsLeft,
    };
    allScoreData.push(newScore);
    localStorage.setItem("highScore", JSON.stringify(allScoreData));

    var li = document.createElement("li");
    var node = document.createTextNode(textValue + " ------ " + scoreEl.textContent + " points");
    li.appendChild(node);
    olScoreEl.appendChild(li);

   

    startAgainEl.addEventListener("click", function startAgain() {
      location.reload()
    });

    clearHighScoreEl.addEventListener("click", function () {
      node.remove();
      olScoreEl.setAttribute("style", "list-style: none;")
    });
  }
}

btnStartEl.addEventListener("click", timerCountDown);
btnStartEl.addEventListener("click", displayQuestions);
submitBtnEl.addEventListener("click", initialsFunction)
