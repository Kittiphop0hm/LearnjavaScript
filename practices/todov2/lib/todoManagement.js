import {Todo} from './todo.js'

function TodoManagement() {
    const todos = []

    function addTodo(desc) {
        const todo = new Todo(desc)
        todos.push(todo)
        return todo.id    
    }    

    function findTodo(searchId) {
        return todos.find((todo) => todo.id === searchId)
    }

    function findIndexTodo(searchId) {
        return todos.findIndex((todo) => todo.id === searchId)
    }

    function removeTodo(removeId) {
        const indexTodo = findIndexTodo(removeId)
        return todos.splice(indexTodo, 1)
    }

    function getNumberOfDone() {
        let count = 0
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].done === true) {
                count++
            }
        }
        return count
    }

    function getNumberOfNotDone() {
        let count = 0
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].done === false) {
                count++
            }
        }
        return count
    }

    function clearTodo() {
        todos.length = 0
    }

    function setItemToDone(doneId) {
        const todo = findTodo(doneId)
        todo.setDone(true)
    }
 
    return { addTodo, findTodo, findIndexTodo, removeTodo,getNumberOfDone,getNumberOfNotDone,clearTodo }
}

const { addTodo, findTodo, findIndexTodo, removeTodo,getNumberOfDone,getNumberOfNotDone,clearTodo } = TodoManagement()
export { addTodo, findTodo, findIndexTodo, removeTodo,getNumberOfDone,getNumberOfNotDone,clearTodo }