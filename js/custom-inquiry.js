

const form = document.querySelector("#cannonsCoffeeForm");
const message = document.querySelector("#message")
console.log(form)

function onFormSubmit(event) {

  event.preventDefault();

  const formData = new FormData(form);
  const dataObject = Object.fromEntries(formData.entries());
  let name = dataObject.name
  let email = dataObject.email
  let phone = dataObject.phone
  let faveDrink = dataObject.faveDrink
  let comments = dataObject.comments
  let interest = dataObject.interest

  let sentence = `Thank you ${name} We appreciate your interest in ${interest}. Your favorite coffee flavor is ${faveDrink} and your comments are ${comments}. We will soon contact you at ${email} or ${phone}.`
  //declare vars for the message
  //save the empty paragraph into a variable
  //use text content to display the message
  //in yor css create a class style rule for .displayNone{ display: none;}
  //add the class displayNone to the form variable
  message.textContent = sentence
form.style.display = "none"
  console.log(dataObject);
  form.reset();
}


form.addEventListener("submit", onFormSubmit);
