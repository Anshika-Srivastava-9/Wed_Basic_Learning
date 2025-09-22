const name="Ans-h-ika"
const repocount=50
// console.log(name+ repocount+"Value");            // Old Method of Concatenation
console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

const myName=new String(`Anshika-Srivastava`)

console.log(myName[0]);
console.log(myName.__proto__);

console.log(myName.length);
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName);
console.log(myName.charAt(3));
console.log(myName.indexOf("i"));

const newString=myName.substring(0,6)               //cannot give negative index
console.log(newString);

const username=new String("Shivangi")
const anotherString=username.slice(-8,6)            // can give negative index
console.log(anotherString);


const newStr="    Anshika    "
console.log(newStr);
console.log(newStr.trim());

const url="hhtps://hitesh.com/hitesh%20chaudhary"
console.log(url.replace("%20", "-"));
console.log(url.includes("Anshika"));


console.log(name.split("-"));







