var timeEl = document.querySelector(".timer");
var buttonEl = document.querySelector("button");

var secondLeft = 50;

function setTime() {
  
    var timerInterval = setInterval(function() {
        secondLeft--;
        timeEl.textContent = "Time: " + secondLeft;

        if (secondLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

buttonEl.addEventListener("click", setTime);
