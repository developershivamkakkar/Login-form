const button = document.querySelector("button");

button.addEventListener("click", function () {
  // Get the username and password from the form
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Create an object with the data to be sent in the request body
  const data = {
    username: username,
    password: password,
  };

  fetch("http://127.0.0.1:8000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const message = data.message;
      alert(message);
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
