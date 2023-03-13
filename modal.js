function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");

// launch/close modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);

// launch/close modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

// FORM
// Input
const form = document.querySelectorAll('.form-data');
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox1 = document.getElementById("checkbox1");

// Error Input
const firstnameError = document.querySelector("#error-firstname");
const lastnameError = document.querySelector("#error-lastname");
const emailError = document.querySelector("#error-email");
const birthdateError = document.querySelector("#error-birthdate");
const quantityError = document.querySelector("#error-quantity");
const checkboxError = document.querySelector("#error-checkbox");

const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;
const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

const validFirstName = () => {
  if (firstName.value === "") {
    firstnameError.textContent = "Veuillez saisir votre prénom.";
    firstName.classList.add("invalid");
  } else if (!nameRegex.test(firstName.value)) {
    firstnameError.textContent = "Veuillez saisir un prénom valide.";
    firstName.classList.add("invalid");
  } else {
    firstnameError.textContent = "";
    firstName.classList.remove("invalid");
    return true
  }
}

const validLastName = () => {
  if (lastName.value.trim() === "") {
    lastnameError.textContent = "Veuillez saisir votre nom.";
    lastName.classList.add("invalid");
    return false
  } else if (!nameRegex.test(lastName.value)) {
    lastnameError.textContent = "Veuillez saisir un nom valide.";
    lastName.classList.add("invalid");
    return false
  } else {
    lastnameError.textContent = "";
    lastName.classList.remove("invalid");
    return true
  }
}

const validEmail = () => {
  if (email.value.trim() === "") {
    emailError.textContent = "Veuillez saisir votre adresse e-mail.";
    email.classList.add("invalid");
    return false
  } else if (!emailRegex.test(email.value)) {
    emailError.textContent = "Veuillez saisir une adresse e-mail valide.";
    email.classList.add("invalid");
    return false
  } else {
    emailError.textContent = "";
    email.classList.remove("invalid");
    return true
  }
}

const validBirthdate = () => {
  if (birthdate.value.trim() === "") {
    birthdateError.textContent = "Veuillez saisir votre date de naissance.";
    birthdate.classList.add("invalid");
    return false
  } else {
    birthdateError.textContent = "";
    birthdate.classList.remove("invalid");
    return true
  }
}

const validQty = () => {
  if (quantity.value < 0 || quantity.value > 99) {
    quantityError.textContent = "Veuillez saisir une valeur entre 0 et 99.";
    quantity.classList.add("invalid");
    return false
  } else {
    quantityError.textContent = "";
    quantity.classList.remove("invalid");
    return true
  }
}

const validCheckbox = () => {
  if (!checkbox1.checked) {
    checkboxError.textContent = "Veuillez accepter les conditions d'utilisation.";
    checkbox1.classList.add("invalid");
    return false
  } else {
    checkboxError.textContent = "";
    checkbox1.classList.remove("invalid");
    return true
  }
}

firstName.addEventListener('change', validFirstName);
lastName.addEventListener('change', validLastName);
email.addEventListener('change', validEmail);
birthdate.addEventListener('change', validBirthdate);
quantity.addEventListener('change', validQty);
checkbox1.addEventListener('change', validCheckbox);

function validate(e) {
  e.preventDefault();

  const isFirstNameValid = validFirstName(true);
  const isLastNameValid = validLastName();
  const isBirthdateValid = validBirthdate();
  const isQtyValid = validQty();
  const isCheckboxValid = validCheckbox();

  const isFormValid = isFirstNameValid && isLastNameValid && isBirthdateValid && isQtyValid && isCheckboxValid;

  if (isFormValid) {
    alert('Inscription prise en compte !');
    closeModal();
  } else {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'Veuillez remplir tous les champs obligatoires correctement.';
  }
}