Du har fått i uppdrag att koda grunden för en webbtjänst som låter användare skapa en filmkatalog över alla filmer de äger. De ska även kunna skapa filmlistor baserad på filmerna de har i katalogen.

Du behöver en klass Movie med egenskaperna title, director, year och review. Implementera getters och setters för egenskaperna year och review. Säkerställ att year är ett positivt heltal och att review är en siffra mellan 1 och 5 (inklusive).

Skapa även en klass FilmKatalog, där användarens alla filmer kommer att sparas.
FilmKatalog ska ha metoder för att lägga till, ta bort och leta efter en film (by title, by director och by year).

Skapa även en klass MovieList som representerar en användares lista av favoritfilmer. Den ska ha en egenskap name för listans namn och en egenskap movies som är en array av Movie-objekt. Implementera metoderna addMovieToList och removeMovieFromList för att hantera filmer i listan.

MovieList ska även ha dessa getters:
- nFilms som ger antalet filmer i listan.
- averageReview som ger snittet av reviews av alla filmer i listan.
