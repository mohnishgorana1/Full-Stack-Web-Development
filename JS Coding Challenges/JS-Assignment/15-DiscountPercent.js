const Price = 1500;
const DiscountPrice = 1300;

const Discount = (p,dp) =>{
    const temp = ( (p - dp) / p ) * 100;
    return temp.toFixed(2)
}
console.log(Discount(Price,DiscountPrice));