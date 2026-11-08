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

// Xóa thẻ và yêu cầu nhập lại khi khoảng giá không hợp lệ.
function renderInvalidState() {
    const productList = document.getElementById("product-list");
    productList.replaceChildren();

    const message = document.createElement("p");
    message.className = "alert";
    message.style.gridColumn = "1 / -1";
    message.textContent = "Vui lòng nhập khoảng giá hợp lệ để xem sản phẩm.";
    productList.appendChild(message);

    document.dispatchEvent(new Event("products:rendered"));
}

/* ---------- Xử lý dữ liệu ---------- */

const ALL_CATEGORIES = "all";
const PRICE_PATTERN = /^\d+$/;

// Lấy danh mục không trùng theo thứ tự xuất hiện.
function getCategories(list) {
    return Array.from(new Set(list.map(function (product) {
        return product.category;
    })));
}

// Tìm theo tên, không phân biệt hoa/thường.
function searchByName(list, keyword) {
    const normalized = keyword.trim().toLowerCase();

    if (normalized === "") {
        return list.slice();
    }

    return list.filter(function (product) {
        return product.name.toLowerCase().includes(normalized);
    });
}

// Lọc theo danh mục.
function filterByCategory(list, category) {
    if (category === ALL_CATEGORIES) {
        return list.slice();
    }

    return list.filter(function (product) {
        return product.category === category;
    });
}

// Khoảng giá gồm cả hai mức biên; null/undefined là không giới hạn.
function filterByPriceRange(list, minPrice, maxPrice) {
    const hasMin = minPrice !== null && minPrice !== undefined;
    const hasMax = maxPrice !== null && maxPrice !== undefined;

    return list.filter(function (product) {
        if (hasMin && product.price < minPrice) return false;
        if (hasMax && product.price > maxPrice) return false;
        return true;
    });
}

// Sắp xếp trên bản sao, không thay đổi mảng đầu vào.
function sortByPrice(list, order) {
    const sorted = list.slice();

    if (order === "asc") {
        sorted.sort(function (a, b) {
            return a.price - b.price;
        });
    } else if (order === "desc") {
        sorted.sort(function (a, b) {
            return b.price - a.price;
        });
    }

    return sorted;
}

// Kết hợp tìm kiếm, danh mục, khoảng giá và sắp xếp.
function getVisibleProducts(source, criteria) {
    const searched = searchByName(source, criteria.keyword);
    const byCategory = filterByCategory(searched, criteria.category);
    const byPrice = filterByPriceRange(
        byCategory,
        criteria.minPrice,
        criteria.maxPrice
    );

    return sortByPrice(byPrice, criteria.sort);
}

/* ---------- Kiểm tra khoảng giá ---------- */

const MIN_PRICE_MESSAGE =
    "Giá từ phải là số nguyên không âm, đơn vị đồng (không có chữ hoặc dấu thập phân).";
const MAX_PRICE_MESSAGE =
    "Giá đến phải là số nguyên không âm, đơn vị đồng (không có chữ hoặc dấu thập phân).";
const RANGE_ORDER_MESSAGE = "Giá từ không được lớn hơn giá đến.";

// Ô trống hợp lệ với value = null.
// badInput phải được kiểm tra trước để tránh nhầm nhập sai với ô trống.
function parsePriceValue(rawValue, hasBadInput) {
    if (hasBadInput) {
        return { valid: false, value: null };
    }

    const text = String(
        rawValue === null || rawValue === undefined ? "" : rawValue
    ).trim();

    if (text === "") {
        return { valid: true, value: null };
    }

    if (!PRICE_PATTERN.test(text)) {
        return { valid: false, value: null };
    }

    const number = Number(text);

    if (!Number.isSafeInteger(number)) {
        return { valid: false, value: null };
    }

    return { valid: true, value: number };
}

function validatePriceRange(raw) {
    const min = parsePriceValue(raw.min, raw.minBadInput);
    const max = parsePriceValue(raw.max, raw.maxBadInput);
    const errors = [];

    if (!min.valid) {
        errors.push({
            fields: ["min"],
            message: MIN_PRICE_MESSAGE
        });
    }

    if (!max.valid) {
        errors.push({
            fields: ["max"],
            message: MAX_PRICE_MESSAGE
        });
    }

    if (min.valid && max.valid &&
        min.value !== null && max.value !== null &&
        min.value > max.value) {
        errors.push({
            fields: ["min", "max"],
            message: RANGE_ORDER_MESSAGE
        });
    }

    return {
        valid: errors.length === 0,
        min: min.value,
        max: max.value,
        errors: errors
    };
}

/* ---------- Giao diện ---------- */

