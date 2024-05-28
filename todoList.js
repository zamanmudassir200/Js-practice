let todo = [];
let response = prompt("add, remove, list");

while (response != "quit") {
  if (response === "add") {
    let task = prompt("add your task");
    todo.push(task);
  } else if (response === "list") {
    console.log("----Array List-----");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("------------------------");
  } else if (response === "remove") {
    let index = prompt("Enter the index you want to delete");
    todo.splice(index, 1);
  }
  response = prompt("add, remove, list");
}
