const coding=["js","py","cpp","java","ruby"]

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach( (val)=>{
//     console.log(val); 
// })


// function printgreet(item){
//     console.log(item);
// }

// coding.forEach(printgreet)


// coding.forEach( (item,indexx,arr)=>{
//     console.log(item,indexx,arr);
    
// })


const mycoding=[
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
       languagename:"python ",
        languagefilename: "py"
    },
    {
       languagename:"java",
        languagefilename: "java"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languagename);
    
})