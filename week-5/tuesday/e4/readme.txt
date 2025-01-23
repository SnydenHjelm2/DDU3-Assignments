

Vi har följande klass:

class Product {
    static all = [];
    constructor () {
        Product.all.push(this);
    }
}

Ändra eller lägg till kod så att instanserna av Product har en getter "index" som ger instansens index i arrayen Product.all
