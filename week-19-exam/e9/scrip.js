let dogs = [];
// const req = new Request("https://mockup.com/dog");
const reqFake = new Request("http://localhost:8000/");

async function getDogs() {
    for (let i=0; i<4; i++) {
        let resp = await fetch(reqFake);
        let reso = await resp.json();
        dogs.push(reso);
    }
    console.log(dogs)
    // for (let dog of dogs) {
    //     console.log(dog.name);
    // }
}

getDogs();
