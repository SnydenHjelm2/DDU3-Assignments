let text = Deno.args;

for (let i=0; i<text.length; i++) {
    console.log(`${i+1}. ${text[i]}`);
}