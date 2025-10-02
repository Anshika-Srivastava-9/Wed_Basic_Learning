const object ={
js:'javascript',
cpp:'c++',
rb:'ruby',
swift:'swift by apple'
}

// for (const key in object) {
// //    console.log(object [key]);
// console.log(`${key} shortcut is for ${object[key]}`);
// }


// const programming=["js","rb","py","java","cpp"]
// for (const key in programming) {
//    console.log(programming[key]);
   
// }


const map=new Map()                    // map is not iterable 
map.set('IN' , "India")
map.set('USA' , "United State of America")                    //  for in loop
map.set('Fr' , "France")

for (const key in map) {
    console.log(key);
    
}
