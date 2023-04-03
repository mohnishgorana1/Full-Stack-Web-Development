// ! Callback : A Callback is a function passed as an argument to another function

const calculate = (a, b, operation) => {
  return operation(a, b);
};

const addition = calculate(3, 4, function (num1, num2) {
  return num1 + num2;
});

const subtract = calculate(4, 1, function (num1, num2) {
  return num1 - num2;
});

console.log(addition);
console.log(subtract);

// Practical Callback fn
// 1) Find Method

let a = [4, 1, 6, -2, 5, 3, 5, -8, 6, 7];

const firstNeg = (Num) => {
    return Num < 0
}
const p = a.forEach( (n) => {
    console.log(n);
})
let x = a.find(firstNeg)
console.log(x);


// callback hell



// pizza -> dough -> cheese