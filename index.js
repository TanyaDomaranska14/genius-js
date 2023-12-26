// import { name } from "./module";
// import "./style.css";
// import isEmail from "validator/lib/isEmail";
// import isURL from "validator/lib/isURL";
// import toDate from "validator/lib/toDate";

// console.log("Your name: " + name);

// console.log(isEmail("foo@bar.com"));
// console.log(isURL("https://webpack.js.org/loaders/"));
// console.log(toDate("08.28.1989"));

var moment = require('moment');

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format("MMM Do YY"));