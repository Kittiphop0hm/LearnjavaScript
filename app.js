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


