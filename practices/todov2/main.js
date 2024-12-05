import { Todo } from './lib/todo.js'
import { addTodo, findTodo, findIndexTodo, removeTodo,getNumberOfDone,getNumberOfNotDone,clearTodo,setItemToDone } from './lib/todoManagement.js'
import { showTodoItem, showNumberOfDone, showNumberOfNotDone } from './UI/todoListUI.js'
import { addTodoHandler,notDoneButtonHandler,removeButtonHandler } from './eventHandler/eventController.js'

addTodoHandler()

