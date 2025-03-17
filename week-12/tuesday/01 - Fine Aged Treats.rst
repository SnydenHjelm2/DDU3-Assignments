========
Övning 1
========

Denna veckas övningar bygger vidare på de från föregående vecka.

Er uppgift är att lägga till stöd för sökparametrar, i vårt fall handlar detta
om att användaren ska kunna filtrera på ålder och favoritgodis.

Den första sökparametern gäller ålder och ska heta "age". Om en användare
besöker `http://localhost:8000/dogs?age=7` så ska dom endast få hundar vars
ålder är 7. Vilket baserat på vår JSON-fil endast är hunden "Luna":

Tänk på att alla värden från sökparametrar är strängar, så ni kan eventuellt
behöva konvertera det till en siffra, eftersom vi ska filtrera på ålder.

Den andra sökparametern gäller favoritgodis och ska heta "treat". Om en
användare besöker `http://localhost:8000/dogs?treat=Cheese` så ska dom endast få
hundar vars egenskap `favorite_treats` inkluderar (eftersom det är en array)
"Cheese".

=====
Bonus
=====

Lägg till stöd för att dessa två sökparametrar kan fungera tillsammans, dvs. om
en användare besöker `http://localhost:8000/dogs?age=5&treat=Cheese` så ska dom
endast få hundar som både är 5 år *och* har "Cheese" som del av sina
favoritgodisar.
