/* Site behaviour: mobile navigation and the footer year.
   Vanilla JS, no dependencies. */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Mobile navigation ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    const setMenu = (open) => {
      navLinks.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", String(open));
    };

    navToggle.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
    document.addEventListener("click", (e) => {
      if (window.innerWidth > 768) return;
      if (!e.target.closest(".navbar")) setMenu(false);
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
      if (link.classList.contains("active")) link.setAttribute("aria-current", "page");
    });
  }

  /* ---------- Footer year ---------- */
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
});
