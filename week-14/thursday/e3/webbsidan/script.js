let req = new Request("http://localhost:8000/randomStatus");

fetch(req).then((x) => x.status).then(printStatus);

function printStatus(rec) {
    document.querySelector("main").innerHTML = rec;
    document.querySelector("main").style.fontSize = "40px";
}