(() => {
  const root = document.documentElement;
  root.classList.add("js-enabled");

  const themeToggle = document.querySelector("[data-theme-toggle]");
  const fontSelect = document.querySelector("[data-font-select]");
  const languageSelect = document.querySelector("[data-language-select]");
  const siteControls = document.querySelector(".site-controls");

  const translations = {
    en: {
      "brand.subtitle": "Academic Portfolio",
      "control.group": "Display preferences",
      "control.font": "Choose font",
      "control.language": "Choose language",
      "menu": "Menu",
      "download.cv": "Download CV",
      "theme.dark": "Dark",
      "theme.light": "Light",
      "theme.toDark": "Switch to dark theme",
      "theme.toLight": "Switch to light theme",
      "nav.about": "About",
      "nav.education": "Education",
      "nav.experience": "Experience",
      "nav.projects": "Projects & Skills",
      "nav.competitions": "Competitions",
      "nav.kaggle": "Kaggle Competitions",
      "nav.coding": "Coding Competitions",
      "nav.hackathons": "Hackathons",
      "nav.publications": "Publications",
      "nav.community": "Community & Volunteer",
      "about.role": "AI Engineer | 3x Kaggle Grandmaster | 7x Hackathon Winner",
      "competition.gold": "Gold Medal",
      "competition.silver": "Silver Medal",
      "competition.bronze": "Bronze Medal",
      "competition.top": "Top",
      "competition.result": "View result on Kaggle",
      "competition.open": "Open competition",
      "competition.profile": "View full Kaggle competitions profile",
      "footer": "Copyright 2026 Muhammad Ibrahim Qasmi"
    },
    es: {
      "brand.subtitle": "Portafolio académico",
      "control.group": "Preferencias de visualización",
      "control.font": "Elegir fuente",
      "control.language": "Elegir idioma",
      "menu": "Menú",
      "download.cv": "Descargar CV",
      "theme.dark": "Oscuro",
      "theme.light": "Claro",
      "theme.toDark": "Cambiar al tema oscuro",
      "theme.toLight": "Cambiar al tema claro",
      "nav.about": "Acerca de",
      "nav.education": "Educación",
      "nav.experience": "Experiencia",
      "nav.projects": "Proyectos y habilidades",
      "nav.competitions": "Competiciones",
      "nav.kaggle": "Competiciones de Kaggle",
      "nav.coding": "Competiciones de programación",
      "nav.hackathons": "Hackatones",
      "nav.publications": "Publicaciones",
      "nav.community": "Comunidad y voluntariado",
      "about.role": "Ingeniero de IA | 3x Gran Maestro de Kaggle | 7x ganador de hackatones",
      "competition.gold": "Medalla de oro",
      "competition.silver": "Medalla de plata",
      "competition.bronze": "Medalla de bronce",
      "competition.top": "Top",
      "competition.result": "Ver resultado en Kaggle",
      "competition.open": "Abrir competición",
      "competition.profile": "Ver el perfil completo de competiciones de Kaggle",
      "footer": "Derechos de autor 2026 Muhammad Ibrahim Qasmi"
    },
    ko: {
      "brand.subtitle": "학술 포트폴리오",
      "control.group": "화면 설정",
      "control.font": "글꼴 선택",
      "control.language": "언어 선택",
      "menu": "메뉴",
      "download.cv": "CV 다운로드",
      "theme.dark": "다크",
      "theme.light": "라이트",
      "theme.toDark": "다크 테마로 전환",
      "theme.toLight": "라이트 테마로 전환",
      "nav.about": "소개",
      "nav.education": "교육",
      "nav.experience": "경력",
      "nav.projects": "프로젝트 및 기술",
      "nav.competitions": "대회",
      "nav.kaggle": "Kaggle 대회",
      "nav.coding": "코딩 대회",
      "nav.hackathons": "해커톤",
      "nav.publications": "출판물",
      "nav.community": "커뮤니티 및 봉사",
      "about.role": "AI 엔지니어 | 3x Kaggle 그랜드마스터 | 7x 해커톤 우승",
      "competition.gold": "금메달",
      "competition.silver": "은메달",
      "competition.bronze": "동메달",
      "competition.top": "상위",
      "competition.result": "Kaggle 결과 보기",
      "competition.open": "대회 열기",
      "competition.profile": "전체 Kaggle 대회 프로필 보기",
      "footer": "저작권 2026 Muhammad Ibrahim Qasmi"
    }
  };

  const getLanguage = () => ["en", "es", "ko"].includes(root.dataset.language)
    ? root.dataset.language
    : "en";

  const translate = (key) => translations[getLanguage()][key] || translations.en[key] || key;

  const setText = (element, value) => {
    if (!element) {
      return;
    }

    element.lang = getLanguage();
    element.dir = "auto";

    if (!element.children.length) {
      element.textContent = value;
      return;
    }

    const textNode = Array.from(element.childNodes).find((node) => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim());
    if (textNode) {
      const leading = textNode.nodeValue.match(/^\s*/)?.[0] || "";
      const trailing = textNode.nodeValue.match(/\s*$/)?.[0] || "";
      textNode.nodeValue = `${leading}${value}${trailing}`;
    }
  };

  const pageKeys = {
    "/about": "nav.about",
    "/education": "nav.education",
    "/experience": "nav.experience",
    "/projects": "nav.projects",
    "/competitions": "nav.kaggle",
    "/coding-competitions": "nav.coding",
    "/hackathons": "nav.hackathons",
    "/publications": "nav.publications",
    "/community-leadership": "nav.community"
  };

  const navKeyFor = (link) => {
    const path = new URL(link.href, window.location.href).pathname;
    if (path === "/competitions" && !link.closest(".sub-item")) {
      return "nav.competitions";
    }
    return pageKeys[path];
  };

  const originalBlocks = new WeakMap();

  const applyPageTranslation = () => {
    const pageTranslations = typeof PORTFOLIO_PAGE_TRANSLATIONS === "undefined"
      ? {}
      : PORTFOLIO_PAGE_TRANSLATIONS;
    const path = window.location.pathname;
    const allRules = [
      ...(pageTranslations.es?.[path] || []),
      ...(pageTranslations.ko?.[path] || [])
    ];

    allRules.forEach((rule) => {
      document.querySelectorAll(rule.selector).forEach((element) => {
        if (!originalBlocks.has(element)) {
          originalBlocks.set(element, element.innerHTML);
        }
        element.innerHTML = originalBlocks.get(element);
        element.lang = "en";
        element.dir = "auto";
      });
    });

    const currentRules = pageTranslations[getLanguage()]?.[path] || [];
    currentRules.forEach((rule) => {
      const values = rule.htmls || rule.texts || [];
      document.querySelectorAll(rule.selector).forEach((element, index) => {
        if (values[index] === undefined) {
          return;
        }
        if (rule.htmls) {
          element.innerHTML = values[index];
        } else {
          element.textContent = values[index];
        }
        element.lang = getLanguage();
        element.dir = "auto";
      });
    });
  };

  const translateInterface = () => {
    setText(document.querySelector(".sidebar-brand p"), translate("brand.subtitle"));
    setText(document.querySelector("[data-menu-toggle]"), translate("menu"));
    document.querySelectorAll(".sidebar-cv, .cv-button").forEach((element) => setText(element, translate("download.cv")));
    document.querySelectorAll(".nav-links a").forEach((link) => setText(link, translate(navKeyFor(link))));
    setText(document.querySelector(".page-title"), translate(pageKeys[window.location.pathname]));
    setText(document.querySelector(".role-line"), translate("about.role"));
    setText(document.querySelector(".page-footer"), translate("footer"));

    document.querySelectorAll(".competition-result").forEach((badge) => {
      if (!badge.dataset.resultKey && !badge.dataset.resultValue) {
        const result = badge.textContent.trim();
        badge.dataset.resultKey = result === "Gold Medal"
          ? "competition.gold"
          : result === "Silver Medal"
            ? "competition.silver"
            : result === "Bronze Medal"
              ? "competition.bronze"
              : "";
        if (!badge.dataset.resultKey && result.startsWith("Top ")) {
          badge.dataset.resultValue = result.slice(4);
        }
      }
      if (badge.dataset.resultKey) {
        setText(badge, translate(badge.dataset.resultKey));
      } else if (badge.dataset.resultValue) {
        setText(badge, `${translate("competition.top")} ${badge.dataset.resultValue}`);
      }
    });

    document.querySelectorAll(".competition-action").forEach((action) => {
      if (!action.dataset.actionKey) {
        action.dataset.actionKey = action.textContent.includes("View result")
          ? "competition.result"
          : "competition.open";
      }
      setText(action, translate(action.dataset.actionKey));
    });
    if (window.location.pathname === "/competitions") {
      setText(document.querySelector(".profile-link a"), translate("competition.profile"));
    }

    if (siteControls) {
      siteControls.setAttribute("aria-label", translate("control.group"));
    }
    if (fontSelect) {
      fontSelect.setAttribute("aria-label", translate("control.font"));
    }
    if (languageSelect) {
      languageSelect.setAttribute("aria-label", translate("control.language"));
    }

    applyPageTranslation();
  };

  const updateThemeControl = () => {
    if (!themeToggle) {
      return;
    }

    const isDark = root.dataset.theme === "dark";
    const icon = themeToggle.querySelector("i");
    const label = themeToggle.querySelector("[data-theme-label]");
    const controlLabel = isDark ? translate("theme.toLight") : translate("theme.toDark");
    themeToggle.setAttribute("aria-label", controlLabel);
    themeToggle.title = controlLabel;

    if (icon) {
      icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
    if (label) {
      label.textContent = isDark ? translate("theme.light") : translate("theme.dark");
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

  const applyFont = (font, persist = false) => {
    const selectedFont = ["manrope", "inter", "source", "lora"].includes(font)
      ? font
      : "manrope";
    root.dataset.font = selectedFont;

    if (fontSelect) {
      fontSelect.value = selectedFont;
    }

    if (persist) {
      try {
        window.localStorage.setItem("portfolio-font", selectedFont);
      } catch {
        // The selected font still applies for the current page.
      }
    }
  };

  if (fontSelect) {
    applyFont(root.dataset.font);
    fontSelect.addEventListener("change", (event) => {
      applyFont(event.target.value, true);
    });
  }

  const applyLanguage = (language, persist = false) => {
    const selectedLanguage = ["en", "es", "ko"].includes(language)
      ? language
      : "en";
    root.dataset.language = selectedLanguage;
    root.lang = selectedLanguage;

    if (languageSelect) {
      languageSelect.value = selectedLanguage;
    }

    if (persist) {
      try {
        window.localStorage.setItem("portfolio-language", selectedLanguage);
      } catch {
        // The selected language still applies for the current page.
      }
    }

    translateInterface();
    updateThemeControl();
  };

  if (languageSelect) {
    applyLanguage(root.dataset.language);
    languageSelect.addEventListener("change", (event) => {
      applyLanguage(event.target.value, true);
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
