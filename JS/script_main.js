/**
 * List of exercises to be completed:
 *  JavaScript Basic [ 150 Exercises with Solution ]                                        // TODO # 72 - 150
 *  JavaScript Fundamental (ES6 version) Part-I [ 150 Exercises with Solution ]
 *  JavaScript Fundamental (ES6 version) Part-II [ 116 Exercises with Solution ]
 *  JavaScript Error Handling [ 13 Exercises with Solution ]
 *  JavaScript Functions [ 29 Exercises with Solution ]
 *  JavaScript Recursion [ 13 Exercises with Solution ]
 *  JavaScript Conditional Statements and loops [ 12 Exercises with Solution ]              // * Completed
 *  JavaScript Event Handling [ 10 exercises with solution ]                                // TODO # 3 - 10
 *  JavaScript Asynchronous Programming [ 9 exercises with solution ]
 *  JavaScript Object-Oriented Programming [ 12 exercises with solution ]
 *  JavaScript Math [ 114 Exercises with Solution ]
 *  JavaScript Array [ 53 Exercises with Solution ]
 *  JavaScript Stack [35 exercises with solution]
 *  JavaScript Linked List [35 exercises with solution]
 *  JavaScript Date [ 57 Exercises with Solution ]
 *  JavaScript String [ 64 Exercises with Solution ]
 *  JavaScript Bit Manipulation [ 15 Exercises with Solution ]
 *  JavaScript Validation with Regular expression [ 21 Exercises with Solution ]
 *  JavaScript HTML DOM [ 13 Exercises with Solution ]
 *  JavaScript Drawing [ 6 Exercises with Solution ]
 *  JavaScript Object [ 18 Exercises with Solution ]
 *  JavaScript Basic Validation without Regular expression [10 Exercises with Solution ]
 *  JavaScript Sorting Algorithm [31 Exercises with Solution ]
 *  JavaScript Searching Algorithm [5 Exercises with Solution ]
 */
// * Use this funciton when you want to select a topic to do but can't decide
// function selectRandomTopic(num) {
//   console.log(Math.floor((Math.random() * num) + 1));
// }

// selectRandomTopic(23);
// selectRandomTopic(23);
// selectRandomTopic(23);

function randomlyNegative(num) {
  let number = num;

  if (num === 0) {
    number = 0;
  }
  return Math.random() < 0.5 ? -num : num;
}

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}