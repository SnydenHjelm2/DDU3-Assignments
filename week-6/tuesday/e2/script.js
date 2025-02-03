function makeAlphabet(alph) {
    return alph.split("");
}

function makeCodedAlphabet(alph) {
    let alph1 = makeAlphabet(alph);
    let alph2 = makeAlphabet(alph);
    let code = [];

    alph1.forEach((letter) => {
        let runWhile = true;

        while (runWhile) {
            let randomNumber = Math.floor(Math.random() * alph2.length);
            if (alph2[randomNumber] === letter) {
                continue;
            } else {
                code.push([letter, alph2[randomNumber]]);
                alph2.splice(randomNumber, 1);
                break;
            }
        }
    });

    return code;
}

function printCode(code, key) {
    
    for (let codeArr of code) {
        if (key === codeArr[0]) {
            codedMessage.textContent += codeArr[1];
            decodedMessage.textContent += codeArr[0];
            return;
        }
    }

    codedMessage.textContent += key;
    decodedMessage.textContent += key;
}


let alphabet = "abcdefghijklmnopqrstuvwxyz";
let codedAlph = makeCodedAlphabet(alphabet);
console.log(codedAlph);
const input = document.querySelector("input");
const codedMessage = document.querySelector("#coded");
const decodedMessage = document.querySelector("#decoded");

input.addEventListener("keypress", (e) => {
    printCode(codedAlph, e.key);
});