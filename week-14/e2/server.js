function handler(req) {
    console.log(req);
    return new Response("");
}

Deno.serve(handler);