(() => {
  const root = document.documentElement;
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let savedTheme = null;

  try {
    savedTheme = window.localStorage.getItem("portfolio-theme");
  } catch {
    // Storage can be unavailable in privacy-restricted browsing contexts.
  }

  const theme = savedTheme === "light" || savedTheme === "dark"
    ? savedTheme
    : systemPrefersDark ? "dark" : "light";

  root.dataset.theme = theme;
  root.style.colorScheme = theme;
})();
