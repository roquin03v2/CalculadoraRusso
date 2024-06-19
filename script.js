// Función para calcular el pago total
function calculatePayment() {
  const driverCost = parseInt(document.getElementById("driver-cost").value);
  const profit = parseInt(document.getElementById("profit").value);
  const numDeliveries = parseInt(document.getElementById("num-deliveries").value);

  const totalPayment = (driverCost + profit) * numDeliveries;
  document.getElementById("payment-result").textContent = "El pago total a recibir es: " + totalPayment + " dólares";
}

// Agregar evento al botón "Calcular"
document.getElementById("calculate-button").addEventListener("click", calculatePayment);