function handler(req) {
    let data = Deno.readTextFileSync("dogs.json");

    return new Response(data, {headers: {"Content-Type": "application/json"}});
}

Deno.serve(handler);