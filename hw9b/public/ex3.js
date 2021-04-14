document.querySelector("form").addEventListener("submit", e => {
    const formSubmission = new FormSubmission(e.target);
    console.log(formSubmission);
    fetch("http://localhost:3000/ex1", {
      method: "POST",
      body: formSubmission
    })
      .then(response => response.text())
      .then(result => {
        document.getElementById("result").textContent = result;
      })
  });