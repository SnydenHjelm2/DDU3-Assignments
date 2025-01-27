class Product {
    set productName (value) {
        this._name = value;
    }
    get productName () {return this._name};

    set price (value) {
        if (value < 0) {
            console.error("Price can not be below 0");
            return;
        }
        this._price = value;
    }
    get price () {return this._price};

    set discount (value) {
        if (value < 0 || value > 100) {
            console.error("Discount percentage may not be greater than 100 or less than 0");
            return;
        }
        this._discount = value;
    }
    get discount () {return this._discount};

    get finalPrice () {
        let price = this.price;
        let discount = this.discount;

        let priceWithDiscount = price - (price * (discount / 100));
        return priceWithDiscount;
    }
}

let p1 = new Product;

p1.productName = "Cucumber";
p1.price = 600;
p1.discount = 15;

console.log(p1.productName, p1.price, p1.discount);
console.log("Discounted price for " + p1.productName + ":" + p1.finalPrice);