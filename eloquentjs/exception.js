// this is an exception
class IllegalArg extends Error {}

console.log("IllegalArg", new IllegalArg() instanceof Error);

let i = 0;
try {
  if (i == 0) {
    throw new IllegalArg();
  }
} catch (e) {
  console.log("Catch Exception ->", e);
}
