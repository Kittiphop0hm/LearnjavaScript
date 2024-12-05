const showTodoItem = (newId, newDescription) => {
    const listTodo = document.getElementById('listTodo')
    const todoItem = document.createElement('div')
    const desc = document.createElement('p')
    const btnNotDone = document.createElement('button')
    const btnRemove = document.createElement('button')

    todoItem.setAttribute('class', 'todoItem')
    todoItem.id = newId
    desc.textContent = `${newDescription}`
    btnNotDone.textContent = 'Not Done'
    btnRemove.textContent = 'Remove'

    todoItem.append(desc, btnNotDone, btnRemove)
    listTodo.appendChild(todoItem)
}

const showNumberOfDone = (numberOfDone) => {
    const done = document.getElementById('done')
    done.textContent = `Number of Done: ${numberOfDone}`
}

const showNumberOfNotDone = (numberOfNotDone) => {
    const notDone = document.getElementById('notDone')
    notDone.textContent = `Number of Not Done: ${numberOfNotDone}`
} 

const removeTodoItem = (removeId) => {
    const todo = document.getElementById(removeId)
    listItem.removeChild(todo)
}

export { showTodoItem, showNumberOfDone, showNumberOfNotDone,removeTodoItem }