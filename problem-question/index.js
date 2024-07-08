//? Problem: Write a JavaScript program to print "Hello, World!" to the console.
// console.log("Hello world");

//? Problem: Write a function sum that takes two numbers as arguments and returns their sum.

// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(4, 8));
//? Problem: Write a function isEven that takes a number as an argument and returns true if the number is even, and false if the number is odd.

// const isEven = (num) => {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isEven(3));

//? Problem: Write a function reverseString that takes a string as an argument and returns the string reversed.

// const reverseString = (str) => {
//   let reverse = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
//   }
//   console.log(reverse);
// };
// reverseString("ABBAXI");

//? Problem: Write a function factorial that takes a number as an argument and returns its factorial.

// const factorial = (num) => {
//   if (num === 0 || num === 1) {
//     console.log(1);
//   } else if (num === undefined) {
//     console.log("Please write a number as an argument");
//   } else {
//     for (let i = num - 1; i >= 1; --i) {
//       num = num * i;
//     }
//     console.log(`The Factorial is ${num}`);
//   }
// };
// factorial(7);

//? Problem: Write a function findLargest that takes an array of numbers as an argument and returns the largest number in the array.
// const arr = [1, 4, 7, 8, 3];
// const findLargest = (arr) => {
//   console.log(Math.max(arr.filter((num) => num)));
// };
// findLargest(arr);

//? Problem: Write a function isPalindrome that takes a string as an argument and returns true if the string is a palindrome, and false otherwise.

// const isPalindrome = (str) => {
//   let reverse = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
//   }
//   if (reverse === str) {
//     console.log(`The given string ("${str}") is Palindrome `);
//   } else {
//     console.log(`The given string ("${str}") is not a Palindrome `);
//   }
// };

// isPalindrome("level");

//? Problem: Write a function fizzBuzz that prints numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number, and for the multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

// const fizzBuzz = () => {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else {
//       console.log(i);
//     }
//   }
// };
// fizzBuzz();

//? Problem: Write a function removeDuplicates that takes an array of numbers as an argument and returns a new array with duplicate elements removed.
// const arr = [1, 1, 3, 1, 4, 5, 2];
// const removeDuplicates = (arr) => {
//   let uniqueArray = [];
//   arr.forEach((num) => {
//     if (!uniqueArray.includes(num)) {
//       uniqueArray.push(num);
//     }
//   });
//   return uniqueArray;
// };
// const printUniqueArr = removeDuplicates(arr);
// console.log(printUniqueArr);
//? Problem: Write a function countVowels that takes a string as an argument and returns the number of vowels in the string.

// const countVowels = (str) => {
//   let vowelMatched = 0;

//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//     let vowels = "aeiou";
//     let splittedVowels = vowels.split("");
//     splittedVowels.map((vowelLetter) => {
//       if (str[i] === vowelLetter) {
//         console.log(`${vowelLetter} Vowel matched with ${str[i]}`);
//         vowelMatched++;
//       } else {
//         console.log("No vowel matched");
//       }
//     });
//   }
//   console.log(
//     `Number of ${
//       vowelMatched > 1 ? "Vowels" : "Vowel"
//     } matched in "${str}" : ${vowelMatched}`
//   );
// };
// countVowels("mudassir");

//? Get user to input a number using prompt(). Check if the number is a multiple of 5 or not
// let num = prompt("Enter a number: ");
// num = Number(num);
// let result =
//   num % 5 === 0 ? `${num} is multiple of 5` : `${num} is NOT a multiple of 5`;
// console.log(result);
// console.log(typeof num);

//? write a code which can give grades to students according to their marks.
//? 80-100 = A
//? 70 - 79 = B
//? 60 - 69 = C
//? 50 - 59 = D
//? 0 - 49 = F

// let marks = 89;

// if (marks >= 80 && marks <= 100) {
//   console.log("grade A");
// } else if (marks >= 70 && marks <= 79) {
//   console.log("grade B");
// } else if (marks >= 60 && marks <= 69) {
//   console.log("grade C");
// } else if (marks >= 50 && marks <= 59) {
//   console.log("grade D");
// } else {
//   console.log("grade F");
// }

//? how to find the length of a string without using length property

// const str = "MUDASSIRZAMAN";
// let length = 0;
// for (let char of str) {
//   console.log(char);
//   length++;
// }
// console.log(`Length of ${str} is ${length}`);

// for in loop
// const student = {
//   name: "Mudassir Zaman",
//   age: 23,
//   cgpa: 3.0,
//   isPass: true,
// };

// for (let i in student) {
//   console.log(i, ":", student[i]);
// }

//? print all the even numbers from 0 to 100

// for (let num = 0; num <= 100; num++) {
//   if (num % 2 === 0) {
//     console.log("Even:", num);
//   } else {
//     console.log("Odd:", num);
//   }
// }

//? create a game where you start with any random game number. Ask the user to keep guessing the game number untill the user enters correct number

let randomNumber = Math.floor(Math.random() * 20);
console.log(randomNumber);
let userInput = prompt("Guess the number what am i thinking: ");
while (userInput != randomNumber) {
  userInput = prompt("Try again please 😊");
  if (userInput == randomNumber) {
    alert("Hurray! You have guessed the number");
    break;
  }
}
