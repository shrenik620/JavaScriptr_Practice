// const tinderuser=new Object();

//singleton object
const tinderuser = {} 

tinderuser.name = "shrenik";
tinderuser.age = 20;
tinderuser.isActive = true;

console.log(tinderuser); // Creates an empty object




const obj1={1:"shrenik",2:"Sammy"}
const obj2={3:"shrenik",4:"Sammy"}
const obj3={5:"shrenik",6:"Sammy"}

const obj4={...obj1,...obj2,...obj3}; // Combines obj1, obj2, and obj3 into a new object
console.log(obj4); // Logs the combined object




// arrays in objects


const arr=[
    {
        name: "shrenik",
        age: 20,
    },

    {
        name: "shrenikkk",
        age: 20,
    },
    {
        name: "shrenikkkkk",
        age: 20,
    },
]
console.log(arr); // Logs the array of objects

console.log(Object.keys(tinderuser)); 
console.log(Object.values(tinderuser)); 
console.log(Object.entries(tinderuser)); 

