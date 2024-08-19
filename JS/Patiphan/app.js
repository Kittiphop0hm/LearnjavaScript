const showMassage = () => {
    alert("External")
}

const myFunction = ()=> {
    document.getElementById("demo").innerHTML = "Hello World";
}

const myNameIs = () => {
    let name = prompt("What your name")
    document.getElementById("test").innerHTML = `My name is ${name}`
}

console.log(document.getElementById("demo"));
