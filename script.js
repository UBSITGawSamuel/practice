document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
    
    if (username === "admin" && password === "password123") {
        message.textContent = "Login successful!";
        message.style.color = "lightgreen";
    } else {
        message.textContent = "Invalid username or password!";
        message.style.color = "red";
    }
});