
/* =====================================
   ICHIGO PRINTING - SHOPPING CART
   ===================================== */

(function () {
    const STORAGE_KEY = "cart";

    // Lay danh sach san pham tu products.js
    function getProducts() {
        if (typeof products !== "undefined" &&
            Array.isArray(products)) {
            return products;
        }

        if (Array.isArray(window.products)) {
            return window.products;
        }

        return [];
    }

    // Tim san pham theo ID
    function findProduct(productId) {
        return getProducts().find(
            p => String(p.id) === String(productId)
        );
    }

    // Doc gio hang tu localStorage
    function getCart() {
        try {
            const data = JSON.parse(
                localStorage.getItem(STORAGE_KEY) || "[]"
            );

            if (!Array.isArray(data)) return [];

            return data.filter(item =>
                item &&
                item.productId !== undefined &&
                Number.isInteger(Number(item.quantity)) &&
                Number(item.quantity) > 0
            );

        } catch (error) {
            console.error("Khong doc duoc gio hang:", error);
            return [];
        }
    }

    // Luu gio hang
    function saveCart(cart) {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(cart)
            );
            return true;
        } catch (error) {
            console.error("Khong luu duoc gio hang:", error);
            return false;
        }
    }

    // Dinh dang gia tien
    function formatPrice(value) {
        return new Intl.NumberFormat("vi-VN")
            .format(value) + "đ";
    }

    // Tong so luong san pham
    function getTotalQuantity() {
        return getCart().reduce(
            (total, item) => {
                if (!findProduct(item.productId)) return total;
                return total + Number(item.quantity);
            },
            0
        );
    }

    // Tinh tong tien gio hang
    function calculateCartTotal() {
        return getCart().reduce((total, item) => {
            const product = findProduct(item.productId);

            if (!product) return total;

            return total +
                Number(product.price) * Number(item.quantity);
        }, 0);
    }

    // Cap nhat badge tren icon gio hang
    function updateCartBadge() {
        const totalQuantity = getTotalQuantity();

        document.querySelectorAll(
            "[data-cart-count]"
        ).forEach(function (badge) {
            badge.textContent = totalQuantity;
            badge.hidden = totalQuantity === 0;
        });
    }

    // Cap nhat giao dien sau moi thao tac
    function refreshCart() {
        renderCart();
        updateCartBadge();
    }

    // Them san pham vao gio
    function addToCart(productId, quantity = 1) {
        const product = findProduct(productId);
        const amount = Number(quantity);

        if (!product ||
            !Number.isInteger(amount) ||
            amount < 1) {
            console.error("San pham hoac so luong khong hop le");
            return false;
        }

        const cart = getCart();

        const existingItem = cart.find(
            item => String(item.productId) === String(productId)
        );

        if (existingItem) {
            // San pham da co: cong don so luong
            existingItem.quantity =
                Number(existingItem.quantity) + amount;
        } else {
            // San pham moi: them dong moi
            cart.push({
                productId: product.id,
                quantity: amount
            });
        }

        if (!saveCart(cart)) return false;

        refreshCart();
        return true;
    }

    // Thay doi so luong
    function updateQuantity(productId, newQuantity) {
        const cart = getCart();

        const item = cart.find(
            item => String(item.productId) === String(productId)
        );

        if (!item) return false;

        const amount = Number(newQuantity);

        if (!Number.isInteger(amount)) return false;

        if (amount <= 0) {
            return removeFromCart(productId);
        }

        item.quantity = amount;

        if (!saveCart(cart)) return false;

        refreshCart();
        return true;
    }

    // Xoa san pham
    function removeFromCart(productId) {
        const cart = getCart();

        const updatedCart = cart.filter(
            item => String(item.productId) !== String(productId)
        );

        if (!saveCart(updatedCart)) return false;

        refreshCart();
        return true;
    }

    // Tao mot phan tu HTML co noi dung an toan
    function createElement(tag, className, text) {
        const element = document.createElement(tag);

        if (className) element.className = className;

        if (text !== undefined) {
            element.textContent = text;
        }

        return element;
    }

    // Hien thi gio hang trong cart.html
    function renderCart() {
        const cartItems = document.getElementById("cart-items");

        // Neu dang o trang khac thi khong render
        if (!cartItems) return;

        const emptyMessage = document.getElementById("cart-empty");
        const cartLayout = document.getElementById("cart-layout");

        const totalQuantityElement = document.getElementById(
            "cart-total-quantity"
        );

        const totalPriceElement = document.getElementById(
            "cart-total-price"
        );

        const itemsLabel = document.getElementById(
            "cart-items-label"
        );

        const cart = getCart();

        const validItems = cart.map(item => ({
            item: item,
            product: findProduct(item.productId)
        })).filter(entry => entry.product);

        const totalQuantity = getTotalQuantity();
        const totalPrice = calculateCartTotal();

        // Xoa giao dien cu truoc khi ve lai
        cartItems.replaceChildren();

        // Cap nhat phan tom tat
        if (totalQuantityElement) {
            totalQuantityElement.textContent = totalQuantity;
        }

        if (totalPriceElement) {
            totalPriceElement.textContent = formatPrice(totalPrice);
        }

        if (itemsLabel) {
            itemsLabel.textContent =
                totalQuantity + " sản phẩm";
        }

        // Gio hang rong
        if (validItems.length === 0) {
            if (emptyMessage) emptyMessage.hidden = false;
            if (cartLayout) cartLayout.hidden = true;
            return;
        }

        if (emptyMessage) emptyMessage.hidden = true;
        if (cartLayout) cartLayout.hidden = false;

        // Ve tung san pham
        validItems.forEach(function (entry) {
            const item = entry.item;
            const product = entry.product;
            const quantity = Number(item.quantity);

            const lineTotal =
                Number(product.price) * quantity;

            // Khoi san pham
            const row = createElement(
                "article", "cart-item"
            );

            // Hinh anh
            const image = createElement(
                "img", "cart-item__image"
            );

            image.src = product.image;
            image.alt = product.name;
            image.loading = "lazy";

            // Thong tin san pham
            const info = createElement(
                "div", "cart-item__info cart-item__details"
            );

            const name = createElement(
                "h3",
                "cart-item__name cart-item__title",
                product.name
            );

            const unitPrice = createElement(
                "p",
                "cart-item__price cart-item__unit-price",
                "Đơn giá: " + formatPrice(product.price)
            );

            const subtotal = createElement(
                "p",
                "cart-item__subtotal cart-item__total",
                "Thành tiền: " + formatPrice(lineTotal)
            );

            info.append(name, unitPrice, subtotal);

            // Khu vuc dieu khien
            const actions = createElement(
                "div", "cart-item__actions"
            );

            const quantityBox = createElement(
                "div", "cart-quantity cart-qty"
            );

            // Nut giam
            const minusButton = createElement(
                "button",
                "cart-qty__btn cart-qty__button",
                "−"
            );

            minusButton.type = "button";
            minusButton.setAttribute(
                "aria-label", "Giảm số lượng"
            );

            minusButton.disabled = quantity <= 1;

            minusButton.addEventListener("click", function () {
                updateQuantity(product.id, quantity - 1);
            });

            // Hien thi so luong
            const quantityValue = createElement(
                "span", "cart-qty__value",
                String(quantity)
            );

            // Nut tang
            const plusButton = createElement(
                "button",
                "cart-qty__btn cart-qty__button",
                "+"
            );

            plusButton.type = "button";
            plusButton.setAttribute(
                "aria-label", "Tăng số lượng"
            );

            plusButton.addEventListener("click", function () {
                updateQuantity(product.id, quantity + 1);
            });

            quantityBox.append(
                minusButton,
                quantityValue,
                plusButton
            );

            // Nut xoa
            const removeButton = createElement(
                "button",
                "cart-item__remove cart-remove",
                "Xóa"
            );

            removeButton.type = "button";

            removeButton.addEventListener("click", function () {
                removeFromCart(product.id);
            });

            actions.append(quantityBox, removeButton);

            // Dua cac phan vao khoi san pham
            row.append(image, info, actions);

            cartItems.appendChild(row);
        });
    }

    // Cung cap ham cho cac trang khac
    window.Cart = {
           getCart,
    addToCart,
    updateQuantity,
    removeFromCart,
    calculateCartTotal,
    renderCart,
    updateCartBadge
};

    // Khoi tao khi trang tai xong
    function initializeCart() {
        refreshCart();
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializeCart
        );
    } else {
        initializeCart();
    }

    // Dong bo khi localStorage thay doi o tab khac
    window.addEventListener("storage", refreshCart);

    // Cap nhat khi quay lai trang
    window.addEventListener("pageshow", refreshCart);

})();
