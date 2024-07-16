'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    address = [],
    time = '22:00',
  }) {
    console.log(
      `Order received! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious Pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

////////////////////////////////////////
// 7. Logical Assignments Operators

////////////////////////////////////////
// 1. DESTRUCTURING ARRAYS

/*
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
// console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// SWITCHING Variables
// const temp = main;
// main = secondary;
// secondary = main;
// console.log(main, secondary);

// Switching using DESTRUCTURING
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receiving 2 return values from a function
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse);

// NESTED destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// DEFAULT Values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
*/

////////////////////////////////////////
// 2. DESTRUCTURING OBJECTS

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Domblivli East',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Mulund East',
  starterIndex: 0,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// DEFAULT Values
const { menu = [], starterFood: starters = [] } = restaurant;
console.log(menu, starters);

// MUTATING Variables
let a = 11;
let b = 22;

const obj = { a: 15, b: 30, c: 45 };
({ a, b } = obj);
console.log(a, b);

// NESTED Objects
const {fri: { open: o = [], close: c = [] },} = openingHours;
console.log(o, c);
*/

////////////////////////////////////////
// 3. The SPREAD OPERATOR (...)

/*
const arr = [7, 8, 9];
const badArr = [1, 2, arr[0], arr[1], arr[2]];

const newArr = [1, 2, ...arr]; // Spread Operator
console.log(newArr);
console.log(...newArr); // Logs elements individually

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Aaditya';
const letters = [...str, ' ', 'R.'];
console.log(letters);
console.log(...str);

// Real-world example
// const ingredients = [
  // prompt("Let's make Pasta with ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// console.log(...ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);
*/

////////////////////////////////////////
// 4. REST Pattern and Parameters

/*
// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [...others] = [1, 2, 3, 4, 5, 6];
console.log(others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 2, 1);

const x = [23, 5, 64];
add(...x);

restaurant.orderPizza('mushroom', 'spinach', 'olives', 'onion');
restaurant.orderPizza('mushrooms');
*/

////////////////////////////////////////
// 5. Short Circuiting (&& and ||)

/*
// Use ANY data type, return ANY data type, short-circuiting

console.log('---- OR ----');

console.log(3 || 'Aaditya');
console.log('' || 'Aaditya');
console.log(true || 0);
console.log(undefined || null);
console.log(null || undefined);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// Practical example
// restaurant.numGuests = 23; // this one won't work if the value is 0
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');

console.log(0 && 'Aaditya');
console.log(8 && 'Aaditya');
console.log('Aaditya' && 8);

console.log('Hello' && 23 && null && 'Aaditya');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); // If it does not exist then nothing else will happen
*/

////////////////////////////////////////
// 6. The Nullish Coalescing Operator (??)

/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
