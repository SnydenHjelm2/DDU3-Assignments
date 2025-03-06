import { filterDogs } from "./four-three.js";
import {getAge} from "./four-two.js";
let ageAndData = getAge();
let dogs = filterDogs(ageAndData.age, ageAndData.data);
for (let dog of dogs) {
    console.log(dog);
}
