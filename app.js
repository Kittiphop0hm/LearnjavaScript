//Object Prototype
const student = {id: 66130500009, firstname: 'Kittiphop', lastname: 'Sriranonchai'};
console.log(student);
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(typeof(student));
console.log(Object.prototype.isPrototypeOf(student));
console.log(Date.prototype.isPrototypeOf(student));

//propoties values
const someoneId = student.id;
const someoneName = student['firstname']
console.log(someoneId);
console.log(someoneName);

