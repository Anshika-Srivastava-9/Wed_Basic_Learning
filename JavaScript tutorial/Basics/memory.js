//  Stack Memory (Primitive) ,   Heap Memory(Non-Primitive) 

let myName="Anshika"
let Another_Name=myName
Another_Name="ChaiAurCode"
console.log(Another_Name)
console.log(myName)


let user1={
    email:"user.com",
    id:234
}
let user2=user1;
user2.email="myname.com"

console.log(user1)
console.log(user2)