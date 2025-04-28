let req = new Request("https://jsonplaceholder.typicode.com/users");

async function getUsers() {
    let resp = await fetch(req);
    let reso = await resp.json();
    
    for (let user of reso) {
        let li = document.createElement("li");
        li.textContent = `${user.name}, ${user.email}`;
        document.querySelector("main ul").appendChild(li);
    }
}

getUsers();