# Ichigo Printing – Website đặt in K-pop goods

**Môn học:** Phát triển ứng dụng WEB/TMĐT – Đại học Kinh tế TP.HCM (UEH)
**Giảng viên:** TS. Nguyễn Mạnh Tuấn – tuannm@ueh.edu.vn
**Nhóm:** Nhóm 2

## 1. Tên dự án và mục tiêu

**Ichigo Printing** là website thương mại điện tử cho dịch vụ đặt in K-pop goods theo thiết kế riêng: slogan, towel, uchiwa, badge, photocard, postcard, standee và móc khóa acrylic. Mô hình kinh doanh là pre-order: gom đơn theo đợt rồi gửi sản xuất tại xưởng ở Hàn Quốc.

Hiện nay khách thường đặt in qua fanpage và phải nhắn qua lại nhiều lần để gửi file, chọn quy cách và hỏi giá. Website giúp khách tự xem sản phẩm, tìm kiếm, lọc và thêm vào giỏ hàng trên một trang duy nhất.

**Phạm vi bản hiện tại (Buổi 1–3):** giao diện 5 trang bằng HTML/CSS và các chức năng JavaScript phía người dùng: danh sách, tìm kiếm, lọc, sắp xếp, trang chi tiết và giỏ hàng lưu bằng localStorage. Đăng nhập, upload thiết kế, báo giá, thanh toán và trang quản trị **chưa làm**. Các chức năng này đã có trong [REQUIREMENTS.md](docs/REQUIREMENTS.md) để làm ở giai đoạn sau.

## 2. Thành viên và nhiệm vụ

| Thành viên | MSSV | Vai trò | Nhiệm vụ Buổi 2 (HTML/CSS) | Nhiệm vụ Buổi 3 (JavaScript) |
|---|---|---|---|---|
| Nguyễn Thị Diệu Thảo | 31241028196 | Trưởng nhóm, UI/UX, Front-end | Cấu trúc dự án, tích hợp, logo, ảnh sản phẩm | B1. Phân công, chuẩn bị dự án; B8. Quản lý GitHub, báo cáo |
| Phạm Duy Anh | 31241026448 | BA, Front-end | Xác định các trang, trang chi tiết sản phẩm | B2. Chuẩn hóa dữ liệu và hiển thị danh sách sản phẩm |
| Nguyễn Văn Trường | 31221025476 | UI/UX, Back-end/Database | Trang giới thiệu, hover/focus | B3. Tìm kiếm, lọc và sắp xếp sản phẩm |
| Trần Đức Nhật | 31241027952 | QA/Integration, Front-end | Trang danh sách sản phẩm | B4. Tích hợp trang chi tiết sản phẩm |
| Nguyễn Vĩnh Trí | 31241027613 | BA, Back-end/Database | Thiết kế giao diện tổng thể | B5. Giỏ hàng (giao diện và chức năng) |
| Trần Gia Khang | 31241022952 | QA/Integration, UI/UX | Responsive 3 kích thước màn hình | B6. Lưu giỏ hàng bằng localStorage |
| Trịnh Minh Phát | 31241022342 | BA, QA/Integration | Header, menu, banner | B7. Tích hợp, kiểm thử và tối ưu giao diện |

Bảng phân công lấy theo sheet PCCV của nhóm. Chi tiết vai trò xem tại [PROJECT_PLAN.md](docs/PROJECT_PLAN.md).

## 3. Công nghệ sử dụng

| Thành phần | Công nghệ |
|---|---|
| Giao diện | HTML5, CSS3 (Flexbox, Grid, media query), font Roboto từ Google Fonts |
| Xử lý phía người dùng | JavaScript thuần (ES6), không dùng framework |
| Lưu trữ | `localStorage` của trình duyệt (khóa `cart`) |
| Quản lý mã nguồn | Git, GitHub |
| Công cụ | Visual Studio Code, Chrome DevTools |
| Kiểm thử | Kiểm tra thủ công trên trình duyệt; Node.js + LinkeDOM; Playwright + Chrome (chạy tự động) |

Dự án chưa có back-end hay cơ sở dữ liệu. Toàn bộ dữ liệu sản phẩm là dữ liệu mẫu trong `js/data/product.js`.

