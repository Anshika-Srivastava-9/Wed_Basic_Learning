//    Singleton Object
//      object.create
// ___________________________

// object literal syntax

const mySym=Symbol("Key1")

const user={
    name:"Anshika",
    "fullname":"Anshika Srivastava",
    age:21,
    [mySym]:"key1",
    location:"Lucknow",
    email:"anshika@microsoft.com",
    isloggedin:true,
    lastloginDays:["Monday","Friday"],
}

console.log(user.email)
console.log(user["email"])
console.log(user[mySym])
console.log(user.fullname)

user.email="anshika@gmail.com"
Object.freeze(user)
user.email="anshi@gmail.com"
console.log(user)

user.greeting=function(){
console.log("Hello js Users");
}
user.greeting2=function(){
console.log(`Hello js Users, ${this.name}`);
}
console.log(user.greeting())
console.log(user.greeting2())