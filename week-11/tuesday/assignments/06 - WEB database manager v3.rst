========
Övning 6
========

Er uppgift är att ännu en gång bygga vidare på de två föregående övningarna, men
nu ska vi introducera en webb-komponent.

Först och främst ska ni introducera en webbserver, så att när en användare
besöker `http://localhost:8000/` så ska ni skicka ut en lista över alla hundnamn
i er fil (t.ex. "dogs.csv").

Exempelsvar::

  <ul>
    <li>Arya</li>
    <li>Leo</li>
    <li>Jax</li>
  </ul>

Ni behöver inte tänka på att skicka ut ett komplett HTML-dokument.

För det andra ska en användare kunna skicka ett hundnamn via "POST" metoden till
`http://localhost:8000/`, den data (namnet) ni tar emot ska ni lägga till i er
fil. Samtidigt ska ni, istället för listan ovan, svara användaren med t.ex.
`<p>Sara was added</p>` (ett HTML-svar).

Ni kan förvänta er att en användare skickar datan via Firefox-utvecklarverktyg
(alltså det kommer inte finnas något formulär eller dylikt).
