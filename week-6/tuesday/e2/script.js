function makeAlphabet(alph) {
    return alph.split("");
}

function makeCodedAlphabet(alph) {
    let alph1 = makeAlphabet(alph);
    let alph2 = makeAlphabet(alph);
    let code = [];

    alph1.forEach((letter) => {
        while (true) {
            let i = Math.floor(Math.random() * alph2.length);
            if (!(alph2[i] === letter)) {
                code.push([letter, alph2[i]]);
                alph2.splice(i, 1);
                break;
            } else if (alph2[i] === "z" && letter === "z") {
               return makeCodedAlphabet(alphabet);
            }
        }
    });

    return code;
}

function printCode(code, key) {
    
    for (let codeArr of code) {
        if (key.toLowerCase() === codeArr[0]) {
            codedMessage.textContent += codeArr[1];
            decodedMessage.textContent += codeArr[0];
            return;
        }
    }

    if (key === "Backspace" || key === "Control" || key === "Tab" || key === "Shift" || key === "CapsLock") {
        return
    } else {
        codedMessage.textContent += key;
        decodedMessage.textContent += key;
    }
}


let alphabet = "abcdefghijklmnopqrstuvwxyz";
let codedAlph = makeCodedAlphabet(alphabet);
console.log(codedAlph);
const input = document.querySelector("input");
const codedMessage = document.querySelector("#coded");
const decodedMessage = document.querySelector("#decoded");

input.addEventListener("keydown", (e) => {
    printCode(codedAlph, e.key);
});