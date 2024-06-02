function checkPassword() {
    const correctPassword = "your-password";
    const inputPassword = document.getElementById("password").value;
    const messageElement = document.getElementById("message");

    if (inputPassword === correctPassword) {
        document.getElementById("password-container").style.display = "none";
        document.getElementById("video-container").style.display = "block";
    } else {
        messageElement.textContent = "Incorrect password, please try again.";
    }
}
