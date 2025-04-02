Det finns en Deno-server i mappen "server"
Starta den (i standard porten, dvs. 8000).

Skapa en webbsida (som har en <main>) vars script skickar en förfråga till denna url:
localhost:8000/die

Resursen är en slumpmässig siffra mellan 1 och 6, båda inklusive (som ett tärningskast).
Problemet är att servern har en bugg, och ungefär hälften av tiden kommer responsen att ha status 400.

Om responsen har status 400 så ska det stå på webbsidan: "Servern är ur funktion".
Annars ska kastet (siffran) synas på webbsidan (inte konsollen).


XTRA
TIPS, för dig som är intresserad av att se ett exempel kod med promise chains blir kontraintuitiv:
Använd en promise chain i denna övning och se vad som händer!