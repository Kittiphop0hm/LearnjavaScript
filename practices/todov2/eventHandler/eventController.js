import { addTodo, findTodo, findIndexTodo, removeTodo,getNumberOfDone,getNumberOfNotDone,clearTodo,setItemToDone } from '../lib/todoManagement.js'
import { showTodoItem, showNumberOfDone, showNumberOfNotDone,removeTodoItem } from '../UI/todoListUI.js'

const addTodoHandler = () => {
    const addBtn = document.getElementById('addBtn')
    const input = document.querySelector('input')
    const valueInput = input.value.trim()
    if (valueInput !== null || valueInput !== undefined || valueInput.length !== 0) {
        const todoId = addTodo(valueInput)
        showTodoItem(todoId, valueInput)
    }
    notDoneButtonHandler()
    removeButtonHandler()
    showNumberOfDone(getNumberOfDone())
    showNumberOfNotDone(getNumberOfNotDone())
}

const notDoneButtonHandler = () => {
    const number = 0
    const notDoneBtn = document.querySelector('.todoItem')
    notDoneBtn.addEventListener("click", (e) => {
        const notBtn = document.querySelector('.todoItem').childNodes[1]
        notBtn.textContent = 'Done'
        notBtn.style.color = 'white'
        notBtn.style.border = '1px solid black'
        notBtn.style.backgroundColor = 'green'
        setItemToDone(e.target.id)
        showNumberOfDone(getNumberOfDone())
        showNumberOfNotDone(getNumberOfNotDone())
    })
}

const removeButtonHandler = () => {
    const removeBtn = document.querySelector('.todoItem').lastChild
    removeBtn.addEventListener("click", (e) => {
        const numberId = e.target.id
        removeTodoItem(numberId)
        removeTodo(numberId)
        showNumberOfDone(getNumberOfDone())
        showNumberOfNotDone(getNumberOfNotDone())
    })
}

export { addTodoHandler,notDoneButtonHandler,removeButtonHandler }