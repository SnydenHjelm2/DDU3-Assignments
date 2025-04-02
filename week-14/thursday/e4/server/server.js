
function handler(request) {
  const url = new URL(request.url);

  const headersCORS = new Headers();
  headersCORS.set("Access-Control-Allow-Origin", "*"); // Allow all origins
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: headersCORS });
  }

  if (url.pathname == "/die") {
    if (request.method == "GET") {
      const die = 1 + Math.floor(6 * Math.random()); // 1 till 6
      return new Response (die, {headers: headersCORS});
    }
  }
  
  return new Response("Invalid Request", {headers: headersCORS, status: 400});
}

Deno.serve(handler);
