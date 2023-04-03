// Functions 

function greet()
{
    console.log("Hi there ");
    console.log("how are you ");
}
greet();
greet();


function sqrt(x)
{

    console.log("square is " + x*x);

    return x*x;
}

sqrt(5);
console.log(sqrt(10));

// Function without a parameter and return stmt
console.log("Function without a parameter and return stmt");
function say()
{
    return "Hy how r u ?"
}
let msg = say();
console.log(msg);

// Function with a parameter 

function sum(a,b)
{
    return a+b;
}
console.log("summation is " + sum(5,4));

// default arg

function add(x=10,y=9){
    console.log("x in passed as an arg defalt but y is initialy declared hensce sum = " ,x+y);
    // here x  is overrideas as 1 and y is 9
    // its always left to right
}
add(1);

//array as an parameter

function sumtwo( [num1 , num2] )
{
    return num1 + num2;
}

let numbers = [ 10 , 40 ];
let result = sumtwo(numbers);
console.log(result);

// function with unlimited no of parameters 

function SumAllParameter(){
    let sum = 0;
    for(var i = 0; i < arguments.length; i++ )
        sum+=arguments[i];
        return sum;
}

let ans = SumAllParameter(1,2,3,4,5);
console.log(ans);

//                          Arrow Function
console.log("Arrow Function");
// 1. One parameter and single argument return stmt 
const square = (x) => x*x;
console.log(square(6));

// 2. Multiple parameter single return stmt 
const sumOfTwoNumbers = (x,y) => x+y;        //functionname = (parameters) => return stmt
console.log(sumOfTwoNumbers(5,5));

//3. Multiple stmt in fn expression 
const summmation = (x,y) =>{
        console.log( `Adding ${x} and ${y}` );
        return x+y;
}
console.log(summmation(10,10));
//4 Returning object
const SumAndDiff = (x,y) => ( { sum: x+y , Difference: x-y } );
console.log(SumAndDiff(20,10)) ;


//                                  Anonymous Functions

// no name of anonymous functions , arrow fn ar anonymous fn
// anonymous fn are assigned to any variable 
//debugging is difficult in anonymous fn
let x = function ()
{
    console.log("hi");
}
x();


//immediation calling of anonymous fn
(       // functions reside in paraenthesis for immediate invoke 
    function exec()
    {
        console.log("Hello immediate invoke ");
    }
) (); // called by () and 
//      (); now  we can do this now 


//              Expression function i)named expression function  ii) anonymous expression function
// named expression function 
    (
        function test(){
            console.log("named");
        }
    )();
//anonymous expression function
    (
        function (x){
            console.log("Anonymous expression fn" , x*x);
        }
    )(5);

//                          self invoking function ---> immediately invoke function


