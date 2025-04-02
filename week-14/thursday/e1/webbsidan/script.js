let req = new Request("http://localhost:8000/wrongResource");

let resp = fetch(req);
resp.then(handleResp);

function handleResp(resp) {
    console.log(resp);
}