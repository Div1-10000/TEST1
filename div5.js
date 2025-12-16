let logins = JSON.parse(localStorage.getItem("loginRecords")) || [];

function renderTable() {
  const table = document.getElementById("loginTable");
  table.innerHTML = "";

  logins.forEach((login, index) => {
    table.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${login.username || "Guest"}</td>
        <td>${login.time}</td>
        <td>
          <span class="delete-btn" onclick="removeRecord(${index})">❌</span>
        </td>
      </tr>
    `;
  });
}

function removeRecord(index) {
  logins.splice(index, 1);
  localStorage.setItem("loginRecords", JSON.stringify(logins));
  renderTable();
}

renderTable();
