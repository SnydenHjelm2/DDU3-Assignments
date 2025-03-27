
1)  Skapa en enkel Deno-server som erbjuder en resurs vid sökvägen /randomColor
    Den ska endast acceptera GET-förfrågningar.
    Den ska lyssna på port 4242.
    Den ska returnera en slumpmässig färg bland dessa: pink, lime, skyblue, lightgreen, gold.

    OBS: Gör detta utan att använda dig av AI, och utan att kolla på min video. Kolla dock gärna på Sebbes videos!
    (Om du har problem med själva framtagning av en slumpmässig färg: det finns en lösning i mappen)

    Xtra (när du är klar med resten av övningen): Den ska returnera två av dessa färger, i en JSON-array [färg1, färg2]
    Xtra Xtra: Färgerna i arrayen får inte vara samma.

2)  Se till att servern fungerar genom att testa den på de sätt som du lärt dig under tidigare del av kursen:
    - Skicka en förfrågan från adressfältet i firefox
    - Skapa och skicka en förfrågan från network-fliken i Firefox

3)  När servern fungerar: Öppna index.html, som finns i mappen, genom att släppa den på Firefox.
    Glöm inte att inkludera i servern koden som behövs för att responsen ska kunna användas av externa scripts. Kolla på min video!
    Kontrollera att det fungerar (dvs, bakgrunden får en random färg, den som hämtades från servern)
    OBS: Filerna (index.html och index.js) är färdiga och det finns ingen bugg i koden, jag har testat dem.

