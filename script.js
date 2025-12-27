function initBill() {
  document.getElementById("billNo").innerText = Math.floor(Math.random() * 100000);
  document.getElementById("billDate").innerText = new Date().toLocaleDateString();
  calculate();
}

function calculate() {
  let rows = document.querySelectorAll(".dressRow");
  let total = 0;

  rows.forEach(row => {
    let qty = row.querySelector(".qty").value || 0;
    let rate = row.querySelector(".rate").value || 0;
    let amount = qty * rate;

    row.querySelector(".amt").innerText = amount;
    total += amount;
  });

  document.getElementById("total").innerText = total;

  let advance = document.getElementById("advance").value || 0;
  document.getElementById("balance").innerText = total - advance;
}

function addDress() {
  let body = document.getElementById("dressBody");
  let row = body.children[0].cloneNode(true);

  row.querySelectorAll("input").forEach(input => {
    if (input.type === "number") input.value = "";
    else input.value = "";
  });

  row.querySelector(".qty").value = 1;
  row.querySelector(".amt").innerText = "0";

  body.appendChild(row);
}

function newBill() {
  if (confirm("New bill create karni hai?")) {
    location.reload();
  }
}

/* PWA Service Worker */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
