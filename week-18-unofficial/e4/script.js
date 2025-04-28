document.querySelector("button").addEventListener("click", deletePost);

async function deletePost() {
    let postID = document.querySelector("input").value;
    let req = new Request(`https://jsonplaceholder.typicode.com/posts/${postID}`, {
        method: "DELETE",
        headers: {"content-type": "application/json"}
    });

    let resp = await fetch(req);
    if (resp.ok) {
        document.querySelector("p").textContent = "Delete successfull!";
        document.body.style.backgroundColor = "lime";
    } else {
        document.querySelector("p").textContent = "Oh nooooo.... :(((((";
        document.body.style.backgroundColor = "tomato";
    }
}