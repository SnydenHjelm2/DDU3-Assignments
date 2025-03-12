async function handler(req) {
    if (req.method === "POST") {
        if (req.headers.get("Content-Type") !== "application/json") {
            return new Response('{ error: "Unsupported Media Type, JSON was expected" }', {status: 415, headers: {"Content-Type": "application/json"}});
        } else {
            let json = await req.json();
            console.log(json);
        }
    }

    return new Response("fuck you");
    // let data = Deno.readTextFileSync("dogs.json");

    // return new Response(data, {headers: {"Content-Type": "application/json"}});
}

Deno.serve(handler);