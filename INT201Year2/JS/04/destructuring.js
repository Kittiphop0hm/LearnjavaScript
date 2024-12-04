const [a, b] = [10, 20];
console.log(a);
console.log(b);
console.log('------------');

const [m] = [10, 20, 30]
console.log(m);
console.log('------------');

const [x, y, ...z] = [100, 200, 300, 400 ,500]
console.log(x);
console.log(y);
console.log(z);
console.log('------------');

const words = ['USA', 'Thailand', 'English']
for (let [index, word] of words.entries()) {
    console.log(`${index} ${word}`);
}

const aa = [10,20,30]
const [...bb] = aa 
console.log(bb);







