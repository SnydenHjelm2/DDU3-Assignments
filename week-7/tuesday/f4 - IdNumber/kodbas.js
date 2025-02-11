class Person {
  static all = []
  constructor (bornDate, name, gender) {
    this.bornDate = bornDate; // {year: int, month: int, day: int}
    this.name = name;
    this.gender = gender;
    this.setIdNumber();
    this.constructor.all.push(this);
  }
  setIdNumber() {
    let allBornSameDay = Person.all.filter((x) => x.bornDate.year === this.bornDate.year && x.bornDate.month === this.bornDate.month && x.bornDate.day === this.bornDate.day);
    let idNumberUnique = false;
    let even = [0, 2, 4, 6, 8];
    let odd = [1, 3, 5, 7, 9];
    while (!idNumberUnique) {
      let n1 = Math.floor(Math.random() * 10);
      let n2 = Math.floor(Math.random() * 10);
      let n4 = Math.floor(Math.random() * 10);
      let idNumber;
      if (this.gender === "m") {
        let n3 = odd[Math.floor(Math.random() * odd.length)];
        idNumber = `${n1}${n2}${n3}${n4}`;
        idNumber = parseInt(idNumber);
      } else {
        let n3 = even[Math.floor(Math.random() * even.length)];
        idNumber = `${n1}${n2}${n3}${n4}`;
        idNumber = parseInt(idNumber);
      }

     if (allBornSameDay.some((x) => x.idNumber === idNumber)) {continue}
     else {this.idNumber = idNumber; idNumberUnique = true};
    }
  }
}

p1 = new Person({year: 2022, month: 4, day: 9}, "Gurkan", "m");
p2 = new Person({year: 2022, month: 4, day: 9}, "Paprikan", "f");