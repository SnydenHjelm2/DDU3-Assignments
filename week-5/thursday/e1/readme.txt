Du ska i denna övning själv koda funktioner som gör samma sak som arrayemetoderna.
Det är det absolut bästa sättet att förstå hur det fungerar.
Och det är inte så svårt. Jag visar den första. Men testa gärna att lösa även den på egen hand först.

FILTER
Koda en funktion array_filter som tar emot två parametrar:
- targetArray
- callback
...och returnerar en ny array som består av alla element i targetArray som gör att callback returnerar ett truthy value.

MAP
Koda en funktion array_map som tar emot två parametrar:
- targetArray
- callback
...och returnerar en ny array som består av resultatet av anropa callback med varje element i targetArray.

FIND
Koda en funktion array_find som tar emot två parametrar:
- targetArray
- callback
...och returnerar det första elementet i targetArray som gör att callback returnerar ett truthy value.

FINDINDEXOF
Koda en funktion array_findIndexOf som tar emot två parametrar:
- targetArray
- callback
...och returnerar indexet av det första elementet i targetArray som gör att callback returnerar ett truthy value.

SOME
Koda en funktion array_some som tar emot två parametrar:
- targetArray
- callback
...och returnerar true om något av elementen i targetArray gör att callback returnerar ett truthy value; false annars.

EVERY
Koda en funktion array_every som tar emot två parametrar:
- targetArray
- callback
...och returnerar true om ALLA element i targetArray gör att callback returnerar ett truthy value; false annars.
