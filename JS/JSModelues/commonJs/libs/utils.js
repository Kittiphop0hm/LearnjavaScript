//destructuring import
const {addTodo, getTodos} = require('../todoManagement')
console.log(addTodo('Facebook'));
console.log(getTodos());

//not use destructuring import
const todoManagement = require('../todoManagement')
console.log(todoManagement.addTodo('Youtube'));
console.log(todoManagement.getTodos());