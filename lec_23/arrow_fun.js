//this==refers to current context

const user={
    username:"shrenikk",
    price:999,

    welcomeMsg: function()
    {
        console.log(`${this.username} is the final price`);

    }
}

// user.welcomeMsg()
// user.username="Sammy"
// user.welcomeMsg()
//  console.log(this)


 //window i s the global object in browser


//  function chai(){
//     let username="Karan"
//     console.log(this.username)
//  }
//  chai()


const chaii =()=>{
    let username="Karn"
    console.log(this)
}
// chaii()



//arrow Fun.......Syn () => {}

//     const addtwo=(a,b)=>{
//          return a+b
//     }
// console.log(addtwo(1,2))



//ways to write arrow fun

// const addtwoo=(a,b)=> a+b
// const addtwoo=(a,b)=> (a+b) 
// console.log(addtwoo(3,9))


// const addtwoo=(a,b)=>({username:"Karn"})
// console.log(addtwoo())


// const arr=[2,3,4,5,6]
// arr.forEach()
