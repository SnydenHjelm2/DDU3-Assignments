fetch("http://localhost:8000/")
  .then(response => {
    return response.json();
  })
  .then(first => {
    let status = 0;

    fetch("http://localhost:8000/")
      .then(response => {
        status = response.status;
        return response.json();
      })
      .then(second => {
        let responses = [first, second];
      });

    console.log(status);
  });
//svar: 0