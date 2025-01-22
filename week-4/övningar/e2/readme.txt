Skapa en klass Person vars konstruktör tar emot data i formatet:
{ name: {first: string, last: string}, address: {postcode: number, street: string, number: number, city: string} }

Klassen ska ha två metoder:
1) writeName(parent): Tar emot en referens till ett befintligt element på sidan. Lägger till i parent ett <p>-element med texten "name.first name.last"

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

Använd metoden för att skriva i <main>-elementet:
Janis Joplin
Jimi Hendrix

