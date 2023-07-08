var btnStartEl = document.querySelector("#btnStart");
var timerEl = document.querySelector("#timer");
var hideStartEl = document.querySelector("#startContainer");
var hideQuestionsEl = document.querySelector("#questions");

var secondsLeft = 50

btnStartEl.addEventListener("click", timerCountDown);
btnStartEl.addEventListener("click", displayQuestions);
//Start the Count Down
function timerCountDown(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = secondsLeft + " Seconds Left";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            //When time is out something happend missing code here
        }
    },1000);
}
//Hide the Start Container and Show the Questions Container
function displayQuestions(){
    hideStartEl.setAttribute("style", "display:none");
    hideQuestionsEl.setAttribute("style", "display: flex")
}
