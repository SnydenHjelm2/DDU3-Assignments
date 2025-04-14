document.querySelector("#create-b").addEventListener("click", async() => {
    let username = document.querySelector("#username").value;
    let pwd = document.querySelector("#pwd").value;
    const req = new Request("https://maumt.reipino.com/du3/servers/accounts/manage/", {
        method: "POST",
        body: JSON.stringify({name: username, password: pwd}),
        headers: {"content-type": "application/json"}
    });

    let resp = await fetch(req);
    if (resp.ok) {
        document.querySelector("#create p").textContent = "User successfully created";
        document.body.style.backgroundColor = "lime";
        document.querySelector("#username").value = "";
        document.querySelector("#pwd").value = "";
    } else {
        if (resp.status === 409) {
            document.querySelector("#create p").textContent = "Username already exists";
            document.body.style.backgroundColor = "indianred";
        } else {
            document.querySelector("#create p").textContent = "Invalid request";
            document.body.style.backgroundColor = "indianred";
        }
    }
});

document.querySelector("#login-b").addEventListener("click", async() => {
    let username = document.querySelector("#login-username").value;
    let pwd = document.querySelector("#login-pwd").value;

    let req = new Request("https://maumt.reipino.com/du3/servers/accounts/login/", {
        method: "POST",
        body: JSON.stringify({name: username, password: pwd}),
        headers: {"content-type": "application/json"}
    });

    let resp = await fetch(req);
    if (resp.ok) {
        document.querySelector("#login p").textContent = `Successfull, Welcome ${username}!`;
        document.body.style.backgroundColor = "lime";
        document.querySelector("#login-username").value = "";
        document.querySelector("#login-pwd").value = "";
    } else {
        if (resp.status === 404) {
            document.querySelector("#login p").textContent = "Username or password incorrect";
            document.body.style.backgroundColor = "indianred";
        } else {
            document.querySelector("#login p").textContent = "Invalid request";
            document.body.style.backgroundColor = "indianred";
        }
    }
});