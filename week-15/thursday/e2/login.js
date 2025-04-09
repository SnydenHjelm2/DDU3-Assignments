document.querySelector("button").addEventListener("click", async () => {
    let options = {method: "POST", body: JSON.stringify({name: "SnydenHjelm", password: "gurka123"}), headers: {"content-type": "application/json"}};
    const req = new Request("https://maumt.reipino.com/du3/servers/accounts/login/", options);

    let resp = await fetch(req);
    console.log(resp);
})