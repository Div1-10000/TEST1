const tableBody = document.querySelector("#bookingTable tbody");
const emptyMsg = document.getElementById("emptyMsg");

// Fetch bookings from localStorage
let bookings = JSON.parse(localStorage.getItem("tmaBookings")) || [];

function renderBookings() {
  tableBody.innerHTML = "";

  if (bookings.length === 0) {
    emptyMsg.style.display = "block";
    return;
  }

  emptyMsg.style.display = "none";

  bookings.forEach((b, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${b.name}</td>
      <td>${b.phone}</td>
      <td>${b.item}</td>
      <td>${b.date}</td>
      <td><span class="delete-btn" onclick="deleteBooking(${index})">🗑</span></td>
    `;

    tableBody.appendChild(row);
  });
}

function deleteBooking(index) {
  if (confirm("Delete this booking?")) {
    bookings.splice(index, 1);
    localStorage.setItem("tmaBookings", JSON.stringify(bookings));
    renderBookings();
  }
}

renderBookings();
