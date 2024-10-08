const nums = [1,5,8,10]
const findMinMaxAvg = (nums) => {
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    let avg = nums.reduce((total, currentValue) => total + currentValue)/nums.length
    return {min, max, avg}
}
console.log(findMinMaxAvg(nums));

//splice
const words = ['cat','ant', 'dog', 'bird']
words.splice(2, 2) //delete
console.log(words);
words.splice(0, 1, 'dragon', 'hippo') //replace
console.log(words);
words.splice(2, 0, 'cat', 'dog') //add
console.log(words);

//slice

//ฝึก findAll

//sort
const students = [{id:665000101, name:'Somchai'}, {id:665000131, name:'ann'}, {id:665000144, name:'Pitchit'}]
console.log(students.sort());

const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
    { name: 'Eve', score: 78 }
]

const getPassingName = (students) => {
    return students.filter((student) => student.score >= 70).map((student) => student.name.toUpperCase())
}

const passingName = getPassingName(studentScores)
console.log(passingName);

