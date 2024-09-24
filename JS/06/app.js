const x = {id: 1, name: 'Java'}
delete x.id
console.log(x);
x['email'] = 'java@gmail.com'
console.log(x);

const square = {
    id: 1,
    side: 4,
    area () {
        return this.side * this.side
    },
    compareTo(anotherSquare) {
        return this.id === anotherSquare.id
    }
}

console.log(square.area);
console.log(Object.is(square, x));
const square2 = {id: 10}
const square3 = {id: 1}
console.log(square.compareTo(square3));
console.log(square.compareTo(square2));

//JSON
console.log(JSON.stringify(square));
const empObj = {}
if (JSON.stringify(empObj) === '{}') {
    console.log('compare use JSON function');
}
if (Object.keys(empObj).length === 0) {
    console.log('compare use Object.keys');
}

//Practice
const extractAndRename = (obj) => {
    return `{fullName:'${obj.name}',yearsOld:${obj.age}}`
}
console.log(extractAndRename({name:'John',age:25,city:'New York'}));
console.log(extractAndRename({name:'Jane',age:30}));

const mergeAndDestructure = (obj1, obj2) => {
    let resultName = ''
    let resultAge = 0
    if (obj1.hasOwnProperty('name') && obj1.hasOwnProperty('age')) {
        return `{name:${obj1.name},age:${obj1.age}}`
    }
    if (obj2.hasOwnProperty('name') && obj2.hasOwnProperty('age')) {
        return `{name:${obj2.name},age:${obj2.age}}`
    }
    if (condition) {
        
    }
}

const obj = {name:'Jane',age:30}