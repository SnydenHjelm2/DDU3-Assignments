export function getAge() {
    let age = Deno.args;
    age = parseInt(age[0]);
    let data = Deno.readTextFileSync("dogs.csv");
    data = data.split("\n");

    return {age: age, data: data};
}