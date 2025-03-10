========
Övning 4
========

Er uppgift är att skapa ett litet program som gör det möjligt för en användare
att lägga till hundnamn till en fil, t.ex. dogs.csv eller liknande.

Säg att vi har filen "dogs.csv" med följande innehåll::

  Arya
  Leo
  Jax

En användare ska sedan kunna, i terminalen, göra följande::

  $ deno --allow-write program.js add Sara  
  Sara was added.
  $ deno --allow-write program.js add Maya  
  Maya was added.

För att filen därefter ska innehålla::

  Arya
  Leo
  Jax
  Sara
  Maya

Det innebär att ni måste kontrollera att första argumentet är "add" och om det
stämmer, ska ni i så fall lägga till det andra (dvs. namnet) till filen.
