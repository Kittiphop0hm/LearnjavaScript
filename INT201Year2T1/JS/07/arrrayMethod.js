//1
const colors = ["red", "green", "purple"];
function getFirstCharacter(items) {
  let result = [];
  let resuleColors = colors.forEach((color) => {
    result.push(color.charAt(0).toLocaleUpperCase());
  });
  return result;
}
console.log(getFirstCharacter(colors));

//2
const nums = [1, 2, 3, 5, 8, 10];
function findEventNumber(items) {
  return items.map((item) => item ** 2).filter((item) => item % 2 === 0);
}

console.log(findEventNumber(nums));

const students = [
  {
    id: 1,
    absent: true,
  },
  {
    id: 2,
    absent: false,
  },
  {
    id: 3,
    absent: true,
  },
  {
    id: 4,
    absent: false,
  },
  {
    id: 5,
    absent: false,
  },
];
function findAbsentId(items) {
  return items.filter((item) => item.absent).map((item) => item.id);
}
console.log(findAbsentId(students));

function isAllAbsent(items) {
  return items.every((item) => item.absent);
}
console.log(isAllAbsent(students));

const removeFalsyValues = (arrs) => {
  return arrs.filter((arr) => arr !== 0 && arr && arr !== null && arr.length !== 0 && arr !== undefined);
}

console.log(removeFalsyValues([0, 1, false, 2, "", 3]));
console.log(removeFalsyValues(["a", "", "b", null, "c"]));
console.log(removeFalsyValues([null, undefined, 'A']));

//G2
const getFreqOfWords = (sentencs) => {
  if (sentencs === null || sentencs === undefined) return undefined
  const words = sentencs.split(' ')
  let result = {}
  for (let i = 0; i < words.length; i++) {
      let word = words[i].toLowerCase()
      if (result[word]) {
        result[word] += 1
      } else {
        result[word] = 1
      }
  }
  return result
}

console.log(getFreqOfWords('Today is present and present is your gift'));
console.log(getFreqOfWords('Do you best just do it'));
console.log(getFreqOfWords(null));
console.log(getFreqOfWords(undefined));

const addProperty = (obj, key, value) => {
  obj[key] = value
  return obj
}

console.log(addProperty({name:'John'}, 'age', 25));
console.log(addProperty({}, 'city', 'New York'));

