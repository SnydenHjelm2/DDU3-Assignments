export function isJSON(cType) {
    if (cType === "application/json") { return true} else {return false};
}

export function jsonHeader() {
    return {"Content-type": "application/json"};
}

export function returnStatusMsg(status) {
    switch (status) {
        case 400:
            return new Response(`{"error": "Bad Request"}`, {status: 400, headers: jsonHeader()});
        case 404:
            return new Response(`{"error": "Not Found"}`, {status: 404, headers: jsonHeader()});
        case 405: 
            return new Response(`{"error": "Method not allowed"}`, {status: 405, headers: jsonHeader()});
        default: return false;
    }
}