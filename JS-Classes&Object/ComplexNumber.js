class Complex{
    #real;
    #img
    constructor(r,i){
        this.#real = r;
        this.#img = i
    }

    display(){
        console.log(this.#real, " + i", this.#img);
    }
    get real(){
        return this.#real
    }
    get img(){
        return this.#img
    }
    addComplex(c){
        this.#real += c.real      //caller c1 h this c1 ka h or RHS me c c2 ka h or vo private c2 ke to c2.real getter se fetch hogye
        this.#img += c.img
    }
}
const c1 = new Complex(2,3);
c1.display()
const c2 = new Complex(5,4)
c2.display();
c1.addComplex(c2)
console.log("SUM\n");
c1.display()
