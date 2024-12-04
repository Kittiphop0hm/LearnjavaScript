//1
const isArray = (arr) => {
    return Array.isArray(arr)
}
console.log(isArray('Hello World'));
console.log(isArray(['Hello World']));

//2
const arrayClone = (arr) => {
    return [...arr]
}
console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));


const sumTwoArray = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) throw new Error('Error')
    const result = []
    for (let i = 0; i < arr1.length && arr2.length; i++) {
        let sum = arr1[i] + arr2[i]
        result.push(sum)
    }
    return result
}

console.log('SumArray', sumTwoArray([1, 2, 4, 10], [1, 2, 4, 11]));

const mergeArray = (arr1, arr2) => {
    const result = new Set([...arr1, ...arr2])
    return Array.from(result)
}
console.log(mergeArray([1, 2, 3], [11, 2, 3]));


const arr = [1,2,3,4,5]
delete arr[2]
console.log(arr);

function removeFromValue(arrs, value) {
    let index = arrs.indexOf(value)
    if (index >= 0) {
        arrs.splice(index, 1)
    }
    return arrs
}
console.log(removeFromValue([2, 5, 9, 6], 5));

function contains(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true
        }
    }
    return false
}

console.log(contains([2, 5, 9, 6], 1));


function nthlargest(arr, index) {
    return arr[--index]
}

console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));

function filterArray(arr) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(filterArray([58, '', 'abcd', true, null, false, 0]));



