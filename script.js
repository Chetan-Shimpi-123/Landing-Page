document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simple validation (ensure all fields are filled)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for contacting us!');
    } else {
        alert('Please fill out all fields.');
    }
});