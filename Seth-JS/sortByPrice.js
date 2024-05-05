// Function to sort products by price
function sortProductsByPrice(products) {
    return products.sort((a, b) => a.price - b.price);
  }
  
  // Usage example
  const productsList = JSON.parse(localStorage.getItem('products')) || [];
  const sortedProducts = sortProductsByPrice(productsList);
  console.log('Products sorted by price:', sortedProducts);
  // Update UI with sorted products
  