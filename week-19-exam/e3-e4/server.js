function handler(req) {
    let headersOBJ = new Headers();
    headersOBJ.set("Access-Control-Allow-Origin", "*");
    if (req.method === "OPTIONS") {
        return new Response(null, {headers: headersOBJ});
    }

    headersOBJ.set("content-type", "application/json");
    return new Response(JSON.stringify("Gurka"), {headers: headersOBJ});
}

Deno.serve(handler);