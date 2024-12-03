const size = document.getElementById('input-size')

size.addEventListener("keyup", (e) => {
    const mySize = document.getElementById('your-size')
    mySize.textContent = e.target.value
    document.body.style.fontSize = `${e.target.value}px`
})


