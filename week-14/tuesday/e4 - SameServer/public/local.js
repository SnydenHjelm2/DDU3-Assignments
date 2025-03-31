const req = new Request("http://localhost:8000/randomColor", {method: "GET"});

fetch(req).then(x => x.text()).then(handleResource);

function handleResource(r) {
    document.body.style.backgroundColor = r;
}