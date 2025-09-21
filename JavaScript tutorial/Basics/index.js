let score ="24 abc";
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


//"24abc" => NaN (Not a Number) => when we try to convert a string which is not purely a number into a number, it will return NaN
//"24"=> 24
//true => 1, false => 0

let isLoggedIn = 1;
console.log(typeof isLoggedIn);
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

//1 => true, 0 => false
//"" => false, "Anshika" => true

let someNumber = 24;
let stringSomeNumber = String(someNumber);
console.log(typeof stringSomeNumber);
console.log(stringSomeNumber);