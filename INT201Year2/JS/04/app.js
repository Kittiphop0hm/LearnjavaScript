//Basic Arrays and Function
const values = [1, 2, 'Hello World', true, [5, 6, 7], {id:1, name:'Ohm'}]
values[values.length] = 'Good bye'
//values.push('Good bye')
console.log(values[0]);
console.log(values[values.length-1]);

for (const item of values) {
    console.log(item);
    
}
//Create arrays
const colors = [
    ['Yallow', 'Red', 'Green', 'Blue'],
    ['Brown', 'Black']
]
console.log(colors[0].length);
console.log(colors[1].length);

const a = [10, 20, 30]
const b = [5, ...a]
console.log(b);

const str = 'hello world'
console.log([...str]);

const students = [
    {id: 66130500009, name: 'Ohm'},
    {id: 66130500045, name: 'TonPee'}
]

const alumniStudent = [...students]
alumniStudent[0].id = 9999999
console.log(students);
console.log(alumniStudent);

//Single number = arrays size
console.log('------- Create Array -------');
const array1 = new Array(4)
console.log(array1);
console.log(array1.length);

const array2 = new Array(1,2,3)
console.log(array2);
console.log(array2.length);

const array3 = []
//Array Of
const arrayOf = Array.of(5)
console.log(arrayOf);
console.log(arrayOf.length);
//Array From
const arrayFrom = Array.from(array2, (x) => x * 2) //Equal array2
console.log(arrayFrom);
console.log(arrayFrom.length);

//push arrays
console.log("Add element to array");
const x = []
x[0] = 1
x[x.length] = 10
console.log(x);
delete x[0]
console.log(x);
// push
console.log('Push');
x.push(100)
x.push(200)
console.log(x);
console.log(x.length);
x.pop()
console.log(x);
console.log(x.length);
//shift
console.log('Shift');
x.unshift('A') //insert element to first index
x.unshift('B')
console.log(x);
x.shift() //pop first element
console.log(x);