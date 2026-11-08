
document.addEventListener("DOMContentLoaded", function () {

    // Kiem tra du lieu san pham
    if (typeof products === "undefined" ||
        !Array.isArray(products)) {
        console.error("Khong tai duoc products.js");
        return;
    }

    // Lay ID tu URL
    // Vi du: product-detail.html?id=3
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get("id");

    // Mac dinh Fabric Slogan neu khong co ID
    const productId = idParam === null
        ? 1
        : Number(idParam);

    // Tim san pham trong products.js
    const product = products.find(
        p => p.id === productId
    );

    const buyNowButton = document.getElementById("pd-buy-now");

    if (!product) {
        const title = document.getElementById("pd-title");

        if (title) {
            title.textContent = "Không tìm thấy sản phẩm";
        }

        if (buyNowButton) {
            buyNowButton.disabled = true;
        }

        return;
    }

    // Ham dinh dang tien
    function formatPrice(value) {
        return new Intl.NumberFormat("vi-VN").format(value) + "đ";
    }

    // Ham cap nhat noi dung
    function setText(id, value) {
        const element = document.getElementById(id);

        if (element) {
            element.textContent = value;
        }
    }

    // 1. Cap nhat ten, gia, hinh anh
    document.title = product.name + " | Ichigo Printing";

    setText("pd-breadcrumb-name", "/ " + product.name);

    setText(
        "pd-title",
        product.name + " - In theo yêu cầu"
    );

    setText(
        "pd-unit-price",
        formatPrice(product.price)
    );

    setText(
        "pd-caption",
        "Hình ảnh mẫu sản phẩm " + product.name + "."
    );

    const image = document.getElementById("pd-image");

    if (image) {
        image.src = product.image;
        image.alt = product.name;
    }

    // 2. Hien thi mo ta va thong so theo ID
    // San pham 1 dung noi dung HTML co san
    // San pham 2-8 dung template tuong ung

    const detailsContainer = document.getElementById(
        "pd-product-details"
    );

    if (product.id !== 1 && detailsContainer) {
        const template = document.getElementById(
            "pd-template-" + product.id
        );

        if (template) {
            detailsContainer.replaceChildren(
                template.content.cloneNode(true)
            );
        } else {
            console.warn(
                "Chua co chi tiet cho san pham ID:",
                product.id
            );
        }
    }

    // 3. Chon so luong
    const decreaseButton = document.getElementById("pd-decrease");
    const increaseButton = document.getElementById("pd-increase");
    const quantityDisplay = document.getElementById("pd-quantity");
    const totalDisplay = document.getElementById("pd-line-total");

    if (!decreaseButton || !increaseButton ||
        !quantityDisplay || !totalDisplay || !buyNowButton) {
        console.error("Thieu thanh phan giao dien mua hang");
        return;
    }

    let selectedQuantity = 1;

    function updateSelection() {
        quantityDisplay.textContent = selectedQuantity;

        totalDisplay.textContent = formatPrice(
            product.price * selectedQuantity
        );

        decreaseButton.disabled = selectedQuantity <= 1;
    }

    decreaseButton.addEventListener("click", function () {
        if (selectedQuantity > 1) {
            selectedQuantity--;
            updateSelection();
        }
    });

    increaseButton.addEventListener("click", function () {
        selectedQuantity++;
        updateSelection();
    });

    // 4. Mua ngay
    buyNowButton.addEventListener("click", function () {

        if (!window.Cart ||
            typeof Cart.addToCart !== "function") {
            alert("Chưa tải được chức năng giỏ hàng.");
            return;
        }

        // Them dung ID va so luong vao gio
        const success = Cart.addToCart(
            product.id,
            selectedQuantity
        );

        if (success) {
            // Chuyen den trang gio hang
            window.location.href = "cart.html";
        }
    });

    // 5. Khoi tao giao dien
    updateSelection();

});
