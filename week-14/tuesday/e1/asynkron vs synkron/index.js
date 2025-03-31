let rqst = new Request("http://localhost:8000/");
console.log(rqst);


function doSomething1 () {
  console.log("do1");
}

function doSomething2 () {
  console.log("do2");
}

document.querySelector("button").addEventListener("click", () => {
  const randomInt = 1 + Math.floor(100 * Math.random());
  console.log(randomInt);
})

doSomething1();

const fast = 100000;
const slow = 10000000;
for (let i = 0; i < slow; i++) {
  console.log(i);
}

doSomething2();