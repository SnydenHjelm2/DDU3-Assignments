let req = new Request("http://localhost:8000/wrongResource");

fetch(req).then((x) => console.log(x));