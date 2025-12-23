(() => {
  // Smooth in-page navigation (fast + no dependencies)
  document.addEventListener("click", (e) => {
    const a = e.target instanceof Element ? e.target.closest("a[href^='#']") : null;
    if (!a) return;
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", href);
  });

  // Contact form: if Formspree isn't configured, fall back to mailto.
  const form = document.querySelector("[data-contact-form]");
  if (form instanceof HTMLFormElement) {
    form.addEventListener("submit", (e) => {
      const action = form.getAttribute("action") || "";
      if (action.trim() && !action.startsWith("mailto:")) return; // allow real endpoint

      e.preventDefault();
      const fd = new FormData(form);
      const name = String(fd.get("name") || "").trim();
      const email = String(fd.get("email") || "").trim();
      const message = String(fd.get("message") || "").trim();

      const subject = encodeURIComponent(`Portfolio contact${name ? ` — ${name}` : ""}`);
      const body = encodeURIComponent(
        `${message}\n\n---\nFrom: ${name || "Anonymous"}\nEmail: ${email || "n/a"}\n`
      );

      const to = form.getAttribute("data-mailto") || "hamza@example.com";
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
})();
