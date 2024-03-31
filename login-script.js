// login-script.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation (you can add more complex validation if needed)
    if (username === 'your_username' && password === 'your_password') {
        showMessage('Login successful', 'success');
    } else {
        showMessage('Invalid username or password', 'error');
    }
});

function showMessage(message, type) {
    var messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.className = type; // Add a class for styling (error or success)
}
