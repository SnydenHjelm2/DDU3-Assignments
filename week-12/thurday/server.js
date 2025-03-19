import { serveFile } from "jsr:@std/http";
import {return404, jsonHeader} from "./functions.js";

async function handler(request) {
    const url = new URL(request.url);

    if (url.pathname == "/") {
        return serveFile(request, "tests.html");
    }

    if (request.method === "GET") {
        let dogIDRoute = new URLPattern({pathname: "/dogs/:id"});
        let dogIDMatch = dogIDRoute.exec(request.url);
        console.log(dogIDMatch);
        if (dogIDMatch) {
            let dogID = dogIDMatch.pathname.groups.id;
            let data = JSON.parse(Deno.readTextFileSync("dogs.json"));
            let dog = data.find((x) => x.id === parseInt(dogID));
            
            if (dog) {
                return new Response(JSON.stringify(dog), {status: 200, headers: jsonHeader()});
            }
        }

        if (url.pathname == "/xyz") {
            console.log("test");
            return return404();
        } else if (url.pathname === "/dogs") {
            return new Response("[]", {headers: jsonHeader()});
        }
    } else if (request.method === "POST") {
        if (url.pathname = "/dogs") {
            let data = await request.json();
            if (!data.name || !data.age || !data.breed || !data.favoriteTreats) {return new Response(`{"error": "Bad request"}`, {status: 400, headers: jsonHeader()})};
            let json = JSON.parse(Deno.readTextFileSync("dogs.json"));
            data.id = json.length + 1;
            json.push(data);
            Deno.writeTextFileSync("dogs.json", JSON.stringify(json));
            return new Response(JSON.stringify(data), {status: 201, headers: jsonHeader()});
        }
    } else if (request.method === "DELETE") {
        if (url.pathname = "/dogs") {
            return new Response(`{"error": "Method not allowed"}`, {status: 405, headers: jsonHeader()});
        }
    }
    

    return new Response("TODO...");
}

Deno.serve(handler);