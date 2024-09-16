let timerEl = document.getElementById("timer");


let totalTime = 1500;

let minuteEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
let startbtn = document.getElementById("startbtn");
let stopbtn = document.getElementById("stopbtn");
let resetbtn = document.getElementById("resetbtn");
let timer;
startbtn.addEventListener("click", () => {
    timer = setInterval(() => {
        totalTime -= 1
        minuteEl.textContent = Math.floor(totalTime / 60)
        secondsEl.textContent = totalTime % 60
    }, 1000)
})

stopbtn.addEventListener("click", () => {
    clearInterval(timer)
})

resetbtn.addEventListener("click", () => {
    minuteEl.textContent = 25
    secondsEl.textContent = "00"
    totalTime = 1500
})