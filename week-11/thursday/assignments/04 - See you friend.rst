========
Övning 4
========

Er nästa uppgift är att lägga till stöd för HTTP-metoden "DELETE".

En användare ska kunna skicka en JSON-förfrågan med DELETE-metod innehållande::

  { name: "Arya" }

Och om den hunden finns ska ni i så fall radera den från JSON-filen (dogs.json)
och svara användaren med (JSON)::

  { message: "The dog was successfully removed from the database" }

Men! om hunden inte finns ska ni istället svara användaren med (JSON)::

  { error: "Not Found, the dog does not exist" }

Detta meddelande ska ha HTTP-statuskoden 404.

Slutligen, om användaren, när dom skickar en DELETE-förfrågan, *inte* har anget
ett namn, t.ex. ett meddelande som `{ random: "hello world" }`, så ska ni svara
dom med följande svar (JSON)::

  { error: "Bad Request, one or more attributes are missing" }

Detta meddelande ska ha HTTP-statuskoden 400.
