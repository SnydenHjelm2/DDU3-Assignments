Du vill skapa ditt eget musikaliska analysimperium. Något som kanske kan säljas till Spotify.
Än så länge har du bara hunnit med den mest grundläggande delen av klasserna, se nedan index.js.
Du har också en liten databas att testa med. Se db.js. Det är datan för december 2018... säger vi.
  (EXTRA OM DU VILL: Kolla också på koden som skapar en random db, den finns i db-creator.js)

Nu ska du skapa andra delar av analysverktyget.

1) Getter followers för Artist
... som returnerar en array av alla lyssnare (instance of Listener) som följer artisten.

2) Getter isComplete för Listen
... som returnerar true/false beroende på om man lyssnade helt på sången.

3) Getter mostPopularSong för Artist
... som returnerar ett objekt:
{
  mostPopularComplete: {song: instance of Song, nListens: number},
  mostPopularSkipped: {song: instance of Song, nListens: number}
}
Den ena är artistens låt som det finns mest "kompletta listens" för.

4) Getter favoriteGenre för Listener
... som returnerar genren som lyssnaren har spelat mest. Oavsett om sången lyssnades i sin helhet eller inte.

5) Metoden songsOnAGivenDay för Listener
... som returnerar en array av instanser av Song, nämligen de hen lyssnade på den dagen (i dec 2018)

6) Klurigt! (tror jag)
   Getter first10Songs för Listener
   ... som returnerar en array med de tio låtarna som hen lyssnade på först den dagen
