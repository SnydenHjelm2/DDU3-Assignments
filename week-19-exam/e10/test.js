// async function bla() {
//     try {
//         await fetch("http://localhost:8000");
//         console.log("yay")
//     } catch (e) {
//         console.log("Oh no!!")
//     }
// }

// bla();

try {
        fetch("http://localhost:8000").then(resp => {
        if (!resp.ok) {
            throw Error("Fuck you!");
        } else {
            console.log("ahhhh")
        }
    })
} catch (e) {
    console.log("Oh no!!")
}