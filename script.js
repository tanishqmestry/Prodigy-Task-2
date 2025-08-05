let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let laps = document.getElementById("laps");
let interval = null;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.textContent = `${h}:${m}:${s}`;
}

function timer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function startStop() {
  if (!interval) {
    interval = setInterval(timer, 1000);
  }
}
function pause() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  pause();
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
  laps.innerHTML = "";
}
function lap() {
  let li = document.createElement("li");
  li.textContent = display.textContent;
  laps.appendChild(li);
}
