import { generateMessage, generateJSONHeader, getDogData, findDog, newID, isJSON } from "./six-functions.js";

async function handler(req) {
    if (req.method === "POST") {
        if (!isJSON(req)) {
            return new Response(generateMessage(415), {status: 415, headers: generateJSONHeader()});
        } else {
            let dogData = await req.json();
            let count = 0;
            for (let key in dogData) {
                count++
            }

            if (count !== 5 || !dogData.name || dogData.age === undefined || !dogData.breed || !dogData.weight || typeof dogData.favorite_treats !== "object" || !dogData.favorite_treats[0]) {
                return new Response(generateMessage(400), {status: 400, headers: generateJSONHeader()});
            } else {
                let parsedJson = JSON.parse(getDogData());
                let dogID = newID();
                dogData.id = dogID;
                parsedJson.push(dogData);
                let newData = JSON.stringify(parsedJson);
                Deno.writeTextFileSync("dogs.json", newData);
                return new Response(generateMessage(201), {status: 201, headers: generateJSONHeader()});
            }
        }
    } else if (req.method === "DELETE") {
        let dogToRemove = await req.json();
        if (!isJSON(req)) {
            return new Response(generateMessage(415), {status: 415, headers: generateJSONHeader()});
        }

        if (!dogToRemove.id) {
            return new Response(generateMessage(400), {status: 400, headers: generateJSONHeader()});
        } else {
            let dogData = JSON.parse(getDogData());
            let dog = findDog(dogToRemove, dogData);

            if (!dog) {
                return new Response(generateMessage(404), {status: 404, headers:generateJSONHeader()});
            } else {
                let index = dogData.findIndex((x) => x.id === dog.id);
                dogData.splice(index, 1);
                Deno.writeTextFileSync("dogs.json", JSON.stringify(dogData));
                return new Response(generateMessage(200), {status: 200, headers: generateJSONHeader()});
            }
        }
    } else if (req.method === "PUT") {
        if (!isJSON(req)) {
            return new Response(generateMessage(415), {status: 415, headers: generateJSONHeader()});
        }

        let dogToEdit = await req.json();
        if (!dogToEdit.name || dogToEdit.age === undefined || !dogToEdit.breed || !dogToEdit.weight || typeof dogToEdit.favorite_treats !== "object" || !dogToEdit.favorite_treats[0] || !dogToEdit.id) {
            return new Response(generateMessage(400), {status: 400, headers: generateJSONHeader()});
        }

        let dogData = JSON.parse(getDogData());
        let dog = findDog(dogToEdit, dogData);

        if (!dog) {
            return new Response(generateMessage(404), {status: 404, headers:generateJSONHeader()});
        } else {
            let index = dogData.findIndex((x) => x.id === dog.id);
            dogData.splice(index, 1, dogToEdit);
            dogData = JSON.stringify(dogData);
            Deno.writeTextFileSync("dogs.json", dogData);
            return new Response(generateMessage(200), {status: 200, headers:generateJSONHeader()});
        }
    }

    
    let data = Deno.readTextFileSync("dogs.json");

    return new Response(data, {headers: {"Content-Type": "application/json"}});
}

Deno.serve(handler);