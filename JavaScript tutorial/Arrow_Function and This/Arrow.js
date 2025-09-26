const user ={
    name:"Hitesh",
    price :9999,
    
    welcomeMessage:function(){
        console.log(`${this.name} ,Welcome to website `);
        console.log(this);
        
    }
    
}

user.welcomeMessage()
user.name="San"
user.welcomeMessage()

console.log(this);

function chai(){
    let username="Anshika"
    console.log(this.username);
    
}
chai()

const chai=function(){
    let username="Anshika"
    console.log(this.username);
    
}

const chai = () => {
    let username="Anshika"
    console.log(this);
    
}
chai()



const AddTwo=(num1,num2)=>{
    return num1+num2                                  //explicit return
}
console.log(AddTwo(3,4));


// const AddTwoNum=(num1,num2)=>(num1+num2)               //implicit return
const AddTwoNum=(num1,num2)=> ( {username:"Hitesh"} )            //Object chaiye to 

console.log(AddTwoNum(3,4));
