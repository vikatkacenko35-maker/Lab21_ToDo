const timeDisplay = document.getElementById("timeDisplay");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;
let isRunning = false;

function updateDisplay() {
    const hh = String(hours).padStart(2, '0');
    const mm = String(minutes).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');
    timeDisplay.textContent = `${hh}:${mm}:${ss}`;
}

function incrementTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    intervalId = setInterval(incrementTime, 1000);
}
function stopTimer() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(intervalId);
    intervalId = null;
}

function resetTimer() {
    if (isRunning) {
        stopTimer();
    }
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);


updateDisplay();