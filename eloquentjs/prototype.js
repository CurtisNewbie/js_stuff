/*
------------------------------------

A prototype is another object that is used as a fallback
source of properties. When an object gets a request for a property that it does
not have, its prototype will be searched for the property, then the prototype’s
prototype, and so on.

------------------------------------
*/

let customObj = {
  name: "name",
  city: "city",
  say() {
    console.log("Hell yea");
  },
};
console.log(customObj);
// object
console.log(
  Object.getPrototypeOf(customObj),
  Object.getPrototypeOf(customObj) == Object.prototype
);
// function
console.log(
  Object.getPrototypeOf(Math.max),
  Object.getPrototypeOf(Math.max) == Function.prototype
);
// array
console.log(
  Object.getPrototypeOf([]),
  Object.getPrototypeOf([]) == Array.prototype
);

// Rabbit is a wrapped by a prototype as an object
function Rabbit(type) {
  this.type = type;
}
// add a function to the prototype of Rabbit
Rabbit.prototype.speak = function () {
  console.log(`Hell yea, I am a ${this.type}.`);
};
let rab = new Rabbit("Red Rabbit");
rab.speak();
