async function getBooksByGenreAndRelease(genre, release) {
    const req = new Request(`https://books.org/titles?genre=${genre}&release=${release}`);
    let resp = await fetch(req);
    if (resp.ok) {
        return resp.json();
    } else {
        return false;
    }
}