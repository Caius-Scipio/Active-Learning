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
      if (array[i] > array[j]) counter++;
    }
  }
  return counter;
}
console.log(question102([0, 3, 2, 5, 9]));
//
// 103. Write a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number.
console.log("%cJavaScript Basic #93", "color: red");
function question103(num) {
  let result = 0,
    numbers = [];
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
console.log("%cJavaScript Basic #104", "color: red");
function question104(array, num) {
  let difference = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (Math.abs(array[i] - array[j]) > difference && Math.abs(array[i] - array[j]) <= num) {
        difference = Math.abs(array[i] - array[j]);
      }
    }
  }
  return difference;
}
console.log(question104([12, 10, 33, 34], 10));
console.log(question104([12, 10, 33, 34], 24));
console.log(question104([12, 10, 33, 44], 40));
//
// 105. Write a JavaScript program to find the number of times to replace a given number with the sum of its digits. This is until it converts to a single-digit number.
console.log("%cJavaScript Basic #105", "color: red");
function question105(num) {
  let sum = function (num) {
    let sum_step = 0;
    while (num) {
      sum_step += num % 10;
      num = Math.floor(num / 10);
    }
    return sum_step;
  };
  let result = 0;
  while (num >= 10) {
    result++;
    num = sum(num);
  }
  return result;
}
console.log(question105(123));
console.log(question105(156));
//
// 106. Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.
console.log("%cJavaScript Basic #106", "color: red");
function question106(num1, num2) {
  if (num2 === 1) {
    return num1;
  } else {
    while (num1 % num2 === 0) {
      num1 /= num2;
    }
    return num1;
  }
}
console.log(question106(-12, 2));
console.log(question106(13, 2));
console.log(question106(13, 1));
//
// 107. Write a JavaScript program to find the number of sorted pairs formed by arrays of integers. This is such that one element in the pair is divisible by the other one.
// For example - The output of [1, 3, 2] ->2 - (1,3), (1,2).
// The output of [2, 4, 6] -> 2 - (2,4), (2,6)
// The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16)
console.log("%cJavaScript Basic #107", "color: red");
function question107(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] % array[j] === 0 || array[j] % array[i] === 0) {
        result++;
      }
    }
  }
  return result;
}
console.log(question107([2, 4, 16]));
//
// 108. Write a JavaScript program to create the dot products of two given 3D vectors.
// Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.
console.log("%cJavaScript Basic #108", "color: red");
function question108(array1, array2) {
  let result = 0;
  for (let i = 0; i < 3; i++) {
    result += array1[i] * array2[i];
  }
  return result;
}
console.log(question108([1, 2, 3], [1, 2, 3]));
//
// 109. Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.
console.log("%cJavaScript Basic #109", "color: red");
function question109(num) {
  let primeA = [];
  let primeB = [];

  for (let i = 0; i <= num; i++) {
    primeB.push(true);
  }

  for (let i = 2; i <= num; i++) {
    if (primeB[i]) {
      primeA.push(i);
      for (let j = 1; i * j <= num; j++) {
        primeB[i * j] = false;
      }
    }
  }
  return primeA;
}
console.log(question109(19));
//
// 110. Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.
console.log("%cJavaScript Basic #110", "color: red");
function question110(array, num) {
  let limit = array.indexOf(num);
  let count = 0;
  for (let i = 0; i < limit; i++) {
    if (array[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}
console.log(question110([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
console.log(question110([1, 3, 5, 6, 7, 8], 6));
//
// 111. Write a JavaScript program to check a number from three given numbers where two numbers are equal. Find the third one.
console.log("%cJavaScript Basic #111", "color: red");
function question111(num1, num2, num3) {
  if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
    return `No odd man out`;
  } else if (num1 === num2) {
    return num3;
  } else if (num1 === num3) {
    return num2;
  } else {
    return num1;
  }
}
console.log(question111(1, 2, 2));
console.log(question111(1, 2, 3));
//
// 112. Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number.
console.log("%cJavaScript Basic #112", "color: red");
function question112(num) {
  let result = 0;
  for (let i = 5; i <= num; i += 5) {
    let n = i;
    while (n % 5 === 0) {
      n /= 5;
      result++;
    }
  }
  return result;
}
console.log(question112(10));
//
// 113. Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers.
console.log("%cJavaScript Basic #113", "color: red");
function question113(num) {
  let result = 0;
  while (num > 0) {
    result += num;
    num = Math.floor(num / 2);
  }
  return result;
}
console.log(question113(26));
//
// 114. Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered a correct sentence if it starts with a capital letter and ends with a full stop (.)
console.log("%cJavaScript Basic #114", "color: red");
function question114(str) {
  let regex = /^[A-Z].*\.$/;
  return regex.test(str);
}
console.log(question114(`This is correct.`));
console.log(question114(`this is incorrect`));
//
// 115. Write a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right).
// Example:
// [1, 0, 0], [0, 2, 0], [0, 0, 3] ]) = true
// [1, 0, 0], [0, 2, 3], [0, 0, 3] ]) = false
console.log("%cJavaScript Basic #115", "color: red");
function question115(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}
console.log(
  question115([
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 3],
  ])
);
console.log(
  question115([
    [1, 0, 0],
    [0, 2, 3],
    [0, 0, 3],
  ])
);
//
// 116. Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3.
// For a string "2*0", the output should be : ["210", "240", "270"]
console.log("%cJavaScript Basic #116", "color: red");
function question116(str) {
  let result = [];
  for (let i = 0; i <= 9; i++) {
    let newStr = str.replace(/#/, i);
    if (newStr % 3 === 0) {
      result.push(newStr);
    }
  }
  return result;
}
console.log(question116("2#0"));
console.log(question116("4#2"));
//
// 117. Write a JavaScript program to check whether a given matrix is an identity matrix.
// Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n ? n square matrix with ones on the main diagonal and zeros elsewhere.
// [[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
// [[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false
console.log("%cJavaScript Basic #117", "color: red");
function question117(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if ((i === j && array[i][j] !== 1) || (array[i][j] && i !== j)) {
        return false;
      }
    }
  }
  return true;
}
console.log(
  question117([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  question117([
    [1, 0, 0],
    [0, 1, 0],
    [1, 0, 1],
  ])
);
//
// 118. Write a JavaScript program to check whether a given number is in a given range.
console.log("%cJavaScript Basic #118", "color: red");
function question118(begin, check, end) {
  return check > begin && check < end ? `The number is in the given range` : `The number is outside the given range`;
}
console.log(question118(1, 2, 3));
console.log(question118(1, 2, -3));
//
// 119. Write a JavaScript program to check if a given integer has an increasing digit sequence.
console.log("%cJavaScript Basic #119", "color: red");
function question119(num) {
  let array = num.toString().split("").map(Number);
  for (let i = 0; i < array.length - 1; i++) {
    if (parseFloat(array[i]) > parseInt(array[i + 1])) {
      return false;
    }
  }
  return true;
}
console.log(question119(123));
//
// 120. Write a JavaScript program to check if a point lies strictly inside the circle.
// Input:
// Center of the circle (x, y)
// Radius of circle: r
// Point inside a circle (a, b)
console.log("%cJavaScript Basic #120", "color: red");
function question120(centerX, centerY, radius, pointX, pointY) {
  return Math.sqrt(Math.pow(pointX - centerX, 2) + Math.pow(pointY - centerY, 2)) < radius;
}
console.log(question120(0, 0, 6, 2, 4));
//
// 121. Write a JavaScript program to check whether a given matrix is lower triangular or not.
// Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.
console.log("%cJavaScript Basic #121", "color: red");
function question121(array) {
  for (let i = 0; i < array.length; i++) {
    for (var j = 0; j < array[0].length; j++) {
      if (j > i && array[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}
console.log(
  question121([
    [1, 0, 0],
    [2, 0, 0],
    [0, 3, 3],
  ])
);
//
// 122. Write a JavaScript program to check whether a given array of integers represents a strictly increasing or decreasing sequence.
console.log("%cJavaScript Basic #122", "color: red");
function question122(array) {
  let arrDirection = array[1] - array[0];
  for (let i = 0; i < array.length; i++) {
    if (arrDirection * (array[i + 1] - array[0]) <= 0) {
      return false;
    }
  }
  return true;
}
console.log(question122([1, 2, 3]));
console.log(question122([3, 4, 1]));
//
// 123. Write a JavaScript program to find out if the members of a given array of integers are a permutation of numbers from 1 to a given integer.
console.log("%cJavaScript Basic #123", "color: red");
function question123(array, num) {
  for (let i = 0; i < num; i++) {
    if (array.indexOf(i + 1) < 0) {
      return false;
    }
  }
  return true;
}
console.log(question123([1, 2, 3, 4, 5], 5));
//
// 124. Write a JavaScript program to create the NOR value of two given booleans.
// Note: In boolean logic, logical nor or joint denial is a truth-functional operator which produces a result that is the negation of logical or. That is, a sentence of the form (p NOR q) is true precisely when neither p nor q is true - i.e. when both of p and q are false
// Sample Example:
// For x = true and y = false, the output should be logical_Nor(x, y) = false; For x = false and y = false, the output should be logical_Nor(x, y) = true.
console.log("%cJavaScript Basic #124", "color: red");
function question124(booleanA, booleanB) {
  return !booleanA && !booleanB;
}
console.log(question124(true, false));
//
// 125. Write a JavaScript program to find the longest string in a given array.
console.log("%cJavaScript Basic #125", "color: red");
function question125(array) {
  return array.sort((a, b) => b.length - a.length)[0];
}
console.log(question125(["a", "aa", "aaa", "aaaaa"]));
//
// 126. Write a JavaScript program to get the largest even number from an array of integers.
console.log("%cJavaScript Basic #126", "color: red");
function question126(array) {
  let maxEven = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && array[i] > maxEven) {
      maxEven = array[i];
    }
  }
  return maxEven;
}
console.log(question126([343, 121, 6, 200, 5]));
//
// 127. Write a JavaScript program to reverse the order of bits in a integer.
// 14 -> 00001110 -> 01110000 -> 112
// 56 -> 00111000 -> 00011100 -> 28
// 234 -> 11101010 -> 01010111 -> 87
console.log("%cJavaScript Basic #127", "color: red");
function question127(num) {
  let binary = num.toString(2).split("");
  for (let i = 0; i < 8 - binary.length; i++) {
    binary.unshift("0");
  }
  return parseInt(binary.reverse().join(""), 2);
}
console.log(question127(14));
//
// 128. Write a JavaScript program to find the smallest round number not less than a given value.
// Note: A round number is informally considered to be an integer that ends with one or more zeros.[3] So, 590 is rounder than 592, but 590 is less round than 600.
console.log("%cJavaScript Basic #128", "color: red");
function question128(num) {
  return Math.ceil(num / 10) * 10;
}
console.log(question128(56));
console.log(question128(171));
//
// 129. Write a JavaScript program to find the smallest prime number strictly greater than a given number.
console.log("%cJavaScript Basic #129", "color: red");
function question129(num) {
    for (let count = num + 1; ; ++count) {
    let isPrime = true;
    for (let i = 2; i < Math.sqrt(count) + 1; ++i) {
      if (count % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return count;
    }
  }
}
console.log(question129(6));
//
// 130. Write a JavaScript program to find the number of even digits in a given integer.
console.log("%cJavaScript Basic #130", "color: red");
function question130(num) {
  let array = num.toString().split("");
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}
console.log(question130(1020));
//
// 131. Write a JavaScript program to create an array of prefix sums of the given array.
// In computer science, the prefix sum, cumulative sum, inclusive scan, or simply scan of a sequence of numbers x0, x1, x2, ... is a second sequence of numbers y0, y1, y2, ..., the sums of prefixes of the input sequence:
// y0 = x0
// y1 = x0 + x1
// y2 = x0 + x1+ x2
// ...
console.log("%cJavaScript Basic #131", "color: red");
function question131(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = 0;
    for (let j = 0; j < i + 1; j++) {
      newArray[i] += array[j];
    }
  }
  return newArray;
}
console.log(question131([1, 2, 3, 4, 5]));
//
// 132. Write a JavaScript program to find all distinct prime factors of a given integer.
console.log("%cJavaScript Basic #132", "color: red");
function question132(num) {
  function is_prime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const result = [];

  for (let i = 2; i <= num; i++) {
    while (is_prime(i) && num % i === 0) {
      if (!result.includes(i)) result.push(i);
      num /= i;
    }
  }

  return result;
}
console.log(question132(100));
//
// 133. Write a JavaScript program to check whether a given fraction is proper or not.
// Note: There are two types of common fractions, proper or improper. When the numerator and the denominator are both positive, the fraction is called proper if the numerator is less than the denominator, and improper otherwise.
console.log("%cJavaScript Basic #133", "color: red");
function question133(numerator, denominator) {
  return Math.abs(numerator / denominator) < 1 ? `It's proper` : `It's improper`;
}
console.log(question133(1, 2));
console.log(question133(7, 4));
//
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
