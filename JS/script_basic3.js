// 101. Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.
console.log("%cJavaScript Basic #101", "color: red");
function question101(string) {
  const regex = /(?:(?<=[a-z]{2})[A-Z]{2})|(?:(?<=[A-Z]{2})[a-z]{2})/g;
  return !regex.test(string);
}
console.log(question101("xYr"));
// 102. Write a JavaScript program to find the number of inversions of a given array of integers.
// Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.
console.log("%cJavaScript Basic #102", "color: red");
function question102(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j])
        counter++;
    }
  }
  return counter;
}
console.log(question102([0, 3, 2, 5, 9]));
//
// 103. Write a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number.
console.log("%cJavaScript Basic #93", "color: red");
function question103(num) {
  let result = 0, numbers = [];
  while (num) {
    numbers.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (let numIndex = 0; numIndex < numbers.length; numIndex++) {
    let n = 0;
    for (let i = numbers.length - 1; i >= 0; i--) {
      if (i !== numIndex) {
        n = n * 10 + numbers[i];
      }
    }
    result = Math.max(n, result);
  }
  return result;
}
console.log(question103(1245));
//
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
