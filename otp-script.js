const otpForm = document.getElementById('otp-form');
const otpErrorMessage = document.getElementById('otp-error-message');

// Replace with your actual OTP verification logic
const correctOtp = '123456'; // Example

otpForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const enteredOtp = document.getElementById('otp-code').value;

  if (enteredOtp !== correctOtp) {
    otpErrorMessage.textContent = 'Invalid OTP';
    return;
  }

  // Successful OTP verification (replace with desired actions)
  alert('OTP verified! Redirecting to the main app...');
  // Redirect to the main application page
  window.location.href = 'products.html'; // Replace with your actual path
});
