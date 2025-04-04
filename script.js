document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-dark-mode");
  
    // Verifica o tema salvo no localStorage
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
    }
  
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
  
      // Salvar preferência
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  });
  function toggleMenu() {
    document.getElementById("menu-list").classList.toggle("show");
}
  