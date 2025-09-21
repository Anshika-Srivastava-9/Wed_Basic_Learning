function call(name) {
    console.log("Hey " +name+ " Good Morning")
console.log("Hey " +name+ " How are you?")
console.log("Hey " +name+ " you are good")
console.log("Hey " +name+ " your t shirt is nice ")
console.log("Hey " +name+ " your english is good ")
console.log(name+ " bye bye ")
}

function sum(a,b,c=4){
    // console.log(a+b)
    return a+b+c;
}
result1=sum(3,5)
result2=sum(7,5)
result3=sum(3,4,9)
console.log("The sum of these number is "+result1)
console.log("The sum of these number is "+result2)
console.log("The sum of these number is "+result3)
// call("Anshika")
// call("Priya")


const func1=(x)=>{
    console.log("Hey i am an Arrow function",x)
}
func1(34)
func1(54)
func1(35)