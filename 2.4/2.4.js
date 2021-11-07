// Arrays
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// vars
const myDate = new Date();
const monthName = months[myDate.getMonth()];
const dayName = days[myDate.getDay()];
const dayOfMonth = myDate.getUTCDate();
const fullYear = myDate.getFullYear();

console.log(
  "Today is " +
    dayName +
    " the " +
    dayOfMonth +
    " of " +
    dayName +
    ", " +
    fullYear
);
