Skapa en klass Player vars konstruktör tar emot data i formatet:
{ 
  name: {first: string, last: string, middle: string}, 
  color: string,  
}
Instanserna ska även ha en egenskap "wins" som är en siffra och som startar med värdet 0.
Varje instans, när den skapas (i konstruktorn), ska "få" ett div-element (alltså den måste skapas som en del av konstruktorn) som visar spelarens info (se video från ö5).
  Varje instans ska ha en egenskap "html" som är en referens till div-elementet som representerar den.
  Notera att konstruktorn skapar div-elementet men placerar det INTE på sidan.
  div-elementet måste visa färgen, namnet (first middle last), vilken grej spelaren har valt (se go() nedan) och antal vinster (wins).
    Om strängen som består av first middle last är längre än 20 tecken så ska middle-name förkortas till endast första bokstaven.
    Om strängen med förkortat middle-name är fortfarande över 20 tecken så ska first-name förkortas till endast första bokstaven.
Klassen ska ha metoderna:
- go (). Metoden returnerar en av dessa tre strängar: "sten", "sax" eller "påse" (random) och uppdaterar spelarens div-element
- won (). Metoden inkrementerar (+1) spelarens (instansens) wins-värde och uppdaterar spelarens div-element

Klassen ska ha den statiska egenskapen:
1) allPlayers, som är en array som innehåller alla instanser av Player som har skapats.

Klassen ska ha den statiska metoden:
1) twoRandomPlayers (), som returnerar två av de befintliga instanserna av Player. De måste vara olika.



Använd följande array för att skapa några spelare (instanser av Player):
[
  {
    "name": {"first": "Kristoffer", "middle": "Gustav", "last": "Johansson"},
    "color": "SkyBlue"
  },
  {
    "name": {"first": "Parvaneh", "middle": "Shirin", "last": "Farahani"},
    "color": "Crimson"
  },
  {
    "name": {"first": "Anamarija", "middle": "Ivana", "last": "Kovačević"},
    "color": "MediumSeaGreen"
  },
  {
    "name": {"first": "Abdulrahman", "middle": "Mohammed", "last": "Al-Masri"},
    "color": "DarkOrange"
  }
]

Testa din kod för att se att den fungerar.
Notera att klassen Player inte appendar div-elementet till sidan.
Men för att testa kan du bara appenda den "på egen hand i koden" till body.


