// 51. Write a JavaScript program to convert a given number into hours and minutes.
console.log("%cJavaScript Basic #47", "color: red");
function question51(num) {
  let hours = Math.floor(num / 60);
  let minutes = num % 60;
  return `${hours} hrs and ${minutes} min`;
}
console.log("Should return 2 hrs and 0 min: " + question51(120));
console.log("Should return 2 hrs and 1 min: " + question51(121));
//
// 52. Write a JavaScript program to convert letters of a given string alphabetically.
console.log("%cJavaScript Basic #47", "color: red");
function question52(str) {
  return str.split("").sort().join("");
}
console.log('Should be "Phnoty": ' + question52("Python"));
//
// 53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
console.log("%cJavaScript Basic #47", "color: red");
function question53(str) {
  return /a.{3}b/.test(str) || /b.{3}a/.test(str);
}
console.log("Should be true: " + question53("chainsbrake"));
//
// 54. Write a JavaScript program to count the number of vowels in a given string.
console.log("%cJavaScript Basic #54", "color: red");
function question54(str) {
  return str.replace(/[^aeiou]/g, "").length;
}
console.log("Should be 4: " + question54("chainsbreak"));
console.log("Should be 3: " + question54("JavaScript"));
console.log("Should be 1: " + question54("Pyhton"));
//
// 55. Write a JavaScript program to check whether a given string contains an equal number of p's and t's.
console.log("%cJavaScript Basic #55", "color: red");
function question55(str) {
  return str.replace(/[^p]/gi, "").length === str.replace(/[^t]/gi, "").length;
}
console.log("Should be false: " + question55("tint"));
console.log("Should be true: " + question55("JavaScript"));
console.log("Should be true: " + question55("Pyhton"));
//
// 56. Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.
console.log("%cJavaScript Basic #56", "color: red");
function question56(num1, num2) {
  return (num1 / num2).toLocaleString();
}
console.log(question56(4000, 4));
//
// 57. Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.
console.log("%cJavaScript Basic #57", "color: red");
function question57(str, num) {
  return str.repeat(num);
}
console.log(question57("the", 3));
//
// 58. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.
console.log("%cJavaScript Basic #58", "color: red");
function question58(str) {
  if (str.length >= 3) {
    return str.substring(str.length - 3).repeat(4);
  }
  return "String length must be greater than 3";
}
console.log(question58("python"));
//
// 59. Write a JavaScript program to extract the first half of a even string.
console.log("%cJavaScript Basic #59", "color: red");
function question59(str) {
  if (str.length % 2 === 0) {
    return str.substring(0, str.length / 2);
  }
  return "String must have an even number of characters";
}
console.log(question59("JavaScript"));
//
// 60. Write a JavaScript program to create a new string without the first and last characters of a given string.
console.log("%cJavaScript Basic #60", "color: red");
function question60(str) {
  return str.substring(1, str.length - 1);
}
console.log(question60("JavaScript"));
//
// 61. Write a JavaScript program to concatenate two strings except for their first character.
console.log("%cJavaScript Basic #61", "color: red");
function question61(str1, str2) {
  return str1.substring(1) + str2.substring(1);
}
console.log(question61("JavaScript", "Python"));
//
// 62. Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.
console.log("%cJavaScript Basic #62", "color: red");
function question62(str) {
  if (str.length > 3) {
    return str.slice(-3) + str.slice(0, -3);
  }
  return `String must be at least 3 charaters long`;
}
console.log(question62("JavaScript"));
//
// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.
console.log("%cJavaScript Basic #63", "color: red");
function question63(str) {
  if (str.length >= 3) {
    let middle = (str.length + 1) / 2;
    let newStr = str.slice(middle - 2, middle + 1);
    return newStr;
  }
  return `String must be at least 3 characters long`;
}
console.log(question63("abcaaaabc"));
//
// 64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.
console.log("%cJavaScript Basic #64", "color: red");
function question64(str1, str2) {
  let minimum = Math.min(str1.length, str2.length);
  return str1.substring(str1.length - minimum) + str2.substring(str2.length - minimum);
}
console.log(question64("String", "String"));
console.log(question64("JavaScript", "Python"));
//
// 65. Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.
console.log("%cJavaScript Basic #65", "color: red");
function question65(str) {
  if (str.length >= 6) {
    return str.substring(str.length - 6) === "Script";
  }
  return `String is not long enough for a comparisson`;
}
console.log(question65("JavaScript"));
// 66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
console.log("%cJavaScript Basic #66", "color: red");
function question66(str) {
  if ((str.length > 3 && str.substring(0, 3) === "Los") || str.substring(0, 3) === "New") {
    return str;
  }
  return "";
}
console.log(question66("Los Angeles"));
//
// 67. Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.
console.log("%cJavaScript Basic #67", "color: red");
function question67(str) {
  if (str.substring(0, 1) === "P" || str.substring(str.length - 1, str.length - 1) === "P") {
    return str.substring(1, str.length - 1);
  }
  return str;
}
console.log(question67("Python"));
console.log(question67("JavaScript"));
//
// 68. Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.
console.log("%cJavaScript Basic #68", "color: red");
function question67(str, n) {
  if (str.length >= n) {
    return str.substring(0, n) + str.substring(str.length - n);
  }
  return `String is not long enough for the given length`;
}
console.log(question67("JavaScript", 2));
//
// 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
console.log("%cJavaScript Basic #69", "color: red");
function question69(array) {
  let sum = 0;
  for (let items of array) {
    sum += items;
  }
  return sum;
}
console.log(question69([1, 2, 3]));
//
// 70. Write a JavaScript program to rotate the elements left in a given array of integers of length 3.
console.log("%cJavaScript Basic #70", "color: red");
function question70(array) {
  array.push(array.shift());
  return array;
}
console.log(question70([1, 2, 3]));
//
// 71. Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.
console.log("%cJavaScript Basic #71", "color: red");
function question71(array) {
  if (array.length >= 1 && (array[0] === 1 || array[array.length - 1] === 1)) {
    return true;
  }
  return false;
}
console.log(question71([1, 2, 3]));
console.log(question71([3, 2, 1]));
console.log(question71([2, 1, 3]));
//
// 72. Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.
console.log("%cJavaScript Basic #72", "color: red");
function question72(array) {
  return (array[0] === array[array.length - 1]);
}
console.log("True? " + question72([1, 2, 1]));
console.log("False? " + question72([1, 1, 2]));
//
// 73. Write a JavaScript program to reverse the elements of a given array of integers of length 3.
console.log("%cJavaScript Basic #73", "color: red");
function question73(array) {
  return array.map((element, index, arr) => arr[(arr.length - 1) - index]);
}
console.log("3, 2, 1? " + question73([1, 2, 3]));
console.log("4, 3, 2, 1? " + question73([1, 2, 3, 4]));
//
// 74. Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.
console.log("%cJavaScript Basic #74", "color: red");
function question74(array) {
  let max = Math.max(...array);
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(max);
  }
  return newArray;
}
console.log("5, 5, 5, 5, 5 ? " + question74([1, 2, 3, 4, 5]));
//
// 75. Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.
console.log("%cJavaScript Basic #75", "color: red");
function question75(array1, array2) {
  let newArray = [];
  newArray.push(array1[1], array2[1]);
  return newArray;
}
console.log("2, 5? " + question75([1, 2, 3], [4, 5, 6]));
//
// 76. Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.
console.log("%cJavaScript Basic #76", "color: red");
function question76(array) {
  let newArray = [];
  if (array.length >= 1) {
    newArray.push(array[0], array[array.length - 1])
  }
  return newArray;
}
console.log("1, 3? " + question76([1, 2, 3]));
//
// 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.
console.log("%cJavaScript Basic #77", "color: red");
function question77(array) {
  return array.includes(1) || array.includes(3);
}
console.log("True? " + question77([1, 2]));
console.log("False? " + question77([2, 4]));
//
// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.
console.log("%cJavaScript Basic #78", "color: red"); // start
function question78(array) {
  if (array.indexOf(1) === -1 && array.indexOf(3) === -1) {
    return true;
  }
  return false;
}
console.log("False? " + question78([1, 2]));
console.log("True? " + question78([2, 4]));
//
// 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.
console.log("%cJavaScript Basic #79", "color: red");
function question79(array) {
  let first = array[0];
  let second = array[1];
  return (first === 30 && second === 30) || (first === 40 && second === 40)
}
console.log("True? " + question79([30, 30]));
console.log("True? " + question79([40, 40]));
console.log("False? " + question79([30, 40]));
console.log("False? " + question79([30, 3]));
//
// 80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
console.log("%cJavaScript Basic #80", "color: red");
function question80(array) {
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
  return array;
}
console.log("4,3,2,1?: " + question80([1, 2, 3, 4]));
//
// 81. Write a JavaScript program to add two digits to a given positive integer of length two.
console.log("%cJavaScript Basic #81", "color: red");
function question81(num) {
  return num % 10 + Math.floor(num / 10);
}
console.log("7? " + question81(52));
//
// 82. Write a JavaScript program to add two positive integers without carrying.
console.log("%cJavaScript Basic #82", "color: red");
function question82(num1, num2) {
  let result = 0;
  let multiplier = 1;
  while (num1 > 0 && num2 > 0) {
    result += multiplier * ((num1 + num2) % 10);
    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
    multiplier *= 10;
  }
  return result;
}
console.log("133? " + question82(222, 911));
//
// 83. Write a JavaScript program to find the longest string from a given array of strings.
console.log("%cJavaScript Basic #83", "color: red");
function question83(array) {
  return array.sort(function (a, b) {
    return b.length - a.length;
  })[0];
}
console.log("aaaaa? " + question83(["a", "aa", "aaa", "aaaaa", "aaaa"]));
//
// 84. Write a JavaScript program to replace each character in a given string with the next in the English alphabet.
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.
console.log("%cJavaScript Basic #84", "color: red");
function question84(str) {
  return str.split('').map(n => String.fromCharCode(n.charCodeAt() + 1).replace('{','a').replace('[', 'A')).join('');
}
console.log("Alphabet is offset by 1: " + question84("abcz"));
//
// 85. Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.
console.log("%cJavaScript Basic #85", "color: red");
function question85(array) {
  let result = [0,0];
  for (let i = 0; i < array.length; i++) {
    if (i % 2) {
      result[1] += array[i];
    } else {
      result[0] += array[i];
    }
  }
  return result;
}
console.log(question85([1,3,6,2,5,10]));
//
// 86. Write a JavaScript program to find the types of a given angle.
// Types of angles:
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.
console.log("%cJavaScript Basic #86", "color: red");
function question86(num) {
  if (num === 180) {
    return "Straight angle";
  } else if (num === 90) {
    return "Right angle";
  } else if (num < 90) {
    return "Acute angle";
  } else {
    return "Obtuse angle";
  }
}
console.log(question86(100));
console.log(question86(90));
console.log(question86(180));
console.log(question86(850));
//
// 87. Write a JavaScript program to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.
console.log("%cJavaScript Basic #87", "color: red");
function question87(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = i; j < array1.length; j++) {
      let result = true, temp = array1[i];
      array1[i] = array1[j];
      array1[j] = temp;

      for (let k = 0; k < array1.length; k++) {
        if (array1[k] !== array2[k]) {
          result = false;
          break;
        }
      }
      if (result) {
        return true;
      }
      array1[j] = array1[i];
      array1[i] = temp;
    }
  }
  return false;
}
console.log(question87([10, 20, 30], [10, 20, 30]));
console.log(question87([10, 20, 30], [30, 10, 20]));
console.log(question87(([10, 20, 30, 40]), [10, 30, 20, 40]));
//
// 88. Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.
console.log("%cJavaScript Basic #88", "color: red");
function question88(num1, num2, divisor) {
  return num1 % divisor === num2 % divisor;
}
console.log(question88(10, 25, 5));
console.log(question88(10, 20, 5));
console.log(question88(10, 20, 4));
//
// 89. Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.
// For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z
console.log("%cJavaScript Basic #89", "color: red");
function question89(num1, num2, result) {
  return num1 + num2 == result || num1 * num2 == result || num1 / num2 == result || num1 - num2 == result;
}
console.log(question89(10, 25, 35));
//
// 90. Write a JavaScript program to find the kth greatest element in a given array of integers.
console.log("%cJavaScript Basic #90", "color: red");
function question90(array) {
  let arraySorted = array.sort((a, b) => a - b);
  return arraySorted[2];
}
console.log(question90([1, 2, 6, 4, 5]));
//
// 91. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers.
console.log("%cJavaScript Basic #91", "color: red");
function question91(array, k) {
  let sum = 0;
  let tempSum = 0;
  for (let i = 0; i < k-1; i++) {
    tempSum += array[i];
  }
  for (let i = k - 1; i < array.length; i++) {
    tempSum += array[i];
    if (tempSum > sum) {
      sum = tempSum;
    }
    tempSum -= array[i - k + 1];
  }
  return sum;
}
console.log(question91([1, 2, 3, 14, 5], 2));
//
// 92. Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.
console.log("%cJavaScript Basic #92", "color: red");
function question92(array) {
  let diff = 0;
  for (let i = 0; i < array.length; i++) {
    if (Math.abs(array[i] - array[i - 1]) > diff) {
      diff = Math.abs(array[i] - array[i - 1]);
    }
    continue;
  }
  return diff;
}
console.log(question92([1, 2, 3, 18, 9]));
// 93. Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.
console.log("%cJavaScript Basic #93", "color: red");
function question93(array) {
  return Math.max(...array) - Math.min(...array);
}
console.log(question93([1, 2, 3, 8, 9]));
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
