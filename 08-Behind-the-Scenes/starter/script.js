'use strict';

// Functions
// console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

// function addDecl(a,b) {
//   return a + b;
// };

// const addExpr = function(a,b) {
//   return a + b;
// };

// var addArrow = (a,b) => a + b;

// Example
// if(!numProducts) deleteShoppingCart();
// console.log(numProducts);

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// };

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(x === window.y);
// console.log(x === window.z);

console.log(this);

const calcAge = function(birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const matilda = {
  year: 2017
}

const test = function() {
  console.log('you got here!')
}

test();