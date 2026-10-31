const menu = document.getElementById("menu");
const links = document.getElementById("links");

menu.addEventListener("click", () => links.classList.toggle("open"));
links
	.querySelectorAll("a")
	.forEach((link) =>
		link.addEventListener("click", () => links.classList.remove("open")),
	);
document.getElementById("year").textContent = new Date().getFullYear();

const contactToggle = document.getElementById("contact-toggle");
const contactDetails = document.getElementById("contact-details");
const contactToggleIcon = contactToggle.querySelector(".contact-toggle-icon");

contactToggle.addEventListener("click", () => {
    const isExpanded =
        contactToggle.getAttribute("aria-expanded") === "true";

    contactToggle.setAttribute("aria-expanded", String(!isExpanded));

    contactToggleIcon.classList.toggle(
        "fa-arrow-right-long",
        isExpanded
    );

    contactToggleIcon.classList.toggle(
        "fa-arrow-left-long",
        !isExpanded
    );

    if (isExpanded) {
        contactDetails.classList.remove("is-open");

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            contactDetails.hidden = true;
        }

        return;
    }

    contactDetails.hidden = false;

    requestAnimationFrame(() => {
        contactDetails.classList.add("is-open");
    });
});

contactDetails.addEventListener("transitionend", (event) => {
    if (
        event.propertyName === "max-height" &&
        contactToggle.getAttribute("aria-expanded") === "false"
    ) {
        contactDetails.hidden = true;
    }
});
