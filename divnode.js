const Razorpay = require("razorpay");

const razorpay = new Razorpay({
    key_id: "YOUR_KEY_ID",
    key_secret: "YOUR_KEY_SECRET"
});

// After payment success, create a transfer
async function createCommissionTransfer(paymentId, amountInRupees, secondaryAccountId) {
    let commissionPercent = 0;
    
    if (amountInRupees < 100) commissionPercent = 3;
    else if (amountInRupees < 500) commissionPercent = 10;
    else if (amountInRupees < 1000) commissionPercent = 15;
    else commissionPercent = 20;

    const commissionAmount = Math.floor((amountInRupees * commissionPercent) * 100); // in paise

    try {
        const transfer = await razorpay.transfers.create({
            account: secondaryAccountId,  // the beneficiary account
            amount: commissionAmount,     // in paise
            currency: "INR",
            notes: {
                payment_id: paymentId,
                commission_percent: commissionPercent
            }
        });
        console.log("Commission transferred:", transfer);
    } catch (err) {
        console.error(err);
    }
}
// --------------------------------------------------

// handler: function(response) {
//     // Send payment_id & amount to backend
//     fetch("/api/transfer-commission", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             paymentId: response.razorpay_payment_id,
//             amount: 450 // actual payment amount
//         })
//     }).then(res => res.json())
//       .then(data => console.log(data));

//     // Redirect
//     window.location.href = "divpay.html";
// }
