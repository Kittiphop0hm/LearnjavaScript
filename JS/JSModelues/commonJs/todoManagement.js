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

    function removeTodo(removeId) {
        todos.splice(findIndexTodo(removeId), 1)
    }

    function getTodos() {
        return todos
    }

    return {addTodo, getTodos, findTodo, removeTodo, findIndexTodo}
}

const {addTodo, getTodos, findTodo, removeTodo, findIndexTodo} = todoManagement()
console.log(addTodo('Facebook'));
console.log(getTodos());
module.exports = {addTodo, getTodos, findTodo, removeTodo, findIndexTodo}