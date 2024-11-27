import { Todo } from "./Todo.js";

const TodoListManagement = () => {
  const todos = [];

  function addTodo(desc) {
    const newTodo = new Todo(desc);
    todos.push(newTodo);
    return newTodo.id;
  }

  function getNumberOfDone() {
    let count = 0;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].done) {
        count++;
      }
    }
    return count;
  }

  function getNumberOfNotDone() {
    let count = 0;
    for (let i = 0; i < todos.length; i++) {
      if (!todos[i].done) {
        count++;
      }
    }
    return count;
  }

  function clearTodo() {
    todos.length = 0;
  }

  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId);
  }

  function findIndexTodo(searchId) {
    return todos.findIndex((todo) => todo.id === searchId);
  }

  function removeTodo(removeId) {
    return todos.splice(findIndexTodo(removeId), 1);
  }

  function getTodos() {
    return todos;
  }

  return {
    addTodo,
    findTodo,
    findIndexTodo,
    removeTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
    clearTodo,
  };
};
const {
  addTodo,
  findTodo,
  findIndexTodo,
  removeTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
  clearTodo,
} = TodoListManagement();

export {
  addTodo,
  findTodo,
  findIndexTodo,
  removeTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
  clearTodo,
};
