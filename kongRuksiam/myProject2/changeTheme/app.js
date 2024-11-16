const divTime = document.querySelector(".time");
const showTime = document.createElement("h3");
const btnMode = document.querySelector(".toggle");

function setTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  showTime.textContent = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  divTime.appendChild(showTime);
}
setTime();
setInterval(setTime, 1000);

btnMode.addEventListener("click" ,(e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Theme'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light Theme'
    }

    console.log('Change');
    
})
