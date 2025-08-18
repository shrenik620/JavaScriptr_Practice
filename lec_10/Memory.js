//stack (primitive).....heap (reference)
//leys see an ex


let myaccount = "Shrenik";
let anotheaccout=myaccount;
anotheraccout="Shrenik111";

console.log(myaccount); // Shrenik
//myaccount is still Shrenik, because it is a primitive type and stored in stack
console.log(anotheraccout);// Shrenik111 cause it is changed in stack means it is copied not changed in exactly original variable


let user={
    email:"shreniknawale@gmail.com",
    upi:"user@upi",
}


let userTwo= user;
userTwo.email="shreniknawale111@upi";

console.log(user.email);
console.log(userTwo.email);

//  What goes in the stack?
// - Primitive values: numbers, strings, booleans, null, undefined, symbol, bigint
// - Function calls and execution context
// What goes in the heap?
// - Objects, arrays, and functions (non-primitive types)
