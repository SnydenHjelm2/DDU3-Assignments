========
Övning 2
========

Er nästa uppgifter är att lägga till kod för att er JSON-webbserver ska kunna ta
emot data via POST-metoden, men än så länge ska ni bara skriva ut datan ni tar
emot på konsolen (dvs. i terminalen).

Däremot ska ni kontrollera att headern "Content-Type" är satt till
"application/json", om den *inte* är satt till det så ska ni svara med ett
JSON-svar som ska se ut såhär::

  { error: "Unsupported Media Type, JSON was expected" }

I detta fall (ovan) ska ni även sätta HTTP-statusen till 415.

Tips: denna sidan kan vara en schysst referenssida för statuskoder
https://httpstatuses.io/.

Så, glöm inte att om ni får en förfrågan med POST-metoden *och* dom har anget
att innehållet är JSON, då ska ni bara skriva ut datan (hunden) på konsolen.
