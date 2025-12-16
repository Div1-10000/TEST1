function adminLogin() {
const user = document.getElementById("adminUser").value;
const pass = document.getElementById("adminPass").value;
const msg = document.getElementById("adminMsg");


// CHANGE THESE CREDENTIALS
const ADMIN_USER = "TMA";
const ADMIN_PASS = "TMA123";


if (user === ADMIN_USER && pass === ADMIN_PASS) {
localStorage.setItem("adminLoggedIn", "true");
msg.style.color = "lightgreen";
msg.innerText = "Access Granted";


setTimeout(() => {
window.location.href = "div5.html";
}, 800);
} else {
msg.style.color = "#ff4d4d";
msg.innerText = "Invalid Admin Credentials";
}
}