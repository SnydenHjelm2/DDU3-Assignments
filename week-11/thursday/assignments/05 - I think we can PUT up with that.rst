========
Övning 5
========

Er nästa uppgift är nu att lägga till stöd för HTTP-metoden "PUT". Tanken är att
en användare ska kunna ersätta en befintlig hund med ny information. Det vill
säga:

Om vi i databasen har denna hunden::

    {
        "name": "Bella",
        "age": 14,
        "breed": "Beagle",
        "weight": 39.4,
        "favorite_treats": [
            "Peanut Butter Treats"
        ]
    }

Och vi tar emot en PUT-förfrågan som innehåller följande::

    {
        "name": "Bella",
        "age": 15,
        "breed": "Beagle",
        "weight": 35.4,
        "favorite_treats": [
            "Peanut Butter Treats",
            "Tomatoes"
        ]
    }

Då skulle ovanstående data ersätta orginalet. Om ni tar en närmre titt kan ni se
att Bella har fyllt år, gått ner i vikt och gillar även numera tomater!

Så, om vi tar emot en PUT-förfrågan behöver vi:

- kontrollera att alla egenskaper finns i datan, annars svarar vi med ett status
  400 JSON-svar (Bad Request)
- kontrollera att hunden faktiskt existerar, annars svarar vi med ett status 404
  JSON-svar (Not Found)
- slutligen så kan vi ersätta hunden, spara vår JSON-fil, och svara med ett
  status 200 JSON-svar (att hunden har redigerats)

