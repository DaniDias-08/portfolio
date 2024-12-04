const toggleThemeButton = document.getElementById("toggle-theme");

function toggleTheme() {
  // Verifica se o tema atual é o claro ou o escuro
  const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';

  // Alterna entre os dois temas
  if (currentTheme === 'light') {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    toggleThemeButton.innerHTML = '🌙';  // Ícone de lua para dark mode
    localStorage.setItem('theme', 'dark');  // Salva o tema no localStorage
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    toggleThemeButton.innerHTML = '☀️';  // Ícone de sol para light mode
    localStorage.setItem('theme', 'light');  // Salva o tema no localStorage
  }
}

// Carrega o tema salvo no localStorage ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      toggleThemeButton.innerHTML = '🌙'; // Ícone de lua
    } else {
      document.body.classList.add('light-theme');
      toggleThemeButton.innerHTML = '☀️'; // Ícone de sol
    }
  } else {
    // Se não houver tema salvo, define o light mode como padrão
    document.body.classList.add('light-theme');
    toggleThemeButton.innerHTML = '☀️'; // Ícone de sol
  }
});

// Adiciona o evento de clique ao botão
toggleThemeButton.addEventListener('click', toggleTheme);
document.addEventListener("DOMContentLoaded", () => {
  const splashScreen = document.querySelector(".splash-screen");

  // Remove a splash screen após 3 segundos
  setTimeout(() => {
    splashScreen.style.display = "none";
  }, 3000);
});
