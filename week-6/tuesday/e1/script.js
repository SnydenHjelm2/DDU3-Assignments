function removeDuplicateNumbers(arr) {
    let result = [];
    arr.forEach((num) => {
        if (!result.includes(num)) {
            result.push(num);
        }
    });
    return result;
}

function removeDupes2Arrays(arr1, arr2) {
    let result = [];
    arr1.forEach((num) => {
        if (!result.includes(num)) {
            result.push(num);
        }
    });

    arr2.forEach((num) => {
        if (!result.includes(num)) {
            result.push(num)
        }
    });

    return result;
}

function wordMatchingTemplate(arr, template) {
    let result = [];

    if (template === "*il") {
        result = arr.filter((string) => {
            return string.length === template.length && string[1] + string[2] === template[1] + template[2];
        });
    } else if (template === "m**a") {
        result = arr.filter((string) => {
            return string.length === template.length && string[0] + string[3] === template[0] + template[3];
        });
    }

    return result;
}

let a = [2,2,3,3,4,4,5,5,7,7,7,8,9,10,11,11,12,12,12,12];
let a2 = [1,2,5,3,4,4,5,5,7,8,7,8,9,10,11,11,13,12,22,22,78];
let a3 = ["bil", "fil", "sill", "gill", "pil"];
let a4 = ["mila", "fila", "mala", "måla", "mana", "hana"];

console.log(removeDuplicateNumbers(a));
console.log(removeDupes2Arrays(a, a2));
console.log(wordMatchingTemplate(a3, "*il"));
console.log(wordMatchingTemplate(a4, "m**a"));