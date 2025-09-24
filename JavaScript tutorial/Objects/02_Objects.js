// const TinderUser=new Object()     // Singleton object
// console.log(TinderUser);

const TinderUser={}                       //Non Singleton object
TinderUser.id="123asx"
TinderUser.name="Sammy"
TinderUser.isLoggedIn=false
//  console.log(TinderUser);


// const regularUser={
//     email:"some@gmail.com",
//     fullname:{
//         username:{
//             firstname:"Anshika",
//         lastname:"Srivastava"
//     }
// }
// }
// console.log(regularUser.fullname.username.firstname);


const Obj1={1:"a",2:"b"}
const Obj2={3:"c",4:"d"}
const Obj3={5:"e",6:"f"}
// const Obj={Obj1,Obj2}                              // don't combine like this oject ke andar ojects aa jayega 
// console.log(Obj);

const obj=Object.assign({}, Obj1,Obj2,Obj3)
// console.log(obj);

const Obj4={...Obj1,...Obj2,...Obj3}                   // Using Spread Method
// console.log(Obj4);


const user=[
    {
        id:1,
        email:"h@WebGLUniformLocation.com",
    },
    {
        id:2,
        email:"i@WebGLUniformLocation.com",
    },
    {
        id:3,
        email:"k@WebGLUniformLocation.com",
    }
]

user[1].email
console.log(TinderUser);

console.log(Object.keys(TinderUser))
console.log(Object.values(TinderUser))
console.log(Object.entries(TinderUser))
console.log(TinderUser.hasOwnProperty(`isLoggedIn`))





