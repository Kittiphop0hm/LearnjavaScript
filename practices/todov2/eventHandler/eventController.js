import {
  addTodo,
  findTodo,
  findIndexTodo,
  removeTodo,
  getNumberOfDone,
  getNumberOfNotDone,
  clearTodo,
  setItemToDone,
} from "../lib/todoManagement.js";
import {
  showTodoItem,
  showNumberOfDone,
  showNumberOfNotDone,
  removeTodoItem,
} from "../UI/todoListUI.js";

const addTodoHandler = () => {
  const addBtn = document.getElementById("addBtn");
  const input = document.querySelector("input");
  addBtn.addEventListener(("click"),() => {
      const valueInput = input.value.trim();
      if (!valueInput) return;
      const todoId = addTodo(valueInput);
      showTodoItem(todoId, valueInput);
      input.value = "";
      registerButtonEventHandler(todoId);
      showNumberOfDone(getNumberOfDone());
      showNumberOfNotDone(getNumberOfNotDone());
    })
};

function registerButtonEventHandler(id) {
  const buttons = document.getElementById(id).getElementsByTagName('button')

  buttons[0].addEventListener(
    ("click"), (event) => notDoneButtonHandler(event, id))
  buttons[1].addEventListener(
    ("click"), (event) => removeButtonHandler(event, id))
}

function notDoneButtonHandler(event, id) {
  const doneBtn = event.target;

  doneBtn.textContent = "Done";
  doneBtn.style.color = "white";
  doneBtn.style.backgroundColor = "green";
  setItemToDone(id);
  showNumberOfDone(getNumberOfDone());
  showNumberOfNotDone(getNumberOfNotDone());
}

const removeButtonHandler = (event, id) => {
  removeTodoItem(id)
  removeTodo(id)
  showNumberOfDone(getNumberOfDone());
  showNumberOfNotDone(getNumberOfNotDone());
};

export {
  addTodoHandler,
  notDoneButtonHandler,
  removeButtonHandler,
  registerButtonEventHandler,
};
