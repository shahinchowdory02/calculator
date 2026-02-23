let todoList = ["Buy Milk", "Go to College"];
displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let todoItem = inputElement.value;
  todoList.push(todoItem);
  inputElement.value = "";
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    newHtml += `
    <div>
       <span>${todoList[i]}</span>
       <button onClick = "todoList.splice(${i}, 1); displayItems();">Delete</button>;  
    </div>
    `;
  }
  containerElement.innerHTML = newHtml;
}

// function displayItems() {

//   let displayElement = document.querySelector("#todo-input");
//   displayElement.innerText = "";
//   for (let i = 0; i < todoList.length; i++) {
//     displayElement.innerText = displayElement.innerText + todoList[i] + "\n";
//   }
// }
