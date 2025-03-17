========
Övning 2
========

Er nästa uppgift är att lägga till stöd för att kunna hämta ut information om en
hund. I detta fallet ska ni lägga till en sk. *route* för `/dogs/:name`, dvs. om
en användare besöker `http://localhost:8000/dogs/Buddy` så ska dom endast få
information (JSON) om hunden med namnet "Buddy". Om namnet dom angav inte finns
ska ni returnera ett svar med statuskoden 404.

Ni behöver inte tänka på problematiken kring att flera hundar skulle kunna ha
samma namn, skulle ni stöta på en sådan situation räcker det att ni returnerar
den första med det angivna namnet.
