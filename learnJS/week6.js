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
