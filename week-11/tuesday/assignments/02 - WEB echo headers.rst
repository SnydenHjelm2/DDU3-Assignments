========
Övning 2
========

Er uppgift är att skapa en liten webbserver som svarar besökaren med information
om deras förfrågan, mer specifikt ska er sida skicka ut en lista över *alla*
headers:

Exempelsvar::

  <p>Här är dina headers</p>
  <ul>
    <li>Header-namn: header-värde</li>
    <li>Header-namn: header-värde</li>
    <li>Header-namn: header-värde</li>
    och så vidare 
  </ul>

Detta innebär att ni behöver använda er av `Headers.entries()´
(https://developer.mozilla.org/en-US/docs/Web/API/Headers/entries).
