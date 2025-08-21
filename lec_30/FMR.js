// //filter , Map , Reduce

// const myNumber=[1,2,3,4,5,6,7,8,9]

// // const newNums= myNumber.filter( (num) =>{
// //    return num<4
// // } )

// // const newNums=[]

// // myNumber.forEach((num) => {
// //     if(num>5){
// //         newNums.push(num)
// //     }
// // })

// // console.log(newNums);





// const books=[
//     {
// title:"XYZ",genre:"Fiction"
// },
//  {
// title:"ABC",genre:"Comedy"
// },
//  {
// title:"PQR",genre:"Non_Fiction"
// },

// ];

// // const userBooks= books.filter((bk) => bk.genre==="Comedy")
// // console.log(userBooks)

// const userBooks= books.filter((bk)=> bk.title==="XYZ")
// console.log(userBooks)

//map
const prices = [100, 200, 300];
const discounted = prices.map(price => price * 0.8);
console.log(discounted);


//reduce
const expenses = [1200, 800, 300];
const total = expenses.reduce((sum, value) => sum + value, 0);
console.log(total);