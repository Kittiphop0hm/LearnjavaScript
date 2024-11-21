const btnOk = document.getElementById("btn-ok");
const divOk = document.querySelector("div");
const body = document.body;

//add function event listener, defult = bubbling
// btnOk.addEventListener("click", () => {
//     console.log('Click ok btn');
// }, true)

// btnOk.addEventListener("click", () => {
//     console.log('Click ok btn2');
// }, true)

// const getMassage = () => {
//     console.log('div click!!');
// }
// divOk.addEventListener("click", getMassage, true)
// //removeEvent impact handle function
// divOk.removeEventListener("click", getMassage, true)

// body.addEventListener("click", () => {
//     console.log('body click');
// }, true)

//Event Object
// btnOk.addEventListener("click", (event) => {
//   console.log(`event target: ${event.target}`);
//   console.log(`current target: ${event.currentTarget}`);
//   console.log(`current phase: ${event.eventPhase}`);
//   console.log(`current phase: ${event.type}`);
// });

// divOk.addEventListener("click", (event) => {
//   console.log(`event target: ${event.target}`);
//   console.log(`current target: ${event.currentTarget}`);
//   console.log(`current phase: ${event.eventPhase}`);
//   console.log(`current phase: ${event.type}`);
// });

// const aKmutt = document.querySelector("a");
// aKmutt.addEventListener("click", (event) => {
//   event.preventDefault();
//   alert("Don't visit");
// });

// document.addEventListener("DOMContentLoaded", () => {
//   alert(`Hello, body children: ${document.body.children}`);
// });

// window.addEventListener("load", () => {
//   alert(`All resources loaded`);
// });

// window.addEventListener("beforeunload", () => {
//   const localS1 = localStorage.setItem("endingMassage", "Good bye");
// });

//All event
const divMove = document.getElementById("div-move");
divMove.addEventListener("mouseup", (event) => {
  const px = document.getElementById("px");
  const py = document.getElementById("py");
  px.textContent = event.pageX
  py.textContent = event.pageY
});


const inputKey = document.getElementById('input-001')
const msg = document.getElementById('mag-001')
inputKey.addEventListener("keyup", (event) => {
    if (event.code === 'Enter') {
        msg.textContent = event.target.value //เอา value พิมพ์ลงช่อง input 
    }
})


