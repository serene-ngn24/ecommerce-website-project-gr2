
document.addEventListener("DOMContentLoaded", function () {

    // 1. Kiểm tra dữ liệu sản phẩm
    if (typeof products === "undefined" || !Array.isArray(products)) {
        console.error("Không tải được product.js");

        const productLayout = document.querySelector(".pd-layout");
        const errorMessage = document.getElementById("pd-error");

        if (productLayout) {
            productLayout.style.display = "none";
        }

        if (errorMessage) {
            errorMessage.hidden = false;
            errorMessage.style.display = "block";
            errorMessage.textContent =
                "Không thể tải dữ liệu sản phẩm. Vui lòng thử lại sau.";
        }

        return;
    }

    // 2. Lấy ID sản phẩm từ URL
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get("id");

    // Không có ID thì mặc định hiển thị sản phẩm 1
    const productId = idParam === null ? 1 : Number(idParam);

    // Tìm sản phẩm theo ID
    const product = Number.isInteger(productId) && productId > 0
        ? products.find(p => p.id === productId)
        : null;

    const productLayout = document.querySelector(".pd-layout");
    const errorMessage = document.getElementById("pd-error");

    // 3. Xử lý ID không hợp lệ hoặc không tồn tại
    if (!product) {
        document.title = "Không tìm thấy sản phẩm | Ichigo Printing";

        // Ẩn toàn bộ khu vực thông tin sản phẩm
        if (productLayout) {
            productLayout.style.display = "none";
        }

        // Hiển thị thông báo lỗi
        if (errorMessage) {
            errorMessage.hidden = false;
            errorMessage.style.display = "block";
            errorMessage.textContent =
                "Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị gỡ khỏi hệ thống.";
        }

        // Cập nhật breadcrumb
        const breadcrumbName = document.getElementById(
            "pd-breadcrumb-name"
        );

        if (breadcrumbName) {
            breadcrumbName.textContent = "/ Không tìm thấy sản phẩm";
        }

        console.warn("Product ID không hợp lệ hoặc không tồn tại:", idParam);
        return;
    }

    // 4. Hàm định dạng tiền Việt Nam
    function formatPrice(value) {
        return new Intl.NumberFormat("vi-VN").format(value) + "đ";
    }

    // Hàm cập nhật nội dung phần tử
    function setText(id, value) {
        const element = document.getElementById(id);

        if (element) {
            element.textContent = value;
        }
    }

    // 5. Cập nhật thông tin sản phẩm
    document.title = product.name + " | Ichigo Printing";

    // Ẩn thông báo lỗi nếu trước đó có
    if (errorMessage) {
        errorMessage.hidden = true;
        errorMessage.style.display = "none";
    }

    // Đảm bảo khu vực sản phẩm được hiển thị
    if (productLayout) {
        productLayout.style.display = "";
    }

    setText("pd-breadcrumb-name", "/ " + product.name);
    setText("pd-title", product.name);
    setText("pd-unit-price", formatPrice(product.price));

    setText(
        "pd-caption",
        "Hình ảnh mẫu sản phẩm " + product.name + "."
    );

    // Cập nhật hình ảnh sản phẩm
    const image = document.getElementById("pd-image");

    if (image) {
        image.src = product.image;
        image.alt = product.name;
    }

    // 6. Hiển thị mô tả và thông tin chi tiết
    const detailsContainer = document.getElementById(
        "pd-product-details"
    );

    // Sản phẩm từ ID 2 trở đi sử dụng template tương ứng
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
                "Chưa có template cho sản phẩm ID:",
                product.id
            );
        }
    }

    // Giữ nguyên mô tả chi tiết từ HTML/template.
    // Không ghi đè bằng mô tả ngắn trong product.js.

    // 7. Chọn số lượng sản phẩm
    const decreaseButton = document.getElementById("pd-decrease");
    const increaseButton = document.getElementById("pd-increase");
    const quantityDisplay = document.getElementById("pd-quantity");
    const totalDisplay = document.getElementById("pd-line-total");
    const buyNowButton = document.getElementById("pd-buy-now");

    if (
        !decreaseButton ||
        !increaseButton ||
        !quantityDisplay ||
        !totalDisplay ||
        !buyNowButton
    ) {
        console.error("Thiếu thành phần giao diện mua hàng");
        return;
    }

    let selectedQuantity = 1;

    // Cập nhật số lượng và tổng tiền
    function updateSelection() {
        quantityDisplay.textContent = selectedQuantity;

        totalDisplay.textContent = formatPrice(
            product.price * selectedQuantity
        );

        decreaseButton.disabled = selectedQuantity <= 1;
    }

    // Giảm số lượng
    decreaseButton.addEventListener("click", function () {
        if (selectedQuantity > 1) {
            selectedQuantity--;
            updateSelection();
        }
    });

    // Tăng số lượng
    increaseButton.addEventListener("click", function () {
        selectedQuantity++;
        updateSelection();
    });

    // 8. Thêm sản phẩm vào giỏ hàng
    buyNowButton.addEventListener("click", function () {

        if (
            !window.Cart ||
            typeof window.Cart.addToCart !== "function"
        ) {
            alert("Chưa tải được chức năng giỏ hàng.");
            return;
        }

        const success = window.Cart.addToCart(
            product.id,
            selectedQuantity
        );

        if (success) {
            window.location.href = "cart.html";
        }
    });

    // 9. Khởi tạo giao diện
    updateSelection();

});
