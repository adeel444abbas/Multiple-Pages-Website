const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(
    "please double check your class names, there is no $ {selector} class"
  );
};
const links = getElement(".nav-links");
const navbtnDOM = getElement(".nav-btn");

navbtnDOM.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

const date = getElement("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;

const btnLogin = document.querySelector("#loginButton");
const btnSignup = document.querySelector("#signupButton");

btnLogin.addEventListener("click", function () {
  // window.prompt("Login Button");
  window.prompt("Wait for the login ? 😉");
  console.log("Buttonis clicked");
});

btnSignup.addEventListener("click", function () {
  // window.prompt("Login Button");
  window.prompt("Want to be part of our system get yourself registered! 😊😉");
  console.log("Buttonis clicked");
});
