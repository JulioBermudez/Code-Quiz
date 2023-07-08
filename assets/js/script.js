var btnStartEl = document.querySelector("#btnStart");
var timerEl = document.querySelector("#timer")

var secondsLeft = 50

btnStartEl.addEventListener("click", start );

function start(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = secondsLeft + " Seconds Left";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            //Time out missing code here
        }
    },1000)
}

