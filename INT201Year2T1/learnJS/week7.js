const arr1 = [1, 2, 3, 4, 5]
const arr2 = [0, 2, 4, 6, 8]
const map = arr1.map((arr) => arr + 1)
console.log(map)

const every = arr1.every((arr) => arr > 0 && arr <= 5)
console.log(every)
const some = arr2.some((arr) => arr === 0)
console.log(some);

const names = ['alice', 'John', 'Bob', 'Ann']
const isStartWithALetter = names.every((name) => name.toLocaleLowerCase().startsWith('a'))
console.log(isStartWithALetter)

const isSomeStartWithALetter = names.some((name) => name.toLocaleLowerCase().startsWith('a'))
console.log(isSomeStartWithALetter);

//reduce
const nums = [2,4,6,8]
const reducer1 = nums.reduce((total, currentValue) => `${total}, ${currentValue}`)
const reducer2 = nums.reduce((sum, currentNumber) => sum + currentNumber, 0)
console.log(reducer1);
console.log(reducer2);

const names1 = ['Alice', 'Bob', 'Ann', 'Cath']
const reducer3 = names1.reduce((concat, firstStr) => concat + firstStr[0], '')
console.log(reducer3);

const buyProducts = [
    {price: 50, quantity: 2},
    {price: 299, quantity: 10},
    {price: 15, quantity: 5},
]

console.log(buyProducts);
const reducer4 = buyProducts.reduce((result, currentValue) => result + (currentValue.price * currentValue.quantity), 0)
console.log(reducer4);



 