(function () {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Copy email button
  const email = "guillermoj.heres@gmail.com";
  const copyBtn = document.getElementById("copyEmailBtn");
  const toast = document.getElementById("copyToast");

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(email);
        if (toast) {
          toast.classList.remove("d-none");
          setTimeout(() => toast.classList.add("d-none"), 1400);
        }
      } catch (e) {
        // Fallback: prompt
        window.prompt("Copy email:", email);
      }
    });
  }

  // Portfolio filter
  const filter = document.getElementById("portfolioFilter");
  const items = Array.from(document.querySelectorAll(".portfolio-item"));

  function applyFilter(value) {
    items.forEach((item) => {
      const cat = item.getAttribute("data-category");
      const show = value === "all" || value === cat;
      item.classList.toggle("d-none", !show);
    });
  }

  if (filter) {
    filter.addEventListener("change", (e) => applyFilter(e.target.value));
  }
})();
