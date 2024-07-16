'use strict';

/*
function calcAge(birthYear) {
  var age = 2024 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age} year old, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Rahul';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    console.log(millenial);
    // add(2, 3);  Proves that functions are also block-scoped in strict mode
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Aaditya';
calcAge(1991);
*/

// HOISTING

/*
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Aaditya';
let job = 'student';
const year = 1991;

// Functions
console.log(addDecl(1, 2));
// console.log(addExpr(1, 2));      // Error as we are trying to do undefined(1,2)
// console.log(addArrow(1, 2));
console.log(addArrow);

function addDecl(a, b) {
  return a + b;
}

const addExpr = function () {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

//

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/*
// THIS keyword
console.log(this);

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAge(2004);

const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAgeArrow(2004);

const aaditya = {
  year: 2004,
  calcAge: function (birthYear) {
    console.log(2024 - this.year);
    console.log(this);
  },
};
aaditya.calcAge();

const rahul = {
  year: 2006,
};
rahul.calcAge = aaditya.calcAge;
rahul.calcAge();

const f = aaditya.calcAge;

// There is no owner of this function named 'f'. So the value of THIS keyword will be undefined. It is a regular function now.
f();
*/

/*
// REGULAR functions vs ARROW functions
const aaditya = {
  firstName: 'Aaditya',
  year: 1991,
  calcAge: function (birthYear) {
    console.log(this);
    console.log(2024 - this.year);

    // SOLUTION 2
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(this);
    //   console.log(self);

    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // SOLUTION 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
aaditya.greet();
aaditya.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(1, 2);
addExpr(1, 2, 3, 4);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(1, 2); // Arrow functions do not get their arguments keyword
*/

// PRIMITIVES vs OBJECTS
/*
let age = 19;
let oldAge = age;
age = 20;
console.log(age, oldAge);

const me = {
  name: 'Aaditya',
  age: 20,
};
const friend = me;
friend.age = 19;

console.log('Me:', me.age);
console.log('Friend:', friend.age);
*/

/*
// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Mary'], // Array is also an Object
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('John', 'Steve');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
*/
