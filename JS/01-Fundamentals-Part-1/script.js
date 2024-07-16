/*
let js = "amazing";
console.log(40 + 8 - 287);

console.log("Aaditya");
console.log(8);

let firstName = "Aaditya";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof 08);
console.log(typeof "Aaditya");

let java;
console.log(java);
console.log(typeof java);
console.log(null);
console.log(typeof null);
*/

// 1 Variable name conventions

/*
variable names can be only letters, numbers, underscore and dollar sign

variable names cannot be started with number

always use camelCase to name variables

only use all letters uppercase for variables which we know we would never use
let PI = 3.1415;

don't use keywords for naming a variable

never use first letter as uppercase

variable names should be descriptive
*/

// 2 Datatype

/*
value & type both are undefined and null respectively
*/

// 3 Variables

/*
We use let to mutate the variale also for declaring empty variables

We use const to declare variables that are not supposed to change at any point in future (Variable that cannot be mutated)

ALWAYS use const by default and let only when you are really sure that the variable needs to change at some point in the future

Never use var

Always properly declare variables, Never write a variable without declaring it
*/

// 4 Basic Operators

/*
// Math operators
const now = 2023;
const ageAaditya = now - 2004;
const ageRahul = now - 2006;
console.log(ageAaditya, ageRahul);

console.log(ageAaditya * 2, ageAaditya / 10, 2 ** 3);
// 2 ** 3 means 2 to the power 3 = 2 * 2 * 2

const firstName = "Aaditya";
const lastName = "Raikar";
// concatenation
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageAaditya > ageRahul); // >, <, >=, <=
console.log(ageRahul >= 18);

const isFullAge = ageRahul >= 18;
console.log(now - 2004 > now - 2006);
*/

// 5 Operator Precedence

/*
const now = 2023;
const ageAaditya = now - 2004;
const ageRahul = now - 2006;

console.log(now - 2004 > now - 2006);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageAaditya + ageRahul) / 2;
console.log(ageAaditya, ageRahul, averageAge);
*/

// 6 Strings and Template Literals

/*
const firstName = "Aaditya";
const job = "Student";
const birthYear = 2004;
const lastName = "Raikar";
const year = 2023;

const aaditya =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(aaditya);

const aadityaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(aadityaNew);

console.log(`Just a regular string...`);

console.log(
  "Multiline \n\
strings \n\
..."
);

console.log(`Multiline
strings
...`);
*/

// 7 if / else Statements

// this is called a if,else control structure

// condition is essentially any code that returns true or a false value

/*
const age = 17;

if (age >= 18) {
  console.log("Aaditya can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Aaditya is too young. Wait another ${yearsLeft} year`);
}

const birthyear = 2004;
let century;

if (birthyear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

// 8 type conversion / type coercion

// type conversion: we manually convert one type to another

// type coercion: when type of value changes implicitly
// it happens whenever an operator is dealing with two values that have different types, JS will convert one of the values to match the other value

// use Number(variable_name) to change the type of value from string to number

// if we use Number() and write a string in it like Number('Aaditya'), the output would be NaN which stands for NOT A NUMBER but the type of NaN is number it just tells that this is a invalid number

// we can do vice-versa for converting number to string with String()

// *** S and N of string and number should be capital ***

// type coercion

// console.log("I am " + 19 + " years old");

// plus(+) operator converts number to string
// minus(-), multiplication(*), division(/) operators converts string to number

/*
let n = "1" + 1; // 11
n = n - 1;
console.log(n);
*/

// 9 truthy / falsy values

// 5 falsy values: 0, '', undefined, null, NaN
// all others are truthy values
// dont' use this
// in practice conversion to boolean is always implicit, not explicit

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Aaditya"));
console.log(Boolean({}));
*/

// type coercion to Boolean
// 1. when using logical operators
// 2. in a logical context (for eg. in condition of an if-else statement)

// No matter what we put in condtion of if-else statement, if it's not boolean, JS will try to convert it to a boolean

/*
const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

// 10 equality operators

// 3 equals(===) is called the strict equality operator. It's strict because it doesn't perform type coercion.

// 2 equals(==) is called loose equality operator,it does type coercion. It can convert string to number.

// AVOID the loose equality operator (==) as much as you can. Assume like it doesn't even exist.
// When comparing values always use strict equality operator (===)

// always use !== for different operator

/*
const age = 18;
if (age === 18) console.log("You just became an Adult :D");

// Difference
console.log("18" == 18);
console.log("18" === 18);

const favoriteNum = Number(prompt("What's your favorite number?"));
console.log(favoriteNum);

if (favoriteNum === 10) {
  console.log(`Cool! ${favoriteNum} is an amazing number`);
} else if (favoriteNum === 25) {
  console.log(`Cool! ${favoriteNum} is an amazing number`);
} else if (favoriteNum === 8) {
  console.log(`Cool! ${favoriteNum} is an amazing number`);
} else if (favoriteNum === 26) {
  console.log(`Cool! ${favoriteNum} is an amazing number`);
} else {
  console.log(`Kay!`);
}

if (favoriteNum !== 8) console.log("Why not 8?");
*/

// 11 BOOLEAN logic --- LOGICAL OPERATORS

// AND, OR & NOT Operators

// AND --- &&
// TRUE when ALL true otherwise FALSE (NO matter how many variables)

// OR --- ||
// TRUE when ONE is true only FALSE when all are false (NO matter how many variables)

// NOT --- ! (eg. !variableName)
// Inverts true/false value

/*

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("Aaditya is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Aaditya is able to drive!");
} else {
  console.log("Someone else should drive...");
}

*/

// 12 Switch statement

// always write break after each block
// switch is more clean than if/else in this case so sometimes you should use switch instead of if/else

/*

const day = "monday";
switch (day) {
  case "monday": // day === monday
    console.log("Pushups");
    console.log("Watch the course");
    break;
  case "tuesday": // day === tuesday
    console.log("Course");
    break;
  case "wednesday":
  case "thursday":
    console.log("once again course");
    break;
  case "friday":
    console.log("again course!😶‍🌫️");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend!😀");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Pushups");
  console.log("Watch the course");
} else if (day === "tuesday") {
  console.log("Course");
} else if (day === "wednesday" || day === "thursday") {
  console.log("once again course");
} else if (day === "friday") {
  console.log("again course!😶‍🌫️");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend!😀");
} else {
  console.log("Not a valid day!");
}

*/

// Expression - produce values  eg. 3+4
// Statement - declaration, eg.
// if(var){
//   const s= 3-2
// }

// 13 conditional(ternary) operator

// if block (?)
// else block (:) is mandatory
// we can write only one line of code in if & else block
// this isn't a replacement for if/else as this can be used for quick decisions and we can write only one line of code and if/else is super important as we need it to write bigger blocks

/*

const age = 19;

// age >= 19
//   ? console.log("I like to drink wine!")
//   : console.log("I like to drink water!");

// operator always produces a value, so an operator is an expression (and below we made it a expression)

const drink = age >= 18 ? "wine!" : "water!";
console.log(drink);

// check the difference between the 2, here we would need to declare variable outside if / else statement unlike conditional operator

let drink2;

if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}

console.log(drink2);

// here we can write this using ternary operator because it's an expression unlike if/else which is a statement
console.log(`I like to drink ${age >= 18 ? "wine!" : "water!"}`);

*/
