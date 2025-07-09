document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    let message = '';
    if (name.length < 2) {
        message = 'Name must be at least 2 characters.';
    } else if (!validateEmail(email)) {
        message = 'Please enter a valid email address.';
    } else if (password.length < 6) {
        message = 'Password must be at least 6 characters.';
    } else {
        message = 'Registration successful!';
        document.getElementById('registrationForm').reset();
    }

    const msgDiv = document.getElementById('message');
    msgDiv.style.color = message === 'Registration successful!' ? 'green' : 'red';
    msgDiv.textContent = message;
});

function validateEmail(email) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}