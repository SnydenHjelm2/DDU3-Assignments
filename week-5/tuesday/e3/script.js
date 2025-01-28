class Book {
    set title (value) {
        value = value[0].toUpperCase() + value.slice(1); 
        this._title = value;
    }
    get title () {return this._title};

    set author (value) {
        value = value.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
        this._author = value;
    }
    get author () {return this._author};

    set year (value) {
        if (value < 0 || value.toFixed() != value) {
            console.error("Year must be bigger than 0");
            return;
        }
        this._year = value;
    }
    get year () {return this._year};

    get print () {
        let title = this.title;
        let author = this.author;
        let year = this.year;

        return `${author} (${year}): ${title}`;
    }
}

let b1 = new Book;
b1.title = "diamantmysteriet";
b1.author = "martin widmark";
b1.year = 2002;
console.log(b1.print);