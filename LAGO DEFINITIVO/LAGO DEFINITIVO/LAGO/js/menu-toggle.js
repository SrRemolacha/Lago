document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".menu");

  // Toggle menú
  toggleButton.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("open");
    const expanded = toggleButton.getAttribute("aria-expanded") === "true";
    toggleButton.setAttribute("aria-expanded", !expanded);
  });

  // Cerrar al hacer clic fuera
  document.addEventListener("click", (e) => {
    if (
      menu.classList.contains("open") &&
      !menu.contains(e.target) &&
      !toggleButton.contains(e.target)
    ) {
      menu.classList.remove("open");
      toggleButton.setAttribute("aria-expanded", "false");
    }
  });

  // Cerrar con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("open")) {
      menu.classList.remove("open");
      toggleButton.setAttribute("aria-expanded", "false");
    }
  });
});
