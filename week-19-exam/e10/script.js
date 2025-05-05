async function dogBookLogin(username, pwd) {
    let credentials = {
        credentials: {username: username, password: pwd}
    }

    const req = new Request("https://thedogbook.org/login", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {"content-type": "application/json"}
    });

    let resp = await fetch(req);
    console.log(resp.status);
}