document.getElementById("btn-donate").addEventListener("click", function () {
  const img = document.getElementById("qrCode");
  // Toggle visibility
  if (img.style.display === "none" || img.style.display === "") {
    img.style.display = "block"; // Show image
  } else {
    img.style.display = "none"; // Hide image
  }
});
