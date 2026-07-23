// =========================
// NAVIGATION HIGHLIGHT
// =========================
const navigationLinks = document.querySelectorAll(".site-nav__links a");
const pageSections = document.querySelectorAll("main section[id]");

const navigationObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            navigationLinks.forEach((link) => {
                const isCurrentSection =
                    link.getAttribute("href") === `#${entry.target.id}`;

                if (isCurrentSection) {
                    link.setAttribute("aria-current", "true");
                } else {
                    link.removeAttribute("aria-current");
                }
            });
        });
    },
    {
        threshold: 0.35
    }
);

pageSections.forEach((section) => {
    navigationObserver.observe(section);
});


// =========================
// SCROLL REVEAL
// =========================
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            } else {
                entry.target.classList.remove("is-visible");
            }
        });
    },
    {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px"
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});
