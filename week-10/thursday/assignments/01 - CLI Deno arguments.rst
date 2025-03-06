========
Övning 1
========

Börja med att skapa följande lilla program::

  console.log(Deno.args);

Kör sedan programmet, vad får ni ut?
// []

Testa sedan att köra programmet på följande vis::

  $ deno program.js one two three

Det vill säga, vi lägger till 3 stycken argument, vad får ni för ut skrift nu?
// ["one", "two", "three"]

Skriv nu om ert program så att det istället skriver ut respektive argument på
varsin rad, t.ex. om vi skulle köra vårt program på följande vis::

  $ deno program.js sebbe 30 erik 40 johannes 50

Så kan vi förvänta oss denna utskriften::

  1. sebbe
  2. 30
  3. erik
  4. 40
  5. johannes
  6. 50
