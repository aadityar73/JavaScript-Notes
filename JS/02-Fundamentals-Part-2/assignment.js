"use strict";

// Functions Assignment

function describeCountry(country, population, capitalCity) {
  const countryInfo = `${country} has ${population} million people and its 
capital city is ${capitalCity}`;
  return countryInfo;
}

const IND = describeCountry("India", 1407.6, "Delhi");
console.log(IND);

const USA = describeCountry(
  "United States of America",
  331.9,
  "Washington, D.C."
);
console.log(USA);

const AUS = describeCountry("Australia", 25.7, "Canberra");
console.log(AUS);

// Function Declarations vs. Expressions Assignment

function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}`;
}

console.log(percentageOfWorld1(1407.6));
console.log(percentageOfWorld1(331.9));
console.log(percentageOfWorld1(25.7));

const percentageOfWorld2 = function (population) {
  return `${(population / 7900) * 100}`;
};

console.log(percentageOfWorld2(1407.6));
console.log(percentageOfWorld2(331.9));
console.log(percentageOfWorld2(25.7));

// Arrow Functions Assignment

const percentageOfWorld3 = (population) => {
  return `${(population / 7900) * 100}`;
};
console.log(percentageOfWorld3(1407.6));
console.log(percentageOfWorld3(331.9));
console.log(percentageOfWorld3(25.7));

// Functions Calling Other Functions Assignment

const describePopulation = function (country, population) {
  const percentageOfPopulation = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentageOfPopulation}% of the world `;
};

console.log(describePopulation("India", "1407.6"));
console.log(describePopulation("USA", "331.9"));
console.log(describePopulation("Australia", "25.7"));

// Introduction to Arrays Assignment

const populations = [1407.6, 331.9, 25.7, 67.3];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

// Basic Array Operations (Methods) Assignment

const neighbours = [
  "Afghanistan",
  "Pakistan",
  "China",
  "Nepal",
  "Bhutan",
  "Bangladesh",
  "Sri Lanka",
  "Maldives",
  "Myanmar",
];

neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany"))
  console.log("Probably not a central European country :D");

neighbours[neighbours.indexOf("Pakistan")] = "PAK";

console.log(neighbours);

// Introduction to Objects Assignment

const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 1407.6,
  neighbours: [
    "Afghanistan",
    "Pakistan",
    "China",
    "Nepal",
    "Bhutan",
    "Bangladesh",
    "Sri Lanka",
    "Maldives",
    "Myanmar",
  ],
};

// Dot vs. Bracket Notation Assignment

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} countries and a capital called ${myCountry.capital}.`
);

myCountry.population = myCountry.population + 2;
myCountry["population"] = myCountry["population"] + 2;

console.log(myCountry);

// Object Methods Assignment

myCountry.describe = function () {
  return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} countries and a capital called ${this.capital}`;
};

console.log(myCountry.describe());
console.log(myCountry);

myCountry.checkIsland = function () {
  this.isIsland = this.neighbours.length === 0 ? true : false;
  return this.isIsland;
};

console.log(myCountry.checkIsland());
console.log(myCountry);

// Iteration: The for Loop Assignment

for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

// Looping Arrays, Breaking and Continuing Assignment

// const populations = [1407.6, 331.9, 25.7, 67.3];

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

// Looping Backwards and Loops in Loops Assignment

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  }
}

// The while Loop Assignment

const percentages3 = [];

let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentages3);
