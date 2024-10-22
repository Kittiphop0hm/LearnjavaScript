const {addTodo, getTodos, findTodo, removeTodo, findIndexTodo} = require('../todoManagement')
console.log(addTodo('University'));
console.log(getTodos());
const bankManage = require('../todoManagement')
console.log(findTodo(4));
console.log(removeTodo(4));
console.log(getTodos());
console.log(findIndexTodo(3));

console.log(bankManage.addTodo('Network'));
console.log(bankManage.getTodos());
