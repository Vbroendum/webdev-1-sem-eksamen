/* Funktionalitet til hamburger menuen */

document.addEventListener("DOMContentLoaded", () => {

    /* Hamburger menu */

    const hamburgerBtn = document.getElementById("hamburger");
    const sidebar = document.querySelector(".sidebar");

    if (hamburgerBtn && sidebar) {
        hamburgerBtn.addEventListener("click", () => {
            sidebar.classList.toggle("open");
            hamburgerBtn.classList.toggle("open");
        });
    }


    /* Lucide ikoner */

    if (window.lucide) {
        lucide.createIcons();
    }


    /* Submenu – skjul som standard */

    document.querySelectorAll(".submenu-wrapper").forEach(wrapper => {
        wrapper.style.display = "none";
    });


    /* Submenu toggle */

    document.querySelectorAll(".submenu-toggle").forEach(toggle => {
        toggle.addEventListener("click", () => {

            const wrapper = document.querySelector(".submenu-wrapper");
            if (!wrapper) return;

            const isOpen = wrapper.style.display === "block";

            wrapper.style.display = isOpen ? "none" : "block";
            toggle.classList.toggle("open", !isOpen);
        });
    });


    /* Aktiv menu-link */

    document.querySelectorAll(".sidebar a").forEach(link => {
        if (link.getAttribute("href") === window.location.pathname) {
            const listItem = link.closest("li");
            if (listItem) listItem.classList.add("active");
        }
    });


    /* Tilbage knap på mobil */

    const backButton = document.getElementById("back-button");

    if (backButton) {
        backButton.addEventListener("click", () => {
            window.history.back();
        });
    }

});
