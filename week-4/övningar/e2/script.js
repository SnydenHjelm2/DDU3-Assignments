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
        this.name = data.name;
        this.address = data.address;
    }

    writeName(parent) {
        parent.innerHTML += `<p>${this.name.first} ${this.name.last}</p>`;
        parent.style.backgroundColor = "purple";
    }
  }

  let person1 = new Person(db[0]);
  let person2 = new Person(db[1]);

  person1.writeName(document.querySelector("main"));
  person2.writeName(document.querySelector("main"));