## 4. Cấu trúc thư mục

```
ecommerce-website-project-gr2/
├── ecommerce-project/          # Các trang HTML
│   ├── index.html              # Trang chủ
│   ├── product.html            # Danh sách sản phẩm, tìm kiếm, lọc
│   ├── product-detail.html     # Chi tiết sản phẩm (?id=1..8)
│   ├── cart.html               # Giỏ hàng
│   └── about.html              # Giới thiệu
├── css/
│   ├── style.css               # Biến màu, bố cục chung, hover/focus
│   ├── header.css              # Header dùng chung
│   ├── product-filter.css      # Bộ lọc trang sản phẩm
│   ├── product-detail-cart.css # Trang chi tiết
│   ├── cart.css                # Giỏ hàng và nút thêm giỏ
│   └── about.css               # Trang giới thiệu
├── js/
│   ├── data/
│   │   └── product.js          # Mảng products (8 sản phẩm)
│   └── module/
│       ├── search-filter.js    # renderProducts, tìm kiếm, lọc, sắp xếp, đặt lại
│       ├── cart.js             # window.Cart: đọc/ghi localStorage, giỏ hàng, badge
│       ├── cart-list.js        # Nút "Thêm vào giỏ hàng" trên thẻ sản phẩm
│       ├── product-detail-cart.js # Trang chi tiết, chọn số lượng, mua ngay
│       └── product-detail.js   # File rỗng, chưa dùng
├── images/                     # logo.png, product-1..8.jpg
└── docs/                       # Yêu cầu, quy trình, kiểm thử, nhật ký AI, minh chứng
```

## 5. Các chức năng đã hoàn thành

Cột "Minh chứng" ghi rõ nguồn của từng kết quả. Mã TC tương ứng với các ca kiểm thử ở mục 7.

| Chức năng | Trang | Minh chứng |
|---|---|---|
| Giao diện 5 trang, header dùng chung, responsive | Tất cả | Ảnh trong `docs/minh-chung-truong/`; [KIEM_THU_TRUONG.md](docs/KIEM_THU_TRUONG.md); TC22 |
| Hover và focus cho menu, nút, thẻ sản phẩm, footer | Tất cả | [KIEM_THU_TRUONG.md](docs/KIEM_THU_TRUONG.md) (ảnh 15–24) |
| Hiển thị danh sách sản phẩm từ dữ liệu JavaScript | `product.html` | TC02 |
| Tìm kiếm theo tên, lọc danh mục, sắp xếp theo giá | `product.html` | [KIEM_THU_BUOI3_TRUONG.md](docs/KIEM_THU_BUOI3_TRUONG.md) (P3-UI-01 đến 07); TC03, TC04 |
| Lọc khoảng giá, kiểm tra giá nhập vào, đặt lại bộ lọc | `product.html` | [KIEM_THU_MO_RONG_BUOI3_TRUONG.md](docs/KIEM_THU_MO_RONG_BUOI3_TRUONG.md) (19 ca DOM, ảnh MR-UI); TC05, TC06 |
| Thêm vào giỏ hàng từ thẻ sản phẩm, nút hiển thị số lượng đã có | `product.html` | P3-UI-07; TC07 |
| Trang chi tiết theo `?id=`, báo lỗi khi ID sai | `product-detail.html` | TC08, TC09, TC10 |
| Chọn số lượng (tối thiểu 1), tạm tính, "Mua ngay" thêm vào giỏ rồi chuyển sang trang giỏ hàng | `product-detail.html` | TC11, TC12, TC13 |
| Giỏ hàng: hiển thị, tăng, giảm, xóa, tổng tiền, thông báo giỏ trống | `cart.html` | TC14, TC15, TC17, TC18 |
| Lưu giỏ bằng localStorage, bỏ qua dữ liệu hỏng hoặc ID không tồn tại | Tất cả | TC16, TC19, TC20 |
| Badge số lượng giỏ trên header, đồng bộ giữa các trang | Tất cả | TC21; MR-DOM-17 (đồng bộ giữa 2 tab, chạy mô phỏng) |

**Chưa hoàn thành hoặc còn hạn chế**

