// let day = 5;

// switch (day) {
//   case 0:
//     console.log("its Monday");
//     break;
//   case 1:
//     console.log("its Tuesday");
//     break;
//   case 2:
//     console.log("its Wednesday");
//     break;
//   case 3:
//     console.log("its Thursday");
//     break;
//   case 4:
//     console.log("its Friday");
//     break;
//   case 5:
//     console.log("its Saturday");
//     break;
//   case 6:
//     console.log("its Sunday");
//     break;
//   default:
//     console.log("Invalid number");
// }

let marks = 91;

switch (true) {
  case marks >= 85 && marks <= 100:
    console.log("4.00 GPA OR A grade");
    break;
  case marks >= 80 && marks < 85:
    console.log("3.67 GPA OR A- grade");
    break;
  case marks >= 75 && marks < 80:
    console.log("3.33 GPA OR B+ grade");
    break;
  case marks >= 71 && marks < 75:
    console.log("3.00 GPA OR B grade");
    break;
  case marks >= 68 && marks < 70:
    console.log("2.67 GPA OR B- grade");
    break;
  case marks >= 64 && marks < 67:
    console.log("2.33 GPA OR C+ grade");
    break;
  case marks >= 60 && marks < 63:
    console.log("2.00 GPA OR C grade");
    break;
  case marks >= 57 && marks < 60:
    console.log("1.67 GPA OR C- grade");
    break;
  case marks >= 53 && marks < 57:
    console.log("1.33 GPA OR D+ grade");
    break;
  case marks >= 50 && marks < 53:
    console.log("1.00 GPA OR D grade");
    break;
  default:
    console.log("Fail, F Grade");
}
