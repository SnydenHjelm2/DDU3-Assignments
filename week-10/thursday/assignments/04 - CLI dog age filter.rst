========
Övning 4
========

Er uppgift är att skapa ett program som skriver ut namnen på alla hundar som är
äldre än en viss ålder (vi utgår från dogs.csv).

Exempel::

  $ deno program.js 10

Skriver ut::

  Sophie, Sadie, Rocky, Rocky, Duke, Toby

Men! Ni måste dela upp er kod i tre olika JS-filer totalt. Till exempel, ni
skulle kunna ha en fil som exporterar funktionen för filtreringen på ålder, och
en annan fil som exporterar funktionen som skriver ut resultatet. Dessa kan
sedan importeras i en tredje, som då anropar dessa funktioner.
