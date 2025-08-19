const marvel=["thor","ironman","hulk","spiderman","captain america"];
const dc=["batman","superman","flash"];

// marvel.push(dc); // Adds the entire dc array as a single element
// console.log(marvel); // ["thor", "ironman", "hulk", "spiderman", "captain america", ["batman", "superman",// "flash"]]


const allheros = marvel.concat(dc); // Combines marvel and dc arrays
console.log(marvel); // ["thor", "ironman", "hulk", "spiderman", "captain america", "batman", "superman", "flash"]

console.log(allheros); // ["thor", "ironman", "hulk", "spiderman", "captain america", "batman", "superman   ", "flash"]

// Spread operator to combine arrays
const allnewheros=[...marvel,...dc]
console.log(allnewheros); // ["thor", "ironman", "hulk", "spiderman", "captain america", "batman", "superman", "flash"]


console.log(arr.isarray()); // Checks if arr is an array (returns true)
console.log(Array.isArray(arr)); 

console.log(arr.from(arr)); // Creates a new array from arr (returns a shallow copy)