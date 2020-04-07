// objects in JS are essentially map
let obj = {
  name: "curtis",
  age: 100,
};

console.log(obj);
console.log(obj.name);
console.log(obj.age);

// properties that do not exist are undefined
if (obj.interest == undefined) {
  console.log("\nobj doesn't have property 'interest'");
}

// delete a propery in an object
delete obj.age;
if (obj.age == undefined) {
  console.log("\nobj's property 'age' is deleted");
}

// check whether an object has the property
console.log("\nobj has property name?", "name" in obj);
console.log("obj has property age?", "age" in obj);

// check keys in an object
console.log("\nkeys in obj:", Object.keys(obj));

// assign key:value pairs to an object
Object.assign(obj, { age: 100 });
console.log(
  "\nassigned 'age' key/value pair to obj, obj now has property 'age'?",
  "age" in obj
);
console.log(obj);
