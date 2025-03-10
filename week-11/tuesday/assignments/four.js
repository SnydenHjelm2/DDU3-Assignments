function handler(req) {
    Deno.readTextFileSync("four.csv");
    let args = Deno.args;

    if (args[0] === "add") {
        Deno.writeTextFileSync("four.csv", args[1] + ",\n", {append: true});
        console.log(args[1] + " added");
    } else {
        console.log("Invalid first argument");
    }
}

handler();