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
        return;
    }

    const fragment = document.createDocumentFragment();

    list.forEach(function (product) {
        const card = document.createElement("article");
        card.className = "product";
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
}

renderProducts(products);