- Nút "Thanh toán" chỉ hiện thông báo "Chức năng thanh toán chưa được triển khai."
- Mục "Sản phẩm nổi bật" ở trang chủ được viết cứng trong HTML, chưa lấy từ `product.js`.
- Giá trong `product.js` là giá mẫu và chưa khớp bảng giá theo kích thước của nhóm. Mỗi sản phẩm mới có một giá, chưa chọn được kích thước.
- Chưa có đăng nhập, upload thiết kế, mockup, báo giá, pre-order và trang quản trị.
- `js/module/product-detail.js` và `docs/ui-design.md` đang là file rỗng.

## 6. Hướng dẫn chạy website

1. Tải mã nguồn: `git clone https://github.com/serene-ngn24/ecommerce-website-project-gr2.git`
2. Mở thư mục dự án bằng Visual Studio Code.
3. Mở `ecommerce-project/index.html` bằng tiện ích **Live Server** (chuột phải → *Open with Live Server*). Cũng có thể mở trực tiếp file bằng Chrome.
4. Máy cần có Internet để tải font Roboto. Nếu không có mạng, trang vẫn chạy nhưng dùng font thay thế.

Để xóa giỏ hàng khi kiểm thử: mở DevTools (F12) → *Application* → *Local Storage* → xóa khóa `cart`. Hoặc gõ `localStorage.removeItem("cart")` trong Console.

## 7. Hướng dẫn kiểm thử các chức năng chính

| Mã | Thao tác | Kết quả mong đợi |
|---|---|---|
| TC01 | Mở lần lượt 5 trang, xem tab Console | Không có lỗi JavaScript |
| TC02 | Mở `product.html` | 8 thẻ sản phẩm, giá dạng `120.000đ` |
| TC03 | Gõ `acrylic` vào ô tìm kiếm | Acrylic Standee và Acrylic Keychain; dòng trạng thái "Hiển thị 2 / 8 sản phẩm." |
| TC04 | Chọn danh mục "Ảnh in", sắp xếp "Giá tăng dần" | 50.000đ đứng trước 60.000đ |
| TC05 | Nhập giá từ 200000, giá đến 50000 | Thông báo "Giá từ không được lớn hơn giá đến.", không hiện thẻ nào |
| TC06 | Bấm "Đặt lại" | Trở về đủ 8 sản phẩm |
| TC07 | Bấm "Thêm vào giỏ hàng" 2 lần trên Acrylic Keychain | Nút ghi "CÓ 2 TRONG GIỎ HÀNG", badge hiện 2 |
| TC08 | Mở `product-detail.html?id=3` | Hiển thị Uchiwa Fan |
| TC09–10 | Mở `?id=99` và `?id=abc` | Thông báo sản phẩm không tồn tại |
| TC11 | Bấm + hai lần | Số lượng 3, tạm tính 255.000đ |
| TC12 | Bấm − đến khi về 1 | Dừng ở 1, nút − bị khóa |
| TC13 | Chọn 3 rồi bấm "Mua ngay" | Chuyển sang `cart.html`, giỏ có Uchiwa Fan × 3 |
| TC14–15 | Xem `cart.html` sau TC07 và TC13 | 2 dòng sản phẩm, tổng 405.000đ |
| TC16 | Tải lại trang giỏ hàng (F5) | Giỏ hàng giữ nguyên |
| TC17 | Bấm + ở một dòng trong giỏ | Số lượng và tổng tiền tăng tương ứng |
| TC18 | Bấm "Xóa" ở tất cả các dòng | Hiện thông báo giỏ trống, badge về 0 |
| TC19 | Console: `localStorage.setItem("cart","{hong")` rồi tải lại | Trang vẫn chạy, giỏ trống |
| TC20 | Lưu giỏ có `productId: 99` và `productId: 1` rồi tải lại | Chỉ hiển thị sản phẩm có ID 1 |
| TC21 | Chuyển qua 5 trang | Badge hiện cùng một số |
| TC22 | DevTools → Device Toolbar ở 375, 768, 1280 px | Không có thanh cuộn ngang |

**Kết quả hiện có**

