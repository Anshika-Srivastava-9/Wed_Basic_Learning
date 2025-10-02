// for of loop

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for (const num of arr) {
   console.log(num);
    
}

const greeting="Hello world"
for (const greet of greeting) {
    console.log(`Each char ${greet}`);
    
    
}

//  Maps

const map=new Map()
map.set('IN' , "India")
map.set('USA' , "United State of America")
map.set('Fr' , "France")

console.log(map);

for (const [key , value] of map) {                          //for of loop 
    console.log(key ,':-', value);
}

