const Todo = require('./libs/Todo')

function todoManagement() {
    const todos = []
    function addTodo(desc) {
        return todos.push(new Todo(desc))
    }

    function findTodo(searchId) {
        return todos.find((todo) => todo.id === searchId)
    }

    function findIndexTodo(searchId) {
        return todos.findIndex((todo) => todo.id === searchId)
    }

    function updateTodo(searchId, desc) {
        todos.splice(findIndexTodo(searchId), 1, new Todo(desc))
    }

    function removeTodo(removeId) {
        todos.splice(findIndexTodo(removeId), 1)
    }

    function getTodos() {
        return todos
    }

    return {addTodo, getTodos, findTodo, removeTodo, findIndexTodo, updateTodo}
}

const {addTodo, getTodos, findTodo, removeTodo, findIndexTodo, updateTodo} = todoManagement()
console.log(addTodo('Facebook'));
console.log(getTodos());
module.exports = {addTodo, getTodos, findTodo, removeTodo, findIndexTodo}

console.log(updateTodo(4, 'Hello World'));
console.log(getTodos());
addTodo('Hello Go')
console.log(getTodos());
updateTodo(5, 'Hello Golang')
console.log(getTodos());



