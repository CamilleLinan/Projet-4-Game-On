const topNav = document.getElementById("myTopnav")
function editNav() {
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");

const modalBody = document.querySelector(".modal-body-form");
const modalBodyConfirm = document.querySelector(".modal-body-confirm"); 
const closeModalBtn = document.querySelector(".btn-modal-confirm");

// launch/close modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);
closeModalBtn.addEventListener("click", closeModal);

// launch/close modal form
function launchModal() {
  modalbg.style.display = "block";
  if (topNav.className === "topnav responsive") {
    editNav();
  }
}
function closeModal() {
  modalbg.style.display = "none";
  modalBody.style.display = "block";
  modalBodyConfirm.style.display = "none";
}

const closeForm = () => {
  modalBody.style.display = "none";
  modalBodyConfirm.style.display = "block";
}

// FORM
const form = document.getElementById("form");

// Input
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox1 = document.getElementById("checkbox1");

// Error Input
const firstnameError = document.getElementById("error-firstname");
const lastnameError = document.getElementById("error-lastname");
const emailError = document.getElementById("error-email");
const birthdateError = document.getElementById("error-birthdate");
const quantityError = document.getElementById("error-quantity");
const checkboxError = document.getElementById("error-checkbox");

// Regex
const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;
const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

// Add error message if the Inputs have any error
const validFirstName = function(inputFirstName) {
  if (inputFirstName.value.trim() === "" || inputFirstName.value.length < 2) {
    firstnameError.textContent = "Veuillez saisir votre prénom (2 caractères minimum).";
    firstName.classList.add("invalid");
    return false;
  } else if (!nameRegex.test(inputFirstName.value)) {
    firstnameError.textContent = "Veuillez saisir un prénom valide, sans chiffre, ni caractère spécial.";
    firstName.classList.add("invalid");
    return false;
  } else {
    firstnameError.textContent = "";
    firstName.classList.remove("invalid");
    return true;
  }
}

const validLastName = function(inputLastName) {
  if (inputLastName.value.trim() === "" || inputLastName.value.length < 2) {
    lastnameError.textContent = "Veuillez saisir votre nom (2 caractères minimum).";
    lastName.classList.add("invalid");
    return false;
  } else if (!nameRegex.test(inputLastName.value)) {
    lastnameError.textContent = "Veuillez saisir un nom valide, sans chiffre, ni caractère spécial.";
    lastName.classList.add("invalid");
    return false;
  } else {
    lastnameError.textContent = "";
    lastName.classList.remove("invalid");
    return true;
  }
}

const validEmail = function(inputEmail) {
  if (inputEmail.value.trim() === "" || !emailRegex.test(email.value)) {
    emailError.textContent = "Veuillez saisir une adresse e-mail valide.";
    email.classList.add("invalid");
    return false;
  } else {
    emailError.textContent = "";
    email.classList.remove("invalid");
    return true;
  }
}

const validBirthdate = function(inputBirthdate) {
  const birthdateUser = new Date(inputBirthdate.value);
  const now = new Date();
  const age = now.getFullYear() - birthdateUser.getFullYear();

  if (inputBirthdate.value.trim() === "") {
    birthdateError.textContent = "Veuillez saisir votre date de naissance.";
    birthdate.classList.add("invalid");
    return false;
  } else if (age < 18) {
    birthdateError.textContent = "Vous devez être majeur pour vous inscrire.";
    birthdate.classList.add("invalid");
    return false;
  } else {
    birthdateError.textContent = "";
    birthdate.classList.remove("invalid");
    return true;
  }
}

const validQty = function(inputQty) {
  if (inputQty.value < 0 || inputQty.value > 99) {
    quantityError.textContent = "Veuillez saisir une valeur entre 0 et 99.";
    quantity.classList.add("invalid");
    return false;
  } else {
    quantityError.textContent = "";
    quantity.classList.remove("invalid");
    return true;
  }
}

const validCheckbox = function(inputCheckbox) {
  if (!inputCheckbox.checked) {
    checkboxError.textContent = "Veuillez accepter les conditions d'utilisation.";
    checkbox1.classList.add("invalid");
    return false;
  } else {
    checkboxError.textContent = "";
    checkbox1.classList.remove("invalid");
    return true;
  }
}

// Listen changes in Input
firstName.addEventListener('change', function() {
  validFirstName(this);
});
lastName.addEventListener('change', function() {
  validLastName(this);
});
email.addEventListener('change', function() {
  validEmail(this)
});
birthdate.addEventListener('change', function() {
  validBirthdate(this);
});
quantity.addEventListener('change', function() {
  validQty(this);
});
checkbox1.addEventListener('change', function() {
  validCheckbox(this);
});

// Valid form
const validForm = () => {
  if (validFirstName(firstName) && validLastName(lastName) && validEmail(email) && validBirthdate(birthdate) && validQty(quantity) && validCheckbox(checkbox1)) {
    return true;
  } else {
    return false;
  }
}

// If form is Valid submit
const handleSubmit = () => {
  if (validForm() === true) {
    form.reset();
    closeForm();
  } else {
    validCheckbox(checkbox1);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  handleSubmit();
})