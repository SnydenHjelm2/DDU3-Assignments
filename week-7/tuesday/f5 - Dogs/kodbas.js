class Dog {
  static all = []
  static breeds(region) {
    let data = [];
    let ownersInRegion = Owner.all.filter((x) => x.region === region);
    let allDogsInRegion = ownersInRegion.map((x) => x.dogIds);
    allDogsInRegion = allDogsInRegion.flat();
    allDogsInRegion = Dog.all.filter((x) => allDogsInRegion.includes(x.id));
    let dogBreeds = allDogsInRegion.map((x) => x.breed);
    
    let dogBreedsUsed = [];
    for (let breed of dogBreeds) {
      if (dogBreedsUsed.includes(breed)) {continue;}
      dogBreedsUsed.push(breed);

      let allDogsFromBreedInRegion = allDogsInRegion.filter((x) => x.breed === breed);
      let totalAliveDogs = allDogsFromBreedInRegion.filter((x) => x.died === 0).length;
      let totalDogsDeadOrAlive = allDogsFromBreedInRegion.length;
      let allDeadDogs = allDogsFromBreedInRegion.filter((x) => x.died != 0);
      let totalAge = 0
      allDeadDogs.forEach((x) => {
        let age = x.died - x.born;
        totalAge += age;
      });
      let avgAgeInRegion = totalAge / allDeadDogs.length;
      let allDogsFromBreed = Dog.all.filter((x) => x.breed === breed);
      let totalAgeAllDogs = 0;
      allDogsFromBreed.forEach((x) => {
        let age;
        if (x.died === 0) {
          age = 2025 - x.born;
        } else {
          age = x.died - x.born;
        }
        totalAgeAllDogs += age;
      });
      let avgAgeAllDogs = totalAgeAllDogs / allDogsFromBreed.length;

      data.push({
        breed: breed,
        nDogsAlive: totalAliveDogs,
        nDogsTotal: totalDogsDeadOrAlive,
        averageAgeInRegion: avgAgeInRegion,
        averageAgeTotal: avgAgeAllDogs
      });
    }
    return data;
  }
  constructor(id, weight, born, died, breed, kennelId) {
    this.constructor.all.push(this)
    this.id = id;
    this.weight = weight; // Kg
    this.born = born; // year, four digits
    this.died = died; // year, four digits; 0 if dog still alive
    this.breed = breed; // String, for example: "Boxer"
    this.kennelId = kennelId; // Kennel in which the dog was born
  }
}

class Kennel {
  static all = []
  constructor(id, breeds) {
    this.constructor.all.push(this)
    this.id = id;
    this.breeds = breeds; // array of strings, for example: ["Boxer", "Husky"]
  }
}

class Owner {
  static all = []
  constructor(id, region, dogIds) {
    this.constructor.all.push(this)
    this.id = id;
    this.region = region;
    this.dogIds = dogIds; // Array of dog IDs
  }
}

let d1 = new Dog(1, 30, 2018, 0, "Husky", 1);
let d2 = new Dog(2, 35, 2015, 2023, "Husky", 1);
let d3 = new Dog(3, 18, 2015, 2024, "Pug", 1);
let d4 = new Dog(4, 18, 2019, 0, "Beagle", 2);
let d5 = new Dog(5, 18, 2021, 0, "Dachshund", 2);
let d6 = new Dog(6, 18, 2011, 2025, "Dalmatian", 2);
let d7 = new Dog(7, 18, 2020, 0, "Beagle", 2);
let d8 = new Dog(8, 18, 2021, 0, "Beagle", 2);
let d9 = new Dog(9, 18, 2022, 0, "Beagle", 2);
let o1 = new Owner(1, "Alaska", [1, 2, 3]); //Oxygen haha
let o2 = new Owner(2, "Missouri", [4, 5, 6]); //Oxygen gas haha
let o3 = new Owner(3, "Missouri", [7, 8, 9]); //Ozone haha