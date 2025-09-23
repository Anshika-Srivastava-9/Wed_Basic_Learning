let arr=[1,2,3,4,5,6]
// const arr2=["A","B","C"]

// const mtArray=new Array(1,2,3,4,5)
// console.log(mtArray);
// console.log(arr);
// console.log(arr2);


// Array Methods

// arr.push(7)  
// arr.push(8)
// console.log(arr);
// arr.pop()

// arr.unshift(9) // add element at start
// arr.shift() // remove element from start

// console.log(arr.includes(5))
// console.log(arr.indexOf(5));
// console.log(arr);

// const newArr=arr.join()
// console.log(arr);
// console.log(typeof newArr);
// console.log(newArr);


//Slice and Splice

console.log("a" ,arr); //Original Array


let newArr=arr.slice(1,4) // does not change the original array
console.log(newArr);
console.log("b" ,arr);

const newArr2=arr.splice(1,4) // changes the original array
console.log(newArr2);
console.log("c" ,arr);