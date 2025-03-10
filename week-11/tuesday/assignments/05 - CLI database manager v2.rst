========
Övning 5
========

Er uppgift är att nu bygga vidare på föregående övning genom att lägga till
funktionalitet för att kunna radera ett av hundnamnen.

Säg att vi har filen "dogs.csv" med följande innehåll::

  Arya
  Leo
  Jax

En användare ska då kunna göra följande::

  $ deno --allow-write program.js remove Leo
  Leo was removed.
  $ deno --allow-write program.js remove Test
  Test does not exist.
  $ deno --allow-write program.js remove Jax
  Jax was removed.

Vilket skulle resultera i att "dogs.csv" i detta fallet endast har namnet `Arya`
kvar. Observera att det alltid loggas ett meddelande på konsolen, både när ett
befintligt namn tas bort men även om namnet dom angav inte finns.
