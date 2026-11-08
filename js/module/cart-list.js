(function () {
    // Đồng bộ nội dung các nút với dữ liệu giỏ hàng hiện tại.
    function updateCartButtons() {
        if (!window.Cart) return;

        const cart = window.Cart.getCart();
        const buttons = document.querySelectorAll("#product-list .cart-add-btn");

        buttons.forEach(function (button) {
            const item = cart.find(function (entry) {
                return String(entry.productId) === button.dataset.productId;
            });
            const quantity = item ? Number(item.quantity) : 0;

            button.textContent = quantity > 0
                ? `CÓ ${quantity} TRONG GIỎ HÀNG`
                : "THÊM VÀO GIỎ HÀNG";
            button.classList.toggle("is-added", quantity > 0);
        });
    }

    // Gắn nút cho các thẻ vừa được render, kể cả sau khi tìm kiếm hoặc lọc.
    function initProductCartButtons() {
        if (typeof products === "undefined" || !Array.isArray(products)) {
            console.error("Không tải được products.js");
            return;
        }

        if (!window.Cart) return;

        const cards = document.querySelectorAll("#product-list .product");

        cards.forEach(function (card) {
            const product = products.find(function (entry) {
                return String(entry.id) === card.dataset.productId;
            });

            if (!product) return;

            card.querySelectorAll('a[href*="product-detail.html"]').forEach(function (link) {
                link.href = `product-detail.html?id=${product.id}`;
            });

            const footer = card.querySelector(".product__footer");
            if (!footer) return;

            footer.classList.add("cart-actions");

            let button = footer.querySelector(".cart-add-btn");
            if (!button) {
                button = document.createElement("button");
                button.type = "button";
                button.className = "btn cart-add-btn";
                footer.prepend(button);
            }

            button.dataset.productId = String(product.id);

            if (!button.dataset.cartBound) {
                button.addEventListener("click", function () {
                    if (window.Cart.addToCart(product.id, 1)) {
                        updateCartButtons();
                    }
                });
                button.dataset.cartBound = "true";
            }
        });

        updateCartButtons();
    }

    document.addEventListener("products:rendered", initProductCartButtons);
    window.addEventListener("pageshow", updateCartButtons);
    window.addEventListener("storage", updateCartButtons);

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initProductCartButtons);
    } else {
        initProductCartButtons();
    }
})();
