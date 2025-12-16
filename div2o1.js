let selectedProduct = {};

function openModal(name, price, image, features) {
    selectedProduct = { name, price, image, features };
    document.getElementById("productName").innerText = name;
    document.getElementById("productPrice").innerText = price;
    document.getElementById("productFeatures").innerText = features;
    document.getElementById("productImage").style.backgroundImage = `url(${image})`;
    document.getElementById("productModal").style.display = "block";
}

// Close modal
function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

// Wait for DOM to load before attaching click event
document.addEventListener("DOMContentLoaded", function() {
    const buyBtn = document.getElementById("buyNow");

    buyBtn.addEventListener("click", function() {
        const name = document.getElementById("userName").value.trim();
        const mobile = document.getElementById("userMobile").value.trim();

        if (name === "" || mobile === "") {
            alert("Please enter your name and mobile number!");
            return;
        }

        const booking = { 
            ...selectedProduct, 
            userName: name, 
            userMobile: mobile, 
            date: new Date().toLocaleString() 
        };

        let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        bookings.push(booking);
        localStorage.setItem("bookings", JSON.stringify(bookings));

        alert("Booking successful!");
        closeModal();

        // Optional: clear input fields
        document.getElementById("userName").value = "";
        document.getElementById("userMobile").value = "";
    });
});

// Close modal if clicked outside
window.onclick = function(event) {
    const modal = document.getElementById("productModal");
    if (event.target == modal) modal.style.display = "none";
};
