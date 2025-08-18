//premitive 

// 7 types : string number boolean null undefined symbol bigint

// const score = 100;
// const isloggedIn = true;    
// const outsideTemp = null;
// let useremail;

const id = Symbol('1233')
const anotherId = Symbol('1233')

console.log(id === anotherId);

constbigNumber = 1234567890123456789012345678901234567890n;






//non premitive 

// array , objects , functions 



const heros=["Shaktiman","Bheem","Krish"];
let myObj={
    name:"Shrenik",
    age:22,
}


const Myfunction= function(){
    console.log("Hello from my function");
}

console.log(typeof heros); //object
console.log(typeof anotherId); //symbol

