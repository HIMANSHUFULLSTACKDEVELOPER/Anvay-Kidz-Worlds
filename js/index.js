document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        const navbarHeight = document.querySelector(".anvaytoynavbar").offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Active link detection and navbar scroll behavior
  const navbar = document.querySelector(".anvaytoynavbar");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    // Toggle scrolled class
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Detect current section
    let currentId = "";
    const navbarHeight = navbar.offsetHeight;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - navbarHeight - 100;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.id;
      }
    });

    // Update active nav links
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        const linkId = href.substring(1);
        link.classList.toggle("active", linkId === currentId);
      }
    });
  });

  // Collapse navbar on mobile link click
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
      }
    });
  });

  // Initial trigger
  window.dispatchEvent(new Event("scroll"));
});

// shop by age
function revealCirclesOnScroll() {
  const circles = document.querySelectorAll(".circle");
  const triggerBottom = window.innerHeight * 0.85;

  circles.forEach((circle) => {
    const circleTop = circle.getBoundingClientRect().top;

    if (circleTop < triggerBottom) {
      circle.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealCirclesOnScroll);
window.addEventListener("load", revealCirclesOnScroll);

//
// animation shop by catergy
AOS.init({
  duration: 1000,
  once: true,
});
//

//
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const galleryItems = document.querySelectorAll(".anvay-gallery-item img");

galleryItems.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
