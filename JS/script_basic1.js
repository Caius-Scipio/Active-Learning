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
  return n1 + n2 === 50 || (n1 || n2) === 50;
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
};
console.log(question23("abcdefg"));
//
// 24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.
console.log("%cJavaScript Basic #24", "color: red");
const question24 = (str) => {
  let first = str.substring(0, 1);
  return first + str + first;
};
console.log(question24("abcdefg"));
//
// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
console.log("%cJavaScript Basic #25", "color: red");
const question25 = (n) => {
  return n % 3 === 0 || n % 7 === 0 ? "Multiple of 3 or 7" : "Not a multiple of 3 or 7";
};
console.log(question25(randomNumber()));
console.log(question25(randomNumber()));
console.log(question25(randomNumber()));
//
// 26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.
console.log("%cJavaScript Basic #26", "color: red");
function modifyString(str) {
  if (str.length >= 3) {
    let segment = str.substring(str.length - 3);
    return segment + str + segment;
  }
  return "String is not long enough";
}
console.log(modifyString("my"));
console.log(modifyString("wordnot"));
console.log(modifyString("workingnot"));
//
// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.
console.log("%cJavaScript Basic #27", "color: red");
function modifywithJava(str) {
  if (str.length < 4) {
    return false;
  }
  return str.substring(0, 4) != "Java" ? false : true;
}
console.log(modifywithJava("PHP"));
console.log(modifywithJava("JavaScript"));
console.log(modifywithJava("Script"));
//
// 28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.
console.log("%cJavaScript Basic #28", "color: red");
const question28 = (n1, n2) => {
  return (n1 >= 50 && n1 <= 99) || (n2 >= 50 && n2 <= 99);
};
console.log("Should be False: " + question28(48, 49));
console.log("Should be True: " + question28(49, 50));
console.log("Should be True: " + question28(99, 100));
console.log("Should be False: " + question28(100, 101));
//
// 29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.
console.log("%cJavaScript Basic #29", "color: red");
const question29 = (n1, n2, n3) => {
  return (n1 >= 50 && n1 <= 99) || (n2 >= 50 && n2 <= 99) || (n3 >= 50 && n3 <= 99);
};
console.log("Should be True: " + question29(50, 90, 99));
console.log("Should be False: " + question29(5, 9, 199));
console.log("Should be True: " + question29(65, 89, 199));
console.log("Should be True: " + question29(65, 9, 199));
//
// 30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.
console.log("%cJavaScript Basic #30", "color: red");
function removeScript(str) {
  if (str.length < 6) {
    return str;
  }
  let segment = str.substring(4, 10);
  if (segment === "Script") {
    return str.substring(0, 4) + str.substring(10, str.length);
  }
  return str;
}
console.log(removeScript("JavaScript"));
console.log(removeScript("CoffeeScript"));
//
// 31. Write a JavaScript program to find the largest of three given integers.
console.log("%cJavaScript Basic #31", "color: red");
function findGreaterInteger(n1, n2, n3) {
  let value = 0;
  value = n1 > n2 ? n1 : n2;
  value = n3 > value ? n3 : value;
  return value;
}
console.log("Should be 3: " + findGreaterInteger(1, 2, 3));
console.log("Should be 3: " + findGreaterInteger(2, 3, 1));
console.log("Should be 3: " + findGreaterInteger(3, 1, 2));
//
// 32. Write a JavaScript program to find the closest value to 100 from two numerical values.
console.log("%cJavaScript Basic #32", "color: red");
function closertoOneHundred(n1, n2) {
  if (n1 != n2) {
    let n1Difference = Math.abs(100 - n1);
    let n2Difference = Math.abs(100 - n2);
    if (n1Difference < n2Difference) {
      return n1;
    }
    if (n1Difference > n2Difference) {
      return n2;
    }
    return 0;
  } else {
    return false;
  }
}
console.log("Should be 99: " + closertoOneHundred(99, 102));
console.log("Should be 101: " + closertoOneHundred(101, 50));
console.log("Should be False: " + closertoOneHundred(90, 90));
console.log("Should be 0: " + closertoOneHundred(80, 120));
//
// 33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.
console.log("%cJavaScript Basic #33", "color: red");
const withinRanges = (n1, n2) => {
  return (n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60) || (n1 >= 70 && n1 <= 100 && n2 >= 70 && n2 <= 100)
    ? true
    : false;
};
console.log("Should be True: " + withinRanges(44, 56));
console.log("Should be False: " + withinRanges(50, 89));
console.log("Should be True: " + withinRanges(70, 95));
//
// 34. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.
console.log("%cJavaScript Basic #34", "color: red");
function withinRange(n1, n2) {
  if (n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60) {
    return n1 > n2 ? n1 : n2;
  } else if (n1 === n2) {
    return "They are the same number";
  } else {
    return "They are out of bounds";
  }
}
console.log(withinRange(45, 60));
console.log(withinRange(25, 60));
console.log(withinRange(45, 80));
//
// 35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.
console.log("%cJavaScript Basic #35", "color: red");
function checkCharacter(str, c) {
  let segment = str.substring(1, 4);
  if (str.length < 5) {
    return "Not long enough";
  }
  return segment.includes(c, 0);
}
console.log("Should be True: " + checkCharacter("Python", "y"));
console.log("Should be True: " + checkCharacter("JavaScript", "a"));
console.log("Should be True: " + checkCharacter("Console", "o"));
console.log("Should be False: " + checkCharacter("Console", "C"));
console.log("Should be False: " + checkCharacter("Console", "e"));
console.log("Should be False: " + checkCharacter("JavaScript", "S"));
//
// 36. Write a JavaScript program that checks whether the last digit of three positive integers is the same.
console.log("%cJavaScript Basic #36", "color: red");
function question36(n1, n2, n3) {
  if (n1 > 0 && n2 > 0 && n3 > 0) {
    return n1 % 10 === n2 % 10 && n2 % 10 === n3 % 10 && n1 % 10 === n3 % 10;
  } else {
    return false;
  }
}
console.log(question36(10, 112, 4));
console.log(question36(-20, 30, 400));
console.log(question36(10, 20, 400));
//
// 37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.
console.log("%cJavaScript Basic #37", "color: red");
function question37(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  }
  let segmentChanged = str.substring(0, 3).toLowerCase();
  let segmentUnchanged = str.substring(3)
  return segmentChanged + segmentUnchanged;
}
console.log(question37("we"));
console.log(question37("JAVASCRIPT"));
//
// 38. Write a JavaScript program to check a student's total marks in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. If the student gets an A+ grade, return true, otherwise return false.
console.log("%cJavaScript Basic #38", "color: red");
function question38(score, type = " ") {
  if (type === "final") {
    return score >= 90;
  } else {
    return score >= 89;
  }
}
console.log("Test should return true: " + question38(89));
console.log("Test should return false: " + question38(88));
console.log("Test should return false: " + question38(89, "final"));
console.log("Test should return true: " + question38(90, "final"));
//
// 39. Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.
console.log("%cJavaScript Basic #39", "color: red");
function question39(n1, n2) {
  return n1 + n2 >= 50 && n1 + n2 <= 80 ? 65 : 80;
}
console.log("Should return 80: " + question39(25, 24));
console.log("hould return 65: " + question39(25, 25));
console.log("hould return 65: " + question39(40, 40));
console.log("hould return 80: " + question39(40, 41));
//
// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
console.log("%cJavaScript Basic #40", "color: red");
function question40(n1, n2) {
  return (n1 === 8 || n2 === 8 || n1 + n2 === 8 || Math.abs(n1 - n2) === 8);
}
console.log("Should return true: " + question40(8, 20));
console.log("Should return true: " + question40(2, 6));
console.log("Should return true: " + question40(1, 9));
console.log("Should return false: " + question40(9, 20));
console.log("Should return false: " + question40(11, 18));
console.log("Should return false: " + question40(22, 20));
//
// 41. Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.
console.log("%cJavaScript Basic #41", "color: red");
function question41(n1, n2, n3) {
  if (n1 === n2 && n2 === n3) {
    return 30;
  }
  if (n1 === n2 || n2 === n3 || n1 === n3) {
    return 40;
  }
  return 20;
}
console.log("Should return 30: " + question41(1, 1, 1));
console.log("Should return 40: " + question41(1, 2, 1));
console.log("Should return 20: " + question41(1, 2, 3));
//
// 42. Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
console.log("%cJavaScript Basic #42", "color: red");
function question42(n1, n2, n3) {
  if (n1 < n2 && n2 < n3) {
    return "Strict mode";
  } else if (n3 > n1) {
    return "Soft mode";
  } else {
    return "Undefined";
  }
}
console.log("Strict mode: " + question42(10, 15, 31));
console.log("Soft mode: " + question42(24, 22, 31));
console.log("Soft mode: " + question42(22, 22, 31));
//
// 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
console.log("%cJavaScript Basic #43", "color: red");
function question43(n1, n2, n3) {
  if (n1 % 10 === n2 % 10 || n1 % 10 === n3 % 10 || n2 % 10 === n3 % 10) {
    return true;
  }
  return false;
}
console.log("Result is true: " + question43(1, 11, 20));
console.log("Result is true: " + question43(1, 20, 11));
console.log("Result is true: " + question43(1, 10, 100));
console.log("Result is false: " + question43(1, 30, 22));
//
// 44. Write a JavaScript program to check from three given integers whether a number is greater than or equal to 20. It is less than the others.
console.log("%cJavaScript Basic #44", "color: red");
function question44(n1, n2, n3) {
  return (n1 >= 20 && (n1 < n2 || n1 < n3)) || (n2 >= 20 && (n2 < n1 || n2 < n3)) || (n3 >= 20 && (n3 < n1 || n3 < n2))
}
console.log("Should be true: " + question44(23, 45, 10));
console.log("Should be false: " + question44(23, 23, 10));
console.log("Should be true: " + question44(21, 66, 75));
//
// 45. Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.
console.log("%cJavaScript Basic #45", "color: red");
function question45(n1, n2) {
  return (n1 === 15 || n2 === 15) || (n1 + n2 === 15) || (Math.abs(n1 - n2) === 15);
}
console.log("Should be true: " + question45(7, 8));
console.log("Should be true: " + question45(25, 15));
console.log("Should be true: " + question45(25, 10));
console.log("Should be false: " + question45(8, 8));
//
// 46. Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.
console.log("%cJavaScript Basic #46", "color: red");
function question46(n1, n2) {
  if ((n1 % 7 === 0 || n1 % 11 === 0) && (n2 % 7 === 0 || n2 % 11 === 0)) {
    return false;
  }
  return (n1 % 7 === 0 || n1 % 11 === 0 || n2 % 7 === 0 || n2 % 11 === 0);
}
console.log("Should be true: " + question46(7, 8));
console.log("Should be true: " + question46(8, 11));
console.log("Should be true: " + question46(14, 8));
console.log("Should be true: " + question46(8, 22));
console.log("Should be false: " + question46(8, 9));
//
// 47. Write a JavaScript program to check whether a given number exists in the range 40..10000. For example 40 presents in 40 and 4000
console.log("%cJavaScript Basic #47", "color: red");
function question47(n) {
  return n >= 40 && n <= 10000;
}
console.log(question47(40));
//
// 48. Write a JavaScript program to reverse a given string.
//
// 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
//
// 50. Write a JavaScript program to capitalize the first letter of each word in a given string.
//