function login() {
   // event.preventDefault(); // prevent page refresh

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("loginmessage");

    if (!email || !password) {
        message.style.color = "orange";
        message.textContent = "Please fill in all fields.";
        return;
    }

    // Demo credentials
    if (email === "madhu123@gmail.com" && password === "1234") {
        message.style.color = "green";
        message.textContent = "Login successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid email or password.";
    }
}
