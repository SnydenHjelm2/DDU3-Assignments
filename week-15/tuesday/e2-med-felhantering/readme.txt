Servern i denna övning är samma som i ö2 men den har någon bugg som gör att någon av dessa tre alternativ sker:
- servern svarar med en 400 (Bad request) respons (trots att det inte är något fel med requesten).
- klienten får inget svar (NetWork Error)
- servern svarar som förväntat, med en array av siffror.

Koda en klient som klarar av att hantera alla scenarios ovan och informerar användaren.
Se videon.

A) Lös det med then-metoden
b) Lös det med async / await