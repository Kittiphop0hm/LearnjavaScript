// Practice-01
const combineArrays = (arr1, arr2) => {
    return [...arr1,...arr2]
}
console.log(combineArrays([1,2], [3,4]));
console.log(combineArrays(['a','b'], ['c','d']));
console.log(combineArrays([], [1,2,3]));

// Practice-02
const getStringLength = (arrs) => {
    let result = []
    arrs.forEach((arr) => {result.push(arr.length)})
    return result
}
console.log(getStringLength(['apple', 'banana', 'kiwi', 'orange']));
console.log(getStringLength(['hello', 'world']));
console.log(getStringLength(['ChatGPT', 'AI']));

// Practice-03
const greet = (name, greeting) => {
    return `${greeting ?? 'Hello'}, ${name}!`
}

console.log(greet('Ohm', 'Hi'));
console.log(greet('Ohm', null));