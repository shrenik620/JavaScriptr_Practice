// // //44

// // function SetUsername(username){
// //     //complex db call
// //     this.username = username
// // }
// // function createUser(username,email,password){
// //     SetUsername.call(this,username)

// //     this.email=email
// //     this.password= password
// // }

// // const chai = new createUser("Shrenik","shrenik.com",143) 
// // console.log(chai);


// //45

// // class user{
// //     constructor(username,mail , pass){
// //         this.username=username;
// //         this.mail=mail;
// //         this.pass=pass
// //     }
// // encryptPass(){
// //     return `${this.pass}abc`
// // }
// // chamgeUserName(){
// //     return `${this.username.toUpperCase()}`
// // }
// // }
// // const chai=new user("Chai","shrenikmail",123)
// // console.log(chai.encryptPass());
// // console.log(chai.chamgeUserName());

// //behind the scene

// // function user(username,email,password){
// //     this.username=username;
// //     this. email=email;
// //     this.password=password
// // }
// // user.prototype.encryptPassword=function(){
// //     return `${this.password}abc`
// // }
// // user.prototype.change



// class user{
//     constructor(username){
//         this.username=username
//     }

//     logme(){
//         console.log(`username ${this.username}`);  
//     }
// }

// class owner extends user{
//     constructor(username,mail,password){
//         super(username)
//         this.mail
//         this.password
//     }
//     addCourse(){
//         console.log(`${this.username}`);
        
//     }
// }

// const chai = new owner("sinuu","123",234)
// console.log(chai);


// let name ={
//     Fname:"Shrenikkk",
//     Lname:"Nawale",

//     printfullName : function(){
//         console.log(this.Fname+" "+this.Lname);
        
//     }
// }
// name.printfullName();

// let name2={
//     Fname:"Pranali",
//     Lname:"bdibbnnjd"
// }

// // function borrowing
// name.printfullName.call(name2)