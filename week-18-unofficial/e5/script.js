async function driver() {
    let req1 = new Request("https://jsonplaceholder.typicode.com/posts/");
    let resp = await fetch(req1);
    let reso = await resp.json();

    for (let post of reso) {
        let p = document.createElement("p");
        p.innerHTML = `${post.title}<br> ${post.body}`;
        document.querySelector("#list").appendChild(p);
    }

    let req2 = new Request("https://jsonplaceholder.typicode.com/posts/1");
    let resp2 = await fetch(req2);
    let reso2 = await resp2.json();
    let p2 = document.createElement("p");
    p2.innerHTML = `Title: ${reso2.title}<br>
    Body: ${reso2.body}<br>
    userID: ${reso2.userId}<br>
    postID: ${reso2.id}`;
    document.querySelector("#details").appendChild(p2);
    return;
}

driver();