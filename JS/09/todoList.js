const { log } = require("console")

class Todo {
    constructor(id, description) {
        this.id = id
        this.description = description
    }

    getTodo = () => `Id: ${this.id}, Description: ${this.description}`

    setDescription = (newDescription) => this.description = newDescription 
}

// const todo1 = new Todo(1, "Hello World")
// //test getTodo()
// console.log(todo1.getTodo());
// console.log(todo1.id);
// //test setDescription()
// todo1.setDescription("Hello Java")
// console.log(todo1.getTodo());

const todos = []
let nextTodoId = 1

const addTodo = (desc) => {
    if (desc === null || desc === undefined) throw new Error('desc is null')
    const newTodo = new Todo(nextTodoId, desc)
    if (todos.some((todo) => todo.id === newTodo.id)) throw new Error('id not unique')
    todos.push(newTodo)
    nextTodoId++
    return todos.length
}

const findTodo = (searchId) => {
    return todos.find((todo) => todo.id === searchId)
}

const findIndexTodo = (searchId) => {
    return todos.findIndex((todo) => todo.id === searchId)
}

const removeTodo = (removeId) => {
    let findIndex = todos.findIndex((todo) => todo.id === removeId)
    return todos.splice(findIndex, 1)
}

const getTodos = () => {
    return todos
}

//test addTodo
console.log('--------------- addTodo ---------------');
console.log(addTodo("Sawadee"));
console.log(addTodo("Hallo"));
console.log(getTodos());

//test findTodo
console.log('--------------- findTodo ---------------');
console.log(findTodo(1));
console.log(findTodo(2));
console.log(findTodo(3));

//test findIndexTodo
console.log('--------------- findIndexTodo ---------------');
console.log(findIndexTodo(1));
console.log(findIndexTodo(2));

//test removeTodo
console.log('--------------- removeTodo ---------------');
console.log(removeTodo(1)); //remove Id: 1
console.log(getTodos());

//test getTodos
console.log(getTodos());