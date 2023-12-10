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

// 26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

// 28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.

// 29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.

// 30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.

// 31. Write a JavaScript program to find the largest of three given integers.

// 32. Write a JavaScript program to find the closest value to 100 from two numerical values.

// 33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.

// 34. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.

// 35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.

// 36. Write a JavaScript program that checks whether the last digit of three positive integers is the same.

// 37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.

// 38. Write a JavaScript program to check a student's total marks in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. If the student gets an A+ grade, return true, otherwise return false.

// 39. Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.

// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

// 41. Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.

// 42. Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

// 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

// 44. Write a JavaScript program to check from three given integers whether a number is greater than or equal to 20. It is less than the others.

// 45. Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.

// 46. Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.

// 47. Write a JavaScript program to check whether a given number exists in the range 40..10000.
// For example 40 presents in 40 and 4000

// 48. Write a JavaScript program to reverse a given string.

// 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

// 50. Write a JavaScript program to capitalize the first letter of each word in a given string.

// 51. Write a JavaScript program to convert a given number into hours and minutes.

// 52. Write a JavaScript program to convert letters of a given string alphabetically.

// 53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

// 54. Write a JavaScript program to count the number of vowels in a given string.

// 55. Write a JavaScript program to check whether a given string contains an equal number of p's and t's.

// 56. Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.

// 57. Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.

// 58. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.

// 59. Write a JavaScript program to extract the first half of a even string.

// 60. Write a JavaScript program to create a new string without the first and last characters of a given string.

// 61. Write a JavaScript program to concatenate two strings except for their first character.

// 62. Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.

// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.

// 64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.

// 65. Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.

// 66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

// 67. Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.

// 68. Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.

// 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

// 70. Write a JavaScript program to rotate the elements left in a given array of integers of length 3.

// 71. Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.

// 72. Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.

// 73. Write a JavaScript program to reverse the elements of a given array of integers of length 3.

// 74. Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.

// 75. Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.

// 76. Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.

// 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.

// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.

// 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.

// 80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

// 81. Write a JavaScript program to add two digits to a given positive integer of length two.

// 82. Write a JavaScript program to add two positive integers without carrying.

// 83. Write a JavaScript program to find the longest string from a given array of strings.

// 84. Write a JavaScript program to replace each character in a given string with the next in the English alphabet.
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

// 85. Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.

// 86. Write a JavaScript program to find the types of a given angle.
// Types of angles:
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

// 87. Write a JavaScript program to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.

// 88. Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.

// 89. Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.
// For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z

// 90. Write a JavaScript program to find the kth greatest element in a given array of integers.

// 91. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers.

// 92. Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.

// 93. Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.

// 94. Write a JavaScript program to find the number appearing most frequently in a given array of integers.

// 95. Write a JavaScript program to replace all numbers with a specified number in an array of integers.

// 96. Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.

// 97. Write a JavaScript program to find the shortest possible string. This can be converted into a string and converted into a palindrome by adding characters to the end of it.

// 98. Write a JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case.
// Fox example "Write" will be write and "PHp" will be "PHP"

// 99. Write a JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string.

// 100. Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers.

// 101. Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.

// 102. Write a JavaScript program to find the number of inversions of a given array of integers.
// Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.

// 103. Write a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number.

// 104. Write a JavaScript program to find two elements of an array such that their absolute difference is not larger than a given integer. However, it is as close as possible to the integer.

// 105. Write a JavaScript program to find the number of times to replace a given number with the sum of its digits. This is until it converts to a single-digit number.

// 106. Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.

// 107. Write a JavaScript program to find the number of sorted pairs formed by arrays of integers. This is such that one element in the pair is divisible by the other one.
// For example - The output of [1, 3, 2] ->2 - (1,3), (1,2).
// The output of [2, 4, 6] -> 2 - (2,4), (2,6)
// The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16)

// 108. Write a JavaScript program to create the dot products of two given 3D vectors.
// Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.

// 109. Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.

// 110. Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.

// 111. Write a JavaScript program to check a number from three given numbers where two numbers are equal. Find the third one.

// 112. Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number.

// 113. Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers.

// 114. Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered a correct sentence if it starts with a capital letter and ends with a full stop (.)

// 115. Write a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right).
// Example:
// [1, 0, 0], [0, 2, 0], [0, 0, 3] ]) = true
// [1, 0, 0], [0, 2, 3], [0, 0, 3] ]) = false

