// script.js

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // Simple validation
    if (password !== confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
    }

    // If all validations pass, you can proceed with registration
    // For demonstration, we'll just show a success message
    showMessage('Registration successful', 'success');
});

function showMessage(message, type) {
    var messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.className = type; // Add a class for styling (error or success)
}
