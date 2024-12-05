import { addTodo, findTodo, findIndexTodo, removeTodo,getNumberOfDone,getNumberOfNotDone,clearTodo,setItemToDone } from '../lib/todoManagement.js'
import { showTodoItem, showNumberOfDone, showNumberOfNotDone,removeTodoItem } from '../UI/todoListUI.js'

const addTodoHandler = () => {
    const addBtn = document.getElementById('addBtn')
    const input = document.querySelector('input')
    const valueInput = input.value.trim()
    if (valueInput !== null || valueInput !== undefined || valueInput.length !== 0) {
        const todoId = addTodo(valueInput)
        showTodoItem(todoId, valueInput)
        input.value = ''
    }
    showNumberOfDone(getNumberOfDone())
    showNumberOfNotDone(getNumberOfNotDone())
}

const notDoneButtonHandler = (event) => {
    const donebtn = event.target
    const id = donebtn.parentElement.getAttribute('id')
    donebtn.style.color = 'white'
    donebtn.style.backgroundColor = 'green'
    setItemToDone(id)
    showNumberOfDone(getNumberOfDone())
    showNumberOfNotDone(getNumberOfNotDone())
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