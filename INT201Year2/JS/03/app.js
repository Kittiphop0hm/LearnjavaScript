let x = 0
let y = 0
x++
++y
console.log(x);
console.log(y);
//
let score = 1;
let unit = score >= 2 ? 'points' : 'point'
console.log(`${score}, ${unit}`);
//
let nums
console.log(nums?.[0]);
let obj
console.log(obj?.id);
//
let num = null
console.log(num ?? 'Not null');
let person = {id: 1, name: 'Ohm'}
let checkPerson = person.name ?? "'person haven't name"
console.log(checkPerson);
//
const words = ['Book', 'apple', 'Cat', 'Zebra', 'banana', 0]
console.log(words.sort());
//
const student1 = {id: 1, name: 'Batman'}
const student2 = student1
student2.department = 'IT'
console.log(student1);
console.log(student2);
console.log(student1 === student2 ? true : false);



let ch = 'a'
switch(ch) {
    case 'a':
    case 'A': console.log('Very good');
    break;
    case 'b':
    case 'B':console.log('Good');
    break;
    default: console.log('Fair');
    break;
}

const human = {firstname: 'Kiiti', lastname: '.com'}
const numbers = [1,2,3,4,5]
//use with object
for (const key in human) {
    console.log(`${key}: ${human[key]}`);
}
//use with array and object
for (const number of numbers) {
    console.log(number);    
}
//use with arrays
numbers.forEach(number => {
    if (number > 2) console.log(number);
});
