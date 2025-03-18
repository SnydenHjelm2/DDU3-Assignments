import {serveDir, serveFile} from "jsr:@std/http/";

const handler = (req) => {
    let html = Deno.readTextFileSync("five.html");

    if (req.url.substring(22) === "five.css") {
        return new Response(Deno.readTextFileSync("five.css"), {headers: {"Content-Type": "text/css"}});
    };

    return new Response(html, {headers: {"Content-Type": "text/html"}});
}

Deno.serve(handler);