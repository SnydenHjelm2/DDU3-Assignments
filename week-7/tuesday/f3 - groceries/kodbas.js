class Item {
  static all = []
  static moreExpensiveThan(pricePerKg) {
    let result = Item.all.filter((x) => {
      let ppKg = x.price * 1000 / x.weight;
      if (ppKg > pricePerKg) {
        return true;
      } else {return false;}
    });
    return result;
  }
  static get allBeans() {
    return Item.all.filter((x) => x.isBean);
  }
  constructor(name, price, weight, quantity) {
    Item.all.push(this);
    this.name = name;
    this.price = price;
    this.weight = weight;     // in grams
    this.quantity = quantity; // Hur många finns det i affären
  }
  get isBean() {
    if (this.type) {
      return true
    } else {
      return false
    }
  }
}

class VegetarianItem extends Item {
  constructor(name, price, weight, quantity, isEco) {
    super(name, price, weight, quantity);
    this.isEco = isEco;
  }
}

class Fruit extends VegetarianItem {  
  constructor(name, price, weight, quantity, isEco, color) {
    super(name, price, weight, quantity, isEco);
    this.color = color;
  }
}

class Beans extends VegetarianItem {
  constructor(name, price, weight, quantity, isEco, type) {
    super(name, price, weight, quantity, isEco);
    this.type = type; // vilken typ av bönor det handlar om
  }
}

b1 = new Beans("Kidney Beans", 15, 450, 70, false, "kidney");