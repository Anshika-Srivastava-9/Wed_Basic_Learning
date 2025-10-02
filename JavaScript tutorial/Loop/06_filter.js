const coding=["js","py","java","ruby","c++"]


const values=coding.forEach((item)=>{
    // console.log(item);
    return item
})
console.log(values);


const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter( (num)=> num>4)    // or
const newNums=myNums.filter( (num)=>{              //if scope use krege to return keyword use krna padega 
   return num>4
})

console.log(newNums);




const book=[
    { title:'Book one' , genre:'Fiction', publish: 1950, edition: 2004 },
    { title:'Book two' , genre:'Non-Fiction', publish: 1970, edition: 2014 },
    { title:'Book three' , genre:'History', publish: 1930, edition: 2024 },
    { title:'Book four' , genre:'Non-Fiction', publish: 1999, edition: 2000 },
    { title:'Book five' , genre:'Science', publish: 1940, edition: 2012 },
    { title:'Book six' , genre:'English', publish: 1957, edition: 2016 },
    { title:'Book seven' , genre:'History', publish: 1980, edition: 2002 },
    { title:'Book eight' , genre:'Fiction', publish: 1995, edition: 2017 },
    { title:'Book nine' , genre:'Biography', publish: 1965, edition: 2014 },
    { title:'Book ten' , genre:'Geography', publish: 1987, edition: 2010 }
]

let Userbook=book.filter((book)=>book.genre==="History")

Userbook=book.filter((book)=>book.publish>=1960&& book.genre==="History")
console.log(Userbook);





