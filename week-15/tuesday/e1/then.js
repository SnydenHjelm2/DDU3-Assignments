const req = new Request("http://localhost:8000/random");

document.querySelector("button").addEventListener("click", () => {
    fetch(req).then((r) => r.text()).then(changeBg);
});

function changeBg(reso) {
    console.log(reso);
    let num = parseInt(reso);
    if (num % 2 === 0) {
        document.body.style.backgroundColor = "skyblue";
    } else {
        document.body.style.backgroundColor = "tomato";
    }
}