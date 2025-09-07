document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const food = form.food.value;
    const quantity = form.quantity.value;
    const notes = form.notes.value.trim();

    // Craft message for WhatsApp
    const message = 
      `Order from Jireh's Kitchen:%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Food: ${food}%0A` +
      `Quantity: ${quantity}%0A` +
      (notes ? `Notes: ${notes}%0A` : '');

    // WhatsApp business number (Ghana)
    const whatsappNumber = "233201395064"; // Ghana country code (remove leading zero)

    // Redirect to WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  });
});