document.querySelector(".signup-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    // Get the input values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Validate inputs
    if (validateSignup(username, email, password, confirmPassword)) {
        alert("Sign Up successful");

        // Redirect to the login page
        window.location.href = "login.html";
    }
});

function validateSignup(username, email, password, confirmPassword) {
    if (username.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
        alert("All fields are required");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Invalid email format");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
