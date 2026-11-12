// Mobile menu and active-section highlighting.
(function () {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.getElementById("nav-links");

  function setMenu(open) {
    links.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  toggle.addEventListener("click", () => setMenu(!links.classList.contains("open")));
  links.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });

  // Highlight the nav link of the section currently in view.
  const navAnchors = [...links.querySelectorAll('a[href^="#"]')];
  const sections = navAnchors
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  function updateActive() {
    const offset = window.innerHeight * 0.35;
    let current = sections[0];
    for (const s of sections) {
      if (s.getBoundingClientRect().top - offset <= 0) current = s;
    }
    // At the very bottom of the page, the last section is active.
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      current = sections[sections.length - 1];
    }
    navAnchors.forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === "#" + current.id)
    );
  }
  window.addEventListener("scroll", updateActive, { passive: true });
  window.addEventListener("resize", updateActive);
  updateActive();
})();
