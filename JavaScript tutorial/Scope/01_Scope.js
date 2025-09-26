var c = 300                            // global scope
let a = 300


if (true) {
    let a = 10
    const b = 20                          // block scope
    c = 30
    // console.log("Inner :", a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Anshika"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "Anshika"
    if (username === "Anshika") {
        const website = " youtube"
        // console.log(username + website);

    }
    // console.log(website)
}
// console.log(username);


// ++++++++++++++++++++++++++++++++++ intresting ++++++++++++++++++++++++++++++++++++

console.log(addOne(5))
function addOne(num){
    return num+1
}



AddTwo(5)
const AddTwo=function(num){
    return num+2
}
