class Product {
    static all = [];
    constructor () {
        Product.all.push(this);
    }

    get indexOfInstance() {
        for (let i=0; i<Product.all.length; i++) {
            if (Product.all[i] === this) {
                return i;
            }
        }
    }
}

let i1 = new Product;
let i2 = new Product;
let i3 = new Product;
let i4 = new Product;
console.log(i1.indexOfInstance);
console.log(i2.indexOfInstance);
console.log(i3.indexOfInstance);
console.log(i4.indexOfInstance);