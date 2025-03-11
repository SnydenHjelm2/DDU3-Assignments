function handler(req) {
    let message = `<head><meta charset="utf-8"></head>
    <p>Här är dina headers</p>`;
    let headers = req.headers.entries();
    for (let head of headers) {
        message += `<li>${head[0]}: ${head[1]}</li>`;
    }

    return new Response(`<ul>${message}</ul>`, {headers: {"Content-Type": "text/html"}});
}

Deno.serve(handler);