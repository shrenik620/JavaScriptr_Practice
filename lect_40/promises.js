// //promises

// const promiseOne= new Promise(function(resolve,reject){
// //do any async task
// //DB calls , cryptography , network
// setTimeout(function(){
//     console.log('Async task is complete');
//     resolve()
// },1000)
// })

// promiseOne.then(function(){
//     console.log("PRomise consumed");
    
// })



// //creating new promise
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//     console.log("Async Task two");
//     resolve()
// },5000)
// }).then(function(){
//     console.log("two is resolved");
    
// })



//3

const promisethree = new Promise(function(resolve,reject){
setTimeout(function(){
    resolve({username:"Shrenik",email:"shreniknawale01@gmail.com"})
},2000)
})

promisethree.then(function(user){
console.log(user);
})



//4

const promiseFour=new Promise(function(resolve,reject){
setTimeout(function(){
let error = true
if(!error){
    resolve({name:"Shrenik",password:"143"})
}else{
    reject('ERROR:Something went wrong')
}
},2000)
})
const name=promiseFour.then((user)=>{
    console.log(user);
    return user.name
}).then((name)=>{
    console.log(name);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>console.log("Promise is resolvedddd"));


//promise is resolved by using async Await

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"JS",password:"123"})
        }else{
            reject('ERROR:JS Promise went wrong')
        }
    },2000)
    
});

async function consumepromiseFive(){
    try{
    const response=await promiseFive
console.log(response);
    }catch(error){
        console.log(error)
}}
consumepromiseFive()


async function getAllUsers(){
try {
       const response= await fetch('https://jsonplaceholder.typicode.com/users')
  const data= response.json()
  console.log(data);
} catch (error) {
    console.log("E",error);
    
}
}
getAllUsers()