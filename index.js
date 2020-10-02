// TO-DO !


const todoList = [];

const todoListElement = document.querySelector("#myUL");

document.querySelector("#todo_button").addEventListener("click", addTodo);

function addTodo() {
  const todoText = document.querySelector("#myInput").value;

  const todoObject = {
    id: todoList.length,
    todoText: todoText,
    isDone: false,
  };

  todoList.push(todoObject);
  displayTodos();
}

function doneTodo(todoId) {
  const selectedTodoIndex = todoList.findIndex((item) => item.id == todoId);
  if(todoList[selectedTodoIndex]!=="undefined"){
      todoList[selectedTodoIndex].isDone = !todoList[selectedTodoIndex].isDone ;
  }
  displayTodos();
}

function displayTodos() {
  todoListElement.innerHTML = "";
  document.querySelector("#myInput").value = "";
  document.querySelector("#myInput").focus();

  todoList.forEach((item) => {
    const listElement = document.createElement("li");

    listElement.innerText = item.todoText;
    listElement.setAttribute("data-id", item.id);
//-----------------Close DELETE
    let span = document.createElement("span");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    listElement.appendChild(span);
   
    if (item.isDone) {
      listElement.classList.add("checked");
    }

    listElement.addEventListener("click", function (e) {
      const selectedId = e.target.getAttribute("data-id");
      doneTodo(selectedId);
    });

    todoListElement.appendChild(listElement);
  });
  let close = document.getElementsByClassName("close");
  for ( let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      console.log('hgilhbniojb',div.getAttribute("data-id"));
      deleteTodo(div.getAttribute("data-id"))
    }
  }
}
// DELETE TODO
function deleteTodo(deleteId) {
    const selectedTodoIndex = todoList.findIndex((item) => item.id == deleteId);
    todoList.splice(selectedTodoIndex,1);
    displayTodos();
    
}
