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


