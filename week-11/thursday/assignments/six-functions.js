//Läser dogs.json filen
export function getDogData() {
    return Deno.readTextFileSync("dogs.json");
}

//Genererar ett nytt ID till en Hund som lagts till
export function newID() {
    let data = JSON.parse(getDogData());
    let lastID = data[data.length-1].id;
    return lastID + 1;
}

//Genererar svarsmeddelandet utifrån status kod
export function generateMessage(status) {
    switch (status) {
        case 415:
            return `{ "error": "Unsupported Media Type, JSON was expected" }`;
        case 400: 
            return `{ "error": "Bad Request, one or more attributes are missing" }`;
        case 404: 
            return `{ "error": "Not Found, the dog does not exist" }`;
        case 201: 
            return `{ "message": "The dog was successfully added to the database" }`;
        case 200: 
            return `{ "message": "Your request was successfull" }`;
    }
}

//Returnerar JSON headern till Content-Type
export function generateJSONHeader() {
    return {"Content-Type": "application/json"};
}

//Söker efter en hund i (provided) databas
export function findDog(dog, data) {
    return data.find((x) => x.id === dog.id);
}

//Kollar om requesten är JSON
export function isJSON(req) {
    if (req.headers.get("content-type") !== "application/json") {
        return false;
    } else {
        return true;
    }
}