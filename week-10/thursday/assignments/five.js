function handler(req) {
    let html = Deno.readTextFileSync("dogs.html");
    return new Response(html, {headers: {"Content-Type": "text/html"}});
}

Deno.serve(handler);