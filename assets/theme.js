(() => {
  const root = document.documentElement;
  let savedTheme = null;

  try {
    savedTheme = window.localStorage.getItem("portfolio-theme");
  } catch {
    // Storage can be unavailable in privacy-restricted browsing contexts.
  }

  // Light is the portfolio's default. A visitor can still choose and retain dark mode.
  const theme = savedTheme === "dark" ? "dark" : "light";

  root.dataset.theme = theme;
  root.style.colorScheme = theme;
})();
