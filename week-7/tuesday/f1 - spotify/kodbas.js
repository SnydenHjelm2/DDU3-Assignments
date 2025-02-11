class Person {
  static all = []
  constructor(id, alias) {
    this.constructor.all.push(this);
    this.id = id;
    this.alias = alias;
  }
}
class Artist extends Person {
  constructor(id, alias, country) {    
    super(id, alias);
    this.country = country;
  }
}
class Listener extends Person {
  constructor(id, alias, follows = []) {
    super(id, alias);
    this.follows = follows; // Array of artists' ids
  }
}
class Song {
  static all = []
  static Genres = ["rock", "pop", "soul", "punk"]
  static allByGenre(genre) {
    if (!Song.Genres.includes(genre.toLowerCase())) {inputError(); return false};

    return Song.all.filter((x) => x.genre.toLowerCase() === genre.toLowerCase());
  }
  constructor(id, title, genre, artistId) {
    this.constructor.all.push(this);
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.artistId = artistId;
  }
  get Genre() {
    return this._genre;
  }
  set Genre(genre) {
    if (!Song.Genres.includes(genre.toLowerCase())) {inputError(); return};

    this._genre = genre.toLowerCase();
  }
  nListeningsInMonth(month) {
    let allListeningsOfSong = Listening.all.filter((x) => x.songId === this.id);
    let allListeningsInMonth = allListeningsOfSong.filter((x) => x.date.month === month);
    return allListeningsInMonth.length;
  }
}
class Listening {
  static all = []
  constructor(date, listenerId, songId) {
    this.constructor.all.push(this);
    this.date = date; // {year: int, month: int, day: int}
    this.listenerId = listenerId;
    this.songId = songId;
  }
}
function inputError () {
  console.error("Error");
  // En Error kastas här så att kodexekveringen avslutas
}

let s1 = new Song(db.songs.id, db.songs.title, db.songs.genre, db.songs.artist_id, db.songs.length);
let l1 = new Listening({year: 2024, month: 4, day:db.listens.day}, db.listens.listener_id, db.listens.song_id);