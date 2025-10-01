// const userEmail =""

// if (userEmail) {
//     console.log("Got user email"); 
// }
// else{
//     console.log("Don't have user email");
    
// }


// ++++++++++++++++++++++++ FALSY VALUES +++++++++++++++++++++++

// false, 0, -0, BigInt 0n, "", null , undefined, NaN

// ++++++++++++++++++++++++ TRUTHY VALUES +++++++++++++++++++++++

//  "0", `false`, " ", [], {}, function(){}

// const Arr=[]
// if (Arr.length ===0) {
//     console.log("Array is empty");
// }

// const emptyObject={}
// if (Object.keys(emptyObject).length===0) {
//     console.log("Object is empty");
// }


//                                             Nullish Coalescing  Operator (??) : null undefined

let val1;
// val1= 5??10
// val1= null ?? 10

// val1= undefined??15

val1=null?? 10 ?? 14
console.log(val1);

//                            Ternary Operator 

// condition ? true : false

const icePrice=80
icePrice<=80 ? console.log("Price is less than 80") : console.log("Price is greater than 80");





