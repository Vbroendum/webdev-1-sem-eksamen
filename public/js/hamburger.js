document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#hamburger");
    const menu = document.querySelector(".sidebar");

    if (!btn || !menu) {
        console.warn("Hamburger or sidebar not found");
        return;
    }

    btn.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
});
