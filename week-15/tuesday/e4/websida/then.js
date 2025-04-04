const req = new Request("http://localhost:8000/random");

document.querySelector("button").addEventListener("click", () => {
    let a = [];
    for (let i=0; i<5; i++) {
        a.push(fetch(req));
    }
    handlePromises(a);
});

function handlePromises(promArr) {
    document.querySelector("#numbers").innerHTML = "";
    for (let i=0; i<promArr.length; i++) {
        let resoProm = promArr[i].then((r) => r.text());
        resoProm.then((r) => {
            let div = document.createElement("div");
            div.textContent = `${i}) ${r}`;
            div.classList.add("nums");
            document.querySelector("#numbers").appendChild(div);
        });
    }
}

// function sortNumbers() {
//     let allNums = document.querySelectorAll(".nums");
//     console.log(allNums);
//     let numArr = [];
//     for (let num of allNums) {
//         numArr.push(parseInt(num));
//     }

//     console.log(numArr);
// }