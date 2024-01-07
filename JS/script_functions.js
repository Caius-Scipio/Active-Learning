// 1. Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223
console.log("%cJavaScript Functions #1", "color: red");
function question1(num) {
  let newNum = num.toString().split("");
  return newNum.reverse().join("");
}
console.log(question1(32243));
//
// 2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
console.log("%cJavaScript Functions #2", "color: red");
function question2(str) {
  let strLength = str.length;
  for (let i = 0; i < strLength / 2; i++) {
    if (str[i] !== str[strLength - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(question2("madam"));
//
// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
console.log("%cJavaScript Functions #3", "color: red");
function question3(str) {
  const result = [];
  function combination(start, current) {
    if (current.length > 0) {
      result.push(current);
    }
    for (let i = start; i < str.length; i++) {
      combination(i + 1, current + str[i])
    }
  }
  combination(0, "");
  return result;
}
console.log(question3("dog"));
//
// 4. Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
console.log("%cJavaScript Functions #4", "color: red");
function question4(str) {
  let newStr = str.split("");
  return newStr.sort().join("");
}
console.log(question4("webmaster"));
//
// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
console.log("%cJavaScript Functions #5", "color: red");
function question5(str) {
  let newStr = str.split(" ");
  let result = [];
  for (let i = 0; i < newStr.length; i++) {
    result.push(newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1));
  }
  return result.join(" ");
}
console.log(question5("the quick brown fox"));
//
// 6. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
console.log("%cJavaScript Functions #6", "color: red");
function question6(str) {
  let newStr = str.split(" ");
  let result = "";
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length > result.length) {
      result = newStr[i];
    }
  }
  return result;
}
console.log(question6("Web Development Tutorial"));
//
// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
console.log("%cJavaScript Functions #7", "color: red");
function question7(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count += 1;
    }
  }
  return count;
}
console.log(question7("The quick brown fox"));
//
// 8. Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
console.log("%cJavaScript Functions #8", "color: red");
function question8(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(question8(37));
//
// 9. Write a JavaScript function that accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
console.log("%cJavaScript Functions #9", "color: red");
function question9(arg) {
  return typeof (arg);
}
console.log(question9(true));
//
// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
console.log("%cJavaScript Functions #10", "color: red");
function question10(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (i === j) {
        console.log(1);
      } else {
        console.log(0);
      }
    }
    console.log("----------");
  }
}
console.log(question10(4));
//
// 11. Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
console.log("%cJavaScript Functions #11", "color: red");
function question11(array) {
  let newArray = array.sort();
  return `${newArray[1]} and ${newArray[newArray.length-2]}`;
}
console.log(question11([5, 3, 4, 1, 2]));
//
// 12. Write a JavaScript function that checks whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
console.log("%cJavaScript Functions #12", "color: red");
function question12(num) {
  let count = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      count += i;
    }
  }
  if (count === num && count !== 0) {
    return "Perfect it is";
  } else {
    return "Perfect it is not";
  }
}
console.log(question12(6));
//
// 13. Write a JavaScript function to compute the factors of a positive integer.
console.log("%cJavaScript Functions #13", "color: red");
function question13(num) {
  let result = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result;
}
console.log(question13(15));
//
// 14. Write a JavaScript function to convert an amount into coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
console.log("%cJavaScript Functions #14", "color: red");
function question14(num, array) {
  let result = [];
  let remainder = num;
  for (let i = 0; i < array.length; i++) {
    let coin = array[i];
    let count = Math.floor(remainder / coin);
    for (let j = 0; j < count; j++) {
      result.push(coin);
    }
    remainder %= coin;
  }
  return result;
}
console.log(question14(46, [25, 10, 5, 2, 1]));
//
// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the base. Accept b and n from the user and display the results.
console.log("%cJavaScript Functions #15", "color: red");
function question15(base, exponent) {
  return Math.pow(base, exponent);
}
console.log(question15(2,3));
//
// 16. Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
console.log("%cJavaScript Functions #16", "color: red");
function question16(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (result.indexOf(str.charAt(i)) == -1) {
      result += str[i];
    }
  }
  return result;
}
console.log(question16("thequickbrownfoxjumpsoverthelazydog"));
//
// 17. Write a JavaScript function to get the number of occurrences of each letter in a specified string.
console.log("%cJavaScript Functions #17", "color: red");
function question17(str) {
  var chars = {};
  str.replace(/\S/g, function (char) {
    chars[char] = (isNaN(chars[char]) ? 1 : chars[char] + 1);
  });
  return chars;
}
console.log(question17("The quick brown fox jumps over the lazy dog"));
//
// 18. Write a function for searching JavaScript arrays with binary searches.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
console.log("%cJavaScript Functions #18", "color: red");
function question18(array, element) {
  let midPosition = Math.floor(array.length / 2);

  if (array[midPosition] === element) {
    return midPosition;
  }
  else if (array.length === 1) {
    return null;
  }
  else if (array[midPosition] < element) {
    let arr = array.slice(midPosition + 1);
    let res = question18(arr, element);

    if (res === null) {
      return null;
    }
    else {
      return midPosition + 1 + res;
    }
  }
  else {
    let arr1 = array.slice(0, midPosition);

    return question18(arr1, element);
  }
}
console.log(question18([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 6));
//
// 19. Write a JavaScript function that returns array elements larger than a number.
console.log("%cJavaScript Functions #19", "color: red");
function question19(array, val) {
  return array.filter(function (evalue, index, array) {
    return (evalue >= val);
  });
}
console.log(question19([11,45,4,31,64,10], 10));
//
// 20. Write a JavaScript function that generates a string ID (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
console.log("%cJavaScript Functions #20", "color: red");
function question20(length) {
  let text = "";
  let list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += list.charAt(Math.floor(Math.random() * list.length));
  }
  return text;
}
console.log(question20(8));
//
// 21. Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[1,2],[1,3],[2,3]]
console.log("%cJavaScript Functions #21", "color: red");
function question21(array, length) {
  let result = [];

  function subsets(current, start) {
    if (current.length === length) {
      result.push([...current]);
      return;
    }
    for (let i = start; i < array.length; i++) {
      current.push(array[i]);
      subsets(current, i + 1);
      current.pop();
    }
  }
  subsets([], 0);
  return result;
}
console.log(question21([1,2,3], 2));
//
// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'w3resource.com', 'o'
// Expected output : 2
console.log("%cJavaScript Functions #22", "color: red");
function question22(str, search) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === search) {
      count++;
    }
  }
  return count;
}
console.log(question22("JavaScript", "a"));
//
// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'
console.log("%cJavaScript Functions #23", "color: red");
function question23(str) {
  let array = str.split("");
  let result = "";
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    counter = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] === array[i]) {
        counter++;
      }
    }
    if (counter < 2) {
      result = array[i];
      break;
    }
  }
  return result;
}
console.log(question23("abacddbec"));
//
// 24. Write a JavaScript function to apply the Bubble Sort algorithm.
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
console.log("%cJavaScript Functions #24", "color: red");
function question24(array) {
  let change;
  let end = array.length - 1;
  let newArray = array;

  do {
    change = false;
    for (let i = 0; i < end; i++) {
      if (newArray[i] < newArray[i + 1]) {
        let temp = newArray[i];
        newArray[i] = newArray[i + 1];
        newArray[i + 1] = temp;
        change = true;
      }
    }
    end--;
  } while (change);
  return newArray;
}
console.log(question24([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
//
// 25. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
console.log("%cJavaScript Functions #25", "color: red");
function question25(array) {
  let sortedArray = array.sort((a, b) => b.length - a.length);
  return sortedArray[0];
}
console.log(question25(["Australia", "Germany", "United States of America"]));
//
// 26. Write a JavaScript function to find the longest substring in a given string without repeating characters.
console.log("%cJavaScript Functions #26", "color: red");
function question26(str) {
  let longestSubstring = "";
  let start = 0;
  let charMap = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charMap[char] !== undefined && charMap[char] >= start) {
      start = charMap[char] + 1;
    }
    charMap[char] = i;
    let currentSubstring = str.slice(start, i + 1);
    if (currentSubstring.length > longestSubstring.length) {
      longestSubstring = currentSubstring;
    }
  }
  return longestSubstring;
}
console.log(question26("example.com"));
//
// 27. Write a JavaScript function that returns the longest palindrome in a given string.

// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
console.log("%cJavaScript Functions #27", "color: red");
function question27(str) {
  return str === str.split("").reverse().join("");
}

function question27a(str) {
  let maxLength = 0;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substring = str.slice(i, j);

      if (question27(substring) && substring.length > maxLength) {
        maxLength = substring.length;
        result = substring;
      }
    }
  }

  return result;
}
console.log(question27a("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));
//
// 28. Write a JavaScript program to pass a 'JavaScript function' as a parameter.
console.log("%cJavaScript Functions #28", "color: red");
function question28(callback) {
  callback();
}
function callback() {
  console.log(`Hello world`);
}
console.log(question28(callback));
//
// 29. Write a JavaScript function to get the function name.
console.log("%cJavaScript Functions #29", "color: red");
function question29() {
  console.log(arguments.callee.name);
}
console.log(question29());
//