'use strict';

const assert = require('assert');

function foo(bar) {
  return bar;
}

const bar = function aStackTraceName() {
  console.log('bar');
};

let test = 42;
switch (test) {
  case 1:
    console.log('fail');
    break;
  case 42:
    console.log('success');
    break;
  default:
    console.log('fail');
}

() => 42;

Promise.resolve().then(() => {
  console.log('1');
  console.log('2');
});

const obj1 = { one: 1, two: 2 };
const obj2 = {
  one: 1,
  two: 2,
  three: 3
};

// a really long comment jfjfjfjfjfjfjffjfjjfjfjfjfjfjfjfjfjffjfjfjfjfjfjfjfjfjfjfjfjffjfjfjfjfjfjfjfjfjfjfjfjfjffj

function longFunctionDeclaration(skldsksdlksdjflksdjflksdfjlskfjslfkjslkfjslfdsklfjlsdfjsfjlfs) {
  console.log('success');
}

function soManyParametersItsRidiculous(one, two, three, four, five, six, seven,
                                       eight, nine)
{
  console.log('success');
}

let one = 1;
function returnSomeThings() {
  if (one === 2) {
    return false;
  }
  if (one === 3) {
    return false;
  }

  return true;
}

function* generateIt() {
  yield 1;
  return;
}

// we really want `requireSpaceAfterKeywords = true`, but it doesn't
// behave well with generators -- https://github.com/jscs-dev/node-jscs/issues/2168
if(1) {
  console.log('nope');
}
