let todoList = [];

displayItems();
function addTodo() {
  let todoElement = document.querySelector("todo-input");
  let todoItem = todoElement.value;
  todoList.push(todoItem);
  inputElement.value = "";
  displayItems();
}

function displayItems() {
  let displayElement = document.querySelector("#todo-items");
  displayElement.innerText = "";
  for (let i = 0; i < todoList.length; i++) {
    displayElement.innerText + "\n" + todoList[i];
  }
}
