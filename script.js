document.addEventListener("DOMContentLoaded", function () {
  initScrollNavigation();
  initMobileMenu();
  initFAQAccordion();
  initScrollAnimations();
  initThemeAnimations();
});

function initScrollNavigation() {
  const menu = document.getElementById("menu");
  if (!menu) return;

  menu.addEventListener("click", function (event) {
    const target = event.target.closest("a[data-scroll]");
    if (target) {
      event.preventDefault();
      const sectionId = target.dataset.scroll;
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });

        if (window.innerWidth <= 768) {
          const menuToggle = document.getElementById("menu-toggle");
          if (menu.classList.contains("active") && menuToggle) {
            menu.classList.remove("active");
            menuToggle.classList.remove("active");
          }
        }
      }
    }
  });
}

function initMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (!menuToggle || !menu) return;

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (
      menu.classList.contains("active") &&
      !menu.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      menu.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", handleScroll);

function handleScroll() {
  const navbar = document.querySelector(".logo");
  const menuLinks = document.querySelectorAll("#menu a");
  const scrolled = window.scrollY > 50;

  if (!navbar) return;

  if (scrolled) {
    navbar.classList.add("scrolled");

    if (window.innerWidth <= 768) {
      menuLinks.forEach((link) => {
        link.style.color = "white";
      });
    }
  } else {
    navbar.classList.remove("scrolled");

    menuLinks.forEach((link) => {
      link.style.color = "";
    });
  }
}

function initFAQAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    item.classList.remove("active");
    const toggleSign = item.querySelector(".toggle");
    if (toggleSign) toggleSign.textContent = "+";

    item.addEventListener("click", function () {
      this.classList.toggle("active");
      const toggleSign = this.querySelector(".toggle");
      if (toggleSign) {
        toggleSign.textContent = this.classList.contains("active") ? "-" : "+";
      }
    });
  });
}

function initScrollAnimations() {
  const aboutSection = document.querySelector(".about");
  const statsItems = document.querySelectorAll(".stat-item");

  if (!aboutSection && !statsItems.length) return;

  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    if (aboutSection) {
      const aboutTop = aboutSection.getBoundingClientRect().top;
      if (aboutTop < windowHeight - 100) {
        aboutSection.classList.add("visible");
      }
    }

    statsItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < windowHeight - 100) {
        item.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
}

function initThemeAnimations() {
  const container = document.querySelector(".container-main");
  const themes = document.querySelectorAll(".theme");

  if (!container && !themes.length) return;

  function isInViewport(element) {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight - 100;
  }

  function animateOnScroll() {
    if (container && isInViewport(container)) {
      container.classList.add("visible");
    }

    themes.forEach((theme, index) => {
      if (isInViewport(theme)) {
        theme.style.animation = `fadeIn 0.6s ease-out ${index * 0.2}s forwards`;
      }
    });
  }

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll();
}

window.addEventListener(
  "resize",
  debounce(function () {
    handleScroll();
  }, 250)
);

function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
