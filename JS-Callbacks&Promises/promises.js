// *Promises : Callback Hell or Callback Inversion ke Cure H 
// * Promise me liikhe hue code ko padna aasan ho jata j
// Promise is a special object

function createPromise(){
    return new Promise(function exec(resolve, reject){
        // async code here
        setTimeout(function f(){
            console.log("Timer 1");
            resolve("done")
        }, 2000)
    });
}

console.log("start");

let x = createPromise();
console.log("Got new promise");
x.then(function f(){
    console.log("Promise done");
})
console.log("end");