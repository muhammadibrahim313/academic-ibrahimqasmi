(() => {
  const root = document.documentElement;
  root.classList.add("js-enabled");

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

  if (reducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 60, 300)}ms`;
    observer.observe(item);
  });
})();
