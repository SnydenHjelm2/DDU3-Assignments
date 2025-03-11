function addAndRemove() {
    let file = Deno.readTextFileSync("four.csv");
    let args = Deno.args;

    if (args[0] === "add") {
        if (!args[1]) {console.log("Empty"); return};
        Deno.writeTextFileSync("four.csv", args[1] + ",\n", {append: true});
        console.log(args[1] + " added");
    } else if (args[0] === "remove") {
        let arr = file.split(",\n");
        if (!arr.some((x) => x === args[1])) {console.log("404"); return};
        for (let item of arr) {
            if (item) {
                if (item === args[1]) {
                    let index = arr.indexOf(args[1]);
                    arr.splice(index, 1);
                }
            }
        }
        let text = arr.join(",\n");
        console.log(`${args[1]} removed`);
        Deno.writeTextFileSync("four.csv", text);
    } else {
        console.log("Invalid first argument");
    }
}

async function handler(req) {
    if (req.method === "POST") {
        let userRequest = await req.text();
        Deno.writeTextFileSync("four.csv", `${userRequest},\n`, {append: true});

        return new Response(`<head><meta charset="uft-8"><p>${userRequest} was added</p>`, {headers: {"Content-Type": "text/html"}});
    }

    return writeHTML();
}

function writeHTML() {
    let html = `<head><meta charset="utf-8"></head>
    <h1>Kreativa ord</h1>
    <body>
    <ul>
    `;
    
    let fileContent = Deno.readTextFileSync("four.csv");
    fileContent = fileContent.split(",\n");
    fileContent = fileContent.filter((x) => x != "");

    for (let i=0; i<fileContent.length; i++) {
        if (i===fileContent.length-1) {
            html += `<li>${fileContent[i]}</li></ul></body>
            <style> h1 {background-color: orange; border-radius: 10px} body {background-color: yellow;}</style>
            `;
        } else {
            html += `<li>${fileContent[i]}</li>`;
        }
    }

    return new Response(html, {headers: {"Content-Type": "text/html"}});
}

addAndRemove();
Deno.serve(handler);