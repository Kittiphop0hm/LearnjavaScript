//array version
const countCovid = (persons) => {
  if (!Array.isArray(persons) || persons.length === 0)
    throw new Error("No Status");
  const statuss = ["positive", "negative"];
  const result = [];
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].status.toLowerCase() === statuss[0]) {
      result.push(persons[i].name);
    }
  }
  return result;
};

const countCovidV2 = (persons) => {
  if (!Array.isArray(persons) || persons.length === 0) throw new Error('No status')
  const statusPo = /[positive]/
  const statusNe = /[negative]/
  const result = []
  for (let i = 0; i < persons.length; i++) {
    if (statusPo.test(persons[i].status.toLowerCase().charAt(i))) {
        result.push(persons[i].name)
    }
  }
  return result
}

console.log('countCovidV2', countCovidV2([
  { name: "Ohm1", status: "negative" },
  { name: "Ohm2", status: "positive" },
  { name: "Ohm3", status: "positive" },
]));


console.log(
  countCovid([
    { name: "Ohm1", status: "negative" },
    { name: "Ohm2", status: "positive" },
    { name: "Ohm3", status: "positive" },
  ])
);
console.log(
  countCovid([
    { name: "Ohm1", status: "negative" },
    { name: "Ohm2", status: "negative" },
    { name: "Ohm3", status: "negative" },
  ])
);
console.log(
  countCovid([
    { name: "Ohm1", status: "negative" },
    { name: "Ohm2", status: "negative" },
    { name: "Ohm3", status: "positive" },
  ])
);

const isValidPassword = (password) => {
  if (
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    password.length >= 8
  )
    return "Password is valid";
  return "Password is not valid";
};

console.log(isValidPassword(undefined));
console.log(isValidPassword(null));
console.log(isValidPassword(""));
console.log(isValidPassword("ab!12"));
console.log(isValidPassword("1234abcd"));
console.log(isValidPassword("Zky543#@"));
console.log(isValidPassword("1#@!*aB^5"));
console.log(isValidPassword("%5Ko&$pp"));
console.log(isValidPassword("12345abcxyZ$"));


const countVowel = (string) => {
    const vowel = /[aeiou]/
    let result = 0
    for (let i = 0; i < string.length; i++) {
        if (vowel.test(string.toLowerCase().charAt(i))) {
            result++
        }
    }
    return result
}

console.log(countVowel('aeiou'));
console.log(countVowel('charAt'));
console.log(countVowel('aeiououa'));

//test destructuring relation
const arr = [1,2,3,4,5]
const [a,b, ...c] = arr
console.log(`a ${a}`);
console.log(`b ${b}`);
console.log(`c ${c}`);
c.push(10)
console.log(c);
console.log(arr); // Not room relation

//test
const s1 = {
  id: 1,
  name: 'Ohm'
}

//test Object.create()
const s2 = Object.create(s1)
console.log(s1);
console.log(s2);
s2.email = 'kittiphop@gmail.com'
console.log(s1.email);
console.log(s2);
s2.name = 'Kai'
console.log(s2);
console.log(s1);


const greet = (firstStr, lastStr) => {
  return `${firstStr ?? 'Hello'} ${lastStr}`
}

console.log(greet(undefined, 'Ohm'));

let word = 'Hello my name is Kittiphop Siranonchai'
let capitalize = word.split(' ')
                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ');
console.log(capitalize);