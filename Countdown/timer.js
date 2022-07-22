const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 10;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = 0;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <div id="wow">
  <img src = "https://www.pngitem.com/pimgs/m/140-1400038_cartoon-rocket-ship-png-clipart-png-download-cartoon.png">
  </div>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

var sec = 10;
var timer = setInterval(() => {
  sec--;
  document.getElementById("base-timer-label").innerHTML = formatTime(
      sec
    );
  if(sec == 0){
    document.getElementById("base-timer-label").style.display = "none";
    document.getElementById("wow").style.display = "block";
    clearInterval(timer);
  }
}, 1000);

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  for(let i=0; i<10;){
    timePassed = timePassed + 1;
    timeLeft = TIME_LIMIT - timePassed;
    console.log(timeLeft);
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setInterval(() => {

    if (timeLeft === 0) {
      document.getElementById("wow").style.display = "block";
      onTimesUp();
    }
  }, 1000);
    i+=1;
  }
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}