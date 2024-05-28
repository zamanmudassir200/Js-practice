// // Number divisible by 10? good :bad
// let num = 35;
// // if (num % 10 === 0) {
// //   console.log("good");
// // } else {
// //   console.log("bad");
// // }

// console.log(num % 10 == 0 ? "good" : "bad");

// // PROBLEM 2
// let username = prompt("Enter your name");
// let age = prompt("Enter your age");
// console.log(`${username} is ${age} years old`);

// PROBLEM 3
let quarter = 1;

switch (quarter) {
  case 1:
    console.log("jan, feb, mar");
    break;
  case 2:
    console.log("apr, may,jun");
    break;
  case 3:
    console.log("jul,aug ,sep");
    break;
  case 4:
    console.log("oct,nov,dec");
    break;
  default:
    console.log("invalid quarter");
}

// color guessing game
const favColor = "purple";
let guess = prompt("Enter color name: ");

while (guess != favColor && guess != "quit") {
  guess = prompt("Try Again ");
}
if (guess === favColor) {
  console.log("You WON. You guessed the correct color");
} else {
  console.log("You Lose. You quit the game");
}
