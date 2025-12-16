const theme = document.querySelector(".dark-light");
const html = document.documentElement;

theme.addEventListener("click", lightDark);
function lightDark(){  
  const esOscuro = html.getAttribute("data-bs-theme") === "dark";
  html.setAttribute("data-bs-theme", esOscuro ? "light" : "dark");
  theme.textContent = esOscuro ? "🌙" : "☀️";
}