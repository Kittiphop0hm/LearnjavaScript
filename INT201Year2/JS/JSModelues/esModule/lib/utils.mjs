//export individual
//named export
export function echo(msg = 'Hello World') {
    return msg
}

export default function doSomething2(n1, n2) {
    return n1+n2
}

//export list
function doSomething(n1, n2) {
    return n1+n2
}
const nums = [1,2,3,4,5]
export{doSomething as greeting, nums}