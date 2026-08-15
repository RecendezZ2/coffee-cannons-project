// Finds the form in your HTML using id="cannonsCoffeeForm"
const form = document.querySelector("#cannonsCoffeeForm");

// Finds the first class with the id message where the thank-you message will display
const message = document.querySelector("#message");

//  form is submitted the browser passes information about that action into function function saves that information in a variable called event then creates a function that is ran when the submit button is pressed and runs the code in the code block
const onFormSubmit = (event) => {
  // stops the page from refreshing after the form is submitted
  event.preventDefault();

  // Collects all the form data 
  const formData = new FormData(form);

  // Gets values using each HTML element's name attribute
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const faveDrink = formData.get("faveDrink");
  const feedback = formData.get("feedback");

  // Gets every checked checkbox with name="interest"
  const interests = formData.getAll("interest");

  // Gets the selected radio button with name="subscription"
  const subscription = formData.get("subscription");

  // Creates a variable now so it can be used after the if/else statement
  let interestText;

  // Checks whether the user selected one or more interest checkboxes
  if (interests.length > 0) {
    // Changes ["Questions", "Employment"] into "Questions and Employment"
    interestText = interests.join(" and ");
  } else {
    // Runs if the user did not select any checkbox
    interestText = "no interest selected";
  }

  // Creates a variable for the textarea value
  let feedbackText;

  // trim() removes spaces before and after the user's message
  // This checks whether the textarea contains actual text
  if (feedback.trim()) {
    // Uses the feedback that the user typed
    feedbackText = feedback;
  } else {
    // Uses a default message if the textarea is blank
    feedbackText = "No message was included.";
  }

  // Final message shown from what the form gathered
  const sentence = `Thank you, ${name}! We appreciate your interest in ${interestText}; you picked a great choice. Like you, my favorite coffee drink is ${faveDrink}. Your comments are most valued. We will soon contact you at ${email} or ${phone}. ${name}, have a great day!`;

  // updates the message and shows the new message
  message.textContent = sentence;
document.getElementById("message").style.color = "orange";
  // hides  the form after it is submitted 
  form.style.display = "none";

  // Prints submitted data in the browser 
  console.log(Object.fromEntries(formData.entries()));

  // Clears/reset form
  form.reset();
};

// Listens for the form submission, then runs the arrow function
form.addEventListener("submit", onFormSubmit);