const forgotPasswordForm = document.getElementById('forgot-password-form');
const forgotPasswordErrorMessage = document.getElementById('forgot-password-error-message');

forgotPasswordForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;

  // Replace with your actual logic to send a password reset link via email
  // (using server-side functionality)
  console.log(`Sending password reset link to ${email}`);

  // Simulate successful request (replace with redirect or other actions)
  alert('Password reset link sent! Please check your email.');
});
