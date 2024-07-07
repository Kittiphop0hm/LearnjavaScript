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




