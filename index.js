const toggleButton = document.getElementById("navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");


toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active"); 
  navbarMenu.classList.toggle("active"); 
});
const password = document.getElementById("password");
const toggleEye = document.querySelector('.password-container .toggle-eye i');

toggleEye.addEventListener('click', () => {
  if (password.type === 'password') {
    password.type = 'text';

    toggleEye.classList.remove('fa-eye');
    toggleEye.classList.add('fa-eye-slash');
  } else {

    password.type = 'password';


    toggleEye.classList.remove('fa-eye-slash');
    toggleEye.classList.add('fa-eye');
  }
});

const cpassword = document.getElementById("cpassword");
const toggleEyye = document.querySelector('.confirm-password .toggle-eye i');

toggleEyye.addEventListener('click', () => {

  if(cpassword.type  === 'password') {

    cpassword.type = 'text';

    toggleEyye.classList.remove('fa-eye');
    toggleEyye.classList.add('fa-eye-slash');
  }
else{

  cpassword.type = 'password';
  toggleEyye.classList.remove('fa-eye-slash');
  toggleEyye.classList.add('fa-eye');
}
});
  
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phoneNumber");
const whatsappInput = document.getElementById("whatsappNumber");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const whatsappError = document.getElementById("whatsapp-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");

emailInput.addEventListener("input", () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "The email field must be a valid email address.";
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
});

phoneInput.addEventListener("input", () => {
  if (phoneInput.value.length !== 11) {
    phoneError.textContent = "The phone field must be 11 digits.";
    phoneError.style.display = "block";
  } else {
    phoneError.style.display = "none";
  }
});

whatsappInput.addEventListener("input", () => {
  if (whatsappInput.value.length !== 11) {
    whatsappError.textContent = "The WhatsApp no field must be 11 digits.";
    whatsappError.style.display = "block";
  } else {
    whatsappError.style.display = "none";
  }
});

confirmPasswordInput.addEventListener("input", () => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.textContent = "The password field confirmation does not match.";
    confirmPasswordError.style.display = "block";
  } else {
    confirmPasswordError.style.display = "none";
  }
});

document.querySelector("form").addEventListener("submit", (e) => {
  let valid = true;

  if (!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailError.textContent = "The email field must be a valid email address.";
    emailError.style.display = "block";
    valid = false;
  }
  if (!valid) {
    e.preventDefault(); 
  }


  if (whatsappInput.value.length !== 11) {
    whatsappError.textContent = "The WhatsApp no field must be 11 digits.";
    whatsappError.style.display = "block";
    valid = false;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.textContent = "The password field confirmation does not match.";
    confirmPasswordError.style.display = "block";
    valid = false;
  }
});
