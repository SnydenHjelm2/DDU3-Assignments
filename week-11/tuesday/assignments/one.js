function handler(req) {
    let method = req.method;
    let url = req.url;
    let userAgent = req.headers.get("user-agent");

    return new Response(`
        <!DOCTYPE html>
        <head><meta charset="utf-8"></head>
        <p>Här är lite information om din förfrågan:</p>
        <ul>
            <li>URL: ${url}</li>
            <li>Method: ${method}</li>
            <li>User-Agent: ${userAgent}</li>
        <ul>
        `, {headers: {"Content-Type": "text/html"}});
}

Deno.serve(handler);