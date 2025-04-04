const req = new Request("http://localhost:8000/random");

document.querySelector("button").addEventListener("click", () => {
    driver();
});

async function getNumber() {
    let response = await fetch(req);
    return response;
}

async function driver() {
    let num = await getNumber();
    num = await num.text();
    console.log(num);
    if(parseInt(num) % 2 === 0) {
        document.body.style.backgroundColor = "skyblue";
    } else {
        document.body.style.backgroundColor = "tomato";
    }
}