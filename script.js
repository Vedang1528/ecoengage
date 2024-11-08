// Initialize click count from local storage or set to 0
let clickCount = localStorage.getItem("clickCount")
  ? parseInt(localStorage.getItem("clickCount"))
  : 0;

// Display the click count
document.getElementById("clickCount").textContent = clickCount;

// Button click event
document.getElementById("clickButton").addEventListener("click", function () {
  clickCount++;
  localStorage.setItem("clickCount", clickCount); // Save to local storage
  document.getElementById("clickCount").textContent = clickCount; // Update displayed count
});

// Logout button event
document.getElementById("logoutButton").addEventListener("click", function () {
  window.location.href = "index.html"; // Redirect to login
});
