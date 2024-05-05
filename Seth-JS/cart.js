// Function to add an item to the cart
function addToCart(itemId, itemName, itemPrice, quantity = 1) {
    // Get the cart from localStorage or initialize it
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.itemId === itemId);
    if (existingItem) {
      // Update quantity if the item already exists
      existingItem.quantity += quantity;
    } else {
      // Add a new item to the cart
      cart.push({ itemId, itemName, itemPrice, quantity });
    }
  
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(`Item ${itemName} added to cart`);
  }
  
  // Function to remove an item from the cart
  function removeFromCart(itemId) {
    // Get the cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Filter out the item to be removed
    const updatedCart = cart.filter(item => item.itemId !== itemId);
    
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    console.log(`Item ${itemId} removed from cart`);
  }
  