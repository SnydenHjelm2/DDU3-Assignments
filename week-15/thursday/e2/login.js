document.querySelector("button").addEventListener("click", async () => {
    let options = {method: "POST", body: JSON.stringify({name: "SnydenHjelm", password: "gurka123"}), headers: {"content-type": "application/json"}};
    const req = new Request("https://maumt.reipino.com/du3/servers/accounts/login/", options);

    try {
        let resp = await fetch(req);
        if (resp.ok) {
            document.querySelector("p").textContent = "Successfully logged in " + resp.status;
        } else {
            document.querySelector("p").textContent = "Error " + resp.status;
        }
    } catch (e) {
        document.querySelector("p").textContent = "Network error";
    }
})