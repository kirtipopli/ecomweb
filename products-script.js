const productList = document.getElementById('product-list');
const cartButton = document.getElementById('cart-button');

// Replace with your actual product data fetching logic (e.g., API call)
const products = [
    { id: 1, name: 'Camera', price: 19.99, image: 'product1.jpg' },
    { id: 2, name: 'Mobile', price: 24.99, image: 'product2.jpg' },
    { id: 3, name: 'Watch', price: 39.99, image: 'product3.jpg' },
];
let cartItems = [];
// Add click event handler for "Add to Cart" buttons
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('add-to-cart-button')) {
    const productId = event.target.dataset.productId;
    addProductToCart(productId);
  }
});

function addProductToCart(productId) {
  // Simulate adding product to cart (replace with actual cart storage)
  console.log(`Adding product ${productId} to cart`);
  // Alert for demonstration
  cartItems.push(products.find(product => product.id === productId));
//  updateCartList();
  alert(`Product ${productId} added to cart!`);
}

// Function to populate product list
function displayProducts() {
  productList.innerHTML = ''; // Clear existing content

  for (const product of products) {
    const productItem = document.createElement('li');
    productItem.innerHTML = `
      <div class="product-item">
        <img src="${product.image}" alt="${product.name}">        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button class="add-to-cart-button" data-product-id="${product.id}">Add to Cart</button>
      </div>
    `;
    productList.appendChild(productItem);
  }
}

// Add functionality for "View Cart" button (replace with desired cart UI)
cartButton.addEventListener('click', () => {
  // Simulate navigating to cart page
  alert('Opening cart page...');
  window.location.href = 'cart.html'
});

// Call displayProducts on page load
window.addEventListener('load', displayProducts);
