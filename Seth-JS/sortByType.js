// Function to sort products by type
function sortProductsByType(products) {
    return products.sort((a, b) => a.type.localeCompare(b.type));
  }
  
  // Usage example
  const productsList = JSON.parse(localStorage.getItem('products')) || [];
  const sortedProducts = sortProductsByType(productsList);
  console.log('Products sorted by type:', sortedProducts);
  // Update UI with sorted products