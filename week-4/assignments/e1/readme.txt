Skapa en klass Person vars konstruktör tar emot data i formatet:
{ name: {first: string, last: string}, address: {postcode: number, street: string, number: number, city: string} }

Klassen ska ha två metoder:
1) writeName(): Tar inga argument. Returnerar en sträng som består av "name.first name.last"
2) writeAdress(): Tar inga argument. Returnerar en sträng som består av "address.street address.number; address.city address.postcode"

Skapa en instans av klassen för varje element i arrayen:
[
  {
    name: {first: "Janis", last: "Joplin"},
    address: { postcode: 21655, street: "Bersgatan", number: 42, city: "Malmö"}
  },
  {
    name: {first: "Jimi", last: "Hendrix"},
    address: { postcode: 21742, street: "Västerlånggatan", number: 7, city: "Malmö"}
  },
]

Använd metoderna för att logga på konsolen:
Janis Joplin (Bersgatan 42; Malmö 21655)
Jimi Hendrix (Västerlånggatan 7; Malmö 21742)

