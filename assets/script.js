(() => {
  const root = document.documentElement;
  root.classList.add("js-enabled");

  const themeToggle = document.querySelector("[data-theme-toggle]");

  const updateThemeControl = () => {
    if (!themeToggle) {
      return;
    }

    const isDark = root.dataset.theme === "dark";
    const icon = themeToggle.querySelector("i");
    const label = themeToggle.querySelector("[data-theme-label]");
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    themeToggle.title = isDark ? "Switch to light theme" : "Switch to dark theme";

    if (icon) {
      icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
    if (label) {
      label.textContent = isDark ? "Light" : "Dark";
    }
  };

  const applyTheme = (theme, persist = false) => {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    if (persist) {
      try {
        window.localStorage.setItem("portfolio-theme", theme);
      } catch {
        // The selected theme still applies for the current page.
      }
    }

    updateThemeControl();
  };

  if (themeToggle) {
    updateThemeControl();
    themeToggle.addEventListener("click", () => {
      applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
    });
  }

  const sidebar = document.querySelector(".sidebar");
  const toggle = document.querySelector("[data-menu-toggle]");

  if (toggle && sidebar) {
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });

    sidebar.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 920) {
          sidebar.classList.remove("open");
        }
      });
    });

    document.addEventListener("click", (event) => {
      if (window.innerWidth > 920) {
        return;
      }
      if (!sidebar.contains(event.target)) {
        sidebar.classList.remove("open");
      }
    });
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = Array.from(document.querySelectorAll("[data-reveal]"));

  // Prefetch nearby internal pages so page switches feel instant.
  const prefetched = new Set();
  const prefetch = (url) => {
    if (prefetched.has(url.href)) {
      return;
    }
    const hint = document.createElement("link");
    hint.rel = "prefetch";
    hint.href = url.href;
    hint.as = "document";
    document.head.appendChild(hint);
    prefetched.add(url.href);
  };

  document.querySelectorAll("a[href]").forEach((link) => {
    if (link.target === "_blank" || link.hasAttribute("download")) {
      return;
    }
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return;
    }

    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin) {
      return;
    }

    const triggerPrefetch = () => prefetch(url);
    link.addEventListener("mouseenter", triggerPrefetch, { once: true });
    link.addEventListener("touchstart", triggerPrefetch, { once: true, passive: true });
  });

  if (!items.length) {
    return;
  }

  // Make animation consistent on every page: reveal all marked blocks together.
  const revealAll = () => {
    items.forEach((item) => {
      item.classList.add("is-visible");
    });
  };

  if (reducedMotion) {
    revealAll();
    return;
  }

  requestAnimationFrame(revealAll);
})();
