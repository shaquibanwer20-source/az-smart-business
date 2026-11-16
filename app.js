const AZ_WHATSAPP_NUMBERS = ["919971917392", "918285951076"];

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("requestForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const service = document.getElementById("service").value;
  const details = document.getElementById("details").value.trim();

  const message = [
    "New enquiry from AZ Smart Business",
    "Name: " + name,
    "Customer mobile: " + (mobile || "Not provided"),
    "Work required: " + service,
    "Details: " + details
  ].join("\n");

  const firstNumber = window.confirm(
    "OK dabayein: WhatsApp 9971917392\nCancel dabayein: WhatsApp 8285951076"
  );

  const number = firstNumber
    ? AZ_WHATSAPP_NUMBERS[0]
    : AZ_WHATSAPP_NUMBERS[1];

  window.open(
    "https://wa.me/" + number + "?text=" + encodeURIComponent(message),
    "_blank"
  );
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () =>
    navigator.serviceWorker.register("./sw.js").catch(() => {})
  );
}
