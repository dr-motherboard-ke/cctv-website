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
