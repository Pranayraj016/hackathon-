document.getElementById("about").addEventListener("click", function () {
  document.getElementById("about-page").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("theme").addEventListener("click", function () {
  document.getElementById("theme-page").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("sponsors").addEventListener("click", function () {
  document
    .getElementById("sponsors-page")
    .scrollIntoView({ behavior: "smooth" });
});
document.getElementById("team").addEventListener("click", function () {
  document.getElementById("team-page").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("faq").addEventListener("click", function () {
  document.getElementById("faq-page").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("contact").addEventListener("click", function () {
  document
    .getElementById("contact-page")
    .scrollIntoView({ behavior: "smooth" });
});
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const navbar = document.querySelector(".logo");

// Toggle menu on click
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
    menu.classList.remove("active");
    menuToggle.classList.remove("active");
  }
});

// Add background and change link color when scrolling
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled"); // Add background and change text color
  } else {
    navbar.classList.remove("scrolled"); // Remove background and restore original colors
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("active");
    let toggleSign = item.querySelector(".toggle");
    if (toggleSign) toggleSign.textContent = "+";

    item.addEventListener("click", function () {
      this.classList.toggle("active");
      let toggleSign = this.querySelector(".toggle");
      toggleSign.textContent = this.classList.contains("active") ? "-" : "+";
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about");
  const statsItems = document.querySelectorAll(".stat-item");

  function revealOnScroll() {
    let windowHeight = window.innerHeight;
    let aboutTop = aboutSection.getBoundingClientRect().top;

    if (aboutTop < windowHeight - 100) {
      aboutSection.classList.add("visible");
    }

    statsItems.forEach((item) => {
      let itemTop = item.getBoundingClientRect().top;
      if (itemTop < windowHeight - 100) {
        item.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container-main");
  const themes = document.querySelectorAll(".theme");

  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight - 100;
  }

  // Function to animate elements when they appear
  function animateOnScroll() {
    if (isInViewport(container)) {
      container.classList.add("visible");
    }

    themes.forEach((theme, index) => {
      if (isInViewport(theme)) {
        theme.style.animation = `fadeIn 0.6s ease-out ${index * 0.2}s forwards`;
      }
    });
  }

  // Run on load and scroll
  animateOnScroll();
  window.addEventListener("scroll", animateOnScroll);
});
