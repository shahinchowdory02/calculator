// let todoList = [];
// displayItems();
// function addTodo() {
//   let inputElement = document.querySelector("#todo-input");
//   let todoItem = todoElement.value;
//   todoList.push(todoItem);
//   todoElement.value = "";
//   displayItems();
// }

// function displayItems() {
//   let displayElement = document.querySelector("#todo-input");
//   displayElement.innerText = "";
//   for (let i = 0; i < todoList.length; i++) {
//     displayElement.innerText = displayElement.innerText + todoList[i] + "\n";
//   }
// }

let todoList = [];

displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let todoItem = inputElement.value;
}
