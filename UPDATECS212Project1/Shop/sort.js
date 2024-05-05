// Function to load products from a JSON file
function loadProducts() {
  return fetch('../products.json')
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      console.error('Failed to load products:', error);
      return [];
    });
}

// Function to sort products by price
function sortProductsByPrice(products, ascending) {
  return products.sort((a, b) => {
    if (ascending) {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
}

// Function to sort products by type
function sortProductsByType(products) {
  return products.sort((a, b) => a.type.localeCompare(b.type));
}

loadProducts().then(products => {
  // Sort products by price in ascending order
  const sortedByPrice = sortProductsByPrice(products, true);
  console.log('Products sorted by price (ascending):', sortedByPrice);
  
  // Sort products by type
  const sortedByType = sortProductsByType(products);
  console.log('Products sorted by type:', sortedByType);
});