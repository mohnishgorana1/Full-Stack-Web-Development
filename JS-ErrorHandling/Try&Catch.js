// try catch finally

// syntax of try - catch - finally

// try{
//     // block of code
// } 
// catch{
//     // block of code for addressing errors
// }
// finally{
//     // block of code to run after try-catch
// }


try{
    let x = undefined;
    console.log(x[0]);

}catch (err){
    console.log("Error Handling in Catch",err);

}
finally{
    console.log("Finally always gets executed");
}
