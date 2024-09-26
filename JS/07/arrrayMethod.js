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
    absent: f,
  },
  {
    id: 5,
    absent: false,
  },
];
function findAbsentId() {}

function isAllAbsent() {}
