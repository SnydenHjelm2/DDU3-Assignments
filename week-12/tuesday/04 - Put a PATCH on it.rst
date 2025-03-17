========
Övning 4
========

Er nästa uppgift är att lägga till stöd för HTTP-metoden `PATCH`, med syftet att
en användare ska kunna redigera en eller flera egenskaper hos en hund.
Till skillnad från `PUT` där vi ersatte *alla* hundens egenskaper mot något
annat.

Till exempel, om vi har följande hund::

    {
        "name": "Buddy",
        "age": 10,
        "breed": "Poodle",
        "weight": 35.4,
        "favorite_treats": [
            "Chicken Jerky",
            "Bones",
            "Peanut Butter Treats",
            "Biscuits"
        ]
    }

Och en användare skickare följande förfrågan::

  PATCH /dogs/Buddy
  { age: 11 }

Så skulle Buddy's ålder ändras till 11. Observera att vi utgår från en *route*
nu, dvs. `/dogs/:name`, namnet på hunden finns alltså inte med i förfrågan.

Om namnet dom angav inte finns kan ni returnera ett svar med statuskoden 404.

Dessutom, kom ihåg att dom ska kunna ange en eller flera egenskaper. Det vill
säga att::

  PATCH /dogs/Buddy
  { age: 11, weight: 32 }

Skulle ändra både åldern och vikten på Buddy. I nuläget räcker det att ni
tillåter att dom kan redigera `age`, `weight` och `favorite_treats`.

Hur ni väljer att lösa det för `favorite_treats`, så att en användare kan ändra
vilka favoritgodisar en hund har, är upp till er.
