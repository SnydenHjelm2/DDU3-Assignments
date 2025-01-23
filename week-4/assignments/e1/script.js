const db = [
    {
      name: {first: "Janis", last: "Joplin"},
      address: { postcode: 21655, street: "Bersgatan", number: 42, city: "Malmö"}
    },
    {
      name: {first: "Jimi", last: "Hendrix"},
      address: { postcode: 21742, street: "Västerlånggatan", number: 7, city: "Malmö"}
    },
    {
      name: {first: "Bo-Inge", last: "Nejlikeblad"},
      address: {postcode: 21743, street: "Pilåkersvägen", number: 3, city: "Malmö"}
    },
    {
      name: {first: "Lars-Åke", last: "Jansson"},
      address: {postcode: 21611, street: "Gustavsgatan", number: 32, city: "Malmö"}
    },
  ];

  class Person {
    static persons = [];
    static writePersonsToConsole(person) {
      console.log(`${person.writeName()} (${person.writeAdress()})`);
    }

    constructor(data) {
        this.name = data.name
        this.adress = data.address

        Person.persons.push(this);
    }

    writeName() {
        return `${this.name.first} ${this.name.last}`;
    }

    writeAdress() {
        return `${this.adress.street} ${this.adress.number}; ${this.adress.city} ${this.adress.postcode}`;
    }
  }

  // let person1 = new Person(db[0]);
  // let person2 = new Person(db[1]);
  // let person3 = new Person(db[2]);

  // console.log(`${person1.writeName()} (${person1.writeAdress()})`);
  // console.log(`${person2.writeName()} (${person2.writeAdress()})`);
  // console.log(`${person3.writeName()} (${person3.writeAdress()})`);

  for (let person of db) {
    let newPerson = new Person(person);
    Person.writePersonsToConsole(newPerson);
  }
  
  