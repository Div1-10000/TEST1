const modal = document.getElementById("productModal");
const modalClose = document.querySelector(".modal .close");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productFeatures = document.getElementById("productFeatures");
const productImage = document.getElementById("productImage");

// ✅ Function to open modal dynamically
function openModal(name, price, img, features) {
  productName.textContent = name;
  productPrice.textContent = price;
  productFeatures.textContent = features;
  productImage.style.backgroundImage = `url('${img}')`;
  modal.style.display = "block";
}

// ✅ Close modal on X click
function closeModal() {
  modal.style.display = "none";
}

// ✅ Close modal on background click
window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};

