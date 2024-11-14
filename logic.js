const hourEl = document.querySelector('.hour-hand');
const minuteEl = document.querySelector('.minute-hand');
const secondEl = document.querySelector('.second-hand');

function setDate() {
    constcurrentDate = new Date();

    const seconds = currentDate.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondEl.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes =currentDate.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteEl.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours =currentDate.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourEl.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();