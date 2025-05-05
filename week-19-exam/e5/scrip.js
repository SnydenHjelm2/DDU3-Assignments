async function e5() {
    let resp = await fetch("https://dog.info");
    console.log("First status: " + resp.status);
    let reso = await resp.json();
    console.log(reso);

    let resp2 = await fetch("https://dog.info");
    console.log("Second status: " + resp2.status);
    let reso2 = await resp2.json();
    console.log(reso2);
}