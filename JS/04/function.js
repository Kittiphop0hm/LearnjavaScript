function doSomeThing(x, y) {
    console.log(x);
    console.log(y);
}

doSomeThing(100, 200)

const yourName = function(name) {
    return `Hello ${name}`
}
console.log(yourName('Kittiphop'));

//Arrow function can't use keyword 'This' and Constructure
const sum = (a, b) => {
    return a + b
}
console.log(sum(5, 5));


const person1 = {
    id:1,
    name:null,
    getName: function() {
        return this.name ?? 'Values is null'
    }
}
const person2 = {id:1, name:null}
function getValue() {
    return this.name ?? 'Value is null'
}
console.log(getValue.call(person1));