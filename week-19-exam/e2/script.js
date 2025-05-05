function didItWork(resp) {
    if (resp.status === 200) {
        console.log("It worked!");
    } else {
        console.log("Please try again.");
    }
}