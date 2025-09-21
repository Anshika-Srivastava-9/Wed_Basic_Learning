console.log("I am tutorial on loops ")

let a = 1;
// console.log(a)
// console.log(a+2)
// console.log(a+3)

for (let i = 0; i < 100; i++) {
    console.log(a + i);

}

let oj = {
    name: "Harry",
    role: "Programmar",
    company: "CodewithHarry AI"
}

for (const key in oj) {                       //     forin loop
    console.log(key)
}

for (const c of "Harry") {                    //      forof loop      for array ,string
    console.log(c)
}

let i=0;
while (i<6) {
    console.log(i)
i++;    
}

