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
//   for (let i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
//   }
// };
// reverseString("MudassirZaman");

//? Problem: Write a function factorial that takes a number as an argument and returns its factorial.

const factorial = (num) => {
  if (num === 0 || num === 1) {
    console.log(1);
  } else if (num === undefined) {
    console.log("Please write a number as an argument");
  } else {
    for (let i = num - 1; i >= 1; --i) {
      num = num * i;
    }
    console.log(`Factorial is ${num}`);
  }
};
factorial(9);
