function loginUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  if (!username || !password) {
    msg.style.color = "red";
    msg.innerText = "Please fill all fields";
    return;
  }

  // 🔹 Store login record (existing feature)
  const logins = JSON.parse(localStorage.getItem("loginRecords")) || [];

  logins.push({
    username: username,
    time: new Date().toLocaleString()
  });

  localStorage.setItem("loginRecords", JSON.stringify(logins));

  // 🔹 Store current logged-in user (NEW – for booking)
  localStorage.setItem("tmaUser", JSON.stringify({
    name: username,
    phone: password   // assuming password field is phone number
  }));

  msg.style.color = "lightgreen";
  msg.innerText = "Login successful! Redirecting...";

  setTimeout(() => {
    window.location.href = "div0.html";
  }, 1000);
}
