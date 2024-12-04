import { Todo } from './lib/todo.js'
import { addTodo, findTodo, findIndexTodo, removeTodo,getNumberOfDone,getNumberOfNotDone,clearTodo } from './lib/todoManagement.js'
import { showTodoItem, showNumberOfDone, showNumberOfNotDone } from './UI/todoListUI.js'

const todoId1 = addTodo('Hello World')
const todoId2 = addTodo('Coding')
const todoId3 = addTodo('JS')

showTodoItem(todoId1, 'Hello World')
showTodoItem(todoId2, 'Coding')
showTodoItem(todoId3, 'JS')

showNumberOfDone(getNumberOfDone())
showNumberOfNotDone(getNumberOfNotDone())


