async function handler(req) {
    if (req.method === "POST") {
        if (req.headers.get("Content-Type") !== "application/json") {
            return new Response('{ error: "Unsupported Media Type, JSON was expected" }', {status: 415, headers: {"Content-Type": "application/json"}});
        } else {
            let dogData = await req.json();

            if (!dogData.name || dogData.age === undefined || !dogData.breed || !dogData.weight || typeof dogData.favorite_treats !== "object" || !dogData.favorite_treats[0]) {
                return new Response(`{ error: "Bad Request, one or more attributes are missing" }`, {status: 400, headers: {"Content-Type": "application/json"}});
            } else {
                let data = Deno.readTextFileSync("dogs.json");
                let parsedJson = JSON.parse(data);
                parsedJson.push(dogData);
                let newData = JSON.stringify(parsedJson);
                Deno.writeTextFileSync("dogs.json", newData);
                return new Response(`{ message: "The dog was successfully added to the database" }`, {status: 201, headers: {"Content-Type": "application/json"}});
            }
        }
    }

    return new Response("fuck you");
    // let data = Deno.readTextFileSync("dogs.json");

    // return new Response(data, {headers: {"Content-Type": "application/json"}});
}

Deno.serve(handler);