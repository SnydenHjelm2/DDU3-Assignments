========
Övning 3
========

Er nästa uppgift är att göra det möjligt att lägga till nya hundar. Börja med
att dubbelkolla filen "dogs.json", vilka egenskaper har respektive hund?

När ni nu tar emot en POST-förfrågan (som är JSON) så ska ni:

- kontrollera att den nya hunden har alla attribut (dessa finner ni i
  "dogs.json")
- sedan lägga till den nya hunden i "dogs.json" (glöm inte att skriva till
  JSON-filen efteråt)

När detta är gjort ska ni svara användaren med (JSON)::

  { message: "The dog was successfully added to the database" }

Detta meddelande ska även ha HTTP-statuskoden 201 (https://httpstatuses.io/201).

Men! Om hunden dom vill lägga till skulle sakna minst ett av attributen så ska
ni svara med följande svar (JSON)::

  { error: "Bad Request, one or more attributes are missing" }

Detta meddelande ska ha HTTP-statuskoden 400 (https://httpstatuses.io/400).
