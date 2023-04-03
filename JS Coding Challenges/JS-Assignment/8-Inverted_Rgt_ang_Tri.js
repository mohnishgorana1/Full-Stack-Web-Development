// 
// *****
// ****
// ***
// **
// *

let string = "*"
for(let rows = 1; rows<=5 ; rows++){
    for(let columns = 1; columns<=6-rows; columns++){
       string += "*";
    }
    string += "\n"
} 
console.log(string);

