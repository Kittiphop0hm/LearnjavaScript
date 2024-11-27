import {
  addTodo,
  findTodo,
  findIndexTodo,
  removeTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
  clearTodo,
  loadTodos,
} from "./lib/TodoMangement.js";

import {
  showTodoItem,
  showNumberOfDone,
  showNumberOfNotDone,
} from "./ui/todoListUI.js";

const loadHandler = () => {
  // โหลด todos จาก localStorage
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  loadTodos(storedTodos);

  // แสดง todos ใน DOM
  getTodos().forEach((todo) => {
    showTodoItem(todo.id, todo.description);
    const todoElement = document.getElementById(todo.id);
    if (todo.done) {
      todoElement.style.background = "green";
      todoElement.style.color = "white";
    }
  });

  // อัปเดตจำนวน Done และ Not Done
  showNumberOfDone(getNumberOfDone());
  showNumberOfNotDone(getNumberOfNotDone());
};

function beforeUnloadHandler(event) {
  event.preventDefault();
  const todos = getTodos();
  localStorage.setItem("todos", JSON.stringify(todos));
}

export { loadHandler, beforeUnloadHandler };
