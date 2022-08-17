const form = document.getElementById("example-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});
