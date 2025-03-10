function remover() {
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

remover();