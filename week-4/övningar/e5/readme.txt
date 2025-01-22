Använd classen Player från förra övningen


Skapa en klass Lineup utan konstruktör. Vi ska bara använda den för sina statiska egenskaper och metoder.

Klassen Lineup ska ha den statiska egenskapen:
- matchPlayers, som är en array.

Klassen Lineup ska ha de statiska metoderna:
- init (parent, players). Metoden tar emot:
                              en referens till ett befintligt element på sidan.
                              en array av instanser av Player
                          Den skapar ett nytt div-element inuti parent och ger den CSS-klassen "lineup"
                          Den skapar ett nytt div-element inuti parent och ger den CSS-klassen "match"
                          Den skapar en knapp "Nytt par" och en knapp "Match!"
                          Den använder players egenskap html och metoden renderPlayer (se nedan) för att lägga till alla spelare på .lineup

- renderPlayer (where, player). Metoden tar emot:
                                  - en sträng som måste vara "lineup" eller "match".
                                  - en instans av Player
                                Metoden placerar html-elementet som representerar spelaren i antingen .lineup eller .match

- newPair (). Metoden tar inte emot något argument.
              Spelarna som redan fanns i .match (om det fanns några) ska placeras i .lineup (med renderPlayer)
              Den använder sig av Player.twoRandomPlayers() och renderPlayer() för att placera två random spelare i .match
              Den uppdaterar matchPlayers med dessa två spelare. Det får inte finnas fler än två spelare i matchPlayers

- match (). Metoden tar inte emot något argument
            Den använder sig av player.go() för att simulera en match sten-sax-påse mellan spelarna som finns i .match (och matchPlayers).
            Den kontrollerar vilken av spelarna som vann matchen.
            Metoden använder sig av player.won() för att öka hens vinster.

