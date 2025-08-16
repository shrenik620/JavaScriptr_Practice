console.log("Hello, World!");
console.log("This is the first JavaScript file in the lecture 3 directory.");
console.log("Let's learn about Variable!");



const accountId = 123456;
let accountEmail = "myemail.comm";
var accountPassword = "12345abcde";
accountCity="Sangli"

accountEmail ="YourEmail.com";
accountPassword = "newpassword123";
accountCity="Kolhapur";
let accountState;     //This will return undefined

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

//prefer not to use var, use let or const instead.
// const is used for constants, let is used for variables that can change, and var is used for variables that can be re-declared and updated, but it has function scope which can lead to unexpected behavior.
// const is block-scoped, meaning it cannot be re-declared or updated within the same block of code.
// let is also block-scoped, but it can be updated within the same block of code
