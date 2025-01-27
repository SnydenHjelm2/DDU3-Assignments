const db = [
    {
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        review: 5
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: 1972,
        review: 5
    },
    {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: 1994,
        review: 4
    },
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        review: 5
    },
    {
        title: "Schindler's List",
        director: "Steven Spielberg",
        year: 1993,
        review: 4
    },
    {
        title: "Forrest Gump",
        director: "Robert Zemeckis",
        year: 1994,
        review: 5
    },
    {
        title: "The Matrix",
        director: "The Wachowskis",
        year: 1999,
        review: 4
    },
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        year: 1994,
        review: 5
    },
    {
        title: "Fight Club",
        director: "David Fincher",
        year: 1999,
        review: 3
    },
    {
        title: "Parasite",
        director: "Bong Joon-ho",
        year: 2019,
        review: 5
    }
];


class Movie {
    constructor(movie) {
        this.title = movie.title;
        this.director = movie.director;
        this.year = movie.year;
        this.review = movie.review;
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

class FilmCatalog extends Movie {
    static allMovies = [];

    constructor(data) {
        super(data);
        FilmCatalog.allMovies.push(this);
    }
    
    addMovie(movie) {
       let newMovie = new Movie(movie);
       return newMovie;
    }

    removeMovie(movie) {
        for (i=0; i<FilmCatalog.allMovies.length; i++) {
            if (FilmCatalog.allMovies === movie) {
                console.log("Movie removed!")
                FilmCatalog.allMovies.splice(i, 1);
                break;
            }
        }
    }

    findMovieByTitle(title) {
        for (let movie of FilmCatalog.allMovies) {
            if (movie.title === title) {
                return movie;
            }
        }
    }

    findMovieByDirector(director) {
        for (let movie of FilmCatalog.allMovies) {
            if (movie.director === director) {
                return movie;
            }
        }
    }
}

class MovieList extends FilmCatalog {
    constructor(data) {
        this.name =  data.name;
        this.movies = data.movies;
    }

    addMovieToList(movie) {
        
    }

    removeMovieFromList(movie) {
        for (i=0; i<this.movies.length; i++) {
            if (movie === this.movies[i]) {
                this.movies.splice(i, 1);
                break;
            }
        }
    }
}

for (let movie of db) {
    new FilmCatalog(movie);
}

console.log(FilmCatalog.allMovies)