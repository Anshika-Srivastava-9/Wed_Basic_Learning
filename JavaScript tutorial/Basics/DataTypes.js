// Primitive 

// String , Number , Boolean, null, undefine, Symbol, BigInt
  
const score=100;
const scorevalue=100.3;
const isLoggedIn=true;
const outsideTemp=null;
let userEmail;
const id=Symbol('123')
const Another_id=Symbol('123')

const bigNumber =12314154781823256163n;

console.log(id===Another_id);

// Reference (Non Primitive)

//Array, Object, Function

const hero=["Shaktiman","Naagraj","Doga"]
 let object={
    name:"Anshika",
    age: 21,
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof bigNumber)
console.log(typeof myFunction)
console.log(typeof hero)