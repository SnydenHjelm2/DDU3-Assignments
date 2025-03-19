export function jsonHeader() {
    return {"Content-type": "application/json"};
}

export function return404() {
    return new Response(`{"error": "Not Found"}`, {status: 404, headers: jsonHeader()});
}