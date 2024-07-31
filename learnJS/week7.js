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

