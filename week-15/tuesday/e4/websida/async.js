const req = new Request("http://localhost:8000/random");

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
    let numArr = [];
    for (let resp of arr) {
        let num = await resp.text();
        numArr.push(num);
    }
    numArr = numArr.sort((a, b) => parseInt(a) - parseInt(b));
    for (let i=0; i<numArr.length; i++) {
        let div = document.createElement("div");
        div.textContent = `${i+1}) ${numArr[i]}`;
        document.querySelector("#numbers").appendChild(div);
    }
}