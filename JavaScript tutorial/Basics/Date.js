// let date=new Date()
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(typeof date);

// let myDate=new Date(2023,0,23)
// let myDate=new Date(2023,0,23, 5,3)
// let myDate=new Date("2023-01-14")
// let myDate=new Date("01-14-2025")
// console.log(myDate.toLocaleString());

// let mtTimeStamp= Date.now()
// console.log(mtTimeStamp);
// console.log(myDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);


newDate.toLocaleString('default',{
    weekday : 'long',
})








