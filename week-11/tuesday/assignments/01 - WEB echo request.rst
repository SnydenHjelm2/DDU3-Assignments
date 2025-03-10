========
Övning 1
========

Er uppgift är att skapa en liten webbserver som svarar besökaren med information
om deras förfrågan, mer specifikt ska er sida skicka ut en lista med följande
information:

- URL
- HTTP-metod
- User-agent

Exempelsvar::

  <p>Här är lite information om din förfrågan:</p>
  <ul>
    <li>URL: http://localhost:8000/</li>
    <li>Metod: GET</li>
    <li>User-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:135.0) Gecko/20100101 Firefox/135.0</li>
  </ul>

Ni behöver inte tänka på att skicka ut ett komplett HTML-dokument med `<!doctype
html><html>...` och så vidare.
