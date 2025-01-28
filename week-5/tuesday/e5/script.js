const db = [
    {title: "A Book", year: 2005, author: "The Guy"},
    {title: "A Magazine", year: 1989, issueNumber: 23},
    {title: "A Second Book", year: 2007, author: "The Guy"},
    {title: "A Magazine", year: 1989, issueNumber: 24},
]

class LibraryItem {
    static all = [];
    static get totalItems() {
        let count = 0;
        for (let item of LibraryItem.all) {
            count++
        }
        return count;
    }
    constructor(data) {
        this.title = data.title;
        this.year = data.year;
        LibraryItem.all.push(this);
    }
}

class Book extends LibraryItem {
    constructor(data) {
        super(data);
    }
    set author (value) {
        this._author = value;
    }
    get author() {return this._author};
}

class Magazine extends LibraryItem {
    constructor(data) {
        super(data);
    }

    set issueNumber(value) {
        this._issueNR = value;
    }
    get issueNumber() {return this._issueNR};
}

let b1 = new Book(db[0]);
let b2 = new Book(db[2]);
let m1 = new Magazine(db[1]);
let m2 = new Magazine(db[3]);

b1.author = db[0].author;
b2.author = db[2].author;
m1.issueNumber = db[1].issueNumber;
m2.issueNumber = db[3].issueNumber;
console.log(b1.author, b1.year, b1.title);
console.log(b2.author, b2.year, b2.title);
console.log(m1.issueNumber, m1.year, m1.title);
console.log(m2.issueNumber, m2.year, m2.title);
console.log("Total number of items: " + LibraryItem.totalItems);