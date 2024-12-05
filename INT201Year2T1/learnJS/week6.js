//Object Destructuring
const person = {id: 1001, name: 'Kittiphop'}
const {id, name} = person
console.log(id);
console.log(name);

//Array Destructuring
const nums = [10, 20, 30, 40, 50]
let a, b, rest
[a, b, ...rest] = nums
console.log(rest);
//Object Neted Destructuring
const student = {
    id: 555,
    name: 'Ohmmy',
    content: {
        header: 'Basic JavaScript',
        artist: 'Ohm.js',
        location: {
            country: 'USA'
        }
    }
}
let {content: {header: header_coontent}} = student
let {content: {artist}} = student //equally to const artist = student.artist 
let {content: {location: {country: student_coutry}}} = student
console.log(header_coontent);
console.log(artist);
console.log(student_coutry);


class Person {
    constructor(firstname, lastname, dateOfBirth) {
        this.firstname = firstname
        this.lastname = lastname
        this.dateOfBirth = dateOfBirth
    }

    getFullname() {
        return `${this.firstname} ${this.lastname}` 
    }

    getAge() {
        let milliOfToday = Date.now()
        let milliOfBirthdate = this.dateOfBirth.getTime()
        let diff = milliOfToday - milliOfBirthdate
        let dateOfDiff = new Date(diff)
        return dateOfDiff.getFullYear() - 1970
    }

    isEqual(anotherPerson) {
        return this.firstname.toLowerCase() === anotherPerson.firstname.toLowerCase() 
        && this.lastname.toLowerCase() === anotherPerson.lastname.toLowerCase()
    }

    toString() {
        return `${this.getFullname()} ${this.getAge()}`
    }
}

const person1 = new Person('Kittiphop', 'Sriranonchai', new Date(2005, 1, 25))
const person2 = new Person('Typhoon', 'Herican', new Date(1987, 1, 1))
console.log(person1.getAge());
console.log(person2.getAge());
console.log(person1.isEqual(new Person('Kittiphop', 'Sriranonchai', new Date(2005, 2, 25))));
console.log(person1.toString());

//Arrow function
//V1 Auto return
const sum1 = (n1, n2) => n1 + n2
//V2
const sum2 = (n1, n2) => {
    return n1 + n2
}
//V3 Have many logic *Fix {}*
const sum3 = (n1, n2) => {
    let add = 10
    return add + n1 + n2
}

//forEach
const fruits = ['banana', 'mango', 'orange']
fruits.forEach((fruit) => console.log(fruit))
let allFruit = ''
fruits.forEach((fruit) => allFruit += fruit.toUpperCase() + ' ')
console.log(allFruit);

//filter
const animes = ['Naruto', 'One piece', 'Doraemon', 'Yugi']
const result = animes.filter((anime) => anime.length <= 4)
console.log(result);

//map
const numbers = [2, 4, 6, 8]
const map1 = numbers.map((number) => number * 2)
console.log(map1);
const map11 = numbers.map((number) => (number * 2) + 10)
console.log(map11);

const students = [
    {id: 1, name: 'Ohm'},
    {id: 2, name: 'Smark'},
    {id: 3, name: 'Vee'}
]
const map2 = students.map((student) => student.name).filter((student) => student.length <= 3)
console.log(map2);

//exam
const persons = [
    {id: 1, firstname: 'Somsak', lastname: 'Jaidee'},
    {id: 2, firstname: 'Somchai', lastname: 'Dee'},
    {id: 3, firstname: 'Somying', lastname: 'Jai'}
]
//1
const dePerson = persons.filter((person) => person.firstname.toLowerCase().includes('de') || person.lastname.toLowerCase().includes('de'))
console.log(dePerson);
const jaiPerson = persons.filter((person) => person.firstname.toLowerCase().includes('jai') || person.lastname.toLowerCase().includes('jai'))
console.log(jaiPerson);
//2
const fullname = persons.map((person) => `${person.lastname}, ${person.firstname}`)
const sumId = persons.map((person) => person.id + 1)
console.log(sumId);
console.log(fullname);
//3
const newId = persons.map((person) => {
    const currentYear = new Date(Date.now()).getFullYear()
    return currentYear + '' + person.id
})
console.log(newId);
//find
const findLastname = persons.find((person) => person.lastname.toLocaleLowerCase().startsWith('dee'))
console.log(findLastname);

const findId = persons.find((person) => person.lastname.toLocaleLowerCase().startsWith('jai'))
console.log(findId);
//findIndex
const findIndexLastname = persons.findIndex((person) => person.lastname.toLocaleLowerCase().startsWith('jai'))
console.log(findIndexLastname);

//every
const checkId = persons.every((perosn) => person.id > 0)
console.log(checkId);
//some
const checkSak = persons.some((person) => person.firstname.toLocaleLowerCase().endsWith('sak'))
console.log(checkSak);