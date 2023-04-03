
//          objects

let obj  ={
    id:101,
    name:"Mohnish",
    Rollno:"15"
}
console.log(obj);

let emp = new Object();  // for initi. new empty objects
console.log(emp);

emp.id=101;
emp.name="Mohnish";
emp.roll=1;
console.log(emp);

//creating object using function constructors 
function EMP(i,n,s)
{
    this.id = i;
    this.name = n;
    this.salary = s;
}
const e = new EMP(103,"Mohnish" , 10000);     // ek new obj banega EMP function constructor ke through or jo bhi values hogi vo 'e' objects ke liye map ho jaegi
console.log(e);

// acessing key value -->   objects.key
console.log(e.name); 
console.log( emp['name']);//for string only 

//assigning for updating
emp.salary = 13000;  // emp['salary']  will work too
console.log(emp.salary);

//              Objects Methods

console.log("Objects Methods");
let car = {
    id: 101,
    name:"Honda City",
    price: "12 lakh"
}
// extracting all keys of an objects in form of an  array
let car_keys = Object.keys(car);
console.log(car_keys);

let car_values = Object.values(car);
console.log(car_values);

const car_entries = Object.entries(car);
console.log("Entris consists of id and key seperated in an array ENTRIES__>>> ",car_entries);


// no deletion no new entries but allowing updates
Object.seal(car);
car.id = 105;
console.log("SEAL allow updation but not deletion -->> " , car.id);


// udation ko rokene ke liye freexze fn , np upadate no deletion no  entries
Object.freeze(car);
car.id = 100;  // ye value 105 se 100 update nhi hogi ab
console.log("NO updation in obj after frreze ' ye value 105 se 100 update nhi hogi ab '",car.id);

