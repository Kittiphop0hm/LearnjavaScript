import { addTodo, findTodo, findIndexTodo, removeTodo,getNumberOfDone,getNumberOfNotDone,clearTodo } from '../lib/todoManagement'
import { showTodoItem, showNumberOfDone, showNumberOfNotDone } from '../UI/todoListUI'

const addTodoHandler = () => {
    const addBtn = document.getElementById('addBtn')
    const input = document.querySelector('input')
    const valueInput = input.value.trim()
    if (valueInput !== null || valueInput !== undefined || valueInput.length !== 0) {
        const todoId = addTodo(valueInput)
        showTodoItem(todoId, valueInput)
    }
}

const notDoneButtonHandler = () => {
    const notDoneBtn = document.querySelector('#listTodo', 'button')
}