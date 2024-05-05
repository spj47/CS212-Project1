// login.js

// Function to handle user login
function loginUser() {
  // Get form input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform client-side validation
  if (!username || !password) {
      console.error("Both username and password are required.");
      return;
  }

  // Get the list of users from localStorage
  const existingUsers = JSON.parse(localStorage.getItem('../users')) || [];

  // Find the user with the given username and password
  const user = existingUsers.find(user => user.username === username && user.password === password);

  if (user) {
      console.log('User logged in successfully');
      
      // Store the logged-in user's information in sessionStorage
      sessionStorage.setItem('loggedInUser', JSON.stringify(user));

      // Redirect the user to a new page upon successful login
      // Replace 'dashboard.html' with the desired URL
      window.location.href = 'dashboard.html';
  } else {
      console.error('Invalid username or password');
  }
}

// Attach event listener to the login button
document.getElementById('loginButton').addEventListener('click', loginUser);