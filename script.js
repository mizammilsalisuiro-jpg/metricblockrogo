function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const burger = document.querySelector(".hamburger");
  nav.classList.toggle("active");
  burger.classList.toggle("active");
}

// Highlight active nav link
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});