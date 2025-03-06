let stuff = Deno.args;
let total = 0;

for (let thing of stuff) {
    if (isNaN(parseInt(thing))) {continue}
    else {total += parseInt(thing)};
}

console.log(total);