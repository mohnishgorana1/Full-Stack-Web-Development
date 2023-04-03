//! REFER MDN DOC for 'Closure'
// Read JS Mechanism


// let us understand first what is function scoping
let score = 4
function one(){
    let score = 0;
    console.log(score);
}
function two(){
    let score = 3;
    console.log(score);
}
function three(){
    console.log(score);  // nnot declared in fn but takes value of global variable if declared line no 4
}

// one();
// two();
// three();
// console.log(score);

// * nesting
// Lexical Scoping
function outerFunc(){
    let outerVar = 'I am at level 1'
    function innerFunc(){
        let innerVal = 'I am scope level 2'
        console.log(outerVar);
    }
    // console.log(innerVal);
    innerFunc()
}
outerFunc()

const myGlobalVal = 0 
function func(){
    const val1 = 1;
    console.log(myGlobalVal);
    // console.log(val3)   grandpa grandson se icecream nhi le skta h

    function innerOfFunc(){
        const val2 = 2
        console.log(val2,val1,myGlobalVal)

        function innerOfInnerFunc(){
            const val3 =3;
            console.log(val3,val2,val1,myGlobalVal)
        }
        innerOfInnerFunc()
    }
    innerOfFunc()

}
func()


// ! Closure
// * here we go

function superFunc(){
    let outerValue = 'I am Outer'
    function minorFunc(){
        console.log(outerValue);
    }
    minorFunc()
}
superFunc()

// bas yhi that closure nesting bas inner function outer fn ki prop ko yaad bhi skta h ek baar execute hone ke bbad

const error = "File Not Found"

setTimeout(function callback(){
    console.log(error);
}, 1000)

let pageCount = 0;
const items = [2,4,5,7,8]
items.map(function Iterator(nums){
    pageCount++;
})
console.log("pagecount",pageCount); //=>5 not 0 bcoz of closure 