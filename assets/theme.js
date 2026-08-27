(() => {
  const root = document.documentElement;
  let savedTheme = null;
  let savedFont = null;

  try {
    savedTheme = window.localStorage.getItem("portfolio-theme");
    savedFont = window.localStorage.getItem("portfolio-font");
  } catch {
    // Storage can be unavailable in privacy-restricted browsing contexts.
  }

  // Light is the portfolio's default. A visitor can still choose and retain dark mode.
  const theme = savedTheme === "dark" ? "dark" : "light";

  root.dataset.theme = theme;
  root.dataset.font = ["manrope", "inter", "source", "lora"].includes(savedFont)
    ? savedFont
    : "manrope";
  root.style.colorScheme = theme;
})();
