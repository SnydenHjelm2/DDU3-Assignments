Skapa en klass Person vars konstruktör tar emot data i formatet:
{ 
  name: {first: string, last: string}, 
  address: {postcode: number, street: string, number: number, city: string},
  bioInfo: { weight: number, height: number }
}

Klassen ska ha en metod:
1) myBMI(). Den tar inte emot något argument. Den returnerar BMI-värdet för personen.
            Formeln för BMI: weight (kg) / (height (m) * height (m))
            (alltså vikten i kg delan med kvadraten av längden i m)
            Du kan utgå från at vikten är i kg och längden i m

Skapa en instans av klassen för varje element i arrayen:
[
  {
    name: {first: "Janis", last: "Joplin"},
    address: { postcode: 21655, street: "Bersgatan", number: 42, city: "Malmö"},
    bioInfo: { weight: 56, height: 1.62}
  },
  {
    name: {first: "Jimi", last: "Hendrix"},
    address: { postcode: 21742, street: "Västerlånggatan", number: 7, city: "Malmö"}
    bioInfo: { weight: 68, height: 1.78}
  },
]

Använd metoden för att logga på konsolen (notera endast en decimal):
Janis Joplin (BMI: 21,3)

