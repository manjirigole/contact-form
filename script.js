document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        alert("Message Sent! \nThank you for completing the form. We will be in touch soon.");
    });
});
