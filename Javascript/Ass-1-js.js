// First Assignment of Javascript 

// Ques 1:Create a javascript file, using javascript comments, List all the datatypes of Javascript, and specify an example for each of them.

// Ans 1:
/*  1 String : "I am Mohnish Gorana"
    2 Number: integer:9
            float : 10.2
            infinity    Number.POSITIVE_INFINITY
            Not a Number : NaN
    3 BigInt: 1024n
    4 Boolean: true or false 
    5 Undefined: undefined
    6 Null : null
    7 Symbol: Symbol('Mohnish')
    8 Objects: i) Array : [1,2,"PW"]
              ii) Object: {name: "Mohnish" , course:"FSWD HINDI"}
*/

// Ques 2. Create an array of 10 products that you have recently purchased or viewed on an e-commerce site.
var arr = ["iphone" ,"Macbook" , "POT" ,"shirts" , "Ball" , "BAT" ];

// Ques 3. Create an object of a student registry of 5 students whose key is the registration number and the value is
//         the student name. Registration number starts from 1 and continues.

var Obj = {
    1: "Mohnish", 2: "Mohnish", 3: "Mohnish", 4: "Mohnish", 5: "Mohnish",
};
console.log(Obj);

// Ques 4. Specify an example for all the datatypes in Javascript, store the values in a variable, and verify the type of
//          value stored.
//String
let var1="Mohnish Gorana"
console.log(var1 , typeof(var1));

//Integer Number
let var2= 5;
console.log(var2 , typeof(var2));
//Float Number
let var3=5.5;
console.log(var3,typeof var3);
//Infinity number
let var4 = Number.POSITIVE_INFINITY;
console.log(var4,typeof var4);
//boolean
let var5 = true;
console.log(var5);


// Ques: Write a program that prints the multiplication table in the textbook format of any number specified. 6*1 = 6
let n = 6;
for( i = 1 ; i<=10 ; i++ )
{
    console.log( n + "*" + i + "=" + n*i   );
}

//Ques :Write a program to perform all the arithmetic operations[except increment and decrement operators] of
//      javascript of any two numbers stored in the variables num1 and num2. Also, print the results to the console.

let num1=2;
let num2=5;
//multiply
console.log("The Multiplication of num1(2) and num2(5) is " + num1*num2 )
//exponential (num1^num2)
console.log("The Exponent of num1 to num2 is " + num1**num2);