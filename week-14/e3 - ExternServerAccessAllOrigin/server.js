function handler(req) {
    const CORS = new Headers();
    CORS.set("Access-Control-Allow-Origin", "*");
    CORS.set("Content-Type", "application/json");
    console.log(CORS);
    if (req.method === "OPTIONS") {
        return new Response(null, {headers: CORS});
    }

    if (req.method === "GET" && req.url === "http://localhost:8000/randomColor") {
        let colors = ["pink", "lime", "skyblue", "lightgreen", "gold"];
        // let chosenColor = colors[Math.floor(Math.random() * colors.length)];
        let a = [];
        let uniques = false;
        while (!uniques) {
            let colorOne = colors[Math.floor(Math.random() * colors.length)];
            let colorTwo = colors[Math.floor(Math.random() * colors.length)];

            if (colorOne === colorTwo) {
                continue;
            } else {
                a.push(colorOne, colorTwo);
                uniques = true;
            }
        }
        // return new Response(chosenColor, {headers: CORS});
        return new Response(JSON.stringify(a), {headers: CORS});
    } else {
        return new Response("Invalid Request", {status: 400, headers: CORS});
    }
}

Deno.serve(handler);