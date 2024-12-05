const find = () => {
    function findTarget(arr, target) {
        let result = []
        if (!target) return -1
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                result.push(arr[i])
            }
        }
        return result   
    }

    function findObj(arr, target) {
        let result = []
        for (let i = 0; i < arr.length; i++) {
            arr[i].skills.forEach((skill) => {
                if (skill.toLowerCase().startsWith(target.toLowerCase())) {
                    result.push(skill)
                }
            });
        }
        return result
    }

    return {findTarget, findObj}
}

const {findTarget, findObj} = find()
// console.log(findTarget([1,1,1,1,2,3,1,5], 1));
// console.log(findObj([{id: 1, name: 'Ohm', skills: ['Java', 'js', 'Golang', 'HTML', 'CSS']}], 'J'));
module.exports = {findTarget, findObj}









