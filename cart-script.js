const cartList = document.getElementById('cart-list');
const checkoutButton = document.getElementById('checkout-button');
const totalAmount = document.getElementById('total-amount');

// Replace with your cart storage implementation
let cartItems = [];

// Add selected products to cart (called in products-script.js)
function addProductToCart(productId) {
  // Simulate adding product to cart
  cartItems.push(products.find(product => product.id === productId));
  updateCartList();
}

// Update cart list display
function updateCartList() {
  cartList.innerHTML = '';

  if (cartItems.length === 0) {
    cartList.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  for (const item of cartItems) {
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <div class="cart-item">
        <p>${item.name} - $${item.price}</p>
        <button data-product-id="${item.id}">Remove</button>
      </div>
    `;
    cartList.appendChild(cartItem);

    // Add click event handler for "Remove" buttons
    cartItem.querySelector('button').addEventListener('click', () => {
      const removeProductId = event.target.dataset.productId;
      cartItems = cartItems.filter(product => product.id !== removeProductId);
      updateCartList();
    });
  }

  // Calculate and display total amount
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  totalAmount.textContent = `Total: $${total.toFixed(2)}`;
}

// Add functionality for "View Cart" button (now updates cart list)
cartButton.addEventListener('click', updateCartList);

// Add functionality for "Checkout" button (replace with actual checkout flow)
checkoutButton.addEventListener('click', () => {
  if (cartItems.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  // Simulate checkout
  alert('Checkout initiated! Redirecting...');
  // Replace with redirect to checkout page or process
});

// Update cart list on page load if there are items stored
//window.addEventListener('load', updateCartList);

// Display cart items on cart page load (check if cartItems data exists)
window.addEventListener('load', () => {
    if (cartItems && cartItems.length > 0) {
        updateCartList();
    } else {
        cartList.innerHTML = '<p>Your cart is empty.</p>';
    }