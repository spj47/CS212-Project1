// Function to handle user sign-up
function signupUser(username, password, email) {
    // Perform client-side validation
    if (!username || !password || !email) {
      console.error("All fields are required.");
      return;
    }
    
    // Check if the user already exists
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some(user => user.username === username);
    
    if (userExists) {
      console.error("User already exists.");
      return;
    }
  
    // Create a new user
    const newUser = { username, password, email };
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
  
    console.log('User signed up successfully');
  }
  