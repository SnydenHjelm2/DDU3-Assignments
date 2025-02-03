const genres = ["Pop", "Rock", "Jazz", "Classical", "Hip-Hop"];

const artists = [
    { alias: "DJ Wacky", id: 1 },
    { alias: "MC Giggles", id: 2 },
    { alias: "Funky Fred", id: 3 },
    { alias: "Groovy Greta", id: 4 },
    { alias: "Silly Sally", id: 5 }
];

const listeners = [
  { alias: "Bouncy Bob", id: 1, follows: [1, 3] },
  { alias: "Jolly Jane", id: 2, follows: [2, 4, 5] },
  { alias: "Happy Harry", id: 3, follows: [1] },
  { alias: "Cheerful Charlie", id: 4, follows: [3, 5] },
  { alias: "Smiley Sam", id: 5, follows: [2, 4] },
  { alias: "Giggly Grace", id: 6, follows: [1, 3, 5] },
  { alias: "Laughing Larry", id: 7, follows: [2] },
  { alias: "Merry Mary", id: 8, follows: [1, 4] },
  { alias: "Sunny Sue", id: 9, follows: [3, 5] },
  { alias: "Playful Pat", id: 10, follows: [2, 4] }
];

const songs = [];
let songId = 1;
artists.forEach(artist => {
    for (let i = 0; i < 8 + Math.floor(Math.random() * 3); i++) {
        songs.push({
            id: songId++,
            genre: genres[Math.floor(Math.random() * genres.length)],
            title: `Song${songId}`,
            artist_id: artist.id,
            length: Math.floor(Math.random() * 300) + 180
        });
    }
});

const listens = [];
for (let i = 0; i < 500; i++) {
    const listener = listeners[Math.floor(Math.random() * listeners.length)];
    const song = songs[Math.floor(Math.random() * songs.length)];
    listens.push({
        day: Math.floor(31 * Math.random()),
        time: `${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60)}`,
        listener_id: listener.id,
        song_id: song.id,
        length: Math.random () > .35 ? song.length : Math.floor(Math.random() * song.length)
    });
}

console.log({ artists, listeners, songs, listens });
document.querySelector("main").textContent = JSON.stringify({ artists, listeners, songs, listens});
// document.querySelector("main").textContent = JSON.stringify({ artists, listeners, songs, listens });