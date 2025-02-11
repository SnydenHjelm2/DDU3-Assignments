
const MonthsDays = [31, 28, 31, 30, 31,];

const STUDENTS = [
  {
      "born": { "year": 1998, "month": 11, "day": 3  },
      "name": {
          "first": "Kerstin",
          "last": "Rivera"
      },
      "idNumber": 4707,
      "courses": [
          {
              "code": "ME101B",
              "year": 2019,
              "g": 2019
          },
          //fler kurser...
      ]
  },
  //fler studenter...
];

class Student {
  static all = []
  static get goodResults() {
    let completedSameYear = Student.all.filter((x) => x.courses.every((y) => y.year === y.g));
    return completedSameYear;
  }
  constructor (data) {
    this.constructor.all.push(this);
    this.born = data.born;
    this.name = data.name;
    this.idNumber = data.idNumber;
    this.courses = data.courses;
  }
  get born() {return this._born};
  set born(date) {
    if (date.year.toString().length != 4 || (date.month < 1 || date.month > 12) || date.day >= MonthsDays[date.month - 1]) {
      throw Error("Error");
    }

    this._born = date;
  }

  get pnr() {
    if (this.born.day < 10) {
      return `${this.born.year}${this.born.month}0${this.born.day}-${this.idNumber}`;
    } else {
      return `${this.born.year}${this.born.month}${this.born.day}-${this.idNumber}`
    }
  }
}

let s1 = new Student(STUDENTS[0]);
let s2 = new Student(STUDENTS[0]);
let s3 = new Student(STUDENTS[0]);
let s4 = new Student(STUDENTS[0]);