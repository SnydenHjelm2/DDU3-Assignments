let req = new Request("http://localhost:8000/die");

document.querySelector("button").addEventListener("click", () => {
    fetch(req).then(handleResp).then(printResult);
    // let fetchResp = fetch(req);
    // let resource = fetchResp.then(handleResp);
    // resource.then(printResult);
});


function handleResp(resp) {
    console.log(resp.status);
    if (resp.ok) {
        return resp.text();
    } else {
        return "Server is out of order" + ` ${resp.status}`;
    }
}

function printResult(rec) {
    document.querySelector("main").innerHTML = rec;
    document.querySelector("main").style.fontSize = "40px";
}