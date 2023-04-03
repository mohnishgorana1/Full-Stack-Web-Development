let pattern = "pw" 

let regExOne = new RegExp(pattern); // eg1 for declaration

let flag = 'gi' // g=> global i => case sensitive
let regExTwo = new RegExp(pattern, flag)  // eg2

let regExThree = /pw/gi             // eg3 => /pattern/flag

// now is string me vo pattern check krna h 
const stringToCheck = "PW is gretdcbcjh at rapid speed and recently they are working on Pwskills to create skill based pwcontent";


// match krna sikhte h

const result = regExThree.test(stringToCheck); // ham regex3 wala pattern stringtpcheck me check krege and the result will will be a bool type and stored in result memory
console.log(result);

//anothrer way to match pattern in this we will be able to see the result in form of arr  of how many pattern matchd 
const anotherResult = stringToCheck.match(regExThree);
console.log(anotherResult);

 // 'Replace' function for matching pattern and replace it also // IT is very imp for commom use case 
const oneMoreResult = stringToCheck.replace(regExThree, 'p-w'); 
console.log("\n",oneMoreResult);

console.log("\n");
// practical scenario for replace() 
const webUrl = "https://pwskill.com/mohnish%20gorana"
console.log(webUrl);
// now we want to remove %20 or reolace %20 with '-' 

console.log("After Replace");
const myUrl = webUrl.replace(/%20/,"-")
console.log(myUrl);

// now what if %20 in futuere reolaced with %30 or %40 or %21 and so on 
// here we use /%\d/
console.log("\n");
const webUrl2 = "https://pwskill.com/mohnish%51gorana"
console.log(webUrl2);

console.log("After Replace in character ");
const myUrl2 = webUrl2.replace(/%\d\d/,"-")
console.log(myUrl2);

