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
class Student {
    static arrays = []
    constructor(id, fname, lname ) {
        this.id = id
        this.fname = fname
        this.lname = lname 
    }

    getFullName() {
        return `${this.fname} ${this.lname}`
    }

    static create(id, fname, lname) {
        const st = new Student(id, fname, lname)
        Student.arrays.push(st)
    }

    static getAllArrays() {
        Student.arrays.forEach(element => {console.log(element)});
    }
}

Student.create(1, 'Kittiphop', 'Sriranonchai')
Student.getAllArrays();


const student1 = new Student(1, 'Leborn', 'James')
const student2 = new Student(2, 'Bronny', 'James')
console.log(student1);
console.log(student1.getFullName());
console.log(Object.prototype.isPrototypeOf(student1));
console.log(Object.prototype.isPrototypeOf(student2));

//create object by using Object.create()
const undergratSt1 = Object.create(student1)
console.log(undergratSt1);
console.log(undergratSt1.id);
console.log(undergratSt1.fname);
console.log(undergratSt1.lname);
undergratSt1.project = 'Web Application'
console.log(undergratSt1);

//define method
const square = {
    side: 2,
    area() {
        return Math.PI * Math.pow(this.side, 2)
    },
    compareSide(compareSquare) {
        return this.side === this.compareSquare
    }
}

const square2 = square
console.log('Compare: ' + square.compareSide(square2.side));

console.log(square);
console.log(square.side);
console.log(square.area());

//compare object ==,=== (compare address not compare values)
const person1 = {id:1, name:'Ohm'}
const person2 = {id:2, name:'Ohm'}
const olePerson = {id:1, name:'Ohm'}
const newPerson = person1

if (person1 == newPerson) {
    console.log("true");
}

if (person1 === newPerson) {
    console.log("true");
}

if (person1 == olePerson) {
    console.log("true");    
} else {
    console.log("false");
}

if (person1 === olePerson) {
    console.log("true");    
} else {
    console.log("false");
}

//create function compare object values

let book1 = {
    isbn: 123456789,
    title: 'JavaScript',
}

let book2 = {
    isbn: 123456789,
    title: 'JavaScript',
}

function shallowEquality(obj1, obj2) {
    const key1 = Object.keys(obj1)
    const key2 = Object.keys(obj2)

    if (key1.length !== key2.length) {
        return false
    }

    for (let key of key1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true
}

console.log(shallowEquality(book1, book2));

//pre exam
function arrayStart(arr) {
    let min = Math.min.apply(Math, arr)
    let max = Math.max.apply(Math, arr)
    let sum = 0
    let avg = 0
    arr.forEach(element => {sum += element});
    avg = sum / arr.length
    return {min: min, max: max, sum: sum, avg: avg}
}

console.log(arrayStart([1,2,3,4,5]));


function findFileExtension(filename) {
    return filename.substring(filename.lastIndexOf('.'))
}

console.log(findFileExtension('ohm.js'));

function isImageFileExtension(filename) {
    if (filename === null || filename === undefined) return false
    return (
        filename.endsWith('.png') ||
        filename.endsWith('.jpg') ||
        filename.endsWith('.jpeg') ||
        filename.endsWith('.gif') ||
        filename.endsWith('.svg')
    )
}

console.log(isImageFileExtension('Gugu.html'));