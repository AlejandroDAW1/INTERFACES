const theme = document.querySelector(".dark-light");
const html = document.documentElement;
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

theme.addEventListener("click", lightDark);
function lightDark(){  
  const esOscuro = html.getAttribute("data-bs-theme") === "dark";
  html.setAttribute("data-bs-theme", esOscuro ? "light" : "dark");
  theme.textContent = esOscuro ? "🌙" : "☀️";
}

