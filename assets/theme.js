(() => {
  const root = document.documentElement;
  let savedTheme = null;
  let savedFont = null;
  let savedLanguage = null;

  try {
    savedTheme = window.localStorage.getItem("portfolio-theme");
    savedFont = window.localStorage.getItem("portfolio-font");
    savedLanguage = window.localStorage.getItem("portfolio-language");
  } catch {
    // Storage can be unavailable in privacy-restricted browsing contexts.
  }

  // Light is the portfolio's default. A visitor can still choose and retain dark mode.
  const theme = savedTheme === "dark" ? "dark" : "light";

  root.dataset.theme = theme;
  root.dataset.font = ["manrope", "inter", "source", "lora", "bricolage", "fraunces", "syne", "petit", "qwitcher", "stalemate"].includes(savedFont)
    ? savedFont
    : "manrope";
  root.dataset.language = ["en", "es", "ko", "fr", "de", "pt", "it", "tr", "id", "ja"].includes(savedLanguage)
    ? savedLanguage
    : "en";
  root.lang = root.dataset.language;
  root.style.colorScheme = theme;
})();
