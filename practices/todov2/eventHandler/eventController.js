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
  const valueInput = input.value.trim();
  if (
    valueInput !== null ||
    valueInput !== undefined ||
    valueInput.length !== 0
  ) {
    const todoId = addTodo(valueInput);
    showTodoItem(todoId, valueInput);
    input.value = "";
  }
  showNumberOfDone(getNumberOfDone());
  showNumberOfNotDone(getNumberOfNotDone());
};

function notDoneButtonHandler(doneId) {
  const doneBtn = document.getElementById(doneId).querySelector(".notDone");
  const todo = findTodo(doneId)
  doneBtn.textContent = "Done";
  doneBtn.style.color = "white";
  doneBtn.style.backgroundColor = "green";
  todo.setItemToDone(doneId)
  showNumberOfDone(getNumberOfDone());
  showNumberOfNotDone(getNumberOfNotDone());
}

const removeButtonHandler = () => {
  const removeBtn = document.querySelector(".todoItem").lastChild;
  removeBtn.addEventListener("click", (e) => {
    const numberId = e.target.id;
    removeTodoItem(numberId);
    removeTodo(numberId);
    showNumberOfDone(getNumberOfDone());
    showNumberOfNotDone(getNumberOfNotDone());
  });
};

export { addTodoHandler, notDoneButtonHandler, removeButtonHandler };