// date from .....jan1 1970
let myDate=new Date();
console.log(myDate.toString()); // Current date and time

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());


let myTimeStamp=Date.now();
console.log(myTimeStamp); // Timestamp in milliseconds since Jan 1, 1970

console.log(new Date(myTimeStamp)); // Converts timestamp back to date




