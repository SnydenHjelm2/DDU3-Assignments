let req = new Request("http://localhost:8000/randomArray");

document.querySelector("button").addEventListener("click", () => {
    fetch(req).then(respHandler, rejHandler).then(handleStuff);
});

function handleStuff(reso) {
    document.querySelector("#numbers").innerHTML = "";
    if (reso === 400) {
        document.querySelector("#numbers").textContent = `${reso}, Bad request`;
    } else if (reso === false) {
        document.querySelector("#numbers").textContent = "Network error";
    } else {
        for (let num of reso) {
            let div = document.createElement("div");
            div.textContent = num;
            document.querySelector("#numbers").appendChild(div);
        }
    }
}

function respHandler(resp) {
    if (resp.ok) {
        return resp.json();
    } else {
        return resp.status;
    }
}

function rejHandler(resp) {
    return false;
}