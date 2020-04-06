/*
------------------------------------

Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.

------------------------------------
*/
const HEIGHT = 8;
const WIDTH = 8;

let line = "";
let hasSpace = false;
for (let i = 0; i < HEIGHT; i++) {
  for (let j = 0; j < WIDTH; j++) {
    // odd
    if ((i + j) % 2 != 0) {
      line += "#";
      hasSpace = false;
    } else {
      line += " ";
      hasSpace = true;
    }
  }
  line += "\n";
}
console.log(line);
