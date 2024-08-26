//1
function classicfyNumber(num) {
    if (num > 0) return 'positive'
    if (num < 0) return 'negative'
    return 'zero'
}

console.log('---------- test 1 ----------');
console.log(classicfyNumber(5));
console.log(classicfyNumber(-3));
console.log(classicfyNumber(0));

//2
function countVowels(str) {
    const vowels = ['a','e','i','o','u']
    let result = 0
    vowels.forEach(vowel => {
        if (str.toLowerCase().includes(vowel)) result++
    });
    return result
}

console.log(countVowels('hello'));
console.log(countVowels('world'));
console.log(countVowels(''));

//3
function isPrime(num) {
    if (num === 0 || num === 1) return false
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false
        }  
    }
    return true
}

console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(17));
console.log(isPrime(99));
console.log(isPrime(97));
console.log(isPrime(33));