- Ngày 10/11/2026, Claude chạy tự động 22 ca trên bằng Playwright + Google Chrome (headless), trên commit `ba2ec72`: **22/22 đạt**. Lần chạy này do AI thực hiện, không phải thành viên nhóm thao tác tay. Lỗi duy nhất trong Console là không tải được Google Fonts do môi trường không có mạng.
- Các ca tìm kiếm, lọc và khoảng giá được Nguyễn Văn Trường kiểm tra thêm bằng ảnh chụp tại máy và 16 + 12 + 19 ca Node.js/LinkeDOM (xem các file `docs/KIEM_THU_*`).
- **Chưa xác nhận:** thao tác bàn phím đầy đủ (Tab/Enter) trên trình duyệt thật; trình duyệt Firefox và Safari. Nhóm nên tự chạy lại các ca TC07–TC21 tại máy và chụp ảnh lưu vào `docs/` làm minh chứng.

## 8. Những vấn đề đã gặp và cách khắc phục

| Vấn đề | Cách khắc phục |
|---|---|
| Nút "Thêm vào giỏ hàng" biến mất sau khi tìm kiếm/lọc, vì danh sách được render lại | `renderProducts` phát sự kiện `products:rendered`; `cart-list.js` gắn lại nút sau mỗi lần render và không gắn trùng listener |
| Bộ lọc giá trên mobile có khoảng trống lớn | Selector desktop có độ ưu tiên cao hơn selector mobile; bổ sung `#filter-form .filter-price .filter-field` vào quy tắc mobile |
| Header giữa các trang không thống nhất | Đồng bộ header theo trang Giới thiệu, tách ra `header.css` (commit `e5b012b`) |
| Tên file `products.html` và `product.html` không thống nhất | Chốt dùng `product.html`, sửa lại menu, nút CTA và breadcrumb |
| Push bị từ chối vì `main` đã có cập nhật | Kéo bản mới về, xử lý xung đột CSS rồi push lại |
| Vòng focus khó thấy trên footer nền tối | Dùng vòng focus màu trắng cho footer |
| Ảnh trang Giới thiệu bị cắt khi dùng `object-fit: cover` | Đổi sang `contain` để thấy đủ sản phẩm |

Nguồn: [KIEM_THU_TRUONG.md](docs/KIEM_THU_TRUONG.md), [KIEM_THU_MO_RONG_BUOI3_TRUONG.md](docs/KIEM_THU_MO_RONG_BUOI3_TRUONG.md), [AI_USAGE_LOG.md](docs/AI_USAGE_LOG.md).

## 9. Repository GitHub

https://github.com/serene-ngn24/ecommerce-website-project-gr2

## 10. Các phần đã sử dụng AI hỗ trợ

| Phần việc | Công cụ AI | Cách nhóm sử dụng |
|---|---|---|
| Phân tích yêu cầu nghiệp vụ (Buổi 1) | ChatGPT | Đề xuất phạm vi, vai trò, chức năng |
| Phản biện yêu cầu (Buổi 1) | Gemini | Chỉ ra phần còn thiếu (giỏ hàng, thanh toán, voucher, bảo mật). Nhóm chọn lọc rồi đưa vào `REQUIREMENTS.md` |
| Trang Giới thiệu, hover/focus (Buổi 2) | Claude | Đề xuất HTML/CSS. Nhóm chỉnh lại ảnh, `object-fit` và vòng focus |
| Tìm kiếm, lọc, sắp xếp, lọc khoảng giá (Buổi 3) | Claude, ChatGPT/Codex | Claude đề xuất mã; Codex rà mã, chạy ca kiểm thử Node.js/LinkeDOM; nhóm điều chỉnh khi ghép với giỏ hàng |
| Kế hoạch Buổi 3, rà soát dự án, README, chạy 22 ca kiểm thử tự động | Claude | Lập bảng phân công, kiểm thử và soạn README này |

Prompt, phản hồi và quyết định của nhóm cho từng lần được ghi tại [docs/AI_USAGE_LOG.md](docs/AI_USAGE_LOG.md). Nhật ký **chưa có** mục cho các phần trang chi tiết, giỏ hàng và localStorage. Thành viên phụ trách cần bổ sung nếu đã dùng AI cho các phần này.
