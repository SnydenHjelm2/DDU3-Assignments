let data = Deno.readTextFileSync("dogs.csv");

data = data.split("\n");
console.log("Dogs:");
for (let i=0; i<data.length; i++) {
    if (i===0 || i===data.length-1) {continue};
    let dogData = data[i].split(",");
    let obj = {
        name: dogData[0],
        breed: dogData[1],
        num: dogData[2],
        food: dogData[3]
    }
    console.log(`- ${obj.name} is a ${obj.breed} (${obj.num}) that loves ${obj.food}`);
}