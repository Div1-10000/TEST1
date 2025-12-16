// ===============================
// Modal handling
// ===============================
const modal = document.getElementById("productModal");
let selectedItem = {};

// Open modal with service details
function openModal(name, price, image, features) {
  selectedItem = {
    item: name
  };

  document.getElementById("productName").innerText = name;
  document.getElementById("productPrice").innerText = price;
  document.getElementById("productFeatures").innerText = features;

  const imgBox = document.getElementById("productImage");
  imgBox.style.backgroundImage = `url(${image})`;
  imgBox.style.backgroundSize = "cover";
  imgBox.style.backgroundPosition = "center";

  modal.style.display = "flex";
}

// Close modal
function closeModal() {
  modal.style.display = "none";
}

// ===============================
// Save booking (called on Buy Now)
// ===============================
function saveBooking() {
  const user = JSON.parse(localStorage.getItem("tmaUser"));

  if (!user) {
    alert("Please login first");
    window.location.href = "div6.html";
    return;
  }

  let bookings = JSON.parse(localStorage.getItem("tmaBookings")) || [];

  bookings.push({
    name: user.name,
    phone: user.phone,
    item: selectedItem.item,
    date: new Date().toLocaleDateString()
  });

  localStorage.setItem("tmaBookings", JSON.stringify(bookings));

  // ✅ Redirect to payment page
  window.location.href = "divpay.html";
}
