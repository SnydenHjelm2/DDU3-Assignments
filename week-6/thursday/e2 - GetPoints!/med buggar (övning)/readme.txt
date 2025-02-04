Det börjar bli dags att ta sig an en aningen mer komplett kodbas att läsa.
Den är lite enklare än Bingo, men i början är det en chock när man ställs inför befintlig kod.
Det tar tid att läsa och förstå sig på kod, särskilt första gången man gör det.
Det finns bara en instruktion vi inte tidigare har sett (setTimeout). Kolla upp den.
  Den är dock inte avgörande.

Tips: Identifiera vad varje klass "ansvarar" för och gå sen steg för steg:
1) Vad händer när koden laddas?
2) Efter det väntar koden på:
    - att användaren väljer en bana. Vad händer då?
    - att användaren flyttar på brickan (keydown på piltangenter). Vad händer då?
    
Kolla på kommentarerna, det finns ett par frågor. Svara på dem.
Detta kommer att ta tid! Det är helt ok att det tar en timme. Du kanske behöver kolla på gamla videos eller fråga AI.
Sitt med kompisar och gör det tillsammans!
Jag rekommenderar att du skriver ut det på papper så du kan göra markeringar.

Eriks råd:
Använd övningen för att känna efter om programmering är något för dig:
  - Om du tycker att det är intressant och givande att läsa koden och försöka se vad allt gör => bra!
  - Om du tycker att det känns långtråkigt att lista ut hur koden fungerar
        kan det vara en varningssignal: Programmering är kanske inte för dig?


På videon ser du ett enkelt spel:
- Man kan välja mellan fem banor (Pippi, Madicken, etc)
- Man börjar alltid i topp-vänstra hörnan
- Man flyttar sig med piltangenterna
- Man får så många poäng som det står på cellen man flyttar sig till
- Man har 18 flytt på sig.
- Man ska få så många poäng som möjligt.

**ÖVNINGEN**
Spelet som syns på videon fungerar som det ska.
Koden som finns i mappen och som du kanske har testat fungerar dock inte helt:
  - Vad händer med moves och points?
    - Poängen räknas inte?
    - När man flyttar brickan så kommer moves = NaN?
  - Det blir konstigt när brickan hamnar utanför banan.
      Den ska istället direkt komma up på andra sidan, som på videon.
  - Om man råkar trycka på en annan tangent än piltangenterna
    så dekrementeras antalet moves kvar. Fast man inte rör på sig.
  - Siffran i cellen blir noll när man har varit på den men färgen blir inte grå
  - När spelet är slut blir inte banan transparent
  - När jag väljer en ny bana så ska jag kunna spela ett nytt spel,
    men det blir inte som det ska:
      - opacity
      - jag kan inte flytta brickan
      - poängen nollställs inte

Du ska hitta buggarna och lösa dem.

Efteråt ska du förbättra spelet genom att:
  - Någonstans på sidan skriva highscore för varje bana.
      Alltså en highscore per bana.
      Highscore uppdateras efter varje spel (om det blev ett bättre score).
      Alla highscore kommer att nollställas varje gång sidan laddas upp.
        Under senare del av kursen kommer vi att titta på hur man kan spara data
        så att den inte nollställs vid varje uppladdning, och så att andra kan
        nå den också.
      Min highscore för Pippi-banan är 124 :-).
  - För varje highscore ska det även sparas, och visas, flyttsekvensen.
      Flyttskvensen är alltså en serie bokstäver som beskriver hur brickan flyttades under hela omgången.
        N: upp, S: ner, E: höger, W: vänster.
      Eftersom man har 18 flytt per spelomgång så kommer flyttsekvensen att bli en sträng på 18 bokstäver,
      som: "NEEESSEWWWNENEEESS"
  - Vid varje highscore ska det finnas en knapp "Show".
    När man klickar på den så ska:
      - Banan för den aktuella highscore laddas upp
      - Brickan röra på sig automatiskt enligt den sparade flyttsekvensen
          En halv sekund per rörelse. Använd setTimeout eller setInterval.
      - Användaren kan inte flytta brickan på egen hand under tiden brickan flyttas.
      - När alla moves är klara så blir det som vid Game Over: opacity = .5 


Lycka till!

