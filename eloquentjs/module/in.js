/*
------------------------------------

ES6 module is differently from nodejs (CommonJs module),
here, we are demonstrating the nodejs's way of doing import/export

------------------------------------
*/

// to import functions and variables
const out = require("./out.js");
console.log(out.getName());
out.say();
console.log(out.name);

let mon = out.monkey("Monmon");
console.log(mon.type());
