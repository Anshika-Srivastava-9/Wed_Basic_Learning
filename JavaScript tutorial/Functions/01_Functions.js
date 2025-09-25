

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

console.log(loginUserMessage("Anshika"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());





