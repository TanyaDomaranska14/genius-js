// import { name } from "./module";
import "./style.css";
// import isEmail from "validator/lib/isEmail";
// import isURL from "validator/lib/isURL";
// import toDate from "validator/lib/toDate";

// console.log("Your name: " + name);

// console.log(isEmail("foo@bar.com"));
// console.log(isURL("https://webpack.js.org/loaders/"));
// console.log(toDate("08.28.1989"));

// var moment = require('moment');

// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
// console.log(moment().format("MMM Do YY"));

// const hello = () => {
//     console.log('Hello');
// };

// const setInt = setInterval(hello, 5000);

//! interval
// const startBtn = document.querySelector("#start");
// const stoptBtn = document.querySelector("#stop");

// let time = null;

// startBtn.addEventListener("click", () => {
//   time = setInterval(() => {
//     console.log("123");
//   }, 1000);
// });

// stoptBtn.addEventListener("click", () => {
//   clearInterval(time);
//   console.log("stop");
// });

//! this в функції Timeout
// const a = {
//   classic() {
//     setTimeout(function () {
//       console.log(`${this}, classic in obj`);
//     });
//   },
//   arr() {
//     setTimeout(() => {
//       console.log(`${this}, arr in obj`);
//     });
//   },
// };
// a.classic();
// a.arr();

// const data = new Date('May, 14, 2024');
// console.log(data);

// const unixData = new Date(1703603003729);
// console.log(unixData);

// const newUnixData = Date.now();
// console.log(newUnixData);

//!Методи Date
// const date = new Date();
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());

//!переклад дати на українську
// const date = new Date();
// const options = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric',
//     hour: '2-digit',
//     minute:'2-digit'
// }

// const ukr = date.toLocaleString("Uk-uk", options)
// console.log(ukr);

//!promise
// let prom = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("resolve"), 1000);
//   setTimeout(() => reject("reject"), 1000);
// });

// prom.then(
//   (resolve) => console.log(resolve),
//   (reject) => console.log(reject)
// );

// prom.catch(alert);
// prom.finally();

// function load(src) {
//   return new Promise(function (resolve, reject) {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Error ${script}`));

//     document.head.append(script);
//   });
// }
// let prom = load("https://www.pinterest.com/pin/16065191169176869/");

// prom.then(
//   (script) => console.log(`Download ${script}`),
//   (error) => console.log(`Error ${error.message}`)
// );

// prom.catch((error) => console.log(`Error ${error.message}`));

// prom.finally(console.log("finally"));

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(2), 1000);
}).then(function (result) {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result + 10), 1000);
    console.log(result);
  });
}).then(function (result) {
    console.log(result);
})
