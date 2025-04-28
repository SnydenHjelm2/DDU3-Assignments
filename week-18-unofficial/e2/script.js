document.querySelector("button").addEventListener("click", makePost);

async function makePost() {
    let title = document.querySelector("#title").value;
    let body = document.querySelector("#body").value;
    let req = new Request("https://jsonplaceholder.typicode.com/posts", {method: "POST", body: JSON.stringify({title: title, body: body}), headers: {"content-type": "application/json"}});

    let resp = await fetch(req);
    if (resp.ok) {
        let reso = await resp.json();
        console.log(reso);
        document.querySelector("#status").textContent = "Post ID: " + reso.id;
        document.querySelector("#title").value = "";
        document.querySelector("#body").value = "";
        return;
    } else {
        document.querySelector("#status").textContent = "Something broke";
        return;
    }
}