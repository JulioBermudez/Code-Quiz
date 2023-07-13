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
var olScoreEl = document.querySelector("#olScore");
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
    question: "Question 1",
    answers: [
      { text: "answer 1 false", correct: false },
      { text: "answer 2 false", correct: false },
      { text: "answer 3 true", correct: true },
      { text: "answer 4 false", correct: false },
    ],
  },

  {
    question: "Question 2",
    answers: [
      { text: "answer 1 false", correct: false },
      { text: "answer 2 false", correct: true },
      { text: "answer 3 true", correct: false },
      { text: "answer 4 false", correct: false },
    ],
  },
  {
    question: "Question 3",
    answers: [
      { text: "answer 1 false", correct: false },
      { text: "answer 2 false", correct: false },
      { text: "answer 3 true", correct: false },
      { text: "answer 4 false", correct: true },
    ],
  },
  {
    question: "Question 4",
    answers: [
      { text: "answer 1 false", correct: true },
      { text: "answer 2 false", correct: false },
      { text: "answer 3 true", correct: false },
      { text: "answer 4 false", correct: false },
    ],
  },
  {
    question: "Question 5",
    answers: [
      { text: "answer 1 false", correct: false },
      { text: "answer 2 false", correct: true },
      { text: "answer 3 true", correct: false },
      { text: "answer 4 false", correct: false },
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
}

/*----------------Start the Count Down------------------------*/
function timerCountDown() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " Seconds Left";
    if (secondsLeft === 0) {
      clearTimeout(timerInterval);
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
    if (questionIndex === 5) {
      hideQuestionsEl.setAttribute("style", "display: none");
      scoreEl.textContent = secondsLeft;
      timerEl.setAttribute("style", "display: none")
      initialsEl.setAttribute("style", "display: block");
      return
    }
    displayQuestions();
  }
}

// this function print the score 
function initialsFunction() {
  initialsEl.setAttribute("style", "display: none");
finalScoreEl.setAttribute("style","display: block")
  
  var textValue = textEl.value
 if (textValue !== null) {
var li = document.createElement("li");
var node = document.createTextNode(textValue);
li.appendChild(node);
olScoreEl.appendChild(li);
 }

}

btnStartEl.addEventListener("click", timerCountDown);
btnStartEl.addEventListener("click", displayQuestions);
submitBtnEl.addEventListener("click", initialsFunction)
