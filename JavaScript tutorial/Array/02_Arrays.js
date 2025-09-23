const heros=['spiderman', 'superman', 'batman',]
const dcHeros=["flash", "arrow", "supergirl"]
// heros.push(dcHeros)

// console.log(heros);
// console.log(heros[3][1]);

// newArr=heros.concat(dcHeros)
//  console.log(newArr);

const allHeros=[...heros, ...dcHeros]
console.log(allHeros);

const AnotherArr=[1,2,3,[4,5,6],7,[8,9,[10,11]]]
const real_AnotherArr=AnotherArr.flat(Infinity)
console.log(real_AnotherArr);

console.log(Array.isArray(heros));
console.log(Array.from("Anshika"));
console.log(Array.from({name:"Anshika",})); //   intersesting


let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1, score2, score3));
