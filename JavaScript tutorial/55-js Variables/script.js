console.log("Hey this is video 55")
let a=5;                   // let has block scope 
var b=6;                   // var has global scope 
let c="Anshika";
let _q="Anu";
// var 5a="puja";      // Not allowed 

console.log(a+b+4)
console.log(typeof a,typeof b,typeof c)

// const a1=5;
// a1=a1+4;              // Not allowed because a1 is constant

{   let a=6;
    console.log(a)
}
{
    var b=66;
}
console.log(a)
console.log(b)



let x="Anshika";
let y=22;
let z=3.5;
const p=true;
let q=undefined;
let r=null;

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

let objects={
    name:"Harry",
    "job code": 5600,
    "is_handsome" : true
}
console.log(o)
o.salary ="500 crore"