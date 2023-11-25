var timeBegan = null;
var timeStopped = null;
var stoppedDuration = 0;
var startInterval = null;

function toStart() {
  if (document.getElementById("start").innerHTML === "Resume") {
    document.getElementById("start").innerHTML = "Started";
  }
  if (document.getElementById("stop").innerHTML === "Stopped") {
    document.getElementById("stop").innerHTML = "Stop";
  }
  document.getElementById("start").innerHTML = "Started";
  startTimer();
}

function startTimer() {
  if (timeBegan === null) {
    timeBegan = new Date();
  }
  if (timeStopped !== null) {
    stoppedDuration += new Date() - timeStopped;
  }
  document.getElementById("start").classList.add("pointer-event");
  startInterval = setInterval(timeRunning, 10);
}

function stopTimer() {
  timeStopped = new Date();
  clearInterval(startInterval);
}

function toStop() {
  document.getElementById("start").innerHTML = "Resume";
  document.getElementById("stop").innerHTML = "Stopped";
  document.getElementById("start").classList.remove("pointer-event");
  stopTimer();
}

function timeRunning() {
  let newTimer = new Date();
  let timer = new Date(newTimer - timeBegan - stoppedDuration);
  var hours = timer.getUTCHours();
  var minutes = timer.getUTCMinutes();
  var seconds = timer.getUTCSeconds();
  var millieSeconds = timer.getUTCMilliseconds();

  millieSeconds = Math.floor(millieSeconds / 10);

  document.getElementById("time-display").innerHTML =
    (hours = hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes = minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds = seconds < 10 ? "0" + seconds : seconds) +
    ":" +
    (millieSeconds = millieSeconds < 10 ? "0" + millieSeconds : millieSeconds);
}

function toReset() {
  clearInterval(startInterval);
  timeBegan = null;
  timeStopped = null;
  stoppedDuration = 0;
  document.getElementById("time-display").innerHTML = "00:00:00:00";
  document.getElementById("start").innerHTML = "Start";
  document.getElementById("stop").innerHTML = "Stop";
}
