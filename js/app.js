const months = [
    "Enero", 
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio", 
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];

const weekdays = [
    "domingo",
    "lunes", 
    "martes",
    "miércoles",
    "jueves",
    "viernes", 
    "sábado"
];

const birthday = document.querySelector(".birthday");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let birthdayDate = new Date(2023, 9, 4, 00, 00, 01);

const year = birthdayDate.getFullYear();
const month = months[birthdayDate.getMonth()];
const date = birthdayDate.getDate();
const day = weekdays[birthdayDate.getDay()];
const minute = birthdayDate.getMinutes();
const second = birthdayDate.getSeconds();

birthday.textContent = `La fecha de mi cumple es el ${day} ${date} de ${month} de ${year}`;

const birthdayTime = birthdayDate.getTime();

function getRemainingTime(){
    const msecInASec = 1000;
    const msecInAMin = 60 * msecInASec;
    const msecInAnHour = 60 * msecInAMin;
    const msecInADay = 24 * msecInAnHour;

    let currentDateTime = new Date().getTime();
    let differenceTime = birthdayTime - currentDateTime;

    if (differenceTime < 0){
        differenceTime = 0;
    };

    let remainingDays = Math.floor(differenceTime / msecInADay);
    let hourLeft = differenceTime % msecInADay;
    let remainingHours = Math.floor(hourLeft / msecInAnHour);
    let minLeft = hourLeft % msecInAnHour;
    let remainingMin = Math.floor(minLeft / msecInAMin);
    let secLeft = minLeft % msecInAMin;
    let remainingSec = Math.floor(secLeft / msecInASec);

    const values = [remainingDays, remainingHours, remainingMin, remainingSec];

    //console.log(values);

    items.forEach(function(item, index){
        if (values[index] < 10){
            item.innerHTML = `0${values[index]}`;
        }
        else{
            item.innerHTML = values[index]; 
        }
    });

};

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
