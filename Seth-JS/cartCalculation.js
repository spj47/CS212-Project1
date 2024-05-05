// Function to calculate total price of items in the cart
function calculateCartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
  
    // Calculate total price
    for (const item of cart) {
      total += item.itemPrice * item.quantity;
    }
  
    // Return the total price
    return total.toFixed(2); // Round to 2 decimal places
  }
  
  // Function to display the cart total
  function displayCartTotal() {
    const total = calculateCartTotal();
    console.log(`Total price: $${total}`);
    // Update UI with total price
    document.querySelector('#cartTotal').innerText = `Total: $${total}`;
  }