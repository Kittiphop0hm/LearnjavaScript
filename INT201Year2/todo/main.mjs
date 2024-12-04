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


document.getElementById('addBtn').addEventListener('click', () => {
    const input = document.querySelector('input');
    const desc = input.value.trim();
    if (desc) {
        const id = addTodo(desc);
        showTodoItem(id, desc);
        input.value = '';
    }
});

document.querySelector('input').addEventListener("keyup", (e) => {
  const input = document.querySelector('input')
  const desc = input.value.trim();
  if (desc && e.code === 'Enter') {
      const id = addTodo(desc);
      showTodoItem(id, desc);
      input.value = '';
  }
})
