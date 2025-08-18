//string interpolation and template literals

// const name= "Shrenik";

// const score = 100;

// console.log(name+score); //Shrenik100  not to follow this type of syntax

// console.log(`name:${name} and score:${score}`); //name:Shrenik and score:100


 const gameName= new String('Shrenik');

// console.log(gameName[0]);
// console.log(gameName.__proto__);        // String { "Shrenik" }
// console.log(gameName.toUpperCase()); //SHRENIK
// console.log(gameName.charAt(4)); //n
// console.log(gameName.indexOf('k'));  





 const newstring = gameName.substring(0, 4);
console.log(newstring); //Shre

const anotherSting=gameName.slice(-1);
console.log(anotherSting); 




const url="https://www.google.com";

console.log(url.startsWith("https")); //true
console.log(url.endsWith("com"));

console.log(url.replace("google","shrenik"));

console.log(url.includes("shrenik"));

console.log(url.split(".")); // [ 'https://www', 'google', 'com' ]