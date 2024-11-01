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
