
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


  // =====================
  // Simulering av en bugg

  const coin = Math.floor(3 * Math.random()); // 0, 1 or 2
  console.log(coin);

  if (coin == 0) {
    // Network Error: No response sent
    return;
    // request.signal?.abort();
  } else if (coin == 1) {
    // http Error
    return createResponse(null, 400);
  }
  // =====================


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

  console.log(url.pathname);

  // 
  if (url.pathname == "/randomArray") {
    if (request.method == "GET") {
      const nNumbers = 5 + Math.floor(6 * Math.random()); // mellan 5 och 10
      const randomNumbers = [];
      for (let i = 0; i < nNumbers; i++) {
        randomNumbers.push(1 + Math.floor(100 * Math.random()));
      }
      console.log(randomNumbers);
      return createResponse(randomNumbers);
    }
  }
  
  return createResponse("Invalid Request", 400);
}

Deno.serve(handler);
