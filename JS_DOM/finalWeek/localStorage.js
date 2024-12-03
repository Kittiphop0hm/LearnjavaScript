// import { CookieUtil } from "./myLib/cookieUtil.js";
// document.cookie = "color=red";
// console.log(document.cookie);
// document.cookie = `theme=cartoon;max-age=${60 * 60}`;
// document.cookie = `color=yallow;expires=${new Date(2024, 11, 4)}`;
// console.log(document.cookie);
// document.cookie = `token-id=12345;HttpOnly`;
// document.cookie = `border=bold`;
// console.log(document.cookie);

// //CookieUtil
// CookieUtil.set("color", "black", new Date(2024, 11, 10));
// console.log(CookieUtil.get("color"));
// CookieUtil.unset("color");
// CookieUtil.unset("border");

// test localStorage
// if (localStorage.getItem('count') === null) {
//     localStorage.setItem('count', 1)
// } else {
//     let count = localStorage.getItem('count')
//     localStorage.setItem('count', ++count)
// }
// alert(localStorage.getItem('count'))
// localStorage.removeItem('count')

//test sessionStorage
// if (sessionStorage.getItem("count") === null) {
//   sessionStorage.setItem("count", 1);
// } else {
//   let count = sessionStorage.getItem("count");
//   sessionStorage.setItem("count", ++count);
// }
// alert(sessionStorage.getItem("count"));
