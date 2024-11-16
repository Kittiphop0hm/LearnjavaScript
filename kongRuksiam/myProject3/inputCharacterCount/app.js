const spanCount = document.querySelector(".count")
const input = document.querySelector("input")

input.addEventListener("keyup",() => {
    spanCount.textContent = input.value.replace(/\s+/g, "").length;
})