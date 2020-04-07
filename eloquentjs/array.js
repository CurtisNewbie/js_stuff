let arr = [1, 2, 3];
console.log("Arr:", arr);

arr.push(4);
console.log("\nArr pushed 4:", arr);

let n = arr.pop();
console.log("\nArr poped:", arr, `value poped is ${n}`);

arr.unshift(0);
console.log("\nArr unshifted 0:", arr);

n = arr.shift();
console.log("\nArr shifted:", arr, `value unshifted is ${n}`);

console.log("\nSlice arr [0 - 2]:", arr.slice(0, 2));
console.log("Arr not changed:", arr);

console.log("\nSplice arr, delete 1 item at 0:", arr.splice(0, 1));
console.log("Arr changed:", arr);

console.log("\nConcatenate [4,5,6] to arr:", arr.concat([4, 5, 6]));
console.log("Arr not changed:", arr);
