// This is how callback function works (basically)
callFunc(toBeCalled);

function toBeCalled(name) {
  console.log(`${name} is called`);
}

function callFunc(func) {
  func("curtis");
}
