const req = new Request("https://maumt.reipino.com/du3/servers/accounts/manage/", {method: "POST", body: JSON.stringify({name: "SnydenHjelm", password: "gurka123"}), headers: {"content-type": "application/json"}});

document.querySelector("button").addEventListener("click", create);
document.querySelector("#button2").addEventListener("click", test);

async function create() {
    let resp = await fetch(req);
    document.body.innerHTML = resp.status;
}

async function test() {
    let resp = await fetch("https://maumt.reipino.com/du3/servers/accounts/");
    resp = await resp.json();
    console.log(resp);
    for (let obj of resp) {
        document.body.innerHTML += `<p>${obj.name}, ${obj.password}, ${obj.dateCreated}, ${obj.loggedIn}</p>`;
    }
}