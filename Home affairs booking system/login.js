const form = document.getElementById('login-box');
const idNumber = document.getElementById('ID_number');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const idNumber = idNumber.value.trim();
  const passwordValue = password.value.trim();

  if (idNumber.length===13) {
    email.parentElement.className = 'form-control success';
  } else {
    email.parentElement.className = 'form-control fail';
  }

  if (passwordValue.length >= 6) {
    password.parentElement.className = 'form-control success';
  } else {
    password.parentElement.className = 'form-control fail';
  }
});



