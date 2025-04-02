
function handler(request) {
  const url = new URL(request.url);

  const headersCORS = new Headers();
  headersCORS.set("Access-Control-Allow-Origin", "*"); // Allow all origins
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: headersCORS });
  }


  if (url.pathname == "/random") {
    if (request.method == "GET") {
      const colors = ["pink", "lime", "skyblue", "lightgreen", "gold"];
      const randomColor = colors[Math.floor(colors.length * Math.random())];
      return new Response (randomColor, {headers: headersCORS});
    }
  }


  if (url.pathname == "/wrongResource") {
    return new Response (null, { headers: headersCORS, status: 418 });
  }
  
  return new Response("Invalid Request", {headers: headersCORS, status: 400});
}

Deno.serve(handler);
