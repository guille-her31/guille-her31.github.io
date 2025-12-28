// Año en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal on scroll (simple y ligero)
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => observer.observe(el));

// Cerrar navbar en móvil al hacer click
const navLinks = document.querySelectorAll("#navLinks .nav-link");
const navCollapse = document.getElementById("navLinks");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navCollapse.classList.contains("show")) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapse);
      bsCollapse.hide();
    }
  });
});
