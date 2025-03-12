========
Övning 6
========

I denna sista övning ska ni försöka att sätta er egen prägel på koden lite mer:

- Kan ni möjligen dela upp koden i olika filer?
- Kan ni placera viss kod i funktioner för att minska upprepning och/eller göra
  er "huvudkod" tydligare? T.ex. "loadDogs" eller kanske "sendBadRequest"
  - Lägg gärna till en kortare kommentar innan funktionen som beskriver syftet
    med den (inte exakt vad den gör - det ser vi ju i koden)
- Dubbelkolla att när ni tar emot POST/DELETE/PUT-meddelanden, kontrollerar ni
  varje gång att det verkligen är JSON ni tar emot?
- Vad händer mer er webbserver om en användare skickar JSON-data i form av en
  siffra, t.ex. 1337. Krashar servern då? Testa och se!

Ta tid att nu göra detta och fundera över hur *er* kod bör se ut, känns det
verkligen som er egen kod?

========
Överkurs
========

"Ja ja, detta var väl ändå alldeles för enkelt?"

Okejdå, skriv om hela servern så att alla hundar även har ett ID, det kan börja
på 1 och ska ökas med 1 för varje ny hund som läggs till. Dessutom, när man ska
radera en hund ska det istället baseras på deras ID, samma sak vid
PUT-förfrågan. Och vid POST-förfrågan, returnera istället den nytillagda hunden
(som då även har ett ID). 

Ovanstående löser ju lite problematiken med att hundar kan ha samma namn...
