function handler(req) {
    const headers = new Headers();
    headers.set("Access-Control-Allow-Origin", "*");
    // headers.set("Content-Type", "application/json");
    if (req.method === "OPTIONS") {
        return new Response(null, {headers: headers});
    }

    if (req.method === "GET" && req.url === "http://localhost:8000/randomColor") {
        let colors = ["pink", "lime", "skyblue", "lightgreen", "gold"];
        return new Response(colors[Math.floor(Math.random() * colors.length)], {headers: headers});
        // let a = [];
        // let uniques = false;
        // while (!uniques) {
        //     let colorOne = colors[Math.floor(Math.random() * colors.length)];
        //     let colorTwo = colors[Math.floor(Math.random() * colors.length)];

        //     if (colorOne !== colorTwo) {
        //         uniques = true;
        //     } 
        // }
        // return new Response(JSON.stringify(a), {headers: CORS});
    } else {
        return new Response("Invalid Request", {status: 400, headers: headers});
    }
}

Deno.serve(handler);