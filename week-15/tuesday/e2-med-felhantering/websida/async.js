const req = new Request("http://localhost:8000/randomArray");

document.querySelector("button").addEventListener("click", () => {
    driver();
});

async function getResp() {
    try {
        let resp = await fetch(req);
        if (resp.ok) {
            return resp.json();
        } else {
            return resp.status;
        }
    } catch (error) {
        return false;
    }
}

async function driver() {
    let resp = await getResp();
    document.querySelector("#numbers").innerHTML = "";
    if (resp === false) {
        document.querySelector("#numbers").textContent = "Network error";
    } else if (resp === 400) {
        document.querySelector("#numbers").textContent = `${resp}, Bad request`;
    } else {
        for (let num of resp) {
            let div = document.createElement("div");
            div.textContent = num;
            document.querySelector("#numbers").appendChild(div);
        }
    }
}