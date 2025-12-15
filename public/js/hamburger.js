document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("hamburger");
    const menu = document.querySelector(".sidebar");

    if (btn && menu) {
        btn.addEventListener("click", () => {
            menu.classList.toggle("open");
            btn.classList.toggle("open");
        });
    }

    if (window.lucide) {
        lucide.createIcons();
    }

    const toggle = document.querySelector(".submenu-toggle");
    const wrapper = document.querySelector(".submenu-wrapper");

    if (toggle && wrapper) {
        toggle.addEventListener("click", () => {
            wrapper.classList.toggle("open");
            toggle.classList.toggle("open");
        });
    }

    document.querySelectorAll('.sidebar a').forEach(link => {
        if (link.getAttribute('href') === window.location.pathname) {
            const li = link.closest('li');
            if (li) li.classList.add('active');
        }
    });

    const backBtn = document.getElementById("back-button");
    if (backBtn) {
        backBtn.addEventListener("click", () => {
            window.history.back();
        });
    }

});
