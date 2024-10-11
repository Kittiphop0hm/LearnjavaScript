const { log } = require("console");

//neted function
function x(num) {
    function y() {
        return num * 2 
    }
    return y()
}

console.log(x(5));

//TodoList Practice
class Todo {
    constructor(id, description) {
        this.id = id
        this.description = description
    }
    getTodo = () => `${this.id} ${this.description}`
    setDescription = (newDesription) => this.description = newDesription 
}

const todos = []
let nextTodoId = 1
const addTodo = (desc) => {
    if (desc === null || desc === undefined) throw new Error("Desc can't valid")
    if (todos.some((todo) => todo.id === nextTodoId)) {
        throw Error("ID can't unique")
    }
    const newTodo = new Todo(nextTodoId, desc)
    todos.push(newTodo)
    nextTodoId++    
    return todos.length
}
console.log('Test AddTodo:', addTodo("Hello World"))
console.log('Test AddTodo:', addTodo("Hello JS"))
todos.forEach(todo => console.log('Test AddTodo:', todo))

const findTodo = (searchId) => {
    return todos.find((todo) => todo.id === searchId)   
}
console.log('Test FindTodo:', findTodo(2));

const findIndexTodo = (searchId) => {
    return todos.findIndex((todo) => todo.id === searchId)
}
console.log('Test FindIndexTodo:', findIndexTodo(2));

const removeTodo = (removeId) => {
    const findIndex = todos.findIndex((todo) => todo.id === removeId)
    return todos.splice(findIndex, 1)
}
removeTodo(2)
console.log('Test Remove:', todos);

const getTodos = () => {
    return todos.forEach((todo) => console.log(`Id: ${todo.id} Description: ${todo.description}`))
}
console.log(addTodo("Hello Java"));
getTodos()