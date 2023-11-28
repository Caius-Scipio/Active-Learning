/**
 * JavaScript Conditional Statements and loops [ 12 Exercises with Solution ]
 * https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php
 *
 * 5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
 *    Sample Output :
 *    "0 is even"
 *    "1 is odd"
 *    "2 is even"
 *    ----------
 *    ----------
 * 6. Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.
 *    Student Name	Marks
 *    David	80
 *    Vinoth	77
 *    Divya	88
 *    Ishitha	95
 *    Thomas	68
 *    The grades are computed as follows :
 *    Range	Grade
 *    <60	F
 *    <70	D
 *    <80	C
 *    <90	B
 *    <100	A
 * 7. Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".
 * 8. According to Wikipedia a happy number is defined by the following process :
 *    "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
 *    Write a JavaScript program to find and print the first 5 happy numbers.
 * 9. Write a JavaScript program to find the Armstrong numbers of 3 digits.
 *    Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.
 * 10. Write a JavaScript program to construct the following pattern, using a nested for loop.
 *    *
 *    * *
 *    * * *
 *    * * * *
 *    * * * * *
 * 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.
 * 12. Write a JavaScript program to sum 3 and 5 multiples under 1000.
 */

// 1. Write a JavaScript program that displays the largest integer among two integers.
console.log("JavaScript Conditional Statements and loops #1");
let aVar1 = Math.floor(Math.random() * 100);
let aVar2 = Math.floor(Math.random() * 100);
console.log("aVar1 is: " + aVar1);
console.log("aVar2 is: " + aVar2);

if (aVar1 > aVar2) {
  console.log("The winner is aVar1 with " + aVar1);
}
else if (aVar2 > aVar1) {
  console.log("The winner is aVar2 with " + aVar2);
}
else {
  console.log("Hey Hey Hey it's magic!");
  console.log(aVar1 + " = " + aVar2);
}

//  2. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
//     Sample numbers : 3, -7, 2
//     Output : The sign is -
console.log("JavaScript Conditional Statements and loops #2");
let num1 = randomlyNegative((Math.ceil(Math.random() * 10)));
let num2 = randomlyNegative((Math.ceil(Math.random() * 10)));
let num3 = randomlyNegative((Math.ceil(Math.random() * 10)));
console.log("If you multiply: " + num1, num2, num3 + " then ...");

if (num1 * num2 * num3 < 0) {
  console.log("The sign is -");
}
else {
  console.log("The sign in +");
}

//  3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
//     Sample numbers : 0, -1, 4
//     Output : 4, 0, -1
console.log("JavaScript Conditional Statements and loops #3");
let num4 = randomlyNegative((Math.ceil(Math.random() * 100)));
let num5 = randomlyNegative((Math.ceil(Math.random() * 100)));
let num6 = randomlyNegative((Math.ceil(Math.random() * 100)));
console.log("Order: " + num4, num5, num6 + " from: ");

if (num4 > num5 && num4 > num6) {
  if (num5 > num6) {
    console.log("greatest to least: " + num4 + ", " + num5 + ", " + num6);
  }
  else {
    console.log("greatest to least: " + num4 + ", " + num6 + ", " + num5);
  }
}
else if (num5 > num4 && num5 > num6) {
  if (num4 > num6) {
    console.log("greatest to least: " + num5 + ", " + num4 + ", " + num6);
  }
  else {
    console.log("greatest to least: " + num5 + ", " + num6 + ", " + num4);
  }
}
else if (num6 > num4 && num6 > num5) {
  if (num4 > num5) {
    console.log("greatest to least: " + num6 + ", " + num4 + ", " + num5);
  }
  else {
    console.log("greatest to least: " + num6 + ", " + num5 + ", " + num4);
  }
}

// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
//    Sample numbers : -5, -2, -6, 0, -1
//    Output: 0
console.log("JavaScript Conditional Statements and loops #4");
let num7 = randomlyNegative((Math.ceil(Math.random() * 100)));
let num8 = randomlyNegative((Math.ceil(Math.random() * 100)));
let num9 = randomlyNegative((Math.ceil(Math.random() * 100)));
let num10 = randomlyNegative((Math.ceil(Math.random() * 100)));
let num11 = randomlyNegative((Math.ceil(Math.random() * 100)));
console.log(num7, num8, num9, num10, num11);

if (num7 > num8 && num7 > num9 && num7 > num10 && num7 > num11) {
  console.log("The largest number is: " + num7);
}
else if (num8 > num7 && num8 > num9 && num8 > num10 && num8 > num11) {
  console.log("The largest number is: " + num8);
}
else if (num9 > num8 && num9 > num7 && num9 > num10 && num9 > num11) {
  console.log("The largest number is: " + num9);
}
else if (num10 > num8 && num10 > num9 && num10 > num7 && num10 > num11) {
  console.log("The largest number is: " + num10);
}
else if (num11 > num8 && num11 > num9 && num11 > num10 && num11 > num7) {
  console.log("The largest number is: " + num11);
}