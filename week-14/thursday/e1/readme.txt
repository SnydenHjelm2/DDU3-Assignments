Det finns en Deno-server i mappen "server"
Starta den (i standard porten, dvs. 8000).

Skapa en webbsida vars script skickar en förfråga till denna url:
localhost:8000/wrongResource

Studera responsen du får tillbaka. Vad är statusTexten?
//I'm a teapot
Vilket status (siffra) är kopplat till den texten?
//418
När ska servern skicka det status?
//code indicates that the server refuses to brew coffee because it is, permanently, a teapot.
//Vissa hemsidor använder 418 I'm a teapot för att svara på requests man inte vill hantera.


Skicka en förfråga till
  localhost:8000/wrongResource
via adressfältet i Firefox.
Kan du hitta statusTexten?
//Den står på min skräm: Error code: 418 I'm a teapot
//Finns även i nätverkstabben



