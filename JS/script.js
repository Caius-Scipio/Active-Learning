/**
 * JavaScript Basic [ 150 Exercises with Solution ]
 * JavaScript Fundamental (ES6 version) Part-I [ 150 Exercises with Solution ]
 * JavaScript Fundamental (ES6 version) Part-II [ 116 Exercises with Solution ]
 * JavaScript Error Handling [ 13 Exercises with Solution ]
 * JavaScript Functions [ 29 Exercises with Solution ]
 * JavaScript Recursion [ 13 Exercises with Solution ]
 * JavaScript Event Handling [ 10 exercises with solution ]
 * JavaScript Asynchronous Programming [ 9 exercises with solution ]
 * JavaScript Object-Oriented Programming [ 12 exercises with solution ]
 * JavaScript Math [ 114 Exercises with Solution ]
 * JavaScript Array [ 53 Exercises with Solution ]
 * JavaScript Stack [35 exercises with solution]
 * JavaScript Linked List [35 exercises with solution]
 * JavaScript Date [ 57 Exercises with Solution ]
 * JavaScript String [ 64 Exercises with Solution ]
 * JavaScript Bit Manipulation [ 15 Exercises with Solution ]
 * JavaScript Validation with Regular expression [ 21 Exercises with Solution ]
 * JavaScript HTML DOM [ 13 Exercises with Solution ]
 * JavaScript Drawing [ 6 Exercises with Solution ]
 * JavaScript Object [ 18 Exercises with Solution ]
 * JavaScript Basic Validation without Regular expression [10 Exercises with Solution ]
 * JavaScript Sorting Algorithm [31 Exercises with Solution ]
 * JavaScript Searching Algorithm [5 Exercises with Solution ]
 */

/**
 * JavaScript Conditional Statements and loops [ 12 Exercises with Solution ]
 * https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php
 *
 * 1. Write a JavaScript program that displays the largest integer among two integers.
 *
 *       console.log("JavaScript Conditional Statements and loops #1");
 *       let aVar1 = Math.floor(Math.random() * 100);
 *       let aVar2 = Math.floor(Math.random() * 100);
 *       console.log("aVar1 is: " + aVar1);
 *       console.log("aVar2 is: " + aVar2);
 *       if (aVar1 > aVar2) {
 *         console.log("The winner is aVar1 with " + aVar1);
 *       }
 *       else if (aVar2 > aVar1) {
 *         console.log("The winner is aVar2 with " + aVar2);
 *       }
 *       else {
 *         console.log("Hey Hey Hey it's magic!");
 *         console.log(aVar1 + " = " + aVar2);
 *       }
 *
 * 2. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
 *    Sample numbers : 3, -7, 2
 *    Output : The sign is -
 * 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
 *    Sample numbers : 0, -1, 4
 *    Output : 4, 0, -1
 * 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
 *    Sample numbers : -5, -2, -6, 0, -1
 *    Output : 0
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
