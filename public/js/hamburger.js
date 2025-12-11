document.addEventListener("DOMContentLoaded", () => {

    // ✅ HAMBURGER + LUK (samme knap)
    const btn = document.getElementById("hamburger");
    const icon = document.getElementById("hamburger-icon");
    const menu = document.querySelector(".sidebar");

    if (btn && icon && menu) {
        btn.addEventListener("click", () => {
            const isOpen = menu.classList.toggle("open");

            // 🔁 Skift ikon mellem ☰ og ❌
            icon.setAttribute("data-lucide", isOpen ? "x" : "menu");

            // 🔄 Opdater lucide-ikoner
            if (window.lucide) {
                lucide.createIcons();
            }
        });
    }

    // ✅ SUBMENU (OPRET)
    const toggle = document.querySelector(".submenu-toggle");
    const wrapper = document.querySelector(".submenu-wrapper");

    if (toggle && wrapper) {
        toggle.addEventListener("click", () => {
            wrapper.classList.toggle("open");
            toggle.classList.toggle("open");
        });
    }

    // ✅ ACTIVE MENU VIA URL
    document.querySelectorAll('.sidebar a').forEach(link => {
        if (link.getAttribute('href') === window.location.pathname) {
            const li = link.closest('li');
            if (li) li.classList.add('active');
        }
    });

    // ✅ TILBAGE-PIL
    const backBtn = document.getElementById("back-button");
    if (backBtn) {
        backBtn.addEventListener("click", () => {
            window.history.back();
        });
    }

});
