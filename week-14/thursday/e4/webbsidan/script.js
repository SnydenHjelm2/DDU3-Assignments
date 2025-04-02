let req = new Request("http://localhost:8000/die");

document.querySelector("button").addEventListener("click", () => {
    fetch(req).then((x) => x.text()).then(displayDiceThrow);
});

function displayDiceThrow(rec) {
    document.querySelector("span").innerHTML = rec;
}