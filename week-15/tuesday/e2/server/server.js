
function createResponse (resource, status = 200) {
  const mainHeaders = new Headers();
  mainHeaders.set("Access-Control-Allow-Origin", "*"); // Allow all origins, CORS  
  mainHeaders.set("Content-Type", "application/json"); // Alla responser har JSON-format

  const options = {
    status: status,
    headers: mainHeaders
  };
  return new Response(JSON.stringify(resource), options);
}



function handler(request) {
  const url = new URL(request.url);


  // request.body?.cancel();
  // request.signal?.abort();

  // In case we get an OPTIONS request
  if (request.method === "OPTIONS") {
    return createResponse(null);
  }

  // En random siffra
  if (url.pathname == "/random") {
    if (request.method == "GET") {
      const randomInt = 1 + Math.floor(100 * Math.random());
      return createResponse(randomInt);
    }
  }

  // 
  if (url.pathname == "/randomArray") {
    if (request.method == "GET") {
      const nNumbers = 5 + Math.floor(6 * Math.random()); // mellan 5 och 10
      const randomNumbers = [];
      for (let i = 0; i < nNumbers; i++) {
        randomNumbers.push(1 + Math.floor(100 * Math.random()));
      }
      return createResponse(randomNumbers);
    }
  }
  
  return createResponse("Invalid Request", 400);
}

Deno.serve(handler);
