let todoList = ["Learn JavaScript", "Build a Todo App", "Deploy the App"];
displayItems();

function addTodo() {
  let todoElement = document.querySelector("#todo-input");
  let todoItem = todoElement.value;
  todoList.push(todoItem);
  todoElement.value = "";
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    newHtml += `<div>
      <span>${todoList[i]}</span>
      <button onclick="todoList.splice(${i}, 1); displayItems();"
      >Delete</button></div>`;
  }
  containerElement.innerHTML = newHtml;
}
