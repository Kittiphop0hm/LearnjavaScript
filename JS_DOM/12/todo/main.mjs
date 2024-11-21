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


    const todoId = addTodo(value);
    showTodoItem(todoId, value);
    showNumberOfDone(getNumberOfDone());
    showNumberOfNotDone(getNumberOfNotDone());
