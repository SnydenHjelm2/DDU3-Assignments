
function handler(request) {
  const url = new URL(request.url);

  const headersCORS = new Headers();
  headersCORS.set("Access-Control-Allow-Origin", "*"); // Allow all origins
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: headersCORS });
  }


  if (url.pathname == "/randomStatus") {
    if (request.method == "GET") {
      const status = [400, 401, 404, 405, 409, 410, 418];
      const randomStatus = status[Math.floor(status.length * Math.random())];
      return new Response (null, {status: randomStatus, headers: headersCORS});
    }
  }
  
  return new Response("Invalid Request", {headers: headersCORS, status: 400});
}

Deno.serve(handler);
