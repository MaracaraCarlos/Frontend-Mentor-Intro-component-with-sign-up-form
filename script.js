const firstName = document.querySelector('.first_name');
const lastName = document.querySelector('.last_name');
const emailInput = document.querySelector('.email_input');
const passwordInput = document.querySelector('.password_input');
const errorFirstName = document.querySelector('.error_first_name');
const errorLastName = document.querySelector('.error_last_name');
const errorEmail = document.querySelector('.error_email');
const errorPassword = document.querySelector('.error_password');
const circleName = document.querySelector('.circle_name');
const circleLast = document.querySelector('.circle_last');
const circleEmail = document.querySelector('.circle_email');
const circlepassword = document.querySelector('.circle_password');
const submitBtn = document.querySelector('.submit_btn');
const form = document.querySelector('form');



const validate = (event) => {
  event.preventDefault();

  const emailValue =  emailInput.value.trim();
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const passwordValue = passwordInput.value.trim();

  /* First name */
  if(!firstNameValue) {
    errorFirstName.style.display = 'block';
    circleName.style.display= 'block';
    firstName.classList.add('error');
  } else {
    errorFirstName.style.display = 'none';
    circleName.style.display= 'none';
    firstName.classList.remove('error');
  }
  
  /* Last name */
  if(!lastNameValue) {
    errorLastName.style.display = 'block';
    circleLast.style.display= 'block';
    lastName.classList.add('error');
  } else {
    errorLastName.style.display = 'none';
    circleLast.style.display= 'none';
    lastName.classList.remove('error');
  }

  /* Email */
  if (!isEmail(emailValue)) {
    errorEmail.style.display = 'block';
    circleEmail.style.display = 'block';
    emailInput.classList.add('error');
  } else {
    errorEmail.style.display = 'none';
    circleEmail.style.display = 'none';
    emailInput.classList.remove('error');
  }

  /* Password */
  if(!passwordValue) {
    errorPassword.style.display = 'block';
    circlepassword.style.display= 'block';
    passwordInput.classList.add('error');
  } else {
    errorPassword.style.display = 'none';
    circlepassword.style.display= 'none';
    passwordInput.classList.remove('error');
  }
}

function isEmail(input) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}

form.addEventListener('submit', validate);
submitBtn.addEventListener('click', validate);