function calCartPrice(...num1){//it will make it like array
    return num1
}
console.log(calCartPrice(200,20,20,))

//object

const user={
    name:"king",
    price:199,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    name:"sam",
    price:111
})

//arrays

const arr=[1,2,3,4,5,6,7,8]

function returnSecValue(getarr){
    return getarr[1]
}
console.log(returnSecValue(arr));