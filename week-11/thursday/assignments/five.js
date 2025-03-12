async function handler(req) {
    if (req.method === "POST") {
        if (req.headers.get("Content-Type") !== "application/json") {
            return new Response('{ "error": "Unsupported Media Type, JSON was expected" }', {status: 415, headers: {"Content-Type": "application/json"}});
        } else {
            let dogData = await req.json();

            if (!dogData.name || dogData.age === undefined || !dogData.breed || !dogData.weight || typeof dogData.favorite_treats !== "object" || !dogData.favorite_treats[0]) {
                return new Response(`{ "error": "Bad Request, one or more attributes are missing" }`, {status: 400, headers: {"Content-Type": "application/json"}});
            } else {
                let data = Deno.readTextFileSync("dogs.json");
                let parsedJson = JSON.parse(data);
                parsedJson.push(dogData);
                let newData = JSON.stringify(parsedJson);
                Deno.writeTextFileSync("dogs.json", newData);
                return new Response(`{ "message": "The dog was successfully added to the database" }`, {status: 201, headers: {"Content-Type": "application/json"}});
            }
        }
    } else if (req.method === "DELETE") {
        let dogToRemove = await req.json();
        if (req.headers.get("Content-Type") !== "application/json") {
            return new Response('{ "error": "Unsupported Media Type, JSON was expected" }', {status: 415, headers: {"Content-Type": "application/json"}});
        }

        if (!dogToRemove.name) {
            return new Response(`{ "error": "Bad Request, one or more attributes are missing" }`, {status: 400, headers: {"Content-Type": "application/json"}});
        } else {
            let data = Deno.readTextFileSync("dogs.json");
            let dogData = JSON.parse(data);
            let dog = dogData.find((x) => x.name === dogToRemove.name);

            if (!dog) {
                return new Response(`{ "error": "Not Found, the dog does not exist" }`, {status: 404, headers:{"Content-Type": "application/json"}});
            } else {
                let index = dogData.findIndex((x) => x.name === dog.name);
                dogData.splice(index, 1);
                Deno.writeTextFileSync("dogs.json", JSON.stringify(dogData));
                return new Response(`{ "message": "The dog was successfully removed from the database" }`, {status: 200, headers: {"Content-Type": "application/json"}});
            }
        }
    } else if (req.method === "PUT") {
        if (req.headers.get("Content-Type") !== "application/json") {
            return new Response('{ "error": "Unsupported Media Type, JSON was expected" }', {status: 415, headers: {"Content-Type": "application/json"}});
        }

        let dogToEdit = await req.json();
        if (!dogToEdit.name || dogToEdit.age === undefined || !dogToEdit.breed || !dogToEdit.weight || typeof dogToEdit.favorite_treats !== "object" || !dogToEdit.favorite_treats[0]) {
            return new Response(`{ "error": "Bad Request, one or more attributes are missing" }`, {status: 400, headers: {"Content-Type": "application/json"}});
        }

        let dogData = Deno.readTextFileSync("dogs.json");
        dogData = JSON.parse(dogData);
        let dog = dogData.find((x) => x.name === dogToEdit.name);

        if (!dog) {
            return new Response(`{ "error": "Not Found, the dog does not exist" }`, {status: 404, headers:{"Content-Type": "application/json"}});
        } else {
            let index = dogData.findIndex((x) => x.name === dog.name);
            dogData.splice(index, 1, dogToEdit);
            dogData = JSON.stringify(dogData);
            Deno.writeTextFileSync("dogs.json", dogData);
            return new Response(`{"message": "Dog was successfully edited"}`, {status: 200, headers:{"Content-Type": "application/json"}});
        }
    }

    return new Response("fuck you");
    // let data = Deno.readTextFileSync("dogs.json");

    // return new Response(data, {headers: {"Content-Type": "application/json"}});
}

Deno.serve(handler);