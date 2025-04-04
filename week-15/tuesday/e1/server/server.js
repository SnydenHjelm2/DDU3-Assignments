
function handler(request) {
  const url = new URL(request.url);

  // =================
  // Hantering av CORS
  // Dessa headers måste skickas med responsen.
  const headersCORS = new Headers();
  headersCORS.set("Access-Control-Allow-Origin", "*"); // Allow all origins
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: headersCORS });
  }
  // =================

  if (url.pathname == "/random") {
    if (request.method == "GET") {
      const randomInt = 1 + Math.floor(100 * Math.random()); // mellan 1 och 100
      headersCORS.set("Content-Type", "text/plain");
      return new Response (randomInt, { headers: headersCORS });
    }
  }
  
  return new Response("Invalid Request", {headers: headersCORS, status: 400});
}

Deno.serve(handler);
