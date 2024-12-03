document.cookie = "color=red";
console.log(document.cookie);
document.cookie = "theme=cartoon";
document.cookie = `color=yallow;expires=${new Date(2021, 11, 4)}`;
console.log(document.cookie);
document.cookie = `token-id=12345;HttpOnly`;
