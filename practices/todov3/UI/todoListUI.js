function showTodoItem(newId, newDescription) {
    const listTodo = document.getElementById('listTodo')
    const divTodoItem = document.createElement('div')
    const pDesc = document.createElement('p')
    const doneBtn = document.createElement('button')
    const removeBtn = document.createElement('button')

    divTodoItem.setAttribute('class', 'todoItem')
    divTodoItem.setAttribute('id', newId)
    pDesc.textContent = newDescription
    doneBtn.textContent = "Not Done"
    removeBtn.textContent = "remove"

    divTodoItem.append(pDesc, doneBtn, removeBtn)
    listTodo.appendChild(divTodoItem)
}

function showNumberOfDone(numberOfDone) {
    const done = document.getElementById('done')
    done.textContent = `Number of Done: ${numberOfDone}`
}

function showNumberOfNotDone(numberOfNotDone) {
    const notDone = document.getElementById('notDone')
    notDone.textContent = `Number of Not Done: ${numberOfNotDone}`
}

function removeTodoItem(removeId) {
    const removeElement = document.getElementById(removeId)
    removeElement.remove()
}

export {showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem}