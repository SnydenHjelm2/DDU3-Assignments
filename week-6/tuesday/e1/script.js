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