Vill vill skapa en class som underlättar vår kodning.
Idën med klassen är att jag ska kunna skapa ett HTML-element så här:
new Container({parent, tag, classes})
Där:
  - parent pekar på elementet där det nya elementet ska appendas.
  - tag är HTML-taggen som det nya elementet ska ha.
  - classes är en array (kan vara tom) av css-klasser som det nya elementet ska ha.

Jag ska alltså kunna skriva såhär:
const e1 = new Container({
                            parent: document.querySelector("#randomId"),
                            tag: "div",
                            classes: ["alert", "zombie"],
                        });

Predefinierade värden:
  - parent = main-elementet. Om det inte finns så ska det skapas och appendas till body
  - tag = "div"
  - classes = []

Så om jag skriver:
const e1 = new Container();
Så ska det skapas en ny div och appendas till main-elementet.

Container exponerar (exposes, alltså "har") följande:
  Getters:
    - html: som returnerar referensen till själva html-elementet
    - id: som returnerar id:et av html-elementet
  Setters:
    - id: som kontrollerar att:
        1) det handlar om en sträng med length > 0
        2) det inte finns någon annan instans av Container med det id:et.
           och, om båda kraven är uppfyllda => sätter id:et av html-elementet
                annars: throw Error("Relevant info här")