// 116. Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3.
// For a string "2*0", the output should be : ["210", "240", "270"]

// 117. Write a JavaScript program to check whether a given matrix is an identity matrix.
// Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n ? n square matrix with ones on the main diagonal and zeros elsewhere.
// [[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
// [[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false

// 118. Write a JavaScript program to check whether a given number is in a given range.

// 119. Write a JavaScript program to check if a given integer has an increasing digit sequence.

// 120. Write a JavaScript program to check if a point lies strictly inside the circle.
// Input:
// Center of the circle (x, y)
// Radius of circle: r
// Point inside a circle (a, b)

// 121. Write a JavaScript program to check whether a given matrix is lower triangular or not.
// Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.

// 122. Write a JavaScript program to check whether a given array of integers represents a strictly increasing or decreasing sequence.

// 123. Write a JavaScript program to find out if the members of a given array of integers are a permutation of numbers from 1 to a given integer.

// 124. Write a JavaScript program to create the NOR value of two given booleans.
// Note: In boolean logic, logical nor or joint denial is a truth-functional operator which produces a result that is the negation of logical or. That is, a sentence of the form (p NOR q) is true precisely when neither p nor q is true - i.e. when both of p and q are false
// Sample Example:
// For x = true and y = false, the output should be logical_Nor(x, y) = false; For x = false and y = false, the output should be logical_Nor(x, y) = true.

// 125. Write a JavaScript program to find the longest string in a given array.

// 126. Write a JavaScript program to get the largest even number from an array of integers.

// 127. Write a JavaScript program to reverse the order of bits in a integer.
// 14 -> 00001110 -> 01110000 -> 112
// 56 -> 00111000 -> 00011100 -> 28
// 234 -> 11101010 -> 01010111 -> 87

// 128. Write a JavaScript program to find the smallest round number not less than a given value.
// Note: A round number is informally considered to be an integer that ends with one or more zeros.[3] So, 590 is rounder than 592, but 590 is less round than 600.

// 129. Write a JavaScript program to find the smallest prime number strictly greater than a given number.

// 130. Write a JavaScript program to find the number of even digits in a given integer.

// 131. Write a JavaScript program to create an array of prefix sums of the given array.
// In computer science, the prefix sum, cumulative sum, inclusive scan, or simply scan of a sequence of numbers x0, x1, x2, ... is a second sequence of numbers y0, y1, y2, ..., the sums of prefixes of the input sequence:
// y0 = x0
// y1 = x0 + x1
// y2 = x0 + x1+ x2
// ...

// 132. Write a JavaScript program to find all distinct prime factors of a given integer.

// 133. Write a JavaScript program to check whether a given fraction is proper or not.
// Note: There are two types of common fractions, proper or improper. When the numerator and the denominator are both positive, the fraction is called proper if the numerator is less than the denominator, and improper otherwise.

// 134. Write a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

// 135. Write a JavaScript program to remove all characters from a given string that appear more than once.

// 136. Write a JavaScript program to replace the first digit in a string (should have at least one digit) with the $ character.

// 137. Write a JavaScript program to test whether a given integer is greater than 15 and return the given number, otherwise return 15.

// 138. Write a JavaScript program to reverse the bits of a given 16-bit unsigned short integer.

// 139. Write a JavaScript program to find the position of the rightmost round number in an array of integers. If there are no round numbers, the function returns 0.
// Note: A round number is informally considered to be an integer that ends with one or more zeros.

// 140. Write a JavaScript program to check whether all the digits in a given number are the same or not.

// 141. Write a JavaScript program to find the number of elements in both arrays.

// 142. Write a JavaScript program to simplify a given absolute path for a file in Unix-style.

// 143. Write a JavaScript program to sort the strings of a given array of strings in order of increasing length.
// Note: Do not change the order if the lengths of two string are same.

// 144. Write a JavaScript program to break an URL address and put its parts into an array.
// Note: url structure : ://.org[/] and there may be no part in the address.

// 145. Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer.

// 146. Write a JavaScript program to compute the sum of cubes of all integers from 1 to a given integer.

// 147. Write a JavaScript program to compute the sum of all the digits that occur in a given string.

// 148. Write a JavaScript program to swap two halves of a given array of integers of even length.

// 149. Write a JavaScript program to change the capitalization of all letters in a given string.

// 150. Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.
