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

// let randomNumber = Math.floor(Math.random() * 20);
// console.log(randomNumber);
// let userInput = prompt("Guess the number what am i thinking: ");
// while (userInput != randomNumber) {
//   userInput = prompt("Try again please 😊");
//   if (userInput == randomNumber) {
//     alert("Hurray! You have guessed the number");
//     break;
//   }
// }

//? Prompt the user to enter their fullName. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the full name length

// let fullName = prompt("Please enter you full name");
// let fullNameLength = fullName.length;
// // console.log(`@${fullName}${fullName.length}`);
// console.log(`@${fullName.concat(fullNameLength)}`);

//? For a given array of marks of students -> [85,97,44,37,76,60]. Find the average marks of the entire class.

// const marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let mark of marks) {
//   sum += mark;
// }
// console.log(`The avergae marks of entire class is ${sum / marks.length}`);

//? For a given array with prices of 5 items -> [250,654,300,900,50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying the offer.

// const items = [250, 654, 300, 900, 50];
// let discountedItems = [];
// console.log("Before 10% discount:", items);
// for (let item of items) {
//   discountedItems.push(item - (item * 10) / 100);
// }
// console.log("After 10% discount:", discountedItems);
// const items = [250, 654, 300, 900, 50];
// let index = 0;
// console.log("Before 10% discounted items:", items);
// for (let item of items) {
//   let discountedOffer = item / 10;
//   items[index] = items[index] - discountedOffer;
// console.log(`After 10% Discounted items: ${items[index]}`);
// index++;
// }

// const items = [250, 654, 300, 900, 50];
// console.log("Before 10% discounted items:", items);
// for (let i = 0; i < items.length; i++) {
//   items[i] = items[i] - items[i] / 10;
// }
// console.log("After 10% discounted items:", items);
//? Create an array to store companies => "Bloomberg", "Microsoft", "Uber", "Google",  "IBM",  "Netflix"
//? a) remove the first company from the array
//? b) remove the Uber & Add Ola in its place.
//? c) add Amazon at the end
// const companies = [
//   "Bloomberg",
//   "Microsoft",
//   "Uber",
//   "Google",
//   "IBM",
//   "Netflix",
// ];
// console.log(companies);
// companies.shift();
// companies.splice(1, 1, "Ola");
// companies.push("Amazon");
// console.log(companies);

//? create a function using function keyword that takes a string as an argument & returns the number of vowels in the string
// function VowelsCounter(str) {
//   let Vowelcount = 0;
//   for (let char of str) {
//     if (
//       char.toLowerCase() === "a" ||
//       char.toLowerCase() === "e" ||
//       char.toLowerCase() === "i" ||
//       char.toLowerCase() === "o" ||
//       char.toLowerCase() === "u"
//     ) {
//       console.log(`${char} - Vowel matched`);
//       Vowelcount++;
//     }
//   }
//   console.log(`Total number of vowels in ${str} : ${Vowelcount}`);
// }

// VowelsCounter("MUDASSIR");

//? we are given array of marks of students. Filter out od the marks of students that scored 90+.

// const marks = [91, 93, 64, 99, 86];

// const filteredMarks = marks.filter((mark) => {
//   return mark > 90;
// });
// console.log(filteredMarks);

//? Take a number n as input from user. Create an array of numbers from 1 to n. Use reduce method to calculate sum of all numbers in an array. Use the reduce method to calculate product of all numbers in the array.

let number = prompt("Enter a number:");
let numbersArr = [];

for (let i = 1; i <= number; i++) {
  numbersArr[i - 1] = i;
}
let sum = numbersArr.reduce((acc, curr) => {
  return acc + curr;
});
let product = numbersArr.reduce((acc, curr) => {
  return acc * curr;
});
console.log(numbersArr);

console.log(sum, product);
