//Objects
//literale
console.log('=== Literale ===');

const person = {id: 12345, name: 'Ohm', name:'Kai'}
console.log(person.id);
console.log(person.name);

console.log(person['id']);
console.log(person['na' + 'me']);
//[]exam, in loop can't use object.value
for(key in person) {
    console.log(`${key} ${person[key]}`);
}

//Constructor Function
console.log('=== Constructor Function ===');
function Point(name, score) {
    this.name = name
    this.score = score
}

const point = new Point('Ohm', '400')
console.log(`${point.name} ${point.score}`);
for(key in point) {
    console.log(key, point[key]); 
}

//Class objects
console.log('=== Class objects ===');
class Person {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
    getId() {
        return this.id
    }
    getName() {
        return this.name
    }
    toString() {
        return `ID: ${this.id}, Name: ${this.name}`
    }
}

const p1 = new Person(1, 'Toyota')
console.log(p1.getId(), p1.getName());
console.log(p1.toString());
for(key in p1) {
    console.log(key, p1[key]);
}

//use Object.create
console.log('=== Use Object.create ===');
const s1 = Object.create(p1)
console.log(s1);
console.log(s1.id);
console.log(s1.name);
//Relation is share room
p1.name = 'Izuzu'
p1.id = 55555555
console.log(`${s1.name} ${s1.id}`);
console.log(p1.name);
//addProperty
s1.email = 'toyota@gmail.com'
console.log(s1.email);

//Neted object
const mail = {
    sender:{
        firstname:'Somchai',
        lastname:'Dee'
    },
    subject: 'Hello'
}
console.log(mail.sender.firstname);
console.log(mail.sender['firstname']);
console.log(mail['sender']['firstname']);

//add a new property
//v1
mail['sender']['fullname'] = `${mail.sender.firstname} ${mail.sender.lastname}`
//v2
mail.sender.hello = `Hello ${mail.sender.fullname}`
console.log(mail['sender']['fullname']);
console.log(mail.sender.hello);















