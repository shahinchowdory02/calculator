let todoList = [];
displayItems();
function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let todoItem = inputElement.value;
  todoList.push(todoItem);
  inputElement.value = "";
  displayItems();
}

function displayItems() {
  let displayElement = document.querySelector(".todo-container");
  displayElement.innerText = "";
  for (let i = 0; i < todoList.length; i++) {
    displayElement.innerText = displayElement.innerText + "\n" + todoList[i];
  }
}

// function displayItems() {

//   let displayElement = document.querySelector("#todo-input");
//   displayElement.innerText = "";
//   for (let i = 0; i < todoList.length; i++) {
//     displayElement.innerText = displayElement.innerText + todoList[i] + "\n";
//   }
// }
