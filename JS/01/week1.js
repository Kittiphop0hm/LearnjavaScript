const paragraph = document.getElementsByTagName("p")
alert(paragraph[0].nodeName)
console.log(`Hello World`)

function calculator(op, num1, num2) {
    return op(num1, num2)
}

const sum = (num1, num2) => num1 + num2
let sums = sum()

const subtract=(num1, num2) => {
    return num1 - num2
}

const randomNumber = () => {
    const ranNum = Math.floor(Math.random()*10)+1
    return ranNum
}

console.log(randomNumber());