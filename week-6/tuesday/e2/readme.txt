
Skriv en funktion som skapar en slumpmässig koppling mellan varje bokstav i alfabetet (engelska, endast små bokstäver, "a" till "z") och en annan bokstav i alfabetet. Varje bokstav ska kopplas EXAKT en gång till en annan bokstav. Ingen bokstav får kopplas till sig själv.

Funktionen ska returnera en array av par (två-element-arrayer), där varje par representerar en sådan koppling. Exempel på en möjlig output:
[
  ["a", "f"],
  ["b", "r"],
  ["c", "z"],
]
I detta exempel är: "a" kopplad till "f", "b" kopplad till "r", "c" kopplad till "z", och så vidare.

Krav
1. Varje bokstav ska förekomma EXAKT en gång som första och EXAKT en gång som andra element i paren.
2. Kopplingarna ska göras slumpmässigt varje gång funktionen körs.
3. Ingen bokstav får kopplas till sig själv (t.ex. "a" får inte kopplas till "a").

**Tips:**
- Använd "abcdefghijklmnopqrstuvwxyz" och split för att fixa en array av alla bokstäver.

---

Koda en webbsida som, varje gång den laddas upp, skapar en ny koppling (som den ovan).
Sen läser den det som står i en input (allteftersom användaren skriver) och skriver en kodifierad version av det, med hjälp av kopplingen.
Se videon