function getFilterElements() {
    return {
        keyword: document.getElementById("search-input"),
        category: document.getElementById("category-select"),
        sort: document.getElementById("sort-select"),
        minPrice: document.getElementById("min-price"),
        maxPrice: document.getElementById("max-price"),
        priceError: document.getElementById("price-error"),
        reset: document.getElementById("reset-filters"),
        form: document.getElementById("filter-form"),
        status: document.getElementById("filter-status")
    };
}

// Chỉ thêm danh mục một lần.
function populateCategoryOptions(select, list) {
    if (select.dataset.populated === "true") {
        return;
    }

    getCategories(list).forEach(function (category) {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        select.appendChild(option);
    });

    select.dataset.populated = "true";
}

function updateStatus(statusElement, visibleCount, totalCount) {
    statusElement.textContent =
        "Hiển thị " + visibleCount + " / " + totalCount + " sản phẩm.";
}

function hasBadInput(input) {
    return Boolean(input.validity && input.validity.badInput);
}

function readPriceInputs(elements) {
    return {
        min: elements.minPrice.value,
        max: elements.maxPrice.value,
        minBadInput: hasBadInput(elements.minPrice),
        maxBadInput: hasBadInput(elements.maxPrice)
    };
}

function findErrorMessage(errors, field) {
    const found = errors.find(function (error) {
        return error.fields.indexOf(field) !== -1;
    });

    return found ? found.message : "";
}

// Đồng bộ thông báo, thuộc tính hỗ trợ truy cập và validity của input.
function showPriceErrors(elements, result) {
    const inputs = [
        { field: "min", input: elements.minPrice },
        { field: "max", input: elements.maxPrice }
    ];

    inputs.forEach(function (item) {
        const message = findErrorMessage(result.errors, item.field);

        if (message) {
            item.input.setAttribute("aria-invalid", "true");
            item.input.setAttribute("aria-describedby", "price-error");
            item.input.setCustomValidity(message);
        } else {
            item.input.removeAttribute("aria-invalid");
            item.input.removeAttribute("aria-describedby");
            item.input.setCustomValidity("");
        }
    });

    if (result.errors.length === 0) {
        elements.priceError.textContent = "";
        elements.priceError.hidden = true;
        return;
    }

    const uniqueMessages = Array.from(new Set(
        result.errors.map(function (error) {
            return error.message;
        })
    ));

    elements.priceError.textContent = uniqueMessages.join(" ");
    elements.priceError.hidden = false;
}

// Đọc điều kiện, kiểm tra giá và cập nhật toàn bộ kết quả.
function applyFilters() {
    const elements = getFilterElements();
    const price = validatePriceRange(readPriceInputs(elements));

    showPriceErrors(elements, price);

    if (!price.valid) {
        renderInvalidState();
        elements.status.textContent = "";
        return;
    }

    const result = getVisibleProducts(products, {
        keyword: elements.keyword.value,
        category: elements.category.value,
        sort: elements.sort.value,
        minPrice: price.min,
        maxPrice: price.max
    });

    renderProducts(result);
    updateStatus(elements.status, result.length, products.length);
}

// Đưa điều khiển về mặc định và giữ nguyên dữ liệu giỏ hàng.
function resetFilters() {
    const elements = getFilterElements();

    elements.keyword.value = "";
    elements.category.value = ALL_CATEGORIES;
    elements.sort.value = "default";
    elements.minPrice.value = "";
    elements.maxPrice.value = "";

    applyFilters();
    elements.keyword.focus();
}

function initSearchFilter() {
    const elements = getFilterElements();

    if (!elements.keyword || !elements.category || !elements.sort ||
        !elements.minPrice || !elements.maxPrice || !elements.priceError ||
        !elements.reset || !elements.form || !elements.status) {
        renderProducts(products);
        return;
    }

    // Không gắn lại sự kiện nếu hàm khởi tạo được gọi lần nữa.
    if (elements.form.dataset.filterInitialized === "true") return;
    elements.form.dataset.filterInitialized = "true";

    populateCategoryOptions(elements.category, products);

    elements.keyword.addEventListener("input", applyFilters);
    elements.category.addEventListener("change", applyFilters);
    elements.sort.addEventListener("change", applyFilters);

    elements.minPrice.addEventListener("input", applyFilters);
    elements.minPrice.addEventListener("change", applyFilters);
    elements.maxPrice.addEventListener("input", applyFilters);
    elements.maxPrice.addEventListener("change", applyFilters);

    elements.reset.addEventListener("click", resetFilters);

    elements.form.addEventListener("submit", function (event) {
        event.preventDefault();
        applyFilters();
    });

    applyFilters();
}

initSearchFilter();