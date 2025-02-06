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

    get followers() {
        let fws = [];
        for (let listener of db.listeners) {
            if (listener.follows.includes(this.id)) {fws.push(listener)};
        }
        return fws;
    }

    get mostPopularSong() {
        let allArtistsSongs = db.songs.filter((x) => x.artist_id === this.id);
        
        let obj = {
            mostPopularComplete: {song: null, nListens: 0},
            mostPopularSkipped: {song: null, nListens: 0},
        }
        let mostCompleted = 0;
        let mostSkipped = 0;
        for (let song of allArtistsSongs) {
            let completed = 0;
            let skipped = 0;
            let timesListened = 0;
            let allListensOfSong = allListens.filter((x) => x.song_id === song.id);
            
            for (let listen of allListensOfSong) {
                if (listen.isComplete) {
                    completed++
                    timesListened++
                } else {
                    skipped++
                    timesListened++
                }
            }
            if (completed > mostCompleted) {
                mostCompleted = completed;
                obj.mostPopularComplete.nListens = timesListened;
                obj.mostPopularComplete.song = song;
            }

            if (skipped > mostSkipped) {
                mostSkipped = skipped;
                obj.mostPopularSkipped.nListens = timesListened;
                obj.mostPopularSkipped.song = song;
            }
        }

        return obj;
    }
    
}
class Listener extends People {
    constructor(alias, id, follows = []) {
        super(alias, id);
        this.follows = follows;
    }

    get favoriteGenre() {
        let allListensByListener = allListens.filter((x) => x.listener_id === this.id);
        let songsFromListens = [];
        allListensByListener.forEach((x) => {
            for (let song of allSongs) {
                if (x.song_id === song.id) {
                    songsFromListens.push(song);
                }
            }
        });

        let genres = songsFromListens.map((x) => x.genre);
        // let dist = {};
        // for (let genre of genres) {
        //     if (dist[genre] === undefined) {
        //         dist[genre] = 1
        //     } else {
        //         dist[genre]++
        //     };
        // }
        // let pop = {total: 0, genre: null};
        // for (let num in dist) {
        //     if (num > pop.total) {
        //         pop.total = num;
        //     }
        // }
        // return pop;

        let genresOnlyOnce = [];
        genres.forEach((x) => {
            if (!genresOnlyOnce.includes(x)) {
                genresOnlyOnce.push(x);
            }
        });

        let genresArr = [];
        genresOnlyOnce.forEach((x) => {
            let count = 0;
            for (let genre of genres) {
                if (genre === x) {
                    count++
                }
            }
            genresArr.push({genre: x, count: count});
        });

        return genresArr.sort((a, b) => b.count - a.count)[0];
        
        /*genres = genres.reduce((acc, genre) => {
            acc[genre] = (acc[genre] || 0) + 1;
            return acc;
        }, {});
        
        let genresArr = [];
        for (let genre in genres) {
            genresArr.push({genre, count: genres[genre]});
        }
        genresArr.sort((a, b) => b.count - a.count);
        return genresArr[0];*/
    }

    get first10Songs() {
        let listensFromDay = allListens.filter((x) => x.date === 20);
        listensFromDay.sort((a, b) => {
            let aNum = 0;
            let bNum = 0;
            if (a.time.length === 4) {
                aNum = parseInt(a.time.substring(2,5));
            } else if (a.time.length === 5) {
                aNum = parseInt(a.time.substring(3,6));
            }

            if (b.time.length === 4) {
                bNum = parseInt(b.time.substring(2,5));
            } else if (b.time.length === 5) {
                bNum = parseInt(b.time.substring(3,6));
            }
            return aNum - bNum;
        });

        listensFromDay.sort((a, b) => parseInt(a.time.substring(0,2)) - parseInt(b.time.substring(0,2)));
        let firstTenSongs = [];
        for (let i=0; i<10; i++) {
            firstTenSongs.push(listensFromDay[i]);
        }
        return firstTenSongs;
    }

    songsOnAGivenDay(day) {
       let listensFromDay = allListens.filter((x) => x.date === day);
       let songsFromDay = [];
       for (let listen of listensFromDay) {
            for (let song of allSongs) {
                if (song.id === listen.song_id) {
                    /*if (!songsFromDay.includes(song))*/ songsFromDay.push(song);
                }
            }
       }

       return songsFromDay;
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

    get isComplete() {
        let listenedSong = db.songs.find((x) => x.id === this.song_id);
        if (listenedSong.length === this.length) {
            return true;
        } else {
            return false;
        }
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

let a1 = new Artist(db.artists[0].alias, db.artists[0].id);
let a2 = new Artist(db.artists[3].alias, db.artists[3].id);
console.log(a1)
let allListens = [];
let allSongs = [];
for (let item of db.listens) {
    allListens.push(new Listen(item.day, item.time, item.listener_id, item.song_id, item.length));
}
for (let song of db.songs) {
    allSongs.push(new Song(song.id, song.genre, song.title, song.artist_id, song.length));
}
let l1 = new Listener(db.listeners[0].alias, db.listeners[0].id, db.listeners[0].follows);
console.log(l1);
console.log(allSongs[0]);
