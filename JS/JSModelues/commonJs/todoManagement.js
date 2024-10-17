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

    return {addTodo, getTodos, findTodo, removeTodo}
}

// const todoManager = todoManagement()
// console.log(todoManager.addTodo('Eiei'));
// console.log(todoManager.addTodo('Ai'));
// console.log(todoManager.findTodo(3));
// console.log(todoManager.getTodos());
// console.log('---------------------');
// console.log(todoManager.removeTodo(4));
// console.log(todoManager.getTodos());
//use destructure
const {addTodo, getTodos, findTodo, removeTodo} = todoManagement()
module.exports = {addTodo, getTodos}
// console.log(addTodo('Helloooooooooooooo'));
// console.log(getTodos());


