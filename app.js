//Object Prototype and propoties key
const student = {id: 66130500009, firstname: 'Kittiphop', lastname: 'Sriranonchai'};
console.log(student);
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(typeof(student));
console.log(Object.prototype.isPrototypeOf(student));
console.log(String.prototype.isPrototypeOf(student));
console.log(Date.prototype.isPrototypeOf(student));

//propoties get values
const someoneId = student.id;
const someoneName = student['firstname']
console.log(someoneId);
console.log(someoneName);

//assign/set propoties values
student.id = 1150
student['firstname'] = 'Kittiphop_Ohm'
console.log(student.id);
console.log(student.firstname);
console.log(student['firstname']);

//add new dynamic propoties in object 
const cars = ['Benz', 'BMW', 'Toyota']
student.email = 'kittiphop@gmail.com'
student['address'] = 'Bangkok, Thailand'
student['cars'] = cars
console.log(student.email);
console.log(student['address']);
console.log(student);
console.log(student.cars);

//keep function in object
const f1 = function getObj(obj) {
    return obj
}
student.getFullName = function() {
    return `${this.firstname} ${this.lastname}`
}
student['function'] = f1
console.log(student);
console.log(student.cars);
console.log("Function: " , student.function(student));
console.log(student.getFullName());
console.log(student.getFullName);

//contructor function
function Person(id, name) {
    this.id = id
    this.name = name
}
const p1 = new Person(1, 'Ohm')
const p2 = new Person(2, 'Dom')
console.log(p1);
p1['department'] = 'Back-End'
p2['department'] = 'Front-End'
console.log(p1);
console.log(p2);
p1.getFullName = function() {
    return `${this.id} ${this.name} ${this.department}`
}
console.log(p1.getFullName());

//create object with class