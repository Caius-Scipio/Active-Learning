/**
 * JavaScript Basic [ 150 Exercises with Solution ]
 * https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
 *
 */
// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
console.log("%cJavaScript Basic #1", "color: red");
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let now = new Date();
let weekday = daysOfTheWeek[now.getDay()];
let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
//
console.log("Today is: " + weekday);
console.log("Current time is " + time);
//
// 2. Write a JavaScript program to print the current window contents.
console.log("%cJavaScript Basic #2", "color: red");
function printWindow() {
  window.print();
}
console.log("prints the window, check the code in the JS file");
//
// 3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
console.log("%cJavaScript Basic #3", "color: red");
let month = now.getMonth() + 1;
if (month < 10) {
  month = "0" + month;
}
let day = now.getDate();
if (day < 10) {
  day = "0" + day;
}
let year = now.getFullYear();
//
console.log(month + "/" + day + "/" + year);
// `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`                               // * simpler answer
//
// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
console.log("%cJavaScript Basic #4", "color: red");
let sideA = 5;
let sideB = 6;
let sideC = 7;
let s = (sideA + sideB + sideC) / 2;
let area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
console.log("The area of a 5-6-7 triangle is: " + area);
//
// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction.
// This is done by periodically removing one letter from the string end and attaching it to the front.
console.log("%cJavaScript Basic #5", "color: red");
function marquee(id) {
  let element = document.querySelector(id);
  let textNode = element.childNodes[0];
  let text = textNode.data;
  setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 100);
}
marquee("#target5");
console.log("The marquee on the page");
//
// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
console.log("%cJavaScript Basic #6", "color: red");
function leapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(leapYear(1516));
//
// 7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
console.log("%cJavaScript Basic #7", "color: red");
for (let year = 2014; year <= 2050; year++) {
  let jan1 = new Date(year, 0, 1);
  let jan1day = jan1.getDay();
  jan1day === 0 ? console.log(year + " January 1st is a Sunday") : "";
}
//
// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number.
// The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
console.log("%cJavaScript Basic #8", "color: red");
let rand = Math.floor(Math.random() * 10 + 1);
let choice = prompt("Choose a number between 1 and 10");
if (rand === parseInt(choice)) {
  console.log("Good Work");
} else {
  console.log("Not Matched");
}
//
// 9. Write a JavaScript program to calculate the days left before Christmas.
console.log("%cJavaScript Basic #9", "color: red");
let today = new Date();
let christmas = new Date(today.getFullYear(), 11, 25);

if (today.getMonth() === 11 && today.getDate() > 25) {
  christmas.setFullYear(christmas.getFullYear() + 1);
}

const calcOneDay = 1000 * 60 * 60 * 24;
console.log(`${Math.ceil((christmas.getTime() - today.getTime()) / calcOneDay)} days left until Christmas!`);
//
// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).
// Sample form :
// sample form
console.log("%cJavaScript Basic #10", "color: red");
function multiplyBy(firstNum, secondNum) {
  firstNum = document.querySelector("#firstNumber").value;
  secondNum = document.querySelector("#secondNumber").value;

  document.querySelector("#result").innerHTML = firstNum * secondNum;
}
function divideBy(firstNum, secondNum) {
  firstNum = document.querySelector("#firstNumber").value;
  secondNum = document.querySelector("#secondNumber").value;

  document.querySelector("#result").innerHTML = firstNum / secondNum;
}
//
// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
console.log("%cJavaScript Basic #11", "color: red");
function toCelcius(f) {
  let c = ((f - 32) / 9) * 5;
  console.log(c + " degrees Celcius");
}
function toFahrenheit(c) {
  let f = (c / 5) * 9 + 32;
  console.log(f + " degrees Fahrenheight");
}
toCelcius(45);
toFahrenheit(60);
//
// 12. Write a JavaScript program to get the website URL (loading page).
console.log("%cJavaScript Basic #12", "color: red");
console.log(`${document.URL}`);
//
// 13. Write a JavaScript exercise to create a variable using a user-defined name.
console.log("%cJavaScript Basic #13", "color: red");
const aVar = "something";
const aVar2 = 64;
this[aVar] = aVar2;
console.log(this[aVar]);
//
// 14. Write a JavaScript exercise to get the filename extension.
console.log("%cJavaScript Basic #14", "color: red");
let filename = "test.js";
console.log(filename.split(".").pop());
//
// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.
console.log("%cJavaScript Basic #15", "color: red");
const question15 = (n) => {
  return n > 13 ? (n - 13) * 2 : 13 - n;
};
console.log(question15(2));
console.log(question15(15));
//
// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
console.log("%cJavaScript Basic #16", "color: red");
const question16 = (num1, num2) => {
  return num1 === num2 ? (num1 + num2) * 3 : num1 + num2;
};
console.log(question16(20, 10));
console.log(question16(5, 5));
//
// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.
console.log("%cJavaScript Basic #17", "color: red");
const question17 = (n) => {
  return n > 19 ? Math.abs(19 - n) * 3 : Math.abs(19 - n);
};
console.log(question17(14));
console.log(question17(24));
//
// 18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
console.log("%cJavaScript Basic #18", "color: red");
const question18 = (n1, n2) => {
  return n1 + n2 === 50 || (n1 || n2) === 50 ? true : false;
};
console.log(question18(50, 1));
console.log(question18(1, 49));
console.log(question18(20, 20));
//
// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
console.log("%cJavaScript Basic #19", "color: red");
const question19 = (n) => Math.abs(100 - n) < 21 || Math.abs(400 - n) < 21;
console.log(question19(121));
console.log(question19(100));
console.log(question19(79));
console.log(question19(422));
console.log(question19(400));
console.log(question19(378));
//
// 20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.
console.log("%cJavaScript Basic #20", "color: red");
const question20 = (n) => {
  return n >= 0 ? "It's positive" : "It's negative";
};
console.log(question20(1));
console.log(question20(-1));
console.log(question20(0));
console.log(question20(randomlyNegative(randomNumber())));
//
// 21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.
console.log("%cJavaScript Basic #21", "color: red");
const question21 = (str) => {
  return str === null || str === undefined || str.substring(0, 2) === "Py" ? str : `Py${str}`;
};
console.log(question21("Python"));
console.log(question21("thon"));
console.log(question21("python"));
//
// 22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
console.log("%cJavaScript Basic #22", "color: red");
const question22 = (str, n) => {
  let str1 = str.substring(str, n);
  let str2 = str.substring(n + 1, str.length);
  return str1 + str2;
};
console.log(question22("abcdefg", 2));
//
// 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.
console.log("%cJavaScript Basic #23", "color: red");
const question23 = (str) => {
  let baseStr = str.substring(1, str.length - 1);
  return str.charAt(str.length - 1) + baseStr + str.charAt(0);
}
console.log(question23("abcdefg"));
//
// 24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.
console.log("%cJavaScript Basic #24", "color: red");
const question24 = (str) => {
  let first = str.substring(0, 1);
  return first + str + first;
}
console.log(question24("abcdefg"));
//
// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
console.log("%cJavaScript Basic #25", "color: red");
const question25 = (n) => {
  return n % 3 === 0 || n % 7 === 0 ? "Multiple of 3 or 7" : "Not a multiple of 3 or 7";
}
console.log(question25(randomNumber()));
console.log(question25(randomNumber()));
console.log(question25(randomNumber()));
//