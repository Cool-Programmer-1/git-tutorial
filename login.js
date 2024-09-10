document.querySelector(".login-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    // Get the input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate inputs
    if (validateLogin(username, password)) {
        alert("Login successful");
        // You can proceed to submit the form or handle further actions here
    } else {
        alert("Invalid username or password");
    }
});

function validateLogin(username, password) {
    // Simple validation: Ensure fields are not empty and password has minimum length
    if (username.trim() === "" || password.trim() === "") {
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // In a real scenario, you'd likely validate against server data here
    return true;
}
