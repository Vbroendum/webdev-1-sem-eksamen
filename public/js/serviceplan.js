document.addEventListener("change", function(e) {
    if (
        e.target.classList.contains("product-select") ||
        e.target.classList.contains("quantity-input") ||
        e.target.classList.contains("unit-select")
    ) 
    {
        const container = document.getElementById("rows-container");
        const rows = container.querySelectorAll(".row");
        const last = rows[rows.length - 1];

        // Tjek om sidste række er udfyldt
        const product = last.querySelector(".product-select").value;
        const quantity = last.querySelector(".quantity-input").value;
        const unit = last.querySelector(".unit-select").value;

        if (product && quantity && unit) {
            // Klon rækken
            const clone = last.cloneNode(true);

            // Nulstil værdier
            clone.querySelector(".product-select").value = "";
            clone.querySelector(".quantity-input").value = "";
            clone.querySelector(".unit-select").value = "";

            container.appendChild(clone);
        }
    }
});

function previewImages(input, previewId) {
    const preview = document.getElementById(previewId);
    preview.innerHTML = "";

    Array.from(input.files).forEach((file, index) => {
        const reader = new FileReader();

        reader.onload = e => {
            const div = document.createElement("div");
            div.className = "preview-item";

            div.innerHTML = `
                <img src="${e.target.result}">
                <button type="button" class="remove-btn">✕</button>
            `;

            div.querySelector(".remove-btn").onclick = () => {
                div.remove();
            };

            preview.appendChild(div);
        };

        reader.readAsDataURL(file);
    });
}

function setupImageInput(inputId, previewId) {
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);

    let files = [];

    input.addEventListener("change", () => {
        // Tilføj nye filer
        for (const file of input.files) {
            files.push(file);
        }

        render();
    });

    function render() {
        preview.innerHTML = "";

        files.forEach((file, index) => {
            const reader = new FileReader();

            reader.onload = e => {
                const wrapper = document.createElement("div");

                const img = document.createElement("img");
                img.src = e.target.result;
                img.width = 80;

                const removeBtn = document.createElement("button");
                removeBtn.type = "button";
                removeBtn.textContent = "✕";
                removeBtn.onclick = () => {
                    files.splice(index, 1);
                    render();
                };

                wrapper.appendChild(img);
                wrapper.appendChild(removeBtn);
                preview.appendChild(wrapper);
            };

            reader.readAsDataURL(file);
        });

        // Opdater input så kun de valgte filer sendes
        const dataTransfer = new DataTransfer();
        files.forEach(f => dataTransfer.items.add(f));
        input.files = dataTransfer.files;
    }
}

// Init
setupImageInput("before_image", "before-preview");
setupImageInput("after_image", "after-preview");