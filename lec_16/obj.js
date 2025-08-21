//singleton







//object literals
const user={
    name :"shrenik",
    age : 20,
    isActive : true,

    hobbies : ["reading", "gaming", "coding"],
    address : {
        city: "Mumbai",
}
}

console.log(user); // Logs the user object
console.log(user.name); // Accesses the name property
console.log(user["age"]); // Accesses the age property using bracket notation





user.greeting=function(){
    console.log("Hello, my name is shrenik");

}
user.greeting(); // Calls the greeting method of the user object


user.greeting2=function(){
    console.log(`hello there ${this.name}`);
}
user.greeting2();
