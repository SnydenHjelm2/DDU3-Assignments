const req = new Request("http://localhost:8000/");
fetch(req).then(resp => {
    if (resp.ok) {
        return resp.json();
    } else {
        console.log("We are out of luck!");
        return;
    }
}).then(reso => {
    console.log(reso);
})