let req = new Request("http://localhost:8000/die");

document.querySelector("button").addEventListener("click", () => {
    fetch(req).then((x) => x.text()).then(handleDiceThrow);
});
document.querySelector("main").style.fontSize = "30px";
document.querySelector("main").style.fontFamily = "Helvetica";

let handleDiceThrow = (rec) => {
    let recNum = parseInt(rec);
    switch (recNum) {
        case 1:
            document.querySelector(`#amount${rec}`).textContent = parseInt(document.querySelector(`#amount${rec}`).textContent) + 1;
            break;
        case 2:
            document.querySelector(`#amount${rec}`).textContent = parseInt(document.querySelector(`#amount${rec}`).textContent) + 1;
            break;
        case 3:
            document.querySelector(`#amount${rec}`).textContent = parseInt(document.querySelector(`#amount${rec}`).textContent) + 1;
            break;
        case 4:
            document.querySelector(`#amount${rec}`).textContent = parseInt(document.querySelector(`#amount${rec}`).textContent) + 1;
            break;
        case 5:
            document.querySelector(`#amount${rec}`).textContent = parseInt(document.querySelector(`#amount${rec}`).textContent) + 1;
            break;
        case 6:
            document.querySelector(`#amount${rec}`).textContent = parseInt(document.querySelector(`#amount${rec}`).textContent) + 1;
            break;
        default:
            return false;
    }

    document.querySelector("#die").textContent = rec;
}