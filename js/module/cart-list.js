
document.addEventListener("DOMContentLoaded", function () {

    if (typeof products === "undefined" ||
        !Array.isArray(products)) {
        console.error("Khong tai duoc products.js");
        return;
    }

    const cards = document.querySelectorAll(".product");

    cards.forEach(function (card) {

        const name = card.querySelector(".product__title")
            ?.textContent.trim();

        const product = products.find(
            p => p.name === name
        );

        if (!product) return;

        // 1. Gan duong dan xem chi tiet theo ID
        const detailLinks = card.querySelectorAll(
        'a[href*="product-detail.html"]'
        );

        detailLinks.forEach(function (link) {
        link.href = `product-detail.html?id=${product.id}`;
        });

        // 2. Lay khu vuc nut san pham
        const footer = card.querySelector(".product__footer");

        if (!footer || !window.Cart) return;

        footer.classList.add("cart-actions");

        // 3. Tao nut them vao gio
        let button = footer.querySelector(".cart-add-btn");

        if (!button) {
            button = document.createElement("button");
            button.type = "button";
            button.className = "btn cart-add-btn";

            // Dua nut them vao gio len tren
            footer.prepend(button);
        }

        // 4. Doc so luong hien tai trong gio
        function getQuantity() {
            const item = Cart.getCart().find(
                item => String(item.productId) === String(product.id)
            );

            return item ? Number(item.quantity) : 0;
        }

        // 5. Cap nhat noi dung nut
        function updateButton() {
            const quantity = getQuantity();

            if (quantity > 0) {
                button.textContent =
                    `CÓ ${quantity} TRONG GIỎ HÀNG`;

                button.classList.add("is-added");
            } else {
                button.textContent = "THÊM VÀO GIỎ HÀNG";
                button.classList.remove("is-added");
            }
        }

        // 6. Them san pham
        button.addEventListener("click", function () {
            const success = Cart.addToCart(product.id, 1);

            if (success) {
                updateButton();
            }
        });

        updateButton();

        window.addEventListener("pageshow", updateButton);
        window.addEventListener("storage", updateButton);
    });

});
