let data = JSON.parse(Deno.readTextFileSync("dogs.json"));
let id = 1;
for (let obj of data) {
    obj.id = id;
    id++;
}
Deno.writeTextFileSync("dogs.json", JSON.stringify(data));
console.log("Done!");