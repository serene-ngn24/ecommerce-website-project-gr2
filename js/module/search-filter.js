// Hiển thị danh sách từ dữ liệu dùng chung, giữ các class CSS hiện có.
function renderProducts(list) {
    const productList = document.getElementById("product-list");
    productList.replaceChildren();

    if (list.length === 0) {
        const message = document.createElement("p");
        message.className = "alert";
        message.style.gridColumn = "1 / -1";
        message.textContent = "Không có sản phẩm phù hợp.";
        productList.appendChild(message);
        document.dispatchEvent(new Event("products:rendered"));
        return;
    }

    const fragment = document.createDocumentFragment();

    list.forEach(function (product) {
        const card = document.createElement("article");
        card.className = "product";
        card.dataset.productId = String(product.id);
        card.innerHTML = `
            <a class="product__thumb">
                <img alt="">
                <span class="product__badge">Demo</span>
            </a>
            <div class="product__body">
                <h3 class="product__title"></h3>
                <p class="product__meta"></p>
                <p class="product__price"></p>
                <div class="product__footer">
                    <a class="btn btn--outline btn--sm">Xem chi tiết</a>
                </div>
            </div>
        `;

        const detailUrl = `product-detail.html?id=${product.id}`;
        const image = card.querySelector("img");
        image.src = product.image;
        image.alt = product.description;

        card.querySelector(".product__thumb").href = detailUrl;
        card.querySelector(".product__title").textContent = product.name;
        card.querySelector(".product__meta").textContent = product.description;
        card.querySelector(".product__price").textContent =
            product.price.toLocaleString("vi-VN") + "đ";
        card.querySelector(".product__footer a").href = detailUrl;

        fragment.appendChild(card);
    });

    productList.appendChild(fragment);
    document.dispatchEvent(new Event("products:rendered"));
}

/* ==========================================================
   TÌM KIẾM - LỌC DANH MỤC - SẮP XẾP GIÁ
   Mọi hàm xử lý trả về MẢNG MỚI, không thay đổi mảng `products`.
   ========================================================== */

const ALL_CATEGORIES = "all";

// Lấy danh sách danh mục không trùng, theo thứ tự xuất hiện trong dữ liệu.
function getCategories(list) {
    return Array.from(new Set(list.map(function (product) {
        return product.category;
    })));
}

// Tìm theo tên, không phân biệt hoa/thường. Từ khóa rỗng trả về toàn bộ.
function searchByName(list, keyword) {
    const normalized = keyword.trim().toLowerCase();

    if (normalized === "") {
        return list.slice();
    }

    return list.filter(function (product) {
        return product.name.toLowerCase().includes(normalized);
    });
}

// Lọc theo danh mục. "all" trả về toàn bộ.
function filterByCategory(list, category) {
    if (category === ALL_CATEGORIES) {
        return list.slice();
    }

    return list.filter(function (product) {
        return product.category === category;
    });
}

// Sắp xếp theo giá trên bản sao. "default" giữ nguyên thứ tự đầu vào.
function sortByPrice(list, order) {
    const sorted = list.slice();

    if (order === "asc") {
        sorted.sort(function (a, b) { return a.price - b.price; });
    } else if (order === "desc") {
        sorted.sort(function (a, b) { return b.price - a.price; });
    }

    return sorted;
}

// Kết hợp 3 điều kiện: tìm kiếm -> lọc danh mục -> sắp xếp.
function getVisibleProducts(source, criteria) {
    const searched = searchByName(source, criteria.keyword);
    const filtered = filterByCategory(searched, criteria.category);
    return sortByPrice(filtered, criteria.sort);
}

/* ---------- Giao diện ---------- */

function getFilterElements() {
    return {
        keyword: document.getElementById("search-input"),
        category: document.getElementById("category-select"),
        sort: document.getElementById("sort-select"),
        form: document.getElementById("filter-form"),
        status: document.getElementById("filter-status")
    };
}

function populateCategoryOptions(select, list) {
    getCategories(list).forEach(function (category) {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        select.appendChild(option);
    });
}

function updateStatus(statusElement, visibleCount, totalCount) {
    statusElement.textContent =
        "Hiển thị " + visibleCount + " / " + totalCount + " sản phẩm.";
}

// Đọc điều khiển -> tính kết quả -> cập nhật giao diện bằng renderProducts.
function applyFilters() {
    const elements = getFilterElements();

    const result = getVisibleProducts(products, {
        keyword: elements.keyword.value,
        category: elements.category.value,
        sort: elements.sort.value
    });

    renderProducts(result);
    updateStatus(elements.status, result.length, products.length);
}

function initSearchFilter() {
    const elements = getFilterElements();

    // Nếu thiếu thành phần giao diện, vẫn hiển thị danh sách như trước.
    if (!elements.keyword || !elements.category || !elements.sort ||
        !elements.form || !elements.status) {
        renderProducts(products);
        return;
    }

    populateCategoryOptions(elements.category, products);

    elements.keyword.addEventListener("input", applyFilters);
    elements.category.addEventListener("change", applyFilters);
    elements.sort.addEventListener("change", applyFilters);
    // Nhấn Enter trong ô tìm kiếm không được tải lại trang.
    elements.form.addEventListener("submit", function (event) {
        event.preventDefault();
        applyFilters();
    });

    applyFilters();
}

initSearchFilter();
