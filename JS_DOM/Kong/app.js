const a = document.getElementById("demo");
a.innerText = "Learn basic javaScript";

const b = document.getElementsByClassName('js')
console.log(b);

const c = document.getElementsByTagName('p')
console.log(c);

//use querySelector
const d = document.querySelector("#demo")
console.log(d);

const e = document.querySelector(".js")
console.log(e);

const f = document.querySelectorAll("p")
console.log(f);



let firstName = 'Kittiphop'
let lastName = 'Siranonchai'
const displayText = () => {
    a.style.color = 'red'
    a.style.backgroundColor = 'black'
    a.style.fontWeight = '500'

    e.setAttribute('class', 'jsBasic')
}
// Add ------------------------------------
const menu = document.getElementById("menu")
let count = 1;
const addItem = () => {
    const list = document.createElement("li");
    list.innerText = `item ${count++}`;
    menu.appendChild(list)
}

// Delete ----------------------------------
const deleteItem = () => {
    const list = document.querySelector("li")
    menu.removeChild(list)
}

// Replace ----------------------------------
const choice = document.querySelector(".choice")
const replaceItem = () => {
     const list = document.querySelector('.item-1')
     const newList = document.createElement('li')
     newList.innerText = 'A is not correct choice'
     choice.replaceChild(newList, list)
}

