const req = new Request("http:/localhost:8000/random");

document.querySelector("button").addEventListener("click", () => {
    driver();
});

async function getNums() {
    let respArr = [];
    for (let i=0; i<5; i++) {
        let resp = await fetch(req);
        respArr.push(resp);
    }
    return respArr;
}

async function driver() {
    let arr = await getNums();
    document.querySelector("#numbers").innerHTML = "";

    for (let i=0; i<arr.length; i++) {
        let reso = await arr[i].text();
        console.log(reso);

        let div = document.createElement("div");
        div.textContent = `${i+1}) ${reso}`;
        document.querySelector("#numbers").appendChild(div);
    }
}