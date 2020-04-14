/*
------------------------------------

JSON 

------------------------------------
*/
let jsonobj = { name: "obj", type: "json" };
console.log(jsonobj, typeof jsonobj);

let jsonstr = JSON.stringify(jsonobj);
console.log(jsonstr, typeof jsonstr);

let parsed = JSON.parse(jsonstr);
console.log(parsed, typeof parsed);
