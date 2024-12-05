import {addTodo, findTodo, findTodoIndex, removeTodo, getTodo, getNumberOfDone, getNumberOfNotDone, clearTodo, setItemToDone} from '../lib/todoManagement.js'
import {showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem} from '../UI/todoListUI.js'

function updateDone() {
    showNumberOfDone(getNumberOfDone())
    showNumberOfNotDone(getNumberOfNotDone())
}

function addTodoHandler() {
    const input = document.querySelector('input')
    const addBtn = document.getElementById("addBtn")
    addBtn.addEventListener(("click"), () => {
        const inputValue = input.value.trim()
        if (!inputValue) return;
        const todoId = addTodo(inputValue)
        showTodoItem(todoId, inputValue)
        input.value = ""
        regiterBtn(todoId)
        updateDone()
    })
}

function regiterBtn(id) {
    const btns = document.getElementById(id).getElementsByTagName('button')
    btns[0].addEventListener(("click"), (event) => notDoneButtonHandler(event, id))
    btns[1].addEventListener(("click"), (event) => removeButtonHandler(event, id))
}

function notDoneButtonHandler(event, id) {
    const doneBtn = event.target

    doneBtn.textContent = 'Done'
    doneBtn.style.color = 'white'
    doneBtn.style.backgroundColor = 'green'
    setItemToDone(id)
    updateDone()
}

function removeButtonHandler(event, id) {
    removeTodoItem(id)
    removeTodo(id)
    updateDone()
}

export {addTodoHandler}

