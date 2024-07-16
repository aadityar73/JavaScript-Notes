//////////////////////////////////////////
// Part-1

// Values and Variables Assignment

// let country = "India";
// let continent = "Asia";
let population = 1407.6;

// console.log(country);
// console.log(continent);
console.log(population);

// Data Types Assignment

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
// console.log(typeof country);
console.log(typeof language);

// let, const and var Assignment

language = "Marathi";
const country = "India";
const continent = "Asia";
// country = "USA";       {error}

// Basic Operators Assignment

console.log(population / 2);
console.log(population++);

const finlandPopulation = 6;
console.log(population > finlandPopulation);

averagePopulation = 33;
console.log(population < averagePopulation);

// const description = "India is in Asia, and its 83 million people speak Marathi";

// Strings and Template Literals Asssignment

const description = `India is in Asia, and its 83 million people speak Marathi`;
console.log(description);

// Taking Decisions: if / else Statements Assignment

if (population >= 33) {
  console.log("India's population is above average");
} else {
  console.log("India's population is 22 million below average");
}

// Equality Operators: == vs. === Assignment

/*
const numNeighbour = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbour === 1) {
  console.log("Only 1 border!");
} else if (numNeighbour > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
*/

// Logical Operators Assignment

const doesSpeakEnglish = true;

if (doesSpeakEnglish && population < 50 && !isIsland) {
  console.log("'You should live in India :)");
} else {
  console.log("India does not meet your criteria :(");
}

// The switch Statement Assignment

language = "Hindi";

switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("4th place");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

// The Conditional (Ternary) Operator Assignment

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);

//////////////////////////////////////////
// Part-2
