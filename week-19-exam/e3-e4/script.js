//e3
// fetch("http://localhost:8000/").then(a => a.json()).then(b => b).then(c => console.log(c));

//e4
//A, C, B, E, D - correct guess
fetch("http://localhost:8000/")
    .then(resp => {
        console.log("C");
        return resp.json();
})
    .then(data => {
        console.log("B");
        fetch("http://localhost:8000/")
            .then(resp => resp.json())
            .then(data => console.log("D"));
        console.log("E");
});
console.log("A");