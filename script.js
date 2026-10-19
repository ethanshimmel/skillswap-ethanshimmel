// Each button will control the additional information for its own card

document.querySelectorAll(".details-button").forEach((button) => {
    button.addEventListener("click", () => {
        const detailsId = button.getAttribute("aria-controls");
        const details = document.getElementById(detailsId);

        if (!details) return;

        const isExpanded = button.getAttribute("aria-expanded") === "true";

        details.hidden = isExpanded;

        button.setAttribute("aria-expanded", String(!isExpanded));

        button.textContent = isExpanded ? "More Information" : "Show Less";
    })
})