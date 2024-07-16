"use strict";

// always just put strict mode (as written above) in the beginning of the scripts and like that write more secure code
// eg.

/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive :D");
*/

// strict mode reserves some words that we cannot use them for variables
// strict mode forbids us to do few certain things
// it will actually create visible errors for us in certain situations in which without strict mode JavaScript will simply fail silently without letting us know that we did a mistake

// FUNCTIONS: A piece of code that we can reuse over and over again
// Functions can also receive data and return data back
// parameter is the kind of placeholder in the function and argument is the actual value that we use to fill in placeholder (parameter)

/*

function logger() {
  console.log("My name is Aaditya");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// here 5,0 inside the parenthesis are called arguments
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

*/

// function without name is called an anonymous function
// functions are just values (so we can store it in a variable)
// function declaration can be called before we define it but in function expression we cannot do it
// use function expression (as per Jonas but it's a personal preference) so to have a nice structure where all the functions are first defined at the top of the code and then can call them

/*

// Function declaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
const age1 = calcAge1(2004);

// Function expression
// this is an expression so the whole value is assigned to variable(calcAge2) {the variable will hold the function value}

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(2004);

console.log(age1, age2);

*/

//  Arrow Funtion is a special form of function expression

/*

// Arrow Function
const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(2004);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retiremnt = 60 - age;
  return `${firstName} retires in ${retiremnt} years`;
};

console.log(yearsUntilRetirement(2004, "Aaditya"));
console.log(yearsUntilRetirement(1974, "Manish"));

*/

// Functions Calling Other Functions

/*

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

*/

// return keyword will immediately exit the function after returning the value. The code after return keyword won't be executed
// console.log() and return are both different

/*

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};
console.log(yearsUntilRetirement(2004, "Aaditya"));
console.log(yearsUntilRetirement(1961, "Mike"));

*/

// 2 most important data structure in JavaScript is Arrays & Objects

// Arrays

// Array can hold as many values as we want and of any type also can hold values of different types all at the same time
// Arrays are zero-bases i.e. first element starts with 0
// .length is not zero-based
// array is not a primitive value so we can change it even if we write const
// can name a array in plural (personal preference)

/*

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array("Hello", 1981, "etc...");

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

// we can get the last element easily with this instead of counting
// inside the square bracket we can put any expression (that produces a value) too
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// we cannot change an entire array (for example)
// friends = ["Bob", "Alice"];

const firstName = "Aaditya";
const aaditya = [firstName, "Raikar", 2023 - 2004, "student", friends];
console.log(aaditya);
console.log(aaditya.length);

// Exercise
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

*/

// Basic Array Operations (Methods)

// .push() method adds elements to the end of an array also it returns the length of new array (for that we need to store it in a variable just like return keyword in function)

// .unshift() method adds elements to the beginning of an array also it returns the length of new array (just like push method)

// .pop() method removes the last element of the array also it returns the removed element (for that we need to store it in a variable just like return keyword in function)

// .shift() method removes the first element of the array also it returns the removed element (just like pop method)

// .indexOf() method tells us in which position a certain element is in the array

// .includes() method will return true if the element is in the array and false if it's not (it tests with strict equality i.e. no type coercion)
// We can use includes method to write conditionals

/*

const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); // element not in the array

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));

if (friends.includes("Steven")) console.log("You have a friend called Steven");

*/

// Objects

// Just like arrays, we use objects to esssentially group together different variables that really belong together
// there are key-value pairs in objects
// eg. firstName: 'Aaditya' Here, key is the firstName and value is 'Aaditya'
// key is also called a property

// Big difference between objects and arrays, is that in objects, the order of these values does not matter at all when we want to retrieve them
// In arrays, the order in which we specify the elements matters a lot because that's how we access these elements

// We should use arrays for more order data, and objects for more unstructured data (and data that we actually want to name, and then retrieve from the object, based on that name)

/*

const aadityaArray = [
  "Aaditya",
  "Raikar",
  2023 - 2004,
  "student",
  ["Michael", "Peter", "Steven"],
];

const aaditya = {
  firstName: "Aaditya",
  lastName: "Raikar",
  age: 2023 - 2004,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(aaditya);

*/

// in the square brackets we can put expressions (we cannot do that in dot notation)
// In dot notation, we have to use real final property name and not a computed property name (which we can do using bracket notation)
// we get undefined if we try to access a property on an object that does not exist

// When we need to first compute the propery name, like we did below with the first and last name, then we have to use the bracket notation in any other case, just use the dot notation

/*

const aaditya = {
  firstName: "Aaditya",
  lastName: "Raikar",
  age: 2023 - 2004,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
};

// Dot notation
console.log(aaditya.lastName);
console.log(aaditya["lastName"]);

const nameKey = "Name";

console.log(aaditya["first" + nameKey]);

console.log(aaditya["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
// );

// if (aaditya[interestedIn]) {
//   console.log(aaditya[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job and friends"
//   );
// }

// Add new properties to object
aaditya.location = "India";
aaditya["twitter"] = "@aadityar73";
console.log(aaditya);

// Challenge
// "Aaditya has 3 friends, and his best friend is called Michael"

console.log(
  `${aaditya["first" + nameKey]} has ${
    aaditya.friends.length
  } friends, and his best friend is called ${aaditya.friends[0]}`
);

*/

// Object Methods

// any function that is attached to an object is called a method
// it's just a property that holds a function value

// this keyword is equal to the object calling the method

// Arrays are also actually Objects, they are just a special kind of object. They have methods that we can use to manipulate them.

/*

const aaditya = {
  firstName: "Aaditya",
  lastName: "Raikar",
  birthYear: 2004,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2023 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.age}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(aaditya.calcAge());

// after calling the function, age property gets added to object (just like done here)

console.log(aaditya);

console.log(aaditya.age);
console.log(aaditya.age);
console.log(aaditya.age);

console.log(aaditya.getSummary());

// console.log(aaditya["calcAge"](aaditya.birthYear));

// Challenge
// "Aaditya is a 19-year old student, and he has a/no driver's license"

*/

// Loops are used to automate repetitive tasks (tasks that we have to perform over and over again)

// for loop

/*

console.log("Lifting weights repetition 1 🏋🏽‍♂️");
console.log("Lifting weights repetition 2 🏋🏽‍♂️");
console.log("Lifting weights repetition 3 🏋🏽‍♂️");
console.log("Lifting weights repetition 4 🏋🏽‍♂️");
console.log("Lifting weights repetition 5 🏋🏽‍♂️");
console.log("Lifting weights repetition 6 🏋🏽‍♂️");
console.log("Lifting weights repetition 7 🏋🏽‍♂️");
console.log("Lifting weights repetition 8 🏋🏽‍♂️");
console.log("Lifting weights repetition 9 🏋🏽‍♂️");
console.log("Lifting weight repetition 10 🏋🏽‍♂️");



// for loop keeps running while condition is TRUE

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep} 🏋🏽‍♂️`);
}

*/

// Looping Arrays, Breaking and Continuing

/*

const aadityaArray = [
  "Aaditya",
  "Raikar",
  2023 - 2004,
  "student",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

// console.log(aadityaArray[0]);
// console.log(aadityaArray[1]);
// ...
// console.log(aadityaArray[4]);

// types[0] = typeof aadityaArray[0]......;

for (let i = 0; i < aadityaArray.length; i++) {
  // Reading from aaditya ARRAY
  console.log(aadityaArray[i]);

  // Filling types array
  // types[i] = typeof aadityaArray[i];
  types.push(typeof aadityaArray[i]); // this is more cleaner
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

// continue and break

// continue is to exit the current iteration of the loop and continue to the next one
// break is used to completely terminate the whole loop

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < aadityaArray.length; i++) {
  if (typeof aadityaArray[i] !== "string") continue;

  // if (typeof aadityaArray[i] !== "string") break;

  console.log(aadityaArray[i], typeof aadityaArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < aadityaArray.length; i++) {
  if (typeof aadityaArray[i] === "number") break;

  console.log(aadityaArray[i], typeof aadityaArray[i]);
}

*/

// Looping Backwards and Loops in Loops

/*

const aaditya = [
  "Aaditya",
  "Raikar",
  2023 - 2004,
  "student",
  ["Michael", "Peter", "Steven"],
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = aaditya.length - 1; i >= 0; i--) {
  console.log(i, aaditya[i], typeof aaditya[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++)   {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋🏽‍♂️`);
  }
}

*/

// The While Loop

// while loop is more versatile than for loop
// while loop does not have to depend on any counter variable
// when need a loop without a counter, you can use while loop (when we do not know beforehand how many iterations the loop will have)
// when we know how many iterations the loop will have, use for loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repetition ${rep} 🏋🏽‍♂️`);
// }

/*

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weight repetition ${rep} 🏋🏽‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log("Loop is about to end...");
}

*/
