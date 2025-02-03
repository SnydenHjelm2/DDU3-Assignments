class People {
    constructor(alias, id) {
        this.alias = alias;
        this.id = id;
    }
}
class Artist extends People {
    constructor(alias, id) {
        super(alias, id);
    }
}
class Listener extends People {
    constructor(alias, id, follows = []) {
        super(alias, id);
        this.follows = follows;
    }
}
class Listen {
    constructor(date, time, listener_id, song_id, length) {
        this.date = date;
        this.time = time;
        this.listener_id = listener_id;
        this.song_id = song_id;
        this.length = length; // How long the song was listened to. If less than the song's length => it was skipped.
    }
}
class Song {
    constructor(id, genre, title, artist_id, length) {
        this.id = id;
        this.genre = genre;
        this.title = title;
        this.artist_id = artist_id;
        this.length = length;
    }
}
