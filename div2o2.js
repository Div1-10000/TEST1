let selectedProduct = {};

function openModal(name, price, image, features) {
    selectedProduct = { name, price, image, features };
    document.getElementById("productName").innerText = name;
    document.getElementById("productPrice").innerText = price;
    document.getElementById("productFeatures").innerText = features;
    document.getElementById("productImage").style.backgroundImage = `url(${image})`;
    document.getElementById("productModal").style.display = "block";
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

document.getElementById("buyNow").addEventListener("click", function() {
    const name = document.getElementById("userName").value.trim();
    const mobile = document.getElementById("userMobile").value.trim();

    if(name === "" || mobile === "") {
        alert("Please enter your name and mobile number!");
        return;
    }

    const booking = { ...selectedProduct, userName: name, userMobile: mobile, date: new Date().toLocaleString() };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Booking successful!");
    closeModal();
});

// Close modal when clicking outside content
window.onclick = function(event) {
    const modal = document.getElementById("productModal");
    if (event.target == modal) modal.style.display = "none";
};
