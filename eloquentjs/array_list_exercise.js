/*
------------------------------------

A list is a nested set of objects, with the first object holding a reference to the
second, the second to the third, and so on.

Write a function arrayToList that builds up a list structure like the one
shown when given [1, 2, 3] as argument. Also write a listToArray function
that produces an array from a list. 

Then add a helper function prepend , which takes an element and a list and 
creates a new list that adds the element to the front of the input list, and nth , 
which takes a list and a number and returns the element at the given position in 
the list (with zero referring to the first element) or undefined when there is no 
such element.

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

------------------------------------
*/
function createList(val, res = undefined) {
  return {
    value: val,
    rest: res,
  };
}

function insertList(fromList, toList) {
  while (toList.rest != undefined) toList = toList.rest;
  toList.rest = fromList;
}

function arrayToList(arr) {
  let firstNode;
  for (let n of arr) {
    if (firstNode == undefined) firstNode = createList(n);
    else insertList(createList(n), firstNode);
  }
  return firstNode;
}

function listToArray(list) {
  let arr = [];
  while (list != undefined) {
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
}

function printList(list) {
  if (list != undefined) {
    console.log(printEachList(list, 1));
  }
}

function printEachList(list, indent) {
  if (list != undefined) {
    let inde = "";
    let str = "";

    // calculate indentation
    for (let i = 0; i < indent; i++) inde += " ";

    str += " {\n";
    str += inde + "  " + "value:" + list.value + "\n";
    str += inde + "  " + "rest:" + printEachList(list.rest, indent + 4) + "\n";
    str += inde + "}\n";
    return str;
  } else {
    return "undefined";
  }
}

function prepend(val, list) {
  let l = createList(val);
  l.rest = list;
  return l;
}

console.log(printList(createList(2)));

let arr = [1, 2, 3, 4, 5];
console.log(arr);
printList(arrayToList(arr));

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};
printList(list);
printList(prepend(4, list));

arr = listToArray(list);
console.log(arr);
