import {Todo} from './todo.js'

function todoListManagement() {
    const todos = []

    function addTodo(desc) {
        const todo = new Todo(undefined, desc, undefined)
        todos.push(todo)
        return todo.id
    }

    function findTodo(searchId) {
        return todos.find((todo) => todo.id === searchId)
    }

    function findTodoIndex(searchId) {
        return todos.findIndex((todo) => todo.id === searchId)
    }

    function removeTodo(removeId) {
        const todoIndex = findTodoIndex(removeId)
        return todos.splice(todoIndex, 1)
    }

    function getTodo() {
       return todos 
    }

    function getNumberOfDone() {
        let count = 0
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].done) {
                count++
            }          
        }
        return count
    }

    function getNumberOfNotDone() {
        let count = 0
        for (let i = 0; i < todos.length; i++) {
            if (!todos[i].done) {
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
        todo.setDone()
    }

    return {addTodo, findTodo, findTodoIndex, removeTodo, getTodo, getNumberOfDone, getNumberOfNotDone, clearTodo, setItemToDone}
}
const {addTodo, findTodo, findTodoIndex, removeTodo, getTodo, getNumberOfDone, getNumberOfNotDone, clearTodo, setItemToDone} = todoListManagement()
export {addTodo, findTodo, findTodoIndex, removeTodo, getTodo, getNumberOfDone, getNumberOfNotDone, clearTodo, setItemToDone}