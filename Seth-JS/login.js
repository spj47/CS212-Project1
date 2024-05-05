// Function to handle user login
function loginUser(username, password) {
    // Perform client-side validation
    if (!username || !password) {
      console.error("Both username and password are required.");
      return;
    }
  
    // Get the list of users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.username === username && user.password === password);
  
    if (user) {
      console.log('User logged in successfully');
      // Store the logged-in user's information in sessionStorage
      sessionStorage.setItem('loggedInUser', JSON.stringify(user));
    } else {
      console.error('Invalid username or password');
    }
  }
  