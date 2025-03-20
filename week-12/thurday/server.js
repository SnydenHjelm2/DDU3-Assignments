import { serveFile } from "jsr:@std/http";
import {returnStatusMsg, jsonHeader, isJSON} from "./functions.js";

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
            } else {
                return returnStatusMsg(404);
            }
        }

        if (url.pathname == "/xyz") {
            console.log("test");
            return returnStatusMsg(404);
        } else if (url.pathname === "/dogs") {
            return new Response(Deno.readTextFileSync("dogs.json"), {headers: jsonHeader()});
        }
    } else if (request.method === "POST") {
        let dogIDRoute = new URLPattern({pathname: "/dogs/:id"});
        let dogIDMatch = dogIDRoute.exec(url);
        let dogTreatRoute = new URLPattern({pathname: "/dogs/:id/treat"});
        let dogTreatMatch = dogTreatRoute.exec(url);
        console.log(Boolean(dogTreatMatch));
        if (dogIDMatch) {
            return returnStatusMsg(405);
        } else if (dogTreatMatch) {
            let id = dogTreatMatch.pathname.groups.id;
            let treat = await request.json();
            let data = JSON.parse(Deno.readTextFileSync("dogs.json"));
            let dog = data.find((x) => x.id === parseInt(id));
            if (dog) {
                let index = data.findIndex((x) => x.id === dog.id);

                dog.favoriteTreats.push(treat);
                data.splice(index, 1, dog);
                Deno.writeTextFileSync("dogs.json", JSON.stringify(data));
                return new Response(`{"success": "Dog-treat was successfully added to the dog."}`, {status: 200, headers: jsonHeader()});
            }

        }
        if (url.pathname === "/dogs") {
            let data = await request.json();
            if (!data.name || !data.age || !data.breed || !data.favoriteTreats) {return new Response(`{"error": "Bad request"}`, {status: 400, headers: jsonHeader()})};
            let json = JSON.parse(Deno.readTextFileSync("dogs.json"));
            data.id = json.length + 1;
            json.push(data);
            Deno.writeTextFileSync("dogs.json", JSON.stringify(json));
            return new Response(JSON.stringify(data), {status: 201, headers: jsonHeader()});
        }
    } else if (request.method === "DELETE") {
        let deleteRoute = new URLPattern({pathname: "/dogs/:id"});
        let deleteMatch = deleteRoute.exec(url);
        if (deleteMatch) {
            let id = deleteMatch.pathname.groups.id;
            let data = JSON.parse(Deno.readTextFileSync("dogs.json"));
            let dog = data.find((x) => x.id === parseInt(id));

            if (dog) {
                let index = data.findIndex((x) => x.id === dog.id);
                data.splice(index, 1);
                Deno.writeTextFileSync("dogs.json", JSON.stringify(data));
                return new Response(`{"success": "The dog was successfully deleted"}`, {status: 200, headers: jsonHeader()});
            } else {
                return returnStatusMsg(404);
            }
        }

        if (url.pathname === "/dogs") {
            return returnStatusMsg(405);
        }
    } else if (request.method === "PATCH") {
        if (!isJSON(request.headers.get("content-type"))) {
            return returnStatusMsg(400);
        }

        let dogIDRoute = new URLPattern({pathname: "/dogs/:id"});
        let dogIDMatch = dogIDRoute.exec(url);
        if (dogIDMatch) {
            let dogID = dogIDMatch.pathname.groups.id;
            let data = JSON.parse(Deno.readTextFileSync("dogs.json"));
            let dog = data.find((x) => x.id === parseInt(dogID));

            if (dog) {
                let patchData = await request.json();
                let dogName = false;
                let dogAge = false;
                let dogBreed = false;
                let dogTreats = false;

                if (patchData.name && typeof patchData.breed === "string") {
                    dog.name = patchData.name;
                    dogName = true;
                }

                if (patchData.age && patchData.age > 0) {
                    dog.age = patchData.age;
                    dogAge = true;
                }

                if (patchData.breed && typeof patchData.breed === "string") {
                    dog.breed = patchData.breed;
                    dogBreed = true;
                }

                if (patchData.favoriteTreats && typeof Array.isArray(patchData.favoriteTreats)) {
                    dog.favoriteTreats = patchData.favoriteTreats;
                }

                if (!dogName && !dogAge && !dogBreed && !dogTreats) {
                    return returnStatusMsg(400);
                } else {
                    let index = data.findIndex((x) => x.id === dog.id);
                    data.splice(index, 1, dog);
                    Deno.writeTextFileSync("dogs.json", JSON.stringify(data));
                    return new Response(`{"sucess": "The dog was edited"}`, {status: 200, headers: jsonHeader()});
                }
            } else {
                return returnStatusMsg(404);
            }
        } 
    }
    

    return new Response("TODO...");
}

Deno.serve(handler);