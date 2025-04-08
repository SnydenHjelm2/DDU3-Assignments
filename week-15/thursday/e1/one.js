const req = new Request("http://localhost:8000/?c1=hello&c2=world&c3=!");

// async function getMsg() {
//     let resp = await fetch(req);
//     resp = await resp.text();
//     document.body.innerHTML = resp;
// }

// getMsg();

fetch(req).then((r) => r.text()).then((r) => document.body.innerHTML = r);