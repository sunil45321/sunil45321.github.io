document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("productList");
    const cartModal = document.getElementById("cartModal");
    const viewCartBtn = document.getElementById("viewCartBtn");
    const closeCartBtn = cartModal.querySelector(".close");
    const cartItemsList = document.getElementById("cartItems");
    const checkoutBtn = document.getElementById("checkoutBtn");
  
    // Sample product data
    const products = [
      { id: 1, name: "Product 1", price: 10 },
      { id: 2, name: "Product 2", price: 20 },
      { id: 3, name: "Product 3", price: 30 },
    ];
  
    // Render products
    function renderProducts() {
      productList.innerHTML = "";
      products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product");
        productCard.innerHTML = `
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
      });
    }
  
    // Add product to cart
    function addToCart(productId) {
      const product = products.find(p => p.id === productId);
      if (product) {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${product.name} - $${product.price}`;
        cartItemsList.appendChild(cartItem);
      }
    }
  
    // Show/hide cart modal
    viewCartBtn.addEventListener("click", () => {
      cartModal.style.display = "block";
    });
  
    closeCartBtn.addEventListener("click", () => {
      cartModal.style.display = "none";
    });
  
    // Checkout
    checkoutBtn.addEventListener("click", () => {
      alert("Thank you for your purchase!");
      cartItemsList.innerHTML = ""; // Clear cart after checkout
      cartModal.style.display = "none";
    });
  
    // Initial render
    renderProducts();
  });
  document.addEventListener("DOMContentLoaded", function () {
    const navToggleBtn = document.getElementById("navToggleBtn");
  
    navToggleBtn.addEventListener("click", function () {
      this.classList.toggle("collapsed");
    });
  });