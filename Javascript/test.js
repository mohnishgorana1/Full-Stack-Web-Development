// console.log("Mohnish");

let para = "kgvbctrn ntbfdn undgiwmr undir jmybyf jgj  "
        
        function getWordsLength(str){
            let len = []
            let words = str.split();

            for(let i = 0; i< words.length; i++){
                len.push(words[i])
            }
            console.log(len);
            return (len);
        }

        let arrWords  = getWordsLength(para)
        console.log(arrWords);
let myname="Mohnish"

console.log(myname.length);

let score = 300;
console.log(score);
console.log(myname);

let names= "mohnish"
console.log(names);

//condition and loops
let age = 19;

if(age <= 18){
    console.log("Hurray");
}

else if(age = 19){
    console.log("Kya baat h ");
}
else{
    console.log("No Way");
}

//switch case 
let user = "Mohnish";


switch(user){
    case 20:
        console.log("He is admin");
        break;
    case "Mentor":
        console.log("He is Mentor");
        break;
    default:
        console.log("No match");
}

//LOOPS
for(let i=0 ; i<5 ; i++)
{
    console.log(i);
}
i=0;
while( i < 5 )
{
    console.log(i)
    i++;

}
i=0;
console.log("Using Do while");
do{
    console.log("Hello WOrld");
    i++;
}
while(i<3)


//Ternary operation

let isloggedin = false;
isloggedin ? console.log("Home Page") : console.log("Login First") ;

let a = 3 ;
let b = new Number(3);
let c = 3;

console.log(a==b);
console.log( a === b );
console.log( b === c);
let x;
x = {}
console.log(x);

y = 0;
console.log(y++);
console.log(++y);
console.log(y);

const s = eval("10*10+5")
console.log(s);

console.log(typeof typeof 1);
console.log("DSVf"[0]);

const one  = false || {} || null;
const two = null || false || "";
const three = [] || 0 || true;

console.log(one,two,three);

var x1 = 2;
var y1 ="2";
console.log(x == y);

for(z = 1 ; z<5 ; z++ )
{
    if(z===3) continue;
    console.log(z);
}

let p = 1;
console.log(p/0);

const str = "str";
console.log(! typeof str == "object");
console.log(! typeof str == "string");

var ar = [1,2,3,4,5]
for(var i in a){
    if(a[i]%2 == 0);
}

// Arrays
