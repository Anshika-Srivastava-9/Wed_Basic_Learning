const myNums=[1,2,3,4]

// const Total_num=myNums.reduce( function(accumulator ,current_Value) {
//     console.log(`accumulator :${accumulator} and current_Value : ${current_Value}`);
//     return accumulator+current_Value}, 0)
// console.log(Total_num);


// const Total_num=myNums.reduce( (accumulator ,current_Value)=>accumulator+current_Value,0)
// console.log(Total_num);


const ShoppingCard=[
    {
        itemName:"js course",
        price:2999
        },
    {
        itemName:"DSA",
        price:999
        },
    {
        itemName:"PY course",
        price:3999
        },
    {
        itemName:"js course",
        price:2900
        }
]
const PriceToPay=ShoppingCard.reduce( (acc,item)=>acc+item.price, 0)
console.log(PriceToPay);
