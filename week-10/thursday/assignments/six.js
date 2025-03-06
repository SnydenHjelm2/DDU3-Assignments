let data = Deno.readTextFileSync("dogs.csv");
data = data.split("\n");

function handler(req) {
    console.log(data);
    let html = `<h1>Dogs</h1><ul>`;

    for (let i=0; i<data.length; i++) {
        if (i===0 || i===data.length-1) {continue};
        let dogData = data[i].split(",");
        if (i === data.length - 2) {
            html += `<li>${dogData[0]} is a ${dogData[1]} (${dogData[2]}) that loves ${dogData[3]}</li></ul>`;
        } else {
            html += `<li>${dogData[0]} is a ${dogData[1]} (${dogData[2]}) that loves ${dogData[3]}</li>`;
        }
    }

    html += `<style> body { background-color: lightblue; color: darkblue; font-family: Helvetica;}</style>`;
    return new Response(html, {headers: {"Content-Type": "text/html"}});
}

Deno.serve(handler);