export function filterDogs(age, data) {
    let dogs = [];
    for (let i=0; i<data.length; i++) {
        if (i===0 || i===data.length-1) {continue};
        let dogData = data[i].split(",");
        let dogObj = {
            name: dogData[0],
            breed: dogData[1],
            num: dogData[2],
            food: dogData[3]
        }
    
        if (dogObj.num > age) {
            dogs.push(dogObj.name);
        }
    }

    return dogs;
}


