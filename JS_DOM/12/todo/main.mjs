import {
  addTodo,
  findTodo,
  findIndexTodo,
  removeTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
  clearTodo,
} from "./lib/TodoMangement.js";
import {
  showTodoItem,
  showNumberOfDone,
  showNumberOfNotDone,
} from "./ui/todoListUI.js";

document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.querySelector("input");
  const value = input.value.trim();
  if (value) {
    const todoId = addTodo(value);
    showTodoItem(todoId, value);
    showNumberOfDone(getNumberOfDone());
    showNumberOfNotDone(getNumberOfNotDone());
  }
});
