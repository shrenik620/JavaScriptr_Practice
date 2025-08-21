// //map


// // const map = new Map()
// // map.set ('IN' , "India")
// // map.set('USA', "united states of America")
// // map.set('Fr',"France")

// // // console.log(map);

// // for(const[key,value] of map){
// //     console.log(key,":",value)
// // }



// const myObj={
// js:"javascript",
// cpp:"c++",
// rb:"ruby",
// }

// for(const key in myObj){
//     console.log(`key ${key} is for ${myObj[key]}`)
// }



// const pro=["js","js2","js3"]
// for(const key in pro){
//     console.log(pro[key])
// }

//forEach ,,, call back fun


// const coding=["Js","JS2","JS3","Js4"]

// coding.forEach(function (val){
//     console.log(val)
// }
// )


// coding.forEach( (item)=>{
//     console.log(item)
// })

// coding.forEach( (item) => {
//     console.log(item)
// })



const mycoding=[
    {
langName:"Js",
langFilename:"JSF"
    },

    {
langName:"Java",
langFilename:"JavaF"
    },
    {
langName:"CSS",
langFilename:"CSSF"
    },
]
//accessing obj in arr
mycoding.forEach( (item) => {
console.log(item.langName);
})

