class Movie {
    constructor(movie) {
        this.title = movie.title;
        this.director = movie.director;
        this.year = movie.year;
        this.review = movie.review;

        FilmCatalog.all.push(this);
    }

    set year(value) {
        if (value < 0) {
            console.error("above 0 pls");
            return;
        } else if (!Number.isInteger(value)) {
            console.error("no decimals pls");
            return;
        } else {
            this._year = value;
        }
    }
    get year() {return this._year};

    set review(value) {
        if (value < 1 || value > 5) {
            console.error("between 1-5 pls");
            return;
        }
        this._review = value;
    }
    get review() {return this._review};
}

class FilmCatalog {
    static all = [];

    static addMovie(movie) {this.all.push(movie)};
    static removeMovie(movie) {
        let i = this.all.indexOf(movie);
        if (i > -1) {
            this.all.splice(i, 1);
        }
    }

    static find = {
        byYear(year) {
            let arr = [];
            for (let movie of FilmCatalog.all) {
                if (movie.year === year) {
                    arr.push(movie);
                }
            }

            return arr;
        },

        byDirector(director) {
            let arr = [];
            for (let movie of FilmCatalog.all) {
                if (movie.director === director) {
                    arr.push(movie);
                }
            }
            return arr;
        },

        byTitle(title) {
            for (let movie of FilmCatalog.all) {
                if (title === movie.title) {
                    return movie;
                }
            }
            return false;
        }
    }
}

class MovieList {
    constructor(name, movies = []) {
        this.name = name;
        this.movies = movies;
    }

    get nFilms() {return this.movies.length;}
    get averageReview() {
        let totalReview = 0;
        for (let movie of this.movies) {
            totalReview += movie.review;
        }
        return totalReview / this.nFilms
    }

    addMovieToList(movie) {
        this.movies.push(movie);
    }

    removeMovieFromList(movie) {
        let i = this.movies.indexOf(movie);
        if (i > -1) {this.movies.splice(i, 1)};
    }

    removeMovieByTitle(title) {
        for (let movie of this.movies) {
            if (movie.title === title) {
                let i = this.movies.indexOf(movie);
                this.movies.splice(i, 1);
            }
        }
    }
}

for (let movie of db) {
    new Movie(movie);
}
let inception = FilmCatalog.find.byTitle("Inception");
let parasite = FilmCatalog.find.byTitle("Parasite");
let spielberg = FilmCatalog.find.byDirector("Steven Spielberg");
let nolan = FilmCatalog.find.byDirector("Christopher Nolan");
let year1999 = FilmCatalog.find.byYear(1999);

let list1 = new MovieList("Goated List", [inception, parasite]);
console.log(list1.movies);
list1.removeMovieFromList(parasite);
console.log(list1.movies);
list1.addMovieToList(spielberg[0]);
console.log(list1.movies);
list1.removeMovieByTitle("Inception");
console.log(list1.movies);
list1.addMovieToList(nolan[0]);
list1.addMovieToList(nolan[1]);
console.log(list1.movies);
list1.removeMovieByTitle("Inception");
console.log(list1.movies);
for (let movie of year1999) {
    list1.addMovieToList(movie);
}
console.log(list1.movies);