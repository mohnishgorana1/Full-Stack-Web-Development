// !                                               static methods 


class Product{
    name;
    price;
    #ratings; // Private

    constructor(n, p, r){
        this.name = n
        this.price = p
        this.#ratings = r
    }

    //* getter and settesr

    get ratingGetter(){
        console.log(this.#ratings)
    }
    set ratingSetter(r){
        if(r < 0) return;
        this.#ratings = r;
    }

    display(){
        console.log(this.name , this.price , this.#ratings);
    }

    // ! Static Method

    static custom(){
        console.log("Static Called");
    }

   
}

const P = new Product("Macbook", 100000, 5)
console.log("Product\n",P);
P.display();
//* P.custom()  // static methods ko aap objects ke sath call nhi kr skte , ye obj ko referred nhi krte h
// Static methods class property hoti h ↓
Product.custom()  // static method class se call hote h 

//* need of Static FN
P.name = "Samsum s23"  // anyone can change value 
console.log(P.name); 
console.log(P)

//make private
console.log(P.ratings); // undefined rating private or class ke bhar accessible nhi h 
//to overcome this we use setter and getter fn inside the class
//setter is to set values logically corrects and getter to fetch those values in private members 

P.ratingSetter = 10;
P.ratingGetter
P.display();