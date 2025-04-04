const req = new Request("http://localhost:8000/randomArray");

document.querySelector("button").addEventListener("click", () => {
    driver();
});

async function getArray() {
    let a = await fetch(req);
    return a;
}

async function driver() {
    let a = await getArray();
    a = await a.json();

    document.querySelector("#numbers").innerHTML = "";
    for (let num of a) {
        let div = document.createElement("div");
        div.textContent = num;
        document.querySelector("#numbers").appendChild(div);
    }
}