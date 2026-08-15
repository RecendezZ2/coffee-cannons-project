const form = document.querySelector("#loginForm");
const message = document.querySelector("#thankyou")
function onFormSubmit(event) {
  event.preventDefault();

  
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
    let name = dataObject.name
 

  console.log(dataObject);
  let sentence = `Welcome, ${name} your logged in!`
  message.textContent = sentence
form.style.display = "none"
  console.log(dataObject);
  form.reset();
}




form.addEventListener("submit", onFormSubmit);