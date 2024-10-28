let minuteslabel = document.querySelector(".minutes");
let secondslabel = document.querySelector(".seconds");
let millisecondslabel = document.querySelector(".milliseconds");
// control buttons
let start = document.querySelector(".start");
let lap = document.querySelector(".lap");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
// timer
let timerlabel = document.querySelector(".timer");
// laps list item
let laps = document.querySelector(".laps ul");

// stop watch vars

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

function startTimer() {
  interval = setInterval(updateTimer, 10);
  updateTimer();
  start.removeEventListener("click", startTimer);
  lap.addEventListener("click", addLap);

  lap.classList.remove("disabled");
}
function stopTimer() {
  clearInterval(interval);
  start.addEventListener("click", startTimer);
  lap.removeEventListener("click", addLap);
  lap.classList.add("disabled");
}
function resetTimer() {
  clearInterval(interval);
  seconds = 0;
  milliseconds = -1;
  minutes = 0;
  updateTimer();
  start.addEventListener("click", startTimer);
  // laps item
  let lapsitem = document.querySelectorAll(".laps ul li");
  lapsitem.forEach((e) => e.remove());
}
function addLap() {
  let li = document.createElement("li");
  li.innerText = `${minuteslabel.textContent} : ${secondslabel.textContent} : ${millisecondslabel.textContent}`;
  laps.prepend(li);
}

function updateTimer() {
  milliseconds++;
  if (milliseconds == 100) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
  }
  displayTimer();
}

Number.prototype.pad = function (n) {
  return new Array(n).join("0").slice(-2) + this;
};

function displayTimer() {
  millisecondslabel.innerText = ("0" + milliseconds).slice(-2);
  secondslabel.innerText = ("0" + seconds).slice(-2);
  minuteslabel.innerText = ("0" + minutes).slice(-2);
}
