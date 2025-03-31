let req = new Request("http://localhost:8000", {method: "POST", headers: {"content-type": "application/json"}, body: JSON.stringify(`{"test": "test"}`)});
console.log(req);