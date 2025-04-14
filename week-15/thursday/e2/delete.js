document.querySelector("button").addEventListener("click", deleteAcc);

async function deleteAcc() {
    const options = {method: "DELETE", body: JSON.stringify({name: "SnydenHjelm", password: "gurka123"}), headers: {"content-type": "application/json"}};
    let req = new Request("https://maumt.reipino.com/du3/servers/accounts/manage/", options);
    try {
        let resp = await fetch(req);
        if (resp.ok) {
            document.querySelector("p").textContent = "Deleted successfully " + resp.status;
        } else {
            document.querySelector("p").textContent = "Error " +  resp.status;
        }
    } catch (e) {
        document.querySelector("p").textContent = "Network error";
        return;
    }
}