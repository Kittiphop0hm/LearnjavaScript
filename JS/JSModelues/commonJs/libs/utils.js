const {addTodo, getTodos, findTodo, removeTodo, findIndexTodo} = require('../todoManagement')
console.log(addTodo('University'));
console.log(getTodos());

console.log(findTodo(4));
console.log(removeTodo(4));
console.log(getTodos());
console.log(findIndexTodo(3));