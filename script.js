const loginForm = document.getElementById('login-form');
const registerButton = document.getElementById('register-button');
const loginErrorMessage = document.getElementById('login-error-message');
const errorMessage = document.getElementById('error-message');

// Replace with your actual authentication logic
const users = {
  // Username: Password
  admin: '123456',
};

/*Login Code*/
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Replace with your actual authentication logic (e.g., AJAX call)
  if (username !== 'admin' || password !== '123456') {
    errorMessage.textContent = 'Invalid username or password';
    return;
  }

  // Successful login (redirect to products.html)
  window.location.href = 'otp.html'; // Replace with your actual path
});

/*Registration Code*/
registerButton.addEventListener('click', () => {
  // Open registration page in a new tab (replace with desired behavior)
  window.location.href = 'register.html';
});

registerButton.addEventListener('submit', (event) => {
  event.preventDefault();

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

if (username == '' || password == '') {
    errorMessage.textContent = 'Invalid username or password';
    return;
  }

  // If login successful, redirect to OTP screen
  window.location.href = 'login.html';
});