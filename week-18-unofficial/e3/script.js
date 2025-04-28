let req = new Request("https://jsonplaceholder.typicode.com/users/1", {
    method: "PUT",
    body: JSON.stringify({
        name: "The goat",
        email: "gopackgo@packers.com"
    }),
    headers: {"content-type": "application/json"}
});

async function editUser() {
    let resp = await fetch(req);
    if (resp.ok) {
        let reso = await resp.json();
        console.log(reso);
        document.querySelector("p").textContent = "Success!";
        document.body.style.backgroundColor = "lime";
    } else {
        document.querySelector("p").textContent = "Uh oh!";
        document.body.style.backgroundColor = "tomato";
    }
}

editUser();