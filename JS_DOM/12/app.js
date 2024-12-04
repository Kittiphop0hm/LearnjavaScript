const course = document.getElementById("course");
const subject = document.createElement("p");
//set style of subject
// subject.style.color = 'red'
subject.setAttribute("style", "color:red")
subject.textContent = "INT209-Network";
course.appendChild(subject);

let currentNode = course
while(currentNode!==null) {
    console.log(`current node: ${currentNode}, node type : ${currentNode.nodeType}, node name: ${currentNode.nodeName}, node value: ${currentNode.nodeValue}`);
    console.log(`childCount: ${currentNode.childElementCount}`)
    currentNode = currentNode.lastChild
}

const int202 = document.getElementsByName('serverSide')
console.log(int202);
const divElement = document.getElementsByTagName('div')
console.log(divElement);
console.log(course);
const lastCourse = course[course.length-1];
console.log(lastCourse);
const int129 = document.getElementsByClassName('int129')
console.log(int129);
console.log(int129[int129.length]-1);

//querySelector
const allDiv = document.querySelectorAll('div')
console.log(allDiv);




