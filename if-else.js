let age = 15;
// if (age > 18) {
//   console.log("you can drive");
// } else {
//   console.log("you can not drive");
// }

if (age < 18) {
  console.log("you can not drive");
} else if (age > 18) {
  console.log("you can drive");
} else {
  console.log("now you can apply for license");
}

// nested if else

let a = 10,
  b = 20,
  c = 40;

if (a >= b) {
  if (a >= c) {
    console.log("a is greater");
  } else {
    //a<=c
    console.log("c is greater");
  }
} else {
  if (b >= c) {
    console.log("b is greater");
  } else {
    //b<=c
    console.log("c is greater");
  }
}

let x = 10,
  y = 20;

console.log(x, y);
