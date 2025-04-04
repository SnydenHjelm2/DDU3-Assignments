const req = new Request("http://localhost:8000/randomArray");

document.querySelector("#control").addEventListener("click", () => {
    fetch(req).then((r) => r.json()).then(displayNumbers);
});

function displayNumbers(reso) {
    document.querySelector("#numbers").innerHTML = "";
    for (let num of reso) {
        let div = document.createElement("div");
        div.textContent = num;
        document.querySelector("#numbers").appendChild(div);
    }
}