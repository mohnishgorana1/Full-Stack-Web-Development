// The problem is to create a program that uses the setTimeout() 
// function to reverse a given string after a delay of 2 seconds.
// The program should use a variable “input” storing a string as 
// input and then implement a delay of 2 seconds before reversing 
//  the string.The reversed string should then be printed as output


//  ********************

setTimeout(function Reverse(){
    const str = "Mohnish Gorana"
    var revStr = "";
    console.log("String before Reverse",str);

    for(let i = str.length-1; i >= 0; i--){
        revStr += str[i];
    }
    
    console.log(revStr);

},2000);


