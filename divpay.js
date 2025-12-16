// ==========================
// Razorpay Checkout Button
// ==========================
const buyNowBtn = document.getElementById("buyNowBtn");

// Payment modal elements
const paymentModal = document.getElementById("paymentModal");
const closeBtn = paymentModal ? paymentModal.querySelector(".close-btn") : null;
const tick = paymentModal ? paymentModal.querySelector(".tick") : null;

if (buyNowBtn) {
    buyNowBtn.addEventListener("click", function() {
        var options = {
            key: "YOUR_KEY_ID", // Replace with your Razorpay key
            amount: 450,      // in paise (Rs. 450)
            currency: "INR",
            name: "TARUN MOBILE ACCESSORIES",
            description: "5G The Lightning Data",
            handler: function(response) {
                // Payment successful → show modal instead of redirect
                showPaymentModal();
            },
            theme: { color: "#00aaff" }
        };
        const rzp1 = new Razorpay(options);
        rzp1.open();
    });
}

// ==========================
// Show Payment Modal Function
// ==========================
function showPaymentModal() {
    if (!paymentModal) return;

    paymentModal.style.display = "flex";

    // Tick animation
    if (tick) {
        tick.style.opacity = 0;
        tick.style.width = "0px";
        tick.style.height = "0px";

        setTimeout(() => {
            tick.style.transition = "all 0.5s ease";
            tick.style.opacity = 1;
            tick.style.width = "50px";
            tick.style.height = "25px";
        }, 500);
    }

    // Auto-close after 5 seconds
    setTimeout(() => {
        paymentModal.style.display = "none";
    }, 5000);
}

// ==========================
// Close button
// ==========================
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        paymentModal.style.display = "none";
    });
}
