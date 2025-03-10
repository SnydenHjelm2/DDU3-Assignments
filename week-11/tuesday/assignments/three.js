import {serveDir, serveFile} from "jsr:@std/http";

function handler(req) {
    if (req.url === "http://localhost:8000/") {
        return serveFile(req, "../../../../../../Desktop/For Fun Code/gbp/index.html");
    }
    return serveDir(req, {fsRoot: "../../../../../../Desktop/For Fun Code/gbp/images", urlRoot: "static"});
}

Deno.serve(handler);