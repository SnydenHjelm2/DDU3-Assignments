let req = new Request("https://jsonplaceholder.typicode.com/posts/1/comments");
let num = 1;

fetch(req).then((resp) => resp.json()).then((reso) => {
    for (let comment of reso) {
        let li = document.createElement("p");
        li.textContent = `Name: ${comment.name}, Email: ${comment.email}, Body: ${comment.body}`;
        if (num === 1) {
            li.style.backgroundColor = "grey";
            num = 2;
        } else {
            li.style.backgroundColor = "tomato";
            num = 1;
        }
        document.querySelector("ul").appendChild(li);
    }
});