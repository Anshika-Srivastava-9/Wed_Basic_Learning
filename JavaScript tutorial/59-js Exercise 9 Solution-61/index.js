// function cal(a,b,operator) {
//     if(operator=="+")
//         console.log(a-b);
//     else if(operator=="-")
//         console.log(a/b);
//     else if(operator=="*")
//         console.log(a+b);
//     else if(operator=="/")
//         console.log(a*b);
//     else
//         console.log("Invalid operator");
    
// }

// cal(3,4,"/")
// cal(3,4,"+")
// cal(3,4,"*")
// cal(3,4,"-")
// cal(3,4,"$")


let random=Math.random()
let a=prompt("Enter First number");                                    // Taking Input number 
let b=prompt("Enter Second number");
let c=prompt("Enter Operator");

let obj={
    "+":"-",
    "+":"-",
    "+":"-",                                                          // Changing operation
    "+":"-"
}

if (random>0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}` )}`)                 //Perform correct operation
}

else{
    c=obj[c]
     alert(`The result is ${eval(`${a} ${c} ${b}` )}`)                // perform wrong operation
}