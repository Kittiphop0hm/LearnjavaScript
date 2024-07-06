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
        artist: 'Ohm.js'
    }
}

let {content: {header}} = student
let {content: {artist}} = student
console.log(header);
console.log(artist);
