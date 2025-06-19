// Highlight active nav link based on current page
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

document.getElementById("cctvContactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    // service: document.getElementById("service").value,
    message: document.getElementById("message").value,
    timestamp: new Date().toISOString(),
  };

  // Validate form
  if (!formData.name || !formData.email || !formData.message) {
    alert("Please fill in all required fields");
    return;
  }

  // Send data to server (3 options below)

  // Option 1: EmailJS (Free tier)
  emailjs.send("service_fux7gel", "template_x634hxs", formData).then(
    () => showSuccess(),
    (err) => console.error("Failed:", err),
  );
});

function showSuccess() {
  document.getElementById("cctvContactForm").reset();
  document.getElementById("formSuccess").style.display = "block";
  setTimeout(() => {
    document.getElementById("formSuccess").style.display = "none";
  }, 5000);
}
