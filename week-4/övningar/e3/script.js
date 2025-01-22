const db = [
    {
      name: {first: "Janis", last: "Joplin"},
      address: { postcode: 21655, street: "Bersgatan", number: 42, city: "Malmö"},
      bioInfo: { weight: 56, height: 1.62}
    },
    {
      name: {first: "Jimi", last: "Hendrix"},
      address: { postcode: 21742, street: "Västerlånggatan", number: 7, city: "Malmö"},
      bioInfo: { weight: 68, height: 1.78}
    },
  ];

  class Person {
    constructor(data) {
        this.name = data.name;
        this.address = data.address;
        this.bioInfo = data.bioInfo;
    }

    myBMI() {
        let bmi = this.bioInfo.weight / (this.bioInfo.height * this.bioInfo.height);
        return bmi.toFixed(1);
    }
  }

  let person1 = new Person(db[0]);
  console.log(`${person1.name.first} ${person1.name.last} (BMI: ${person1.myBMI()})`);