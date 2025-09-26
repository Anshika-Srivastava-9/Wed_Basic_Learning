

function sayMyname() {
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("K");
    console.log("A");
}
// sayMyname()

function addTwoNumbers(number1, number2) {
    console.log()
    let result = number1 + number2
    // console.log("Hitesh");
    // return result;
    // console.log("Hitesh");             // Print nhi hoga becoz return ke baad kuch print nhi hota

    return number1 + number2

}
// addTwoNumbers(3,"4")
// console.log(3,"a");
// console.log(3,null);

const result = addTwoNumbers(3, 4)
// console.log("Result:", result);

function loginUserMessage(username="Sam"){
    if(username=== undefined){                                      // we can use if(! username)
console.log("Please enter a user name")
return
    }
return `${username} just logged in`
}

// console.log(loginUserMessage("Anshika"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(300,200,344));

const user={
    username:"Anshi",
    price:300000000
}
function handleObject(anyObject){
console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);

}
// handleObject(user)
handleObject({
    username:"Sam",
    price:123224
})

const myNewArray=[10,20,30,300,45]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([10,20,30,300,45]));



