const db = [
    {
      name: {first: "Janis", last: "Joplin"},
      address: { postcode: 21655, street: "Bersgatan", number: 42, city: "Malmö"}
    },
    {
      name: {first: "Jimi", last: "Hendrix"},
      address: { postcode: 21742, street: "Västerlånggatan", number: 7, city: "Malmö"}
    },
  ];

  class Person {
    constructor(data) {
        this.name = data.name
        this.adress = data.address
    }

    writeName() {
        return `${this.name.first} ${this.name.last}`;
    }

    writeAdress() {
        return `${this.adress.street} ${this.adress.number}; ${this.adress.city} ${this.adress.postcode}`;
    }
  }

  let person1 = new Person(db[0]);
  let person2 = new Person(db[1]);

  console.log(`${person1.writeName()} (${person1.writeAdress()})`);
  console.log(`${person2.writeName()} (${person2.writeAdress()})`);