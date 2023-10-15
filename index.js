const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secEl = document.getElementById("sec");

// दिनांक 15 अक्टूबर 2023 14:50 निर्धारित करें।
const newYear = new Date('2023-10-15T14:50:00').getTime();

function countdown() {
    const currentDate = new Date().getTime();
    const totalSeconds = (newYear - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

countdown();

setInterval(countdown, 1000);
