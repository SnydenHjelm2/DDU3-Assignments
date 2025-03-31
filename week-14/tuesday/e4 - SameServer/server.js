import {serveDir, serveFile} from "jsr:@std/http";

function handler(req) {
    let url = new URL(req.url);
    if (req.method === "GET") {
        if (url.pathname === "/randomColor") {
            let r = Math.floor(Math.random() * 255) + 1;
            let g = Math.floor(Math.random() * 255) + 1;
            let b = Math.floor(Math.random() * 255) + 1;
            return new Response(`rgb(${r}, ${g}, ${b})`);
        } else if (url.pathname === "/") {
            return serveFile(req, "index.html");
        } else if (url.pathname === "/static/local.js" || url.pathname === "/static/icon.png") {
            return serveDir(req, {fsRoot: "public", urlRoot: "static"});
        } else {
            return new Response("Bad Request", {status: 400});
        }
    } else {
        return new Response("Bad Request", {status: 400});
    }
}

Deno.serve(handler);