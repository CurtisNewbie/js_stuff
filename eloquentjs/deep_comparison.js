/*
------------------------------------

Write a function deepEqual that takes two values and returns true only if they
are the same value or are objects with the same properties, where the values
of the properties are equal when compared with a recursive call to deepEqual .

------------------------------------
*/
function deepEqual(a, b) {
  if (typeof a == "object" && typeof b == "object") {
    if (a == null && b == null) return true;
    else if (a == null || b == null) return false;
    else {
      let aprops = Object.keys(a);
      let bprops = Object.keys(b);
      if (aprops.length != bprops.length) {
        return false;
      } else {
        for (let i = 0; i < aprops.length; i++) {
          if (aprops[i] != bprops[i] || a[aprops[i]] != b[bprops[i]])
            return false;
        }
        return true;
      }
    }
  } else {
    return a === b;
  }
}

let ain = 3;
let bin = 5;
let cin = 3;
console.log(ain, bin, deepEqual(ain, bin));
console.log(ain, bin, deepEqual(ain, cin));

let aobj = { name: "Curtis", age: 12 };
let bobj = { name: "Sharon", age: 12 };
let cobj = { name: "Curtis", age: 12 };
console.log(aobj, bobj, deepEqual(aobj, bobj));
console.log(aobj, cobj, deepEqual(aobj, cobj));
