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
        return -1;
    }
}

for (i=0; i<10; i++) {
    new Product;
}

console.log(Product.all[5].indexOfInstance)
console.log(Product.all[7].indexOfInstance)
console.log(Product.all[1].indexOfInstance)