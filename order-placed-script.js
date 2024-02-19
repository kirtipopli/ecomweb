const orderNumberElement = document.getElementById('order-number');
const continueShoppingButton = document.getElementById('continue-shopping-button');

// Retrieve order number from URL or data (replace with your logic)
const orderNumber = '12345'; // Example
orderNumberElement.textContent = orderNumber;

// Add functionality for "Continue Shopping" button
continueShoppingButton.addEventListener('click', () => {
  // Redirect to home page or catalog
  window.location.href = 'products.html'; // Replace with your desired path
});
