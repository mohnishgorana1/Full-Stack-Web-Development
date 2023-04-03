// Classes And Objects

class Product {
  // Properties ->variables -> data members
  name;
  price;

  //custom constructor
  constructor(n, p, r) {
    console.log(
      "Constructor called or default constructor null and void ho jaega "
    );
    console.log("Name " + n, "\nprice " + p, "\nratings " + r);
    console.log("\n\n");

    this.name = n;
    this.price = p;
    this.rating = r;

    console.log("Using this keyword");
    console.log(
      "name : ",
      this.name,
      "price : ",
      this.price,
      "ratings : ",
      this.rating
    );

    // return 10; if you r returning primitive then it will be avoided in constructor
    // return {x : 0, y :20}  // if you return non primitive then it will be returned
    // return this; // this will be returned

    // constructor me return keyword likhne ki jarurat nhi padni chahiye
  }

  // ***
  // ek class ka ek hi constructor ho skta h lkin agr aap ek bhi constructor nhi banaoge to default constructor call ho jaega

  // behaviour -> Function -> memberfn
  display() {
    console.log("Diplay displayfn");
  }
}

const p = new Product("iphone", 10000, "very Good"); // new → creates an empty plain object
// → above piece of cpde we r calling constructor method(default)
// → jese hi object baneaga constructor call hoga hi hoga

console.log(p);
p.display();
console.log("\n", p.name);


