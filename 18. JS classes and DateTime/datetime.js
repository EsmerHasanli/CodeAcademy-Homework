const date = new Date();

console.log(date); //Thu Oct 19 2023 01:07:47 GMT+0400 (Azerbaijan Standard Time)

const currentYear = date.getFullYear();
console.log(currentYear); //2023

const currentMonth = date.getMonth();
console.log(currentMonth); //9 - indeks

const currentDay = date.getDate();
console.log(currentDay); //19

const weekDay = date.getDay();
console.log(weekDay); //4

const currentHour = date.getHours();
console.log(currentHour); //1

const currentMinutes = date.getMinutes();
console.log(currentMinutes); //17

const currentSeconds = date.getSeconds();
console.log(currentSeconds); //31

const currentMiiliSeconds = date.getMilliseconds();
console.log(currentMiiliSeconds); //827

const currentTime = date.getTime();
console.log(currentTime); //1697664096441 - milliseconds since january 1,1970

const formattedDate =moment().format("MMM Do YY");  
console.log(formattedDate); // Oct 19th 23





