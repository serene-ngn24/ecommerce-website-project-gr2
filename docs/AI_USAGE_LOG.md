
# AI Usage Log

**Dự án:** Ichigo Printing – K-pop Goods Printing Website

**Môn học:** Phát triển ứng dụng TMĐT  
**Giảng viên:** TS. Nguyễn Mạnh Tuấn – tuannm@ueh.edu.vn

---

## Lần sử dụng 1

### Công cụ
ChatGPT (OpenAI).

### Mục đích
Phân tích yêu cầu nghiệp vụ cho website Ichigo Printing, xác định mục tiêu, phạm vi, nhóm người dùng, chức năng, quy trình nghiệp vụ, yêu cầu phi chức năng và các rủi ro khi triển khai trong thời gian 8 tuần.

### Prompt
Bạn là chuyên gia phân tích nghiệp vụ cho dự án thương mại điện tử.

Thông tin dự án:
- Tên dự án: Ichigo Printing.
- Sản phẩm/dịch vụ: Đặt in slogan, towel vải, uchiwa và K-pop goods theo thiết kế riêng.
- Mô hình: Pre-order, gom đơn và gửi sản xuất tại xưởng Hàn Quốc.
- Khách hàng: Người hâm mộ K-pop từ 16–30 tuổi, fansite, fanclub và các nhóm kinh doanh goods.
- Vấn đề: Quy trình đặt hàng thủ công qua fanpage, khó gửi file, báo giá, xem trước thành phẩm và theo dõi đơn.
- Website tham khảo: MyCreativeShop, MARPPLE, Startee.
- Thời gian: 8 tuần.
- Nhóm: 7 thành viên.

Hãy đề xuất:
1. Mục tiêu và phạm vi dự án.
2. Các nhóm người dùng và quyền hạn.
3. Danh sách chức năng cần có.
4. Quy trình nghiệp vụ chính.
5. Yêu cầu phi chức năng.
6. Các chức năng nên hoàn thành ở phiên bản đầu tiên.
7. Các chức năng nâng cao có thể bổ sung.
8. Rủi ro triển khai và cách giảm thiểu.

Phân biệt yêu cầu bắt buộc, yêu cầu phát triển sau và nội dung cần nhóm xác minh. Không giả định nhóm có đủ thời gian để triển khai tất cả chức năng.

### Kết quả đề xuất
ChatGPT đề xuất phát triển website theo mô hình Make-to-Order kết hợp Pre-order, tập trung vào ba nhóm chức năng:

1. **Đặt in cá nhân hóa:** Chọn sản phẩm, quy cách, số lượng, upload file và xem mockup 2D.
2. **Quản lý đơn pre-order:** Tiếp nhận yêu cầu, kiểm duyệt file, báo giá, xác nhận thanh toán và gom đơn theo đợt.
3. **Theo dõi tiến độ:** Cập nhật trạng thái xử lý, sản xuất và vận chuyển.

Các đề xuất khác:
- Phân chia người dùng thành Guest, Customer, Admin và Staff.
- Tập trung vào hai dòng sản phẩm chính: slogan/towel và uchiwa.
- Đề xuất xác nhận thanh toán thủ công để giảm độ phức tạp.
- Đưa giỏ hàng nhiều sản phẩm, thanh toán tích hợp, voucher, vận chuyển và thống kê quản trị sang giai đoạn phát triển sau.
- Đưa ra kế hoạch triển khai 8 tuần và các rủi ro về file thiết kế, báo giá, bảo mật và tiến độ sản xuất.

### Phản biện
Nhóm sử dụng Gemini làm công cụ phản biện độc lập.

Gemini nhận xét kết quả ChatGPT phù hợp với nghiệp vụ đặt in và gom đơn pre-order, nhưng việc thu hẹp phạm vi đã bỏ sót một số yêu cầu bắt buộc của đồ án:

- Giỏ hàng và checkout phải được triển khai.
- Cần tích hợp ít nhất một phương thức thanh toán hoặc sandbox.
- Phải có chức năng tính phí vận chuyển và áp dụng voucher.
- Dashboard thống kê quản trị thuộc phạm vi bắt buộc.
- Cần bổ sung kiểm thử bảo mật XSS, SQL Injection, CSRF và IDOR.
- Cần làm rõ luồng xử lý từ checkout, kiểm duyệt file, báo giá đến thanh toán.

### Quyết định của nhóm
Nhóm giữ lại các chức năng đặc thù do ChatGPT đề xuất, gồm upload thiết kế, mockup 2D, kiểm duyệt file, báo giá và quản lý pre-order.

Đồng thời điều chỉnh phạm vi:
- Bổ sung giỏ hàng và checkout.
- Tích hợp thanh toán hoặc sandbox sau khi xác nhận báo giá.
- Tính phí vận chuyển theo khu vực.
- Bổ sung voucher, promotion và thống kê quản trị.
- Giữ vai trò Nhân viên xử lý đơn theo bảng phân quyền của nhóm.
- Bổ sung các yêu cầu bảo mật và kiểm thử.

Những chức năng phức tạp như chỉnh sửa thiết kế chuyên nghiệp, preview 3D và đồng bộ API trực tiếp với xưởng Hàn Quốc chưa được ưu tiên triển khai.

### Người kiểm tra
Phạm Duy Anh
Nguyễn Văn Trường

---

## Lần sử dụng 2

### Công cụ
Gemini (Google).

### Mục đích
Phản biện độc lập kết quả phân tích yêu cầu của ChatGPT, đối chiếu với quy định đồ án của giảng viên và xác định các chức năng cần bổ sung hoặc điều chỉnh trước khi thống nhất phạm vi dự án.

### Prompt
Bạn là người phản biện độc lập cho một dự án website thương mại điện tử do nhóm sinh viên thực hiện trong một học phần.

Dữ liệu đầu vào:
1. Bối cảnh dự án Ichigo Printing.
2. Kết quả phân tích yêu cầu do ChatGPT đề xuất.
3. File quy định đồ án của giảng viên.

Hãy đánh giá:
1. Các yêu cầu có giải quyết đúng vấn đề kinh doanh không?
2. Có chức năng trùng lặp hoặc không cần thiết không?
3. Có chức năng vượt quá phạm vi đồ án không?
4. Có thiếu chức năng hoặc quy trình nghiệp vụ cơ bản không?
5. Có rủi ro về dữ liệu, bảo mật và quyền riêng tư không?
6. Có yêu cầu chưa đủ rõ để lập trình và kiểm thử không?
7. Có điểm nào mâu thuẫn với quy định đồ án không?

Đặc biệt kiểm tra:
- Giỏ hàng và checkout.
- Thanh toán tích hợp hoặc sandbox.
- Shipping, voucher/promotion và thống kê quản trị.
- Phân quyền Customer, Staff và Admin.
- Quy trình duyệt file, báo giá, thanh toán và gom đơn.
- Xử lý các trường hợp ngoại lệ.

Với mỗi vấn đề, nêu lý do và đề xuất điều chỉnh. Không mặc định ChatGPT đúng và không tự ý thay đổi đề tài. Quyết định cuối cùng thuộc về nhóm.

### Kết quả đề xuất
Gemini xác định một số điểm chưa phù hợp trong đề xuất ban đầu:

| Nội dung | Đề xuất điều chỉnh |
|---|---|
| Giỏ hàng | Bổ sung giỏ hàng nhiều sản phẩm và checkout |
| Thanh toán | Tích hợp cổng thanh toán hoặc sandbox |
| Shipping | Tính phí giao hàng và lưu vào đơn |
| Voucher | Kiểm tra điều kiện, thời hạn và mức giảm |
| Thống kê | Dashboard doanh thu, đơn hàng, sản phẩm bán chạy |
| Phân quyền | Có thể gộp nghiệp vụ Staff vào Admin để đơn giản hóa |
| Bảo mật | Bổ sung kiểm thử XSS, SQLi, CSRF, IDOR |

Gemini cũng đề xuất luồng nghiệp vụ:

1. Khách hàng chọn sản phẩm, cấu hình và upload thiết kế.
2. Thêm sản phẩm vào giỏ hàng và checkout.
3. Hệ thống tạo yêu cầu chờ báo giá.
4. Admin kiểm duyệt file và xác nhận giá.
5. Khách hàng xác nhận mẫu, báo giá và thanh toán.
6. Đơn đủ điều kiện được gom vào đợt pre-order.
7. Admin cập nhật tiến độ sản xuất và giao hàng.

### Phản biện
Nhóm xem xét các đề xuất của Gemini dựa trên tính khả thi trong thời gian 8 tuần và đặc điểm kinh doanh của Ichigo Printing.

- Đồng ý cần bổ sung các chức năng cơ bản theo yêu cầu môn học.
- Thanh toán phải được thực hiện sau khi khách xác nhận báo giá cuối cùng.
- Chọn bảng phí giao hàng theo khu vực thay vì tích hợp API vận chuyển ngay.
- Không hoàn toàn áp dụng đề xuất gộp Staff vào Admin vì nhóm đã xây dựng bảng vai trò riêng.
- Chức năng thông báo email có thể phát triển thêm nhưng chưa được xác định là bắt buộc.
- Các quy cách file sản xuất cần được xác minh, không sử dụng giả định chưa có cơ sở.

### Quyết định của nhóm
Sau khi đối chiếu kết quả của hai công cụ AI, nhóm thống nhất:

1. **Giỏ hàng và checkout:** Bổ sung vào phạm vi bản nộp cuối.
2. **Thanh toán:** Tích hợp phương thức thanh toán hoặc sandbox sau khi xác nhận báo giá.
3. **Vận chuyển:** Sử dụng bảng phí theo khu vực, lưu phí và trạng thái giao hàng.
4. **Voucher/Promotion:** Triển khai kiểm tra và áp dụng mã giảm giá.
5. **Thống kê:** Bổ sung doanh thu, số đơn, sản phẩm bán chạy, đơn chờ giao và số khách hàng.
6. **Phân quyền:** Giữ vai trò Nhân viên xử lý đơn với các quyền nghiệp vụ phù hợp.
7. **Bảo mật:** Bổ sung các yêu cầu kiểm thử XSS, SQLi, CSRF và IDOR.
8. **Quy trình checkout:** Tách bước gửi yêu cầu đặt in và xác nhận thanh toán.
9. **Thông báo email:** Xếp vào chức năng bổ sung, chỉ triển khai khi đủ thời gian và nguồn lực.

Các quyết định này được sử dụng làm cơ sở hoàn thiện tài liệu yêu cầu hệ thống `REQUIREMENTS.md`.

### Người kiểm tra
Phạm Duy Anh
Nguyễn Văn Trường


---

## Buổi 2 - Trang giới thiệu và hiệu ứng tương tác

Nhật ký phần việc trình bày hai lượt chính được chọn: Prompt 6B và Prompt 8. Các lần thử trước khi nhóm có logo và ảnh sản phẩm không thuộc hai mục này.

### Lượt 1 - Prompt 6B - Xây dựng trang giới thiệu

**Công cụ:** Claude.  
**Ngày ghi nhận:** 03/11/2026.

#### Mục đích và đầu vào
Hoàn thiện trang About từ thiết kế đã duyệt, đưa logo và ảnh trong repo vào các khung có sẵn. Nội dung kế thừa tài liệu nhóm, giữ Roboto và #991F37.

#### Prompt 6B

Bản prompt được điền lại từ mẫu của giảng viên và dữ liệu đã sử dụng, không khẳng định là bản sao nguyên văn tin nhắn đã gửi.

<details>
<summary>Xem đầy đủ prompt 6B và HTML/CSS đầu vào</summary>

Nhóm tôi đang xây dựng trang about.html cho cửa hàng thương mại điện tử.

Thông tin cửa hàng:
- Tên: Ichigo Printing.
- Lĩnh vực: Đặt in K-pop goods theo thiết kế cá nhân hóa, tập trung vào slogan/towel vải và quạt uchiwa.
- Đối tượng khách hàng: Người hâm mộ K-pop, fansite, fanclub, nhóm tổ chức dự án và cá nhân hoặc nhóm kinh doanh goods.
- Điểm nổi bật: Tiếp nhận yêu cầu theo mô hình pre-order. Kiểm duyệt thiết kế, xác nhận báo giá và thanh toán trước khi gom đơn sản xuất tại Hàn Quốc.
- HTML/CSS hiện tại: Mã lưu bên dưới. Font Roboto, màu chủ đạo #991F37. Giữ bố cục và khoảng cách đã duyệt. Dùng logo.png và ba ảnh product-3.jpg, product-1.jpg, product-4.jpg trong các khung có sẵn. Liên hệ do thành viên cung cấp, Facebook là nội dung minh họa.

~~~html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Giới thiệu | Ichigo Printing</title>
  <meta name="description" content="Ichigo Printing, dịch vụ đặt in K-pop goods theo thiết kế cá nhân hóa: slogan/towel vải và quạt uchiwa, vận hành theo mô hình pre-order.">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../css/about.css">
</head>

<body class="page-about">

  <header class="header">
    <div class="container header__inner">
      <a class="logo" href="index.html">Ichigo Printing</a>
      <nav class="nav" aria-label="Điều hướng chính">
        <a href="index.html">Trang chủ</a>
        <a href="product.html">Sản phẩm</a>
        <a href="about.html" class="active" aria-current="page">Giới thiệu</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="section" id="gioi-thieu" aria-labelledby="about-title">
      <div class="container about-intro">
        <div class="about-intro__text">
          <p class="about-eyebrow">Về Ichigo Printing</p>
          <h1 id="about-title">In dấu những <span>khoảnh khắc đặc biệt.</span></h1>
          <p class="about-lead">
            Đặt in slogan/towel vải và quạt uchiwa theo thiết kế của bạn.
          </p>
          <p>
            Ichigo Printing nhận yêu cầu theo mô hình pre-order,
            gom đơn theo từng đợt để chuyển sản xuất tại Hàn Quốc.
          </p>
          <p>
            Dịch vụ dành cho người hâm mộ K-pop, fansite, fanclub,
            các nhóm tổ chức dự án và cá nhân hoặc nhóm kinh doanh goods.
          </p>
          <a class="btn" href="#quy-trinh">Tìm hiểu cách đặt in</a>
        </div>

        <!-- Bổ sung ảnh chính thức của nhóm vào khu vực này. -->
        <div class="about-media" aria-hidden="true">
          <div class="about-media__slot about-media__slot--main"></div>
          <div class="about-media__slot"></div>
          <div class="about-media__slot"></div>
        </div>
      </div>
    </section>

    <section class="section section--alt" id="quy-trinh" aria-labelledby="process-title">
      <div class="container">
        <div class="about-section-head">
          <h2 id="process-title">Quy trình đặt in</h2>
          <p>Từ lựa chọn sản phẩm đến sản xuất và giao hàng.</p>
        </div>

        <ol class="steps about-steps">
          <li class="step">
            <h3>Chọn sản phẩm</h3>
            <p>Chọn sản phẩm, quy cách và số lượng cần in.</p>
          </li>
          <li class="step">
            <h3>Gửi thiết kế</h3>
            <p>Gửi file để nhân viên kiểm duyệt và trao đổi khi cần chỉnh sửa.</p>
          </li>
          <li class="step">
            <h3>Xác nhận báo giá</h3>
            <p>Kiểm tra thiết kế, báo giá và tổng tiền trước khi xác nhận, thanh toán.</p>
          </li>
          <li class="step">
            <h3>Sản xuất và giao hàng</h3>
            <p>Đơn đủ điều kiện được gom theo đợt để sản xuất tại Hàn Quốc và giao hàng.</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="section about-contact-section" id="lien-he" aria-labelledby="contact-title">
      <div class="container about-contact-layout">
        <h2 id="contact-title">Liên hệ</h2>

        <!-- Thông tin liên hệ do Trường bổ sung sau. -->
        <address>
          <dl class="about-contact">
            <div>
              <dt>Email</dt>
              <dd></dd>
            </div>
            <div>
              <dt>Điện thoại</dt>
              <dd></dd>
            </div>
            <div>
              <dt>Mạng xã hội</dt>
              <dd></dd>
            </div>
          </dl>
        </address>

        <a class="btn" href="product.html">Xem sản phẩm</a>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer__bottom">Ichigo Printing</div>
  </footer>

</body>
</html>

~~~

~~~css
.page-about .header__inner {
  flex-wrap: wrap;
}

.page-about .section {
  padding-block: clamp(40px, 5vw, 72px);
}

.page-about #quy-trinh {
  scroll-margin-top: 144px;
}

.page-about .about-intro {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(32px, 5vw, 64px);
}

.page-about .about-intro > * {
  min-width: 0;
}

.page-about .about-eyebrow {
  margin-bottom: 16px;
  color: var(--primary);
  font-size: var(--fs-sm);
  font-weight: 500;
}

.page-about .about-intro h1 {
  margin-bottom: 24px;
  font-size: var(--fs-3xl);
  line-height: 1.08;
  letter-spacing: -0.025em;
}

.page-about .about-intro h1 span {
  display: block;
}

.page-about .about-lead {
  margin-bottom: 16px;
  font-size: var(--fs-lg);
  font-weight: 500;
  color: var(--ink);
}

.page-about .about-intro__text > p:not(.about-eyebrow):not(.about-lead) {
  max-width: 52ch;
  color: var(--ink-soft);
}

.page-about .about-intro__text > .btn {
  margin-top: 8px;
}

.page-about .about-media {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 12px;
  width: 100%;
  aspect-ratio: 1.12 / 1;
}

.page-about .about-media__slot {
  background: var(--bg-alt);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
}

.page-about .about-media__slot--main {
  grid-row: span 2;
}

.page-about .about-section-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px 24px;
  margin-bottom: 32px;
}

.page-about .about-section-head h2,
.page-about .about-section-head p {
  margin-bottom: 0;
}

.page-about .about-section-head p {
  color: var(--ink-soft);
}

.page-about .about-steps .step {
  min-width: 0;
  padding-top: 20px;
  border-top: 1px solid var(--line);
}

.page-about .about-steps .step::before {
  position: static;
  display: block;
  width: auto;
  height: auto;
  margin-bottom: 20px;
  border-radius: 0;
  background: transparent;
  color: var(--primary);
  font-size: 2rem;
  font-weight: 500;
  line-height: 1;
  content: counter(step, decimal-leading-zero);
}

.page-about .about-steps h3 {
  font-size: var(--fs-lg);
  line-height: 1.4;
}

.page-about .about-steps p {
  margin-bottom: 0;
  font-size: var(--fs-sm);
  color: var(--ink-soft);
}

.page-about .about-contact-section {
  padding-block: 32px;
  border-top: 1px solid var(--line);
}

.page-about .about-contact-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.6fr) minmax(0, 1.8fr) auto;
  align-items: center;
  gap: 32px;
}

.page-about .about-contact-layout h2 {
  margin-bottom: 0;
  font-size: var(--fs-xl);
}

.page-about .about-contact-layout address {
  min-width: 0;
  font-style: normal;
}

.page-about .about-contact {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin: 0;
}

.page-about .about-contact dt {
  font-size: var(--fs-sm);
  font-weight: 500;
}

.page-about .about-contact dd {
  min-height: 24px;
  margin: 4px 0 0;
  overflow-wrap: anywhere;
  color: var(--ink-soft);
  font-size: var(--fs-sm);
}

@media (max-width: 992px) {
  .page-about .about-intro {
    grid-template-columns: 1fr;
  }

  .page-about .about-media {
    max-width: 600px;
    aspect-ratio: 1.4 / 1;
  }

  .page-about .about-contact-layout {
    grid-template-columns: 1fr;
    align-items: start;
    gap: 20px;
  }

  .page-about .about-contact-layout > .btn {
    justify-self: start;
  }
}

@media (max-width: 768px) {
  .page-about .header__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding-block: 12px;
  }

  .page-about .nav {
    position: static;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    padding: 0;
    border: 0;
    box-shadow: none;
  }

  .page-about .nav a {
    min-height: 44px;
    padding-block: 8px;
    border-bottom: 0;
  }
}

@media (max-width: 576px) {
  .page-about .about-contact {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}

~~~

Hãy giúp nhóm hoàn thiện trang giới thiệu.

Yêu cầu:
1. Nội dung được chia thành các phần rõ ràng.
2. Có tiêu đề, đoạn giới thiệu và hình ảnh phù hợp.
3. Bố cục dễ đọc, khoảng cách hợp lý.
4. Sử dụng HTML semantic khi phù hợp.
5. Phong cách nhất quán với các trang khác.
6. Có thể hiển thị tốt trên điện thoại.

Không tự tạo thông tin kinh doanh không có trong dữ liệu.
Chỉ cung cấp phần mã cần bổ sung hoặc chỉnh sửa.
Không sử dụng JavaScript hoặc framework CSS.

</details>

#### Phản hồi Claude cho Prompt 6B

Nội dung phản hồi được lưu trực tiếp bên dưới, gồm phần nhận xét và toàn bộ HTML/CSS đã đề xuất.

<details>
<summary>Xem toàn bộ phản hồi Claude cho Prompt 6B</summary>

Cập nhật `about.html` và `about.css` để thay logo văn bản bằng `logo.png` và đưa 3 ảnh vào đúng 3 khung ảnh có sẵn, giữ nguyên bố cục, nội dung và nhịp khoảng cách đã duyệt.

Tôi chưa chạy thử trên trình duyệt. Các thông số crop logo bên dưới được tính từ kích thước ảnh thật, nên bạn cần kiểm tra bằng mắt trước khi merge.

## Cần xử lý trước khi merge

| Hạng mục        | Phát hiện                                                                                                    | Mức độ                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| `product-3.jpg` | Ảnh có watermark "pemonprinting" (tên một cửa hàng in khác)                                                  | Cao: rủi ro bản quyền/thương hiệu                                          |
| `product-4.jpg` | Ảnh là huy hiệu hình trái tim có watermark Xiaohongshu, không thuộc nhóm slogan/towel hay quạt uchiwa        | Cao: lệch với danh mục dịch vụ trên trang                                  |
| `logo.png`      | Ảnh vuông 2000×2000, phần logo thực chỉ chiếm khoảng 65% chiều ngang và 32% chiều dọc, còn lại là vùng trống | Trung bình: cần crop bằng CSS                                              |
| `product-1.jpg` | Kích thước 3024×3024 trong khi hiển thị chỉ khoảng 400–500px                                                 | Thấp: nên giảm xuống khoảng 1200px. Tôi chưa biết dung lượng file thực tế. |

- Tôi không biết bạn có quyền dùng hai ảnh có watermark hay không. Bạn nên xác minh trước khi đăng.
- Ảnh `product-2.jpg` (towel nền vàng) khớp dịch vụ hơn `product-4.jpg`. Nếu đổi, bạn chỉ cần thay tên file và dòng `alt` ở khung thứ 3.
- Đoạn mã dưới đây vẫn dùng đúng 3 ảnh bạn chỉ định.

## Chỉnh sửa `about.html`

### 1. Logo trong header

Thay dòng `<a class="logo" ...>`:
```html
<a class="logo" href="index.html">
  <img src="../images/logo.png" alt="Ichigo Printing" width="2000" height="2000">
</a>

```

### 2. Khối ảnh trong phần giới thiệu

Thay toàn bộ comment và khối `.about-media` (bỏ `aria-hidden` vì ảnh giờ có nội dung):
```html
<div class="about-media">
  <div class="about-media__slot about-media__slot--main">
    <img src="../images/product-3.jpg" alt="Quạt uchiwa hình trái tim in theo thiết kế riêng" width="1685" height="2247">
  </div>
  <div class="about-media__slot">
    <img src="../images/product-1.jpg" alt="Towel vải in slogan theo thiết kế riêng" width="3024" height="3024">
  </div>
  <div class="about-media__slot">
    <img src="../images/product-4.jpg" alt="Huy hiệu hình trái tim in hình nhân vật" width="1440" height="1440">
  </div>
</div>

```

## Chỉnh sửa `css/about.css`

### 3. Logo

Thêm vào đầu file, ngay sau rule `.page-about .header__inner`:
```css
.page-about .logo {
  position: relative;
  display: block;
  flex-shrink: 0;
  width: 120px;
  aspect-ratio: 2 / 1;
  overflow: hidden;
}

.page-about .logo img {
  position: absolute;
  top: -82.5%;
  left: -23.2%;
  width: 145%;
  max-width: none;
  height: auto;
}

```

- Các con số `top`, `left` và `width` là ước tính của tôi từ vùng chứa logo (x 362–1656, y 595–1234).
- Nếu logo bị cắt mép, tăng nhẹ `width` hoặc chỉnh `top`/`left` vài phần trăm.
- Cách gọn hơn là xuất lại `logo.png` đã crop sát logo. Khi đó bạn xóa hai rule này và chỉ cần `.logo img { height: 48px; width: auto; }`.
- Nếu các trang khác cũng dùng logo ảnh, hãy chuyển rule này sang `style.css` để đồng bộ.

### 4. Ảnh trong khung

Thêm ngay sau rule `.page-about .about-media__slot--main`:
```css
.page-about .about-media__slot {
  position: relative;
  overflow: hidden;
}

.page-about .about-media__slot img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: none;
  object-fit: cover;
}

```

## Cơ chế hiển thị

| Thành phần                | Tỷ lệ khung (ước tính) | Tỷ lệ ảnh gốc | Kết quả      |
| ------------------------- | ---------------------- | ------------- | ------------ |
| Khung chính (`product-3`) | khoảng 0.71 (dọc)      | 0.75          | Crop rất ít  |
| Khung nhỏ (`product-1`)   | khoảng 0.82            | 1.0           | Crop hai bên |
| Khung nhỏ (`product-4`)   | khoảng 0.82            | 1.0           | Crop hai bên |

- Khung giữ nguyên `aspect-ratio`, `gap` và viền hiện có, nên bố cục không đổi.
- Trên màn hình ≤992px, khung chuyển sang tỷ lệ 1.4/1 và `object-fit: cover` vẫn giữ ảnh không méo.
- Nếu muốn lệch vùng crop của towel, thêm `object-position` cho từng ảnh.

</details>

#### Kết quả AI đề xuất
Claude đề xuất logo ảnh trong khung crop bằng CSS, ảnh trong ba khung có sẵn và object-fit: cover. AI nhận xét product-4.jpg là huy hiệu, còn product-2.jpg phù hợp hơn với nội dung slogan/towel.

#### Kiểm tra và điều chỉnh
1. Chọn product-3.jpg, product-1.jpg và product-2.jpg để phù hợp nội dung giới thiệu.
2. Đổi object-fit sang contain để thấy đầy đủ sản phẩm, giữ tỷ lệ khung.
3. Đối chiếu wireframe để hoàn thiện bốn bước đặt in, panel liên hệ chung, header và footer. Màu thương hiệu được giữ, icon mạng xã hội dùng biểu tượng Facebook.
4. Đặt CSS riêng trong css/about.css, giới hạn bằng .page-about.
5. Đồng bộ liên kết product.html theo tên file cuối của nhóm.

#### Kết quả và minh chứng
Trang đã được mở trên trình duyệt để kiểm tra logo, ba ảnh, menu và liên kết. Ảnh màn hình hẹp cho thấy bố cục dọc, quy trình một cột và đủ ba mục liên hệ.

- [About máy tính](minh-chung-truong/14_about_lien_he_dung_mau_desktop.png).
- [About màn hình hẹp](minh-chung-truong/26_about_390px.png).

Kiểm thử toàn bộ website ở ba kích thước do Gia Khang tổng hợp. Trang chi tiết sản phẩm do Duy Anh phụ trách, được tích hợp cùng About để đáp ứng sản phẩm chung của Bước 6.

#### Mã nguồn
ecommerce-project/about.html và css/about.css.


### Lượt 2 - Prompt 8 - Cải thiện hiệu ứng tương tác

**Công cụ:** Claude.  
**Ngày ghi nhận:** 03/11/2026.

#### Mục đích và đầu vào
Bổ sung trạng thái cho menu, nút, thẻ sản phẩm, liên hệ và footer. Giữ bố cục đã duyệt, Roboto và #991F37.

#### Prompt 8

<details>
<summary>Xem đầy đủ prompt 8 và HTML/CSS đầu vào</summary>

Nhóm tôi muốn cải thiện trải nghiệm người dùng cho website thương mại điện tử bằng CSS3.

Đây là mã HTML/CSS của các nút, liên kết và thẻ sản phẩm:

Thông tin đã chốt: font Roboto, màu chủ đạo #991F37. Giữ nguyên bố cục, nội dung, logo, hình ảnh và biểu tượng Facebook hiện tại. Mã đã có một số trạng thái hover và focus, cần giữ phần phù hợp và chỉ bổ sung phần còn thiếu.

Các đoạn HTML liên quan trong ecommerce-project/about.html. Phần quy trình có id="quy-trinh" đã có trong file đầy đủ:

```html
<body class="page-about">
  <header class="header">
    <div class="container header__inner">
      <a class="logo" href="index.html" aria-label="Ichigo Printing - Trang chủ">
        <img src="../images/logo.png" alt="Ichigo Printing" width="2000" height="2000">
      </a>
      <nav class="nav" aria-label="Điều hướng chính">
        <a href="index.html">Trang chủ</a>
        <a href="product.html">Sản phẩm</a>
        <a href="about.html" class="active" aria-current="page">Giới thiệu</a>
      </nav>
      <div class="header__icons">
        <a href="product.html" class="header__icon" aria-label="Tìm kiếm sản phẩm">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7"></circle>
            <line x1="16" y1="16" x2="21" y2="21"></line>
          </svg>
        </a>
        <a href="product.html" class="header__icon" aria-label="Xem sản phẩm">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6"></path>
            <circle cx="10" cy="21" r="1"></circle>
            <circle cx="19" cy="21" r="1"></circle>
          </svg>
        </a>
      </div>
    </div>
  </header>

  <main>
    <a class="btn" href="#quy-trinh">Tìm hiểu cách đặt in</a>
    <section class="section about-contact-section" id="lien-he" aria-labelledby="contact-title">
      <div class="container">
        <div class="about-section-head">
          <h2 id="contact-title">Thông tin liên hệ</h2>
          <p>Liên hệ với chúng tôi qua các kênh chính thức để được tư vấn và hỗ trợ nhanh nhất.</p>
        </div>

        <address>
          <dl class="about-contact">
            <div class="about-contact__item">
              <dt>
                <span class="about-contact__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="1"></rect>
                    <path d="M3 6l9 7 9-7"></path>
                  </svg>
                </span>
                Email
              </dt>
              <dd>
                <a href="mailto:truongisworking822@gmail.com">truongisworking822@gmail.com</a>
              </dd>
            </div>

            <div class="about-contact__item">
              <dt>
                <span class="about-contact__icon" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="30" height="30" fill="currentColor" aria-hidden="true">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                  </svg>
                </span>
                Mạng xã hội
              </dt>
              <dd>
                Facebook<br>
                Ichigo Printing <small>(minh họa)</small>
              </dd>
            </div>

            <div class="about-contact__item">
              <dt>
                <span class="about-contact__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 13v-2a8 8 0 0 1 16 0v2"></path>
                    <rect x="2" y="11" width="4" height="8" rx="2"></rect>
                    <rect x="18" y="11" width="4" height="8" rx="2"></rect>
                    <path d="M20 19a3 3 0 0 1-3 3h-3"></path>
                    <path d="M11 22h3"></path>
                  </svg>
                </span>
                Kênh liên hệ chính thức
              </dt>
              <dd>
                Vui lòng liên hệ qua email hoặc mạng xã hội để được hỗ trợ.
              </dd>
            </div>
          </dl>
        </address>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">

      <div class="footer__grid">
        <div>
          <h3>ICHIGO PRINTING</h3>
          <p>In dấu những khoảnh khắc đặc biệt.</p>
        </div>

        <div>
          <h4>Liên kết</h4>
          <p><a href="index.html">Trang chủ</a></p>
          <p><a href="product.html">Sản phẩm</a></p>
          <p><a href="about.html">Giới thiệu</a></p>
        </div>

        <div>
          <h4>Theo dõi chúng tôi</h4>
          <div class="footer__socials" role="group" aria-label="Các kênh mạng xã hội minh họa">
            <svg viewBox="0 0 24 24" role="img" aria-label="Instagram" fill="none" stroke="currentColor" stroke-width="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5"></rect>
              <circle cx="12" cy="12" r="4"></circle>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle>
            </svg>
            <svg viewBox="0 0 24 24" role="img" aria-label="X" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 3h4.5L20 21h-4.5L4 3z"></path>
              <path d="M20 3L4 21"></path>
            </svg>
            <svg viewBox="0 0 24 24" role="img" aria-label="TikTok" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 3v12.5a4.5 4.5 0 1 1-4-4.47"></path>
              <path d="M14 3c.6 3 2.7 5 6 5"></path>
            </svg>
            <svg viewBox="0 0 24 24" role="img" aria-label="YouTube" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="4"></rect>
              <path d="M10 9l6 3-6 3z" fill="currentColor" stroke="none"></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p>© 2026 Ichigo Printing. All rights reserved.</p>
      </div>

    </div>
  </footer>
</body>
```

Một thẻ sản phẩm đang dùng trong ecommerce-project/index.html:

```html
<article class="product">
    <a href="product-detail.html" class="product__thumb">
        <img src="../images/product-1.jpg" alt="Mẫu sản phẩm 1">
    </a>
    <div class="product__body">
        <h3 class="product__title">Mẫu sản phẩm 1</h3>
        <p class="product__price">Giá tham khảo: [cập nhật]</p>
        <div class="product__footer">
            <a href="product-detail.html" class="btn btn--outline btn--sm">
                Xem chi tiết
            </a>
        </div>
    </div>
</article>
```

CSS liên quan trong css/style.css, được nạp trước css/about.css:

```css
:root {

  --primary: #991F37;
  --primary-dark: #7A1829;
  --primary-light: #B8324D;
  --primary-soft: #F8E9EC;

  --ink: #2A1E21;
  --ink-soft: #6B5A5E;
  --line: #E8DEE0;
  --bg: #FFFFFF;
  --bg-alt: #FAF6F6;
  --white: #FFFFFF;

  --success: #2E7D4F;
  --warning: #C9821A;
  --danger: #C62828;

  --font: 'Roboto', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif;
  --fs-xs: 0.8125rem;
  --fs-sm: 0.9375rem;
  --fs-base: 1rem;
  --fs-lg: 1.125rem;
  --fs-xl: 1.5rem;
  --fs-2xl: clamp(1.75rem, 3vw, 2.25rem);
  --fs-3xl: clamp(2.25rem, 5vw, 3.5rem);

  --container: 1200px;
  --gutter: 20px;
  --section-y: clamp(48px, 7vw, 96px);

  --radius-sm: 4px;
  --radius: 8px;
  --radius-lg: 14px;
  --shadow-sm: 0 1px 3px rgba(42, 30, 33, 0.08);
  --shadow: 0 6px 20px rgba(42, 30, 33, 0.10);
  --shadow-lg: 0 14px 40px rgba(153, 31, 55, 0.18);
  --ease: 0.2s ease;
}

*, *::before, *::after { box-sizing: border-box; }

body {
  margin: 0;
  font-family: var(--font);
  font-size: var(--fs-base);
  line-height: 1.65;
  color: var(--ink);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
}

a {
  color: var(--primary);
  text-decoration: none;
  transition: color var(--ease);
}

a:hover { color: var(--primary-dark); }

:focus-visible {
  outline: 3px solid var(--primary-light);
  outline-offset: 2px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 28px;
  font-family: inherit;
  font-size: var(--fs-base);
  font-weight: 500;
  line-height: 1.2;
  color: var(--white);
  background: var(--primary);
  border: 2px solid var(--primary);
  border-radius: var(--radius);
  cursor: pointer;
  transition: background var(--ease), border-color var(--ease),
              color var(--ease), transform var(--ease), box-shadow var(--ease);
}

.btn:hover {
  background: var(--primary-dark);
  border-color: var(--primary-dark);
  color: var(--white);
  box-shadow: var(--shadow-lg);
}

.btn:active { transform: translateY(1px); }

.btn:disabled { opacity: 0.5; cursor: not-allowed; box-shadow: none; }

.btn--outline { background: transparent; color: var(--primary); }

.btn--outline:hover { background: var(--primary); color: var(--white); }

.btn--light { background: var(--white); border-color: var(--white); color: var(--primary); }

.btn--light:hover { background: var(--primary-soft); border-color: var(--primary-soft); color: var(--primary-dark); }

.btn--lg { padding: 16px 36px; font-size: var(--fs-lg); }

.btn--sm { padding: 8px 16px; font-size: var(--fs-sm); }

.btn--block { display: flex; width: 100%; }

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--white);
  border-bottom: 1px solid var(--line);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  min-height: 72px;
}

.nav {
    display: flex;
    gap: 25px;
}

.logo {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--primary);
  letter-spacing: -0.02em;
}

.nav { display: flex; gap: 28px; }

.nav a {
  position: relative;
  padding-block: 8px;
  font-weight: 500;
  color: var(--ink);
}

.nav a::after {
  content: '';
  position: absolute;
  left: 0; bottom: 0;
  width: 0; height: 2px;
  background: var(--primary);
  transition: width var(--ease);
}

.nav a:hover,
.nav a.active { color: var(--primary); }

.nav a:hover::after,
.nav a.active::after { width: 100%; }

.nav-toggle {
  display: none;
  background: none;
  border: 0;
  padding: 8px;
  font-size: 1.5rem;
  color: var(--primary);
  cursor: pointer;
}

.product {
  display: flex;
  flex-direction: column;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow var(--ease), border-color var(--ease);
}

.product:hover { box-shadow: var(--shadow); border-color: var(--primary-light); }

.product__thumb {
  position: relative;
  aspect-ratio: 1 / 1;
  background: var(--bg-alt);
  overflow: hidden;
}

.product__thumb img { width: 100%; height: 100%; object-fit: cover; }

.product__badge {
  position: absolute;
  top: 12px; left: 12px;
  padding: 4px 10px;
  font-size: var(--fs-xs);
  font-weight: 700;
  color: var(--white);
  background: var(--primary);
  border-radius: var(--radius-sm);
}

.product__body { display: flex; flex-direction: column; flex: 1; padding: 18px; }

.product__title { font-size: var(--fs-lg); margin-bottom: 6px; }

.product__meta { font-size: var(--fs-sm); color: var(--ink-soft); margin-bottom: 12px; }

.product__price { font-size: var(--fs-xl); font-weight: 700; color: var(--primary); }

.product__price del { margin-left: 8px; font-size: var(--fs-sm); font-weight: 400; color: var(--ink-soft); }

.product__footer { margin-top: auto; padding-top: 14px; }

.footer {
  padding-top: 64px;
  color: #E9DADD;
  background: #2A1E21;
  font-size: var(--fs-sm);
}

.footer a { color: #E9DADD; }

.footer a:hover { color: var(--white); text-decoration: underline; }

@media (max-width: 768px) {
  .nav-toggle { display: block; }
  .nav {
      position: absolute;
      top: 100%; left: 0; right: 0;
      display: none;
      flex-direction: column;
      gap: 0;
      padding: 8px var(--gutter) 16px;
      background: var(--white);
      border-bottom: 1px solid var(--line);
      box-shadow: var(--shadow);
    }
  .nav.open { display: flex; }
  .nav a { padding-block: 12px; border-bottom: 1px solid var(--line); }
  .nav a::after { display: none; }
}

@media (max-width: 576px) {
  :root { --gutter: 16px; }
  .hero__actions .btn { width: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
}

.logo img {
    display: block;
    width: 380px;
    height: 190px;
    object-fit: contain;
}

.header__icons {
    display: flex;
    align-items: center;
    gap: 22px;
}

.header__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--ink);
    transition: color var(--ease);
}

.header__icon:hover {
    color: var(--primary);
}

.hero__actions .btn {
    color: var(--white);
    background: var(--primary);
    border: 2px solid var(--primary);
    border-radius: var(--radius);
    padding: 16px 36px;
    font-weight: 700;
}

.hero__actions .btn:hover {
    color: var(--white);
    background: var(--primary-dark);
    border-color: var(--primary-dark);
}

.product__thumb {
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background: var(--bg-alt);
}

.product__thumb img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform var(--ease);
}

.product:hover .product__thumb img {
    transform: scale(1.04);
}

.nav a,
.footer a {
    transition: color var(--ease);
}

.nav a:hover {
    color: var(--primary);
}

@media (max-width: 992px) and (min-width: 769px) {
  .logo img {
          width: 160px;
      }
}

@media (max-width: 768px) {
  .logo img {
          width: 145px;
          height: 65px;
      }
  .header__icons {
          gap: 14px;
      }
}

@media (max-width: 576px) {
  .hero__actions .btn {
          width: 100%;
      }
  .product__thumb {
          aspect-ratio: 1 / 1;
      }
}
```

CSS liên quan trong css/about.css, được nạp sau css/style.css:

```css
.page-about .header__inner {
  flex-wrap: wrap;
}

.page-about .logo {
  position: relative;
  display: block;
  flex-shrink: 0;
  width: 120px;
  aspect-ratio: 2 / 1;
  overflow: hidden;
}

.page-about .logo img {
  position: absolute;
  top: -82.5%;
  left: -23.2%;
  width: 145%;
  max-width: none;
  height: auto;
}

.page-about .header__icons {
  justify-content: flex-end;
  width: 120px;
}

.page-about .about-contact-section {
  border-top: 1px solid var(--line);
}

.page-about .about-contact-section .about-section-head {
  margin-bottom: 20px;
}

.page-about .about-contact-section address {
  font-style: normal;
}

.page-about .about-contact {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 0;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.page-about .about-contact__item {
  position: relative;
  min-width: 0;
  min-height: 132px;
  padding: 32px 24px 28px 100px;
}

.page-about .about-contact__item + .about-contact__item::before {
  content: "";
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 0;
  width: 1px;
  background: var(--line);
}

.page-about .about-contact dt {
  color: var(--ink);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.4;
}

.page-about .about-contact__icon {
  position: absolute;
  top: 24px;
  left: 24px;
  display: grid;
  place-items: center;
  width: 56px;
  height: 64px;
  color: var(--primary);
  background: var(--primary-soft);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
}

.page-about .about-contact__icon svg {
  width: 30px;
  height: 30px;
}

.page-about .about-contact dd {
  margin: 4px 0 0;
  overflow-wrap: anywhere;
  color: var(--ink-soft);
  font-size: var(--fs-sm);
  line-height: 1.5;
}

.page-about .about-contact dd a {
  color: var(--primary);
}

.page-about .about-contact dd a:hover {
  color: var(--primary-dark);
}

.page-about .footer h3 {
  color: var(--white);
}

@media (max-width: 768px) {
  .page-about .header__inner {
      flex-direction: row;
      align-items: center;
      gap: 8px 16px;
      padding-block: 12px;
    }
  .page-about .header__icons {
      width: auto;
      margin-left: auto;
      gap: 4px;
    }
  .page-about .header__icon {
      min-width: 44px;
      min-height: 44px;
    }
  .page-about .nav {
      position: static;
      order: 3;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 16px;
      width: 100%;
      padding: 0;
      border: 0;
      box-shadow: none;
    }
  .page-about .nav a {
      display: inline-flex;
      align-items: center;
      min-height: 44px;
      padding-block: 8px;
      border-bottom: 0;
    }
  .page-about .about-contact {
      grid-template-columns: 1fr;
      gap: 0;
    }
  .page-about .about-contact__item + .about-contact__item::before {
      top: 0;
      right: 24px;
      bottom: auto;
      left: 24px;
      width: auto;
      height: 1px;
    }
}
```

Hãy giúp nhóm:
1. Bổ sung hover cho các thành phần phù hợp.
2. Bổ sung focus dễ nhận biết khi sử dụng bàn phím.
3. Sử dụng transition hợp lý.
4. Bảo đảm chữ và nút có độ tương phản phù hợp.
5. Tránh hiệu ứng gây mất tập trung hoặc làm xê dịch bố cục.

Giải thích sự khác nhau giữa hover và focus.
Chỉ cung cấp CSS cần bổ sung.
Không sử dụng JavaScript.

</details>

#### Phản hồi Claude cho Prompt 8

<details>
<summary>Xem toàn bộ phản hồi Claude cho Prompt 8</summary>

Bổ sung hover, focus và transition nhẹ cho nút, menu, biểu tượng header, thẻ sản phẩm, liên kết liên hệ và footer. Không đổi bố cục và không tạo hiệu ứng dịch chuyển.

Tôi đã thử riêng hai điểm dễ lỗi nhất bằng Chromium trên bản sao dự án và thấy cả hai hiển thị đúng:

- Vòng focus của ảnh sản phẩm.
- Vòng focus của liên kết footer.

Các trạng thái còn lại tôi chưa kiểm tra bằng mắt.

## Hover và focus khác nhau thế nào

| | Hover | Focus (`:focus-visible`) |
|---|---|---|
| Kích hoạt bởi | Con trỏ chuột đặt lên phần tử | Bàn phím (Tab), công nghệ hỗ trợ; trình duyệt chỉ hiện vòng khi cần |
| Ai cần | Người dùng chuột | Người dùng bàn phím, người dùng đọc màn hình, người không dùng chuột được |
| Trên điện thoại | Gần như không có; trạng thái hover dễ bị "dính" sau khi chạm | Vẫn hoạt động với bàn phím rời hoặc công nghệ hỗ trợ |
| Mục đích | Gợi ý "bấm được" | Cho biết "bạn đang ở đâu" |
| Quy tắc | Không thay thế được focus | Phải nhìn rõ, tối thiểu tỷ lệ tương phản 3:1 với nền (WCAG 1.4.11) |

Vì vậy mỗi thành phần tương tác cần có cả hai trạng thái. Mã hiện có chỉ phủ hover cho nhiều thành phần, còn focus mới dùng một quy tắc `:focus-visible` chung.

## Đánh giá mã hiện có

| Mục | Kết quả | Hành động |
|---|---|---|
| Chữ trắng trên nút `#991F37` | 8,06:1, đạt | Giữ |
| Chữ `#6B5A5E` trên nền trắng và `#FAF6F6` | 6,46:1 và 6,03:1, đạt | Giữ |
| Liên kết footer `#E9DADD` trên `#2A1E21` | 11,9:1, đạt | Giữ |
| Vòng focus chung `#B8324D` trên nền trắng | 5,83:1, đạt | Giữ |
| Vòng focus chung `#B8324D` trên nền footer | 2,76:1, **không đạt** | Dùng vòng trắng trong footer |
| Vòng focus của ảnh sản phẩm | Bị cắt vì `.product` có `overflow: hidden` | Đưa vòng vào bên trong |
| Liên kết email/điện thoại trong liên hệ | Chỉ phân biệt bằng màu, mà màu liên kết và chữ thường khá gần nhau | Thêm gạch chân mảnh |
| Biểu tượng mạng xã hội trong footer | Không phải liên kết (không có `href`) | Không thêm hover/focus |

Các tỷ lệ tương phản trên là tôi tự tính theo công thức WCAG 2.x, nên bạn có thể kiểm tra lại bằng công cụ như DevTools.

## CSS bổ sung vào cuối `css/style.css`

Các thành phần này dùng chung nhiều trang nên đặt ở `style.css`.

~~~css
/* ===== TƯƠNG TÁC: HOVER / FOCUS ===== */

/* Nút: vòng focus đậm hơn, tách khỏi nền bằng khoảng hở */
.btn:focus-visible {
  outline: 3px solid var(--primary-dark);
  outline-offset: 3px;
}

/* Menu: focus bằng bàn phím có cùng dấu hiệu với hover (màu + gạch chân) */
.nav a:focus-visible {
  color: var(--primary);
  outline-offset: 4px;
  border-radius: var(--radius-sm);
}

.nav a:focus-visible::after {
  width: 100%;
}

/* Logo */
.logo:focus-visible {
  outline-offset: 4px;
  border-radius: var(--radius-sm);
}

/* Biểu tượng header: nền tròn nhạt khi hover, không đổi kích thước */
.header__icon {
  border-radius: 50%;
  transition: color var(--ease), box-shadow var(--ease);
}

.header__icon:focus-visible {
  color: var(--primary);
  outline-offset: 6px;
}

@media (hover: hover) {
  .header__icon:hover {
    box-shadow: 0 0 0 6px var(--primary-soft);
  }
}

/* Thẻ sản phẩm: focus bằng bàn phím có hiệu ứng như hover */
.product:focus-within {
  border-color: var(--primary-light);
  box-shadow: var(--shadow);
}

/* Vòng focus của ảnh nằm trong khung để không bị overflow cắt */
.product__thumb:focus-visible {
  outline-offset: -3px;
}

/* Footer: nền tối cần vòng focus sáng */
.footer a:focus-visible {
  color: var(--white);
  outline-color: var(--white);
  outline-offset: 3px;
  border-radius: 2px;
  text-decoration: underline;
}
~~~

## CSS bổ sung vào `css/about.css`

Đặt sau rule `.page-about .about-contact dd a:hover`:

~~~css
/* Liên kết liên hệ: gạch chân mảnh để không chỉ phân biệt bằng màu */
.page-about .about-contact dd a {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  transition: color var(--ease), text-decoration-thickness var(--ease);
}

.page-about .about-contact dd a:hover,
.page-about .about-contact dd a:focus-visible {
  text-decoration-thickness: 2px;
}
~~~

## Cách mã này đáp ứng 5 yêu cầu

- **Hover:** mã hiện có đã có hover cho nút, menu, thẻ sản phẩm và biểu tượng header. Tôi chỉ thêm hover cho biểu tượng header và liên kết liên hệ. Rule hover mới của biểu tượng header đặt trong `@media (hover: hover)` để tránh hover "dính" trên màn hình cảm ứng.
- **Focus:** mọi thành phần bấm được đều có vòng focus rõ. Nút dùng `--primary-dark` (10,55:1 trên nền trắng) nên đậm hơn vòng chung. Footer dùng vòng trắng thay vì vòng đỏ.
- **Transition:** tiếp tục dùng biến `--ease` (0,2 giây). Chỉ chuyển các thuộc tính rẻ về hiệu năng: màu, `box-shadow`, độ dày gạch chân. Quy tắc `prefers-reduced-motion` hiện có đã tắt transition cho người chọn giảm chuyển động.
- **Tương phản:** các cặp màu đạt 3:1 đến 4,5:1 trở lên theo bảng trên. Điểm duy nhất không đạt là vòng focus chung trong footer, đã sửa.
- **Không xê dịch và không gây xao nhãng:** không dùng `translate`, `margin` hay `padding` khi hover. Hiệu ứng hover của biểu tượng header dùng `box-shadow` nên không ảnh hưởng bố cục. Tôi không thêm hiệu ứng nâng thẻ, rung hay phóng to nút.

## Điểm cần lưu ý

- Hiệu ứng zoom ảnh sản phẩm khi hover (`scale(1.04)`) đã có sẵn và nằm trong khung `overflow: hidden`. Tôi giữ nguyên vì không làm lệch bố cục. Nếu thấy hơi nổi, giảm xuống `1.02`.
- Viền thẻ `#E8DEE0` trên nền trắng chỉ đạt 1,32:1. Theo hiểu biết của tôi, yêu cầu 3:1 áp dụng cho viền nhận diện thành phần điều khiển, còn viền trang trí của thẻ thì không bắt buộc. Nút phụ `.btn--outline` dùng viền `--primary` nên đạt.
- Nếu sau này biểu tượng mạng xã hội trong footer được gắn URL, hãy bọc chúng bằng thẻ `<a>` và áp dụng thêm quy tắc `.footer a:focus-visible` ở trên.

</details>

Thông tin chạy thử Chromium nằm trong phản hồi của Claude. Kết quả kiểm tra và ảnh chụp tại máy được ghi riêng ở phần minh chứng bên dưới.

#### Kết quả AI đề xuất
Claude đề xuất focus cho menu, logo, nút và liên kết ảnh, focus-within cho thẻ sản phẩm, vòng trắng ở footer và gạch chân liên kết liên hệ. Transition dùng --ease.

#### Kiểm tra và điều chỉnh
1. Bổ sung vòng focus hai màu trong khung ảnh để rõ trên ảnh nhiều màu và tránh bị cắt.
2. Giữ vòng trắng trên footer tối. Tỷ lệ #B8324D trên #2A1E21 được tính lại khoảng 2,76:1 trước chỉnh.
3. Đổi focus nút Đặt in sang màu thương hiệu và bỏ dịch chuyển .btn:active.
4. Giữ ảnh chi tiết là ảnh hiển thị thông thường, không thêm tabindex để buộc nhận Tab.
5. Đồng bộ liên kết product.html.

#### Kết quả và minh chứng
Các trạng thái đã được kiểm tra bằng chuột và phím Tab. Ảnh chụp cho thấy các trạng thái rõ và không thấy thẻ che thẻ bên cạnh trong các khung đã chụp.

- [Menu hover](minh-chung-truong/15_menu_hover.png), [focus](minh-chung-truong/16_menu_focus.png).
- [Xem chi tiết focus](minh-chung-truong/18_nut_xem_chi_tiet_focus.png), [hover](minh-chung-truong/24_nut_xem_chi_tiet_hover.png).
- [Đặt in focus](minh-chung-truong/20_nut_dat_in_focus.png), [hover](minh-chung-truong/21_nut_dat_in_hover.png).
- [Focus ảnh](minh-chung-truong/22_anh_san_pham_focus.png), [hover thẻ](minh-chung-truong/23_the_san_pham_hover.png).
- [Focus footer](minh-chung-truong/17_footer_focus.png).

Kết quả dựa trên thao tác và ảnh tại máy. Không ghi thành đo tự động độ dịch chuyển hoặc kiểm thử mọi thiết bị.

#### Mã nguồn và giới hạn
Quy tắc dùng chung nằm trong css/style.css, quy tắc liên hệ nằm trong css/about.css. Website Buổi 2 là giao diện HTML/CSS, chưa có backend, đăng nhập hoặc thanh toán thật.

Mã được push lên main tại [af9171f](https://github.com/serene-ngn24/ecommerce-website-project-gr2/commit/af9171fbd589a6b569359c14d76168faf88b1e45). Commit công việc được giữ trong lịch sử sau khi gộp cập nhật của nhóm.


---

## Buổi 3 – Prompt 3: Tìm kiếm, lọc và sắp xếp sản phẩm

<!-- TRUONG_BUOI3_PROMPT3_20261108 -->

**Ngày ghi nhận:** 08/11/2026.

**Công cụ tạo phản hồi:** Claude.

**Công cụ rà soát và chuẩn bị tích hợp:** ChatGPT/Codex.

**Phạm vi:** Tìm kiếm theo tên, lọc danh mục, sắp xếp giá trên trang danh sách hiện có.

### Bối cảnh và đầu vào

Mảng `products` và hàm `renderProducts(list)` đã có ở commit `384b263` trước lượt Prompt 3. Đây là đầu vào của lượt làm việc với Claude, không phải phần mới được tạo ra trong phản hồi Prompt 3.

Prompt dưới đây được lưu theo bản đã cung cấp trong cuộc trao đổi. Phản hồi Claude được giữ nguyên nội dung từ tệp `Pasted text(3).txt` do người dùng gửi. Các nhận định tự kiểm thử trong phản hồi được phân biệt với các bước kiểm tra thực tế được ghi ở phần sau.

### Prompt đã chuẩn bị cho lượt 3

Website Ichigo Printing đã có giao diện HTML5/CSS3, mảng `products` gồm 8 sản phẩm và hàm `renderProducts(list)` để hiển thị danh sách.

Các file mã nguồn hiện tại được đính kèm:
- `ecommerce-project/product.html`
- `js/data/products.js`
- `js/module/search-filter.js`
- `css/style.css`

Tên trang thực tế của dự án là `product.html`. Danh sách được hiển thị trong phần tử có `id="product-list"`.

Hãy kiểm tra mã nguồn đính kèm và tích hợp chức năng tìm kiếm, lọc và sắp xếp vào trang hiện tại.

Yêu cầu:
1. Tìm kiếm theo tên sản phẩm, không phân biệt chữ hoa và chữ thường.
2. Lọc theo danh mục có trong dữ liệu `products`, có lựa chọn tất cả danh mục.
3. Sắp xếp theo giá tăng dần và giảm dần.
4. Cho phép kết hợp đồng thời từ khóa, danh mục và thứ tự giá.
5. Cập nhật danh sách sau mỗi thao tác bằng hàm `renderProducts(list)` hiện có.
6. Hiển thị thông báo khi không có kết quả.
7. Giữ nguyên dữ liệu và thứ tự của mảng `products` ban đầu; thao tác sắp xếp phải thực hiện trên mảng kết quả riêng.
8. Giữ phong cách giao diện hiện tại, header, footer và cấu trúc thẻ sản phẩm. Chỉ bổ sung thành phần giao diện cần thiết cho tìm kiếm, lọc và sắp xếp.
9. Các điều khiển có nhãn rõ ràng, sử dụng được bằng bàn phím và hiển thị phù hợp trên điện thoại.
10. Giữ cách nạp các script bằng `defer` hiện có.

Hãy:
- Phân tích ngắn các thành phần HTML hiện có và xác định phần cần bổ sung.
- Viết các hàm JavaScript riêng biệt, giải thích cách tìm kiếm, lọc và sắp xếp phối hợp với nhau.
- Chỉ rõ file cần thay đổi và trả nguyên nội dung hoàn chỉnh của từng file đó để có thể copy thay thế.
- Đề xuất các trường hợp kiểm thử riêng lẻ, kết hợp điều kiện, không có kết quả và kiểm tra dữ liệu gốc không bị thay đổi.
- Phân biệt kết quả đã kiểm thử thực tế với kết quả mong đợi.

Chỉ triển khai phạm vi tìm kiếm, lọc và sắp xếp trong bước này. Tận dụng mã đang hoạt động, không tạo lại website từ đầu.

### Mã nguồn đầu vào tham chiếu tại commit `384b263`

<details>
<summary>ecommerce-project/product.html – nội dung đầu vào</summary>

```html

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Khám phá các sản phẩm K-pop goods cá nhân hóa tại Ichigo Printing.">
    <title>Ichigo Printing | Sản phẩm</title>

    <link rel="stylesheet" href="../css/style.css">
    <script src="../js/data/products.js" defer></script>
    <script src="../js/module/search-filter.js" defer></script>
</head>

<body>

    <!-- HEADER -->
    <header class="header">
        <div class="container header__inner">
            <a href="index.html" class="logo" aria-label="Ichigo Printing - Trang chủ">
                <img src="../images/logo.png" alt="ICHIGO PRINTING">
            </a>

            <nav class="nav" aria-label="Menu điều hướng chính">
                <a href="index.html">Trang chủ</a>
                <a href="product.html" class="active" aria-current="page">Sản phẩm</a>
                <a href="about.html">Giới thiệu</a>
            </nav>

            <div class="header__icons">
                <a href="product.html" class="header__icon" aria-label="Tìm kiếm sản phẩm">
                    <svg viewBox="0 0 24 24" width="22" height="22"
                         fill="none" stroke="currentColor" stroke-width="2"
                         stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="7"></circle>
                        <line x1="16" y1="16" x2="21" y2="21"></line>
                    </svg>
                </a>

                <a href="product.html" class="header__icon" aria-label="Xem sản phẩm">
                    <svg viewBox="0 0 24 24" width="22" height="22"
                         fill="none" stroke="currentColor" stroke-width="2"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6"></path>
                        <circle cx="10" cy="21" r="1"></circle>
                        <circle cx="19" cy="21" r="1"></circle>
                    </svg>
                </a>
            </div>
        </div>
    </header>

    <main>

        <!-- PAGE INTRODUCTION -->
        <section class="section section--alt">
            <div class="container">
                <div class="section__head">
                    <p class="text-primary"><strong>ICHIGO PRINTING</strong></p>
                    <h1>Our Products</h1>
                    <p>
                        Khám phá bộ sưu tập K-pop goods được thiết kế
                        và cá nhân hóa theo phong cách riêng của bạn.
                    </p>
                </div>
            </div>
        </section>

        <!-- PRODUCT LIST -->
        <section class="section">
            <div class="container">

                <div class="section__head">
                    <h2>Danh sách sản phẩm</h2>
                    <p>
                        Các mẫu sản phẩm in ấn dành cho cộng đồng người hâm mộ K-pop.
                    </p>
                </div>

                <div class="grid grid--4" id="product-list"></div>

                <!-- PRICE NOTE -->
                <div class="alert" style="margin-top: 32px;">
                    <strong>Lưu ý:</strong>
                    Giá hiển thị là giá demo phục vụ mục đích minh họa giao diện.
                    Giá thực tế có thể thay đổi tùy theo kích thước, chất liệu,
                    số lượng và yêu cầu thiết kế.
                </div>

            </div>
        </section>

    </main>

    <!-- FOOTER -->
    <footer class="footer">
        <div class="container">
            <div class="footer__grid">

                <div>
                    <h3>ICHIGO PRINTING</h3>
                    <p>In dấu những khoảnh khắc đặc biệt.</p>
                </div>

                <div>
                    <h4>Liên kết</h4>
                    <p><a href="index.html">Trang chủ</a></p>
                    <p><a href="product.html">Sản phẩm</a></p>
                    <p><a href="about.html">Giới thiệu</a></p>
                </div>

                <div>
                    <h4>Theo dõi chúng tôi</h4>
                    <p>Instagram | X | TikTok | YouTube</p>
                </div>

            </div>

            <div class="footer__bottom">
                <p>© 2026 Ichigo Printing. All rights reserved.</p>
            </div>
        </div>
    </footer>

</body>
</html>
```

</details>

<details>
<summary>js/data/products.js – nội dung đầu vào</summary>

```javascript
// Dữ liệu dùng chung cho các trang sản phẩm. Giá được giữ từ bản demo hiện có.
const products = [
    {
        id: 1,
        name: "Fabric Slogan",
        price: 120000,
        category: "Slogan",
        image: "../images/product-1.jpg",
        description: "Slogan vải in theo thiết kế riêng"
    },
    {
        id: 2,
        name: "Custom Printed Slogan",
        price: 150000,
        category: "Slogan",
        image: "../images/product-2.jpg",
        description: "Slogan in theo mẫu cá nhân hóa"
    },
    {
        id: 3,
        name: "Uchiwa Fan",
        price: 85000,
        category: "Quạt",
        image: "../images/product-3.jpg",
        description: "Quạt cầm tay in hình thần tượng"
    },
    {
        id: 4,
        name: "Custom Badge",
        price: 45000,
        category: "Huy hiệu",
        image: "../images/product-4.jpg",
        description: "Huy hiệu in hình theo yêu cầu"
    },
    {
        id: 5,
        name: "Photocard Set",
        price: 60000,
        category: "Ảnh in",
        image: "../images/product-5.jpg",
        description: "Bộ ảnh photocard cá nhân hóa"
    },
    {
        id: 6,
        name: "Photo Print / Postcard",
        price: 50000,
        category: "Ảnh in",
        image: "../images/product-6.jpg",
        description: "Ảnh in và postcard lưu niệm"
    },
    {
        id: 7,
        name: "Acrylic Standee",
        price: 130000,
        category: "Phụ kiện mica",
        image: "../images/product-7.jpg",
        description: "Standee mica in hình cá nhân hóa"
    },
    {
        id: 8,
        name: "Acrylic Keychain",
        price: 75000,
        category: "Phụ kiện mica",
        image: "../images/product-8.jpg",
        description: "Móc khóa mica theo thiết kế riêng"
    }
];
```

</details>

<details>
<summary>js/module/search-filter.js – nội dung đầu vào</summary>

```javascript
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
```

</details>

<details>
<summary>css/style.css – nội dung đầu vào</summary>

```css
/* ==========================================================
   WEBSITE ĐẶT IN SLOGAN / KHĂN (TOWEL)
   Màu chủ đạo: #991F37  |  Font: Roboto
   ----------------------------------------------------------
   Cách dùng: thêm vào <head> của trang HTML
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="style.css">
   ========================================================== */

/* ---------- 1. BIẾN MÀU & THÔNG SỐ (chỉnh tại đây) ---------- */
:root {
  /* Màu thương hiệu */
  --primary: #991F37;
  --primary-dark: #7A1829;
  --primary-light: #B8324D;
  --primary-soft: #F8E9EC;      /* nền nhạt cùng tông */

  /* Màu trung tính (hơi ấm để hợp với tông đỏ rượu) */
  --ink: #2A1E21;               /* chữ chính */
  --ink-soft: #6B5A5E;          /* chữ phụ */
  --line: #E8DEE0;              /* viền */
  --bg: #FFFFFF;
  --bg-alt: #FAF6F6;            /* nền xen kẽ các section */
  --white: #FFFFFF;

  /* Màu trạng thái */
  --success: #2E7D4F;
  --warning: #C9821A;
  --danger: #C62828;

  /* Typography */
  --font: 'Roboto', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif;
  --fs-xs: 0.8125rem;
  --fs-sm: 0.9375rem;
  --fs-base: 1rem;
  --fs-lg: 1.125rem;
  --fs-xl: 1.5rem;
  --fs-2xl: clamp(1.75rem, 3vw, 2.25rem);
  --fs-3xl: clamp(2.25rem, 5vw, 3.5rem);

  /* Bố cục */
  --container: 1200px;
  --gutter: 20px;
  --section-y: clamp(48px, 7vw, 96px);

  /* Bo góc, đổ bóng, chuyển động */
  --radius-sm: 4px;
  --radius: 8px;
  --radius-lg: 14px;
  --shadow-sm: 0 1px 3px rgba(42, 30, 33, 0.08);
  --shadow: 0 6px 20px rgba(42, 30, 33, 0.10);
  --shadow-lg: 0 14px 40px rgba(153, 31, 55, 0.18);
  --ease: 0.2s ease;
}

/* ---------- 2. RESET & NỀN TẢNG ---------- */
*, *::before, *::after { box-sizing: border-box; }

html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }

body {
  margin: 0;
  font-family: var(--font);
  font-size: var(--fs-base);
  line-height: 1.65;
  color: var(--ink);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
}

img, video, svg { max-width: 100%; height: auto; display: block; }

a {
  color: var(--primary);
  text-decoration: none;
  transition: color var(--ease);
}
a:hover { color: var(--primary-dark); }

ul, ol { margin: 0; padding: 0; list-style: none; }

h1, h2, h3, h4 {
  margin: 0 0 0.5em;
  line-height: 1.2;
  font-weight: 700;
  color: var(--ink);
}
h1 { font-size: var(--fs-3xl); font-weight: 900; letter-spacing: -0.01em; }
h2 { font-size: var(--fs-2xl); }
h3 { font-size: var(--fs-xl); }
h4 { font-size: var(--fs-lg); }
p  { margin: 0 0 1em; max-width: 70ch; }

:focus-visible {
  outline: 3px solid var(--primary-light);
  outline-offset: 2px;
}

::selection { background: var(--primary); color: var(--white); }

/* ---------- 3. TIỆN ÍCH BỐ CỤC ---------- */
.container {
  width: 100%;
  max-width: var(--container);
  margin-inline: auto;
  padding-inline: var(--gutter);
}

.section { padding-block: var(--section-y); }
.section--alt { background: var(--bg-alt); }
.section--primary { background: var(--primary); color: var(--white); }
.section--primary h2,
.section--primary h3 { color: var(--white); }

.section__head {
  max-width: 640px;
  margin: 0 auto 40px;
  text-align: center;
}
.section__head p { margin-inline: auto; color: var(--ink-soft); }

.grid { display: grid; gap: 24px; }
.grid--2 { grid-template-columns: repeat(2, 1fr); }
.grid--3 { grid-template-columns: repeat(3, 1fr); }
.grid--4 { grid-template-columns: repeat(4, 1fr); }

.flex { display: flex; gap: 16px; align-items: center; }
.text-center { text-align: center; }
.text-primary { color: var(--primary); }

/* ---------- 4. NÚT BẤM ---------- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 28px;
  font-family: inherit;
  font-size: var(--fs-base);
  font-weight: 500;
  line-height: 1.2;
  color: var(--white);
  background: var(--primary);
  border: 2px solid var(--primary);
  border-radius: var(--radius);
  cursor: pointer;
  transition: background var(--ease), border-color var(--ease),
              color var(--ease), transform var(--ease), box-shadow var(--ease);
}
.btn:hover {
  background: var(--primary-dark);
  border-color: var(--primary-dark);
  color: var(--white);
  box-shadow: var(--shadow-lg);
}
.btn:active { transform: translateY(1px); }
.btn:disabled { opacity: 0.5; cursor: not-allowed; box-shadow: none; }

.btn--outline { background: transparent; color: var(--primary); }
.btn--outline:hover { background: var(--primary); color: var(--white); }

.btn--light { background: var(--white); border-color: var(--white); color: var(--primary); }
.btn--light:hover { background: var(--primary-soft); border-color: var(--primary-soft); color: var(--primary-dark); }

.btn--lg { padding: 16px 36px; font-size: var(--fs-lg); }
.btn--sm { padding: 8px 16px; font-size: var(--fs-sm); }
.btn--block { display: flex; width: 100%; }

/* ---------- 5. HEADER & ĐIỀU HƯỚNG ---------- */
.topbar {
  background: var(--primary-dark);
  color: var(--white);
  font-size: var(--fs-xs);
  padding-block: 8px;
  text-align: center;
}
.topbar a { color: var(--white); text-decoration: underline; }

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--white);
  border-bottom: 1px solid var(--line);
}
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  min-height: 72px;
}
.nav {
    display: flex;
    gap: 25px;
}
.logo {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--primary);
  letter-spacing: -0.02em;
}

.nav { display: flex; gap: 28px; }
.nav a {
  position: relative;
  padding-block: 8px;
  font-weight: 500;
  color: var(--ink);
}
.nav a::after {
  content: '';
  position: absolute;
  left: 0; bottom: 0;
  width: 0; height: 2px;
  background: var(--primary);
  transition: width var(--ease);
}
.nav a:hover,
.nav a.active { color: var(--primary); }
.nav a:hover::after,
.nav a.active::after { width: 100%; }

.nav-toggle {
  display: none;
  background: none;
  border: 0;
  padding: 8px;
  font-size: 1.5rem;
  color: var(--primary);
  cursor: pointer;
}

/* ---------- 6. HERO ---------- */
.hero {
  background: linear-gradient(135deg, var(--primary-soft) 0%, var(--white) 60%);
  padding-block: clamp(56px, 9vw, 120px);
}
.hero__inner {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;
  align-items: center;
}
.hero h1 span { color: var(--primary); }
.hero__lead { font-size: var(--fs-lg); color: var(--ink-soft); }
.hero__actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
.hero__img { border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); }

/* ---------- 7. THẺ SẢN PHẨM ---------- */
.product {
  display: flex;
  flex-direction: column;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow var(--ease), border-color var(--ease);
}
.product:hover { box-shadow: var(--shadow); border-color: var(--primary-light); }

.product__thumb {
  position: relative;
  aspect-ratio: 1 / 1;
  background: var(--bg-alt);
  overflow: hidden;
}
.product__thumb img { width: 100%; height: 100%; object-fit: cover; }

.product__badge {
  position: absolute;
  top: 12px; left: 12px;
  padding: 4px 10px;
  font-size: var(--fs-xs);
  font-weight: 700;
  color: var(--white);
  background: var(--primary);
  border-radius: var(--radius-sm);
}

.product__body { display: flex; flex-direction: column; flex: 1; padding: 18px; }
.product__title { font-size: var(--fs-lg); margin-bottom: 6px; }
.product__meta { font-size: var(--fs-sm); color: var(--ink-soft); margin-bottom: 12px; }
.product__price { font-size: var(--fs-xl); font-weight: 700; color: var(--primary); }
.product__price del { margin-left: 8px; font-size: var(--fs-sm); font-weight: 400; color: var(--ink-soft); }
.product__footer { margin-top: auto; padding-top: 14px; }

/* ---------- 8. TRÌNH THIẾT KẾ / XEM TRƯỚC SẢN PHẨM IN ---------- */
.designer {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 32px;
  align-items: start;
}
.designer__preview {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 420px;
  padding: 24px;
  background: var(--bg-alt);
  border: 2px dashed var(--line);
  border-radius: var(--radius-lg);
}
.designer__panel {
  padding: 24px;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

/* Chọn màu khăn */
.swatches { display: flex; flex-wrap: wrap; gap: 10px; }
.swatch {
  width: 34px; height: 34px;
  border-radius: 50%;
  border: 2px solid var(--white);
  box-shadow: 0 0 0 1px var(--line);
  cursor: pointer;
  transition: transform var(--ease), box-shadow var(--ease);
}
.swatch:hover { transform: scale(1.1); }
.swatch.active { box-shadow: 0 0 0 3px var(--primary); }

/* Chọn kích thước / chất liệu */
.option-group { display: flex; flex-wrap: wrap; gap: 8px; }
.option {
  padding: 8px 16px;
  font-size: var(--fs-sm);
  color: var(--ink);
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--ease);
}
.option:hover { border-color: var(--primary); }
.option.active {
  color: var(--white);
  background: var(--primary);
  border-color: var(--primary);
}

/* ---------- 9. FORM ---------- */
.form-group { margin-bottom: 18px; }

label {
  display: block;
  margin-bottom: 6px;
  font-size: var(--fs-sm);
  font-weight: 500;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="number"],
select,
textarea {
  width: 100%;
  padding: 12px 14px;
  font-family: inherit;
  font-size: var(--fs-base);
  color: var(--ink);
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  transition: border-color var(--ease), box-shadow var(--ease);
}
textarea { min-height: 120px; resize: vertical; }

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(153, 31, 55, 0.15);
}
input.error, textarea.error { border-color: var(--danger); }
.form-error { margin-top: 4px; font-size: var(--fs-xs); color: var(--danger); }

input[type="checkbox"],
input[type="radio"] { accent-color: var(--primary); }

/* Ô tải file thiết kế lên */
.upload {
  padding: 32px 16px;
  text-align: center;
  color: var(--ink-soft);
  background: var(--primary-soft);
  border: 2px dashed var(--primary-light);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: background var(--ease);
}
.upload:hover { background: #F3DCE1; }

/* ---------- 10. BẢNG GIÁ ---------- */
.price-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--fs-sm);
}
.price-table th,
.price-table td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid var(--line);
}
.price-table thead th { color: var(--white); background: var(--primary); font-weight: 500; }
.price-table tbody tr:nth-child(even) { background: var(--bg-alt); }
.price-table tbody tr:hover { background: var(--primary-soft); }

/* ---------- 11. ƯU ĐIỂM / QUY TRÌNH ---------- */
.feature {
  padding: 28px 24px;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
}
.feature__icon {
  display: grid;
  place-items: center;
  width: 52px; height: 52px;
  margin-bottom: 16px;
  font-size: 1.5rem;
  color: var(--primary);
  background: var(--primary-soft);
  border-radius: var(--radius);
}

.steps { counter-reset: step; display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.step { position: relative; padding-top: 56px; }
.step::before {
  counter-increment: step;
  content: counter(step);
  position: absolute;
  top: 0; left: 0;
  display: grid;
  place-items: center;
  width: 40px; height: 40px;
  font-weight: 700;
  color: var(--white);
  background: var(--primary);
  border-radius: 50%;
}

/* ---------- 12. CTA & FOOTER ---------- */
.cta { text-align: center; }
.cta p { margin-inline: auto; opacity: 0.9; }

.footer {
  padding-top: 64px;
  color: #E9DADD;
  background: #2A1E21;
  font-size: var(--fs-sm);
}
.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  gap: 32px;
  padding-bottom: 40px;
}
.footer h4 { color: var(--white); margin-bottom: 14px; }
.footer a { color: #E9DADD; }
.footer a:hover { color: var(--white); text-decoration: underline; }
.footer li { margin-bottom: 8px; }
.footer__bottom {
  padding-block: 20px;
  text-align: center;
  font-size: var(--fs-xs);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

/* ---------- 13. THÀNH PHẦN PHỤ ---------- */
.badge {
  display: inline-block;
  padding: 3px 10px;
  font-size: var(--fs-xs);
  font-weight: 500;
  color: var(--primary);
  background: var(--primary-soft);
  border-radius: 999px;
}

.alert {
  padding: 14px 18px;
  border-left: 4px solid var(--primary);
  background: var(--primary-soft);
  border-radius: var(--radius-sm);
}
.alert--success { border-color: var(--success); background: #E8F4EC; }
.alert--danger  { border-color: var(--danger);  background: #FBEAEA; }

.breadcrumb { display: flex; gap: 8px; font-size: var(--fs-sm); color: var(--ink-soft); }
.breadcrumb li + li::before { content: '/'; margin-right: 8px; }

.pagination { display: flex; justify-content: center; gap: 6px; }
.pagination a {
  display: grid;
  place-items: center;
  min-width: 40px; height: 40px;
  color: var(--ink);
  border: 1px solid var(--line);
  border-radius: var(--radius);
}
.pagination a:hover,
.pagination a.active { color: var(--white); background: var(--primary); border-color: var(--primary); }

/* Nút liên hệ nổi (Zalo / hotline) */
.float-contact {
  position: fixed;
  right: 18px; bottom: 18px;
  z-index: 90;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.float-contact a {
  display: grid;
  place-items: center;
  width: 52px; height: 52px;
  color: var(--white);
  background: var(--primary);
  border-radius: 50%;
  box-shadow: var(--shadow-lg);
  transition: transform var(--ease);
}
.float-contact a:hover { transform: scale(1.08); color: var(--white); }

/* ---------- 14. RESPONSIVE ---------- */
@media (max-width: 992px) {
  .grid--4 { grid-template-columns: repeat(2, 1fr); }
  .grid--3 { grid-template-columns: repeat(2, 1fr); }
  .hero__inner,
  .designer { grid-template-columns: 1fr; }
  .steps { grid-template-columns: repeat(2, 1fr); }
  .footer__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .nav-toggle { display: block; }
  .nav {
    position: absolute;
    top: 100%; left: 0; right: 0;
    display: none;
    flex-direction: column;
    gap: 0;
    padding: 8px var(--gutter) 16px;
    background: var(--white);
    border-bottom: 1px solid var(--line);
    box-shadow: var(--shadow);
  }
  .nav.open { display: flex; }
  .nav a { padding-block: 12px; border-bottom: 1px solid var(--line); }
  .nav a::after { display: none; }
}

/* Giữ lại menu đối với kích thước 768px */
@media (min-width: 577px) and (max-width: 768px) {
  .nav-toggle {
    display: none;
  }

  .header__inner {
    gap: 16px;
  }

  .nav {
    position: static;
    display: flex;
    flex-direction: row;
    gap: 14px;
    padding: 0;
    background: transparent;
    border: none;
    box-shadow: none;
    flex-shrink: 0;
  }

  .nav a {
    padding-block: 8px;
    border-bottom: none;
    white-space: nowrap;
  }

  .nav a::after {
    display: block;
  }

  .header__icons {
    gap: 12px;
    flex-shrink: 0;
  }
}

@media (max-width: 576px) {
  :root { --gutter: 16px; }
  .grid--2, .grid--3, .grid--4,
  .steps, .footer__grid { grid-template-columns: 1fr; }
  .hero__actions .btn { width: 100%; }
  .price-table { display: block; overflow-x: auto; }
}

/* Giữ lại menu đối với kích thước 390px */
@media (max-width: 576px) {
  .header__inner {
    gap: 8px;
  }

  .logo img {
    max-width: 65px;
    height: auto;
  }

  .nav {
    position: static;
    display: flex;
    flex-direction: row;
    gap: 8px;
    padding: 0;
    background: transparent;
    border: none;
    box-shadow: none;
    flex-shrink: 1;
  }

  .nav a {
    font-size: 12px;
    padding: 6px 0;
    white-space: nowrap;
    border-bottom: none;
  }

  .nav a::after {
    display: block;
  }

  .header__icons {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
  }

  .header__icon svg {
    width: 19px;
    height: 19px;
  }
}

/* ---------- 15. TRUY CẬP & IN ẤN ---------- */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
}

@media print {
  .header, .topbar, .footer, .float-contact { display: none; }
  body { color: #000; }
}

/* PRODUCT DETAIL - PROMPT 6A */

.pd-page {
  padding: 32px 20px 64px;
  color: inherit;
}

.pd-container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.pd-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
  font-size: 14px;
}

.pd-breadcrumb a {
  color: inherit;
  text-decoration: underline;
}

.pd-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 40px;
  align-items: start;
}

.pd-media {
  margin: 0;
  min-width: 0;
}

.pd-image {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 12px;
}

.pd-media figcaption,
.pd-note {
  margin-top: 10px;
  font-size: 13px;
  color: #666;
}

.pd-info {
  min-width: 0;
}

.pd-category {
  font-size: 13px;
  letter-spacing: 2px;
}

.pd-info h1 {
  margin: 12px 0;
  font-size: clamp(24px, 3vw, 36px);
  line-height: 1.25;
}

.pd-price {
  margin: 20px 0;
  font-size: 22px;
}

.pd-price strong {
  color: var(--primary);
  font-weight: 700;
}

.pd-description {
  line-height: 1.7;
}

.pd-info h2 {
  margin: 24px 0 12px;
  font-size: 18px;
}

.pd-specs {
  display: grid;
  grid-template-columns: 130px minmax(0, 1fr);
  gap: 12px;
  margin: 0 0 28px;
}

.pd-specs dt {
  font-weight: 600;
}

.pd-specs dd {
  margin: 0;
}


.pd-buy-button {
  min-height: 48px;
  padding: 12px 28px;
  border: 2px solid var(--primary);
  border-radius: var(--radius);
  background: var(--primary);
  color: var(--white);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition: background-color var(--ease),
              border-color var(--ease),
              box-shadow var(--ease);
}


.pd-buy-button:hover {
  background: var(--primary-dark);
  border-color: var(--primary-dark);
  box-shadow: var(--shadow);
}


.pd-buy-button:focus-visible,
.pd-breadcrumb a:focus-visible {
  outline: 3px solid var(--primary-dark);
  outline-offset: 3px;
}

/* Tablet và điện thoại */
@media (max-width: 768px) {
  .pd-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .pd-page {
    padding: 20px 16px 40px;
  }

  .pd-buy-button {
    width: 100%;
  }
}

/* Điện thoại nhỏ */
@media (max-width: 390px) {
  .pd-specs {
    grid-template-columns: 1fr;
    gap: 6px;
  }
}

/* ========================================
   ĐIỀU CHỈNH GIAO DIỆN TRANG CHỦ
   ICHIGO PRINTING
   ======================================== */

/* 1. LOGO */
.logo img {
    display: block;
    width: 380px;
    height: 190px;
    object-fit: contain;
}

/* 2. HEADER ICONS */
.header__icons {
    display: flex;
    align-items: center;
    gap: 22px;
}

.header__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--ink);
    transition: color var(--ease);
}

.header__icon:hover {
    color: var(--primary);
}

/* 3. BANNER */
.hero__inner {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
    align-items: center;
    justify-content: flex-start;
    gap: 40px;
  }

.hero__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
}

.hero__eyebrow {
    margin-bottom: 12px;
    color: var(--primary);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.5px;
}

.hero__content h1 {
    margin-bottom: 18px;
}

.hero__content h1 span {
    display: block;
    color: var(--primary);
}

.hero__lead {
    font-size: var(--fs-lg);
    color: var(--ink-soft);
}

/* 4. NÚT KHÁM PHÁ SẢN PHẨM */
.hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 24px;
}

.hero__actions .btn {
    color: var(--white);
    background: var(--primary);
    border: 2px solid var(--primary);
    border-radius: var(--radius);
    padding: 16px 36px;
    font-weight: 700;
}

.hero__actions .btn:hover {
    color: var(--white);
    background: var(--primary-dark);
    border-color: var(--primary-dark);
}

/* 5. HÌNH ẢNH BANNER */
.hero__img {
    width: 100%;
    height: 380px;
    overflow: hidden;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
}

.hero__img img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

/* 6. HÌNH ẢNH SẢN PHẨM */
.product__thumb {
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background: var(--bg-alt);
}

.product__thumb img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform var(--ease);
}

.product:hover .product__thumb img {
    transform: scale(1.04);
}

/* 7. DANH MỤC SẢN PHẨM */
.category-card {
    display: flex;
    align-items: center;
    gap: 22px;
    padding: 20px;
    background: var(--white);
    border: 1px solid var(--line);
    border-radius: var(--radius-lg);
}

.category-card__image {
    flex: 0 0 42%;
    overflow: hidden;
    border-radius: var(--radius);
}

.category-card__image img {
    display: block;
    width: 100%;
    height: 170px;
    object-fit: cover;
}

.category-card__content {
    flex: 1;
}

.category-card__content h3 {
    margin-bottom: 10px;
    color: var(--primary);
}

.category-card__content p {
    margin-bottom: 15px;
    color: var(--ink-soft);
}

/* 8. GIỚI THIỆU DỊCH VỤ */
.intro-service {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    padding: 28px;
    border: 1px solid var(--line);
    border-radius: var(--radius-lg);
}

.intro-service__content {
    flex: 1;
}

.intro-service__content h3 {
    margin-bottom: 15px;
}

.intro-service__content p {
    margin-bottom: 12px;
    color: var(--ink-soft);
}

.intro-service__content .btn {
    margin-top: 10px;
}

.intro-service__image {
    flex: 0 0 38%;
    overflow: hidden;
    border-radius: var(--radius);
}

.intro-service__image img {
    display: block;
    width: 100%;
    height: 190px;
    object-fit: cover;
}

/* 9. HIỆU ỨNG MENU VÀ LIÊN KẾT */
.nav a,
.footer a {
    transition: color var(--ease);
}

.nav a:hover {
    color: var(--primary);
}

/* 10. RESPONSIVE TABLET */
@media (max-width: 992px) and (min-width: 769px) {
    .hero__inner {
        grid-template-columns: 1fr 0.9fr;
        gap: 24px;
    }

    .hero__img {
        height: 300px;
    }

    .logo img {
        width: 160px;
    }
}

/* 11. RESPONSIVE MOBILE */
@media (max-width: 768px) {
    .logo img {
        width: 145px;
        height: 65px;
    }

    .header__icons {
        gap: 14px;
    }

    .hero__inner {
        grid-template-columns: 1fr;
    }

    .hero__img {
        height: 280px;
    }

    .category-card,
    .intro-service {
        flex-direction: column;
        align-items: stretch;
    }

    .category-card__image,
    .intro-service__image {
        flex: 1;
        width: 100%;
    }

    .category-card__image img,
    .intro-service__image img {
        height: 220px;
    }
}

/* 12. RESPONSIVE ĐIỆN THOẠI NHỎ */
@media (max-width: 576px) {
    .hero__img {
        height: 220px;
    }

    .hero__actions .btn {
        width: 100%;
    }

    .product__thumb {
        aspect-ratio: 1 / 1;
    }

    .category-card,
    .intro-service {
        padding: 18px;
    }
}

/* TƯƠNG TÁC - PROMPT 8 */

.btn:focus-visible {
  outline: 3px solid var(--primary-dark);
  outline-offset: 3px;
}

.btn:active {
  transform: none;
}

.nav a:focus-visible {
  color: var(--primary);
  outline-offset: 4px;
  border-radius: var(--radius-sm);
}

.nav a:focus-visible::after {
  width: 100%;
}

.logo:focus-visible {
  outline-offset: 4px;
  border-radius: var(--radius-sm);
}

.header__icon {
  border-radius: 50%;
  transition: color var(--ease), box-shadow var(--ease);
}

.header__icon:focus-visible {
  color: var(--primary);
  outline-offset: 6px;
}

@media (hover: hover) {
  .header__icon:hover {
    box-shadow: 0 0 0 6px var(--primary-soft);
  }
}

.product:focus-within {
  border-color: var(--primary-light);
  box-shadow: var(--shadow);
}

.product__thumb:focus-visible {
  outline: 3px solid var(--primary-dark);
  outline-offset: -3px;
}

.product__thumb:focus-visible::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  border: 3px solid var(--primary-dark);
  box-shadow: inset 0 0 0 3px var(--white);
  pointer-events: none;
}

.footer a:focus-visible {
  color: var(--white);
  outline: 3px solid var(--white);
  outline-offset: 3px;
  border-radius: 2px;
  text-decoration: underline;
}
```

</details>

### Phản hồi Claude – nội dung đầy đủ

<details>
<summary>Mở toàn bộ phản hồi Claude, gồm phân tích, mã nguồn và kiểm thử đề xuất</summary>

Bổ sung tìm kiếm, lọc danh mục và sắp xếp giá vào `product.html` bằng cách sửa đúng 2 file, giữ nguyên `renderProducts(list)`, dữ liệu và CSS hiện có.

## 1. Phân tích mã hiện tại

### Thành phần HTML đã có

| Thành phần | Hiện trạng | Hành động |
|---|---|---|
| `#product-list` (`.grid.grid--4`) | Vùng render danh sách, do `renderProducts` điền | Giữ nguyên |
| `.section__head` trong "Danh sách sản phẩm" | Tiêu đề và mô tả | Giữ nguyên |
| `.alert` (ghi chú giá demo) | Nằm dưới danh sách | Giữ nguyên |
| Thanh điều khiển tìm kiếm, lọc, sắp xếp | Chưa có | **Thêm mới** giữa `.section__head` và `#product-list` |
| Vùng báo trạng thái (số kết quả) | Chưa có | **Thêm mới**, dùng `role="status"` |
| Thông báo "không có kết quả" | Đã có sẵn trong `renderProducts` (`<p class="alert">`) | Tận dụng, không viết lại |

### Giả định cần bạn xác nhận

- Khối mã bạn dán chứa 2 phần: mảng `products` (thuộc `js/data/products.js`) và hàm `renderProducts` kèm lệnh `renderProducts(products);` (tôi suy luận thuộc `js/module/search-filter.js`, vì `product.html` chỉ nạp 2 script này và tên file khớp với chức năng). Nếu `renderProducts` thực tế nằm ở file khác, bạn cần báo lại.
- Tôi không có file `product-detail.html` để kiểm tra, nên giữ nguyên liên kết chi tiết như hiện tại.

### Quyết định về CSS

- `style.css` **không cần sửa**, nên tôi không trả lại file này. Các class `.form-group`, `label`, `select`, `.btn--outline`, `:focus-visible` đã có sẵn.
- Selector input trong CSS chỉ phủ `type="text"`, `email`, `tel`, `number`, chưa phủ `type="search"`. Vì vậy ô tìm kiếm dùng `type="text"` để nhận đúng style hiện có.
- Bố cục thanh điều khiển dùng `flex-wrap` và `flex-basis` inline (cùng cách dự án đã dùng cho `.alert`). Trên điện thoại, các ô tự xuống dòng mà không cần media query mới.
- Đánh đổi: inline style kém gọn hơn một class riêng. Nếu muốn chuyển thành class, tôi có thể tách ở bước sau.

## 2. Thiết kế JavaScript

### Các hàm và vai trò

| Hàm | Đầu vào | Đầu ra | Ghi chú |
|---|---|---|---|
| `getCategories(list)` | Mảng sản phẩm | Mảng danh mục không trùng | Lấy theo thứ tự xuất hiện trong dữ liệu |
| `searchByName(list, keyword)` | Mảng, từ khóa | Mảng mới | `trim()` + `toLowerCase()`, so khớp bằng `includes` |
| `filterByCategory(list, category)` | Mảng, danh mục | Mảng mới | `"all"` trả về toàn bộ |
| `sortByPrice(list, order)` | Mảng, `"asc"`/`"desc"`/`"default"` | Mảng mới | Sao chép bằng `slice()` rồi mới `sort` |
| `getVisibleProducts(source, criteria)` | Dữ liệu gốc, điều kiện | Mảng kết quả | Ghép 3 bước theo thứ tự cố định |
| `applyFilters()` | Không | Không | Đọc điều khiển, tính kết quả, gọi `renderProducts` |
| `resetFilters()` | Không | Không | Đưa điều khiển về mặc định |

### Cách ba chức năng phối hợp

- Cả ba điều khiển đều kích hoạt **cùng một hàm** `applyFilters()`. Mỗi lần chạy, hàm đọc lại toàn bộ trạng thái hiện tại của 3 điều khiển, nên thao tác nào cũng tự kết hợp với hai thao tác còn lại.
- Luồng xử lý: `products` (gốc) → `searchByName` → `filterByCategory` → `sortByPrice` → `renderProducts(kết quả)`.
- Mỗi bước trả về **mảng mới**. `products` không bị gán lại, không bị `sort` trực tiếp.
- Sắp xếp chạy sau cùng, trên mảng kết quả đã lọc. Ở chế độ "Mặc định", thứ tự gốc của dữ liệu được giữ.
- Khi hai sản phẩm bằng giá, thứ tự tương đối của chúng được giữ nguyên, vì `Array.prototype.sort` ổn định trong chuẩn ECMAScript hiện hành (tôi không chắc về các trình duyệt rất cũ).

### Phạm vi chưa làm (có chủ đích)

- Không bỏ dấu tiếng Việt khi tìm kiếm, vì tên sản phẩm hiện đều là tiếng Anh và yêu cầu chỉ nêu phân biệt hoa/thường.
- Không đồng bộ bộ lọc lên URL.

## 3. File cần thay đổi

| File | Thay đổi |
|---|---|
| `product.html` | Thêm form điều khiển và vùng trạng thái; giữ nguyên phần còn lại và cách nạp script `defer` |
| `js/module/search-filter.js` | Giữ nguyên `renderProducts`; thay dòng `renderProducts(products);` cuối file bằng logic mới |
| `js/data/products.js` | Không đổi |
| `css/style.css` | Không đổi |

### `product.html` (nội dung hoàn chỉnh)

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Khám phá các sản phẩm K-pop goods cá nhân hóa tại Ichigo Printing.">
    <title>Ichigo Printing | Sản phẩm</title>

    <link rel="stylesheet" href="../css/style.css">
    <script src="../js/data/products.js" defer></script>
    <script src="../js/module/search-filter.js" defer></script>
</head>

<body>

    <!-- HEADER -->
    <header class="header">
        <div class="container header__inner">
            <a href="index.html" class="logo" aria-label="Ichigo Printing - Trang chủ">
                <img src="../images/logo.png" alt="ICHIGO PRINTING">
            </a>

            <nav class="nav" aria-label="Menu điều hướng chính">
                <a href="index.html">Trang chủ</a>
                <a href="product.html" class="active" aria-current="page">Sản phẩm</a>
                <a href="about.html">Giới thiệu</a>
            </nav>

            <div class="header__icons">
                <a href="product.html" class="header__icon" aria-label="Tìm kiếm sản phẩm">
                    <svg viewBox="0 0 24 24" width="22" height="22"
                         fill="none" stroke="currentColor" stroke-width="2"
                         stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="7"></circle>
                        <line x1="16" y1="16" x2="21" y2="21"></line>
                    </svg>
                </a>

                <a href="product.html" class="header__icon" aria-label="Xem sản phẩm">
                    <svg viewBox="0 0 24 24" width="22" height="22"
                         fill="none" stroke="currentColor" stroke-width="2"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6"></path>
                        <circle cx="10" cy="21" r="1"></circle>
                        <circle cx="19" cy="21" r="1"></circle>
                    </svg>
                </a>
            </div>
        </div>
    </header>

    <main>

        <!-- PAGE INTRODUCTION -->
        <section class="section section--alt">
            <div class="container">
                <div class="section__head">
                    <p class="text-primary"><strong>ICHIGO PRINTING</strong></p>
                    <h1>Our Products</h1>
                    <p>
                        Khám phá bộ sưu tập K-pop goods được thiết kế
                        và cá nhân hóa theo phong cách riêng của bạn.
                    </p>
                </div>
            </div>
        </section>

        <!-- PRODUCT LIST -->
        <section class="section">
            <div class="container">

                <div class="section__head">
                    <h2>Danh sách sản phẩm</h2>
                    <p>
                        Các mẫu sản phẩm in ấn dành cho cộng đồng người hâm mộ K-pop.
                    </p>
                </div>

                <!-- SEARCH / FILTER / SORT -->
                <form id="filter-form" role="search"
                      aria-label="Tìm kiếm, lọc và sắp xếp sản phẩm"
                      style="display: flex; flex-wrap: wrap; gap: 16px; align-items: flex-end; margin-bottom: 16px;">

                    <div class="form-group" style="flex: 2 1 240px; margin-bottom: 0;">
                        <label for="search-input">Tìm theo tên sản phẩm</label>
                        <input type="text" id="search-input" name="keyword"
                               placeholder="Ví dụ: acrylic" autocomplete="off">
                    </div>

                    <div class="form-group" style="flex: 1 1 180px; margin-bottom: 0;">
                        <label for="category-select">Danh mục</label>
                        <select id="category-select" name="category">
                            <option value="all">Tất cả danh mục</option>
                        </select>
                    </div>

                    <div class="form-group" style="flex: 1 1 180px; margin-bottom: 0;">
                        <label for="sort-select">Sắp xếp theo giá</label>
                        <select id="sort-select" name="sort">
                            <option value="default">Mặc định</option>
                            <option value="asc">Giá tăng dần</option>
                            <option value="desc">Giá giảm dần</option>
                        </select>
                    </div>

                    <button type="button" id="reset-filters" class="btn btn--outline"
                            style="flex: 0 0 auto;">
                        Đặt lại
                    </button>
                </form>

                <p id="filter-status" role="status" aria-live="polite"
                   style="margin-bottom: 16px; color: var(--ink-soft);"></p>

                <div class="grid grid--4" id="product-list"></div>

                <!-- PRICE NOTE -->
                <div class="alert" style="margin-top: 32px;">
                    <strong>Lưu ý:</strong>
                    Giá hiển thị là giá demo phục vụ mục đích minh họa giao diện.
                    Giá thực tế có thể thay đổi tùy theo kích thước, chất liệu,
                    số lượng và yêu cầu thiết kế.
                </div>

            </div>
        </section>

    </main>

    <!-- FOOTER -->
    <footer class="footer">
        <div class="container">
            <div class="footer__grid">

                <div>
                    <h3>ICHIGO PRINTING</h3>
                    <p>In dấu những khoảnh khắc đặc biệt.</p>
                </div>

                <div>
                    <h4>Liên kết</h4>
                    <p><a href="index.html">Trang chủ</a></p>
                    <p><a href="product.html">Sản phẩm</a></p>
                    <p><a href="about.html">Giới thiệu</a></p>
                </div>

                <div>
                    <h4>Theo dõi chúng tôi</h4>
                    <p>Instagram | X | TikTok | YouTube</p>
                </div>

            </div>

            <div class="footer__bottom">
                <p>© 2026 Ichigo Printing. All rights reserved.</p>
            </div>
        </div>
    </footer>

</body>
</html>
```

### `js/module/search-filter.js` (nội dung hoàn chỉnh)

```javascript
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
        reset: document.getElementById("reset-filters"),
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
    statusElement.textContent = visibleCount === 0
        ? "Không có sản phẩm phù hợp."
        : "Hiển thị " + visibleCount + " / " + totalCount + " sản phẩm.";
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

function resetFilters() {
    const elements = getFilterElements();
    elements.keyword.value = "";
    elements.category.value = ALL_CATEGORIES;
    elements.sort.value = "default";
    applyFilters();
    elements.keyword.focus();
}

function initSearchFilter() {
    const elements = getFilterElements();

    // Nếu thiếu thành phần giao diện, vẫn hiển thị danh sách như trước.
    if (!elements.keyword || !elements.category || !elements.sort ||
        !elements.reset || !elements.form || !elements.status) {
        renderProducts(products);
        return;
    }

    populateCategoryOptions(elements.category, products);

    elements.keyword.addEventListener("input", applyFilters);
    elements.category.addEventListener("change", applyFilters);
    elements.sort.addEventListener("change", applyFilters);
    elements.reset.addEventListener("click", resetFilters);

    // Nhấn Enter trong ô tìm kiếm không được tải lại trang.
    elements.form.addEventListener("submit", function (event) {
        event.preventDefault();
        applyFilters();
    });

    applyFilters();
}

initSearchFilter();
```

## 4. Kiểm thử đề xuất

**Trạng thái kiểm thử:** tôi **chưa chạy** mã này trong trình duyệt hay Node. Mọi cột "Kết quả mong đợi" dưới đây là tính tay từ dữ liệu `products` bạn cung cấp, không phải kết quả đã chạy. Bạn cần tự chạy và đối chiếu.

### Từ khóa, danh mục và sắp xếp riêng lẻ

| # | Thao tác | Kết quả mong đợi (id) |
|---|---|---|
| 1 | Tìm `acrylic` | 7, 8 |
| 2 | Tìm `ACRYLIC` (hoa/thường) | 7, 8 (giống #1) |
| 3 | Tìm `  custom  ` (có khoảng trắng) | 2, 4 |
| 4 | Tìm `photo` | 5, 6 |
| 5 | Danh mục = `Ảnh in` | 5, 6 |
| 6 | Danh mục = `Tất cả danh mục`, từ khóa rỗng | 1 → 8 theo thứ tự gốc |
| 7 | Giá tăng dần (không lọc) | 4, 6, 5, 8, 3, 1, 7, 2 |
| 8 | Giá giảm dần (không lọc) | 2, 7, 1, 3, 8, 5, 6, 4 |

### Kết hợp điều kiện

| # | Thao tác | Kết quả mong đợi (id) |
|---|---|---|
| 9 | Danh mục `Ảnh in` + giá tăng dần | 6 (50.000), 5 (60.000) |
| 10 | Từ khóa `acrylic` + danh mục `Phụ kiện mica` + giá giảm dần | 7 (130.000), 8 (75.000) |
| 11 | Từ khóa `custom` + giá tăng dần | 4 (45.000), 2 (150.000) |
| 12 | Đổi danh mục sau khi đã nhập từ khóa | Danh sách cập nhật ngay, từ khóa vẫn giữ |

### Không có kết quả

| # | Thao tác | Kết quả mong đợi |
|---|---|---|
| 13 | Từ khóa `xyz` | Hiện "Không có sản phẩm phù hợp." trong lưới và ở vùng trạng thái |
| 14 | Từ khóa `acrylic` + danh mục `Slogan` | Như #13 |
| 15 | Bấm "Đặt lại" sau #13 | Hiện đủ 8 sản phẩm, con trỏ về ô tìm kiếm |

### Dữ liệu gốc không bị thay đổi

Chạy trong Console của trình duyệt:

```javascript
const before = JSON.stringify(products);
getVisibleProducts(products, { keyword: "", category: "all", sort: "desc" });
getVisibleProducts(products, { keyword: "acrylic", category: "Phụ kiện mica", sort: "asc" });
console.log(JSON.stringify(products) === before);   // mong đợi: true
console.log(products.map(p => p.id).join(","));      // mong đợi: 1,2,3,4,5,6,7,8
```

Sau khi thao tác sắp xếp trên giao diện, chạy lại hai dòng `console.log` này, kết quả mong đợi vẫn là `true` và `1,2,3,4,5,6,7,8`.

### Bàn phím và điện thoại

| # | Kiểm tra | Mong đợi |
|---|---|---|
| 16 | Nhấn `Tab` từ header | Lần lượt qua: ô tìm kiếm → danh mục → sắp xếp → "Đặt lại" → thẻ sản phẩm, có viền focus |
| 17 | Nhấn `Enter` trong ô tìm kiếm | Trang không tải lại |
| 18 | Dùng phím mũi tên trên 2 ô `select` | Đổi lựa chọn và danh sách cập nhật |
| 19 | Thu hẹp cửa sổ còn khoảng 390px | Các điều khiển xếp dọc theo dòng, không tràn ngang (cần xác minh bằng mắt) |
| 20 | Dùng trình đọc màn hình (nếu có) | Số kết quả được đọc sau mỗi thao tác (chưa chắc chắn, phụ thuộc phần mềm) |

## 5. Rủi ro cần lưu ý

| Rủi ro | Mức độ | Cách xử lý |
|---|---|---|
| `renderProducts` thực tế không nằm ở `search-filter.js` | Trung bình | Báo lại để tôi điều chỉnh vị trí đặt logic |
| Ô tìm kiếm dùng `type="text"` thay vì `type="search"` | Thấp | Đổi nếu bạn thêm CSS cho `input[type="search"]` |
| Icon kính lúp trên header vẫn trỏ về `product.html` | Thấp | Ngoài phạm vi bước này, chưa liên kết với ô tìm kiếm |

</details>

### Kiểm tra và điều chỉnh sau phản hồi

| Nội dung | Quyết định áp dụng và căn cứ |
|---|---|
| Tìm kiếm, lọc và sắp xếp | Giữ cách tách hàm của Claude; các điều kiện được đọc lại rồi phối hợp trước khi gọi `renderProducts` |
| Bảo toàn dữ liệu | Sắp xếp trên bản sao. Các ca Node.js và đối chiếu dữ liệu trước/sau không ghi nhận thay đổi nguồn |
| Vị trí hàm render | Đã đối chiếu: `renderProducts(list)` nằm trong `js/module/search-filter.js` |
| Nút Đặt lại | Loại khỏi bản tích hợp vì không thuộc yêu cầu bắt buộc của Prompt 3 |
| Trạng thái danh sách rỗng | Dòng trạng thái ghi số kết quả 0 / 8; thông báo không có sản phẩm nằm ở vùng danh sách, tránh lặp cùng một câu |
| Cách nạp script | Giữ script thường với `defer`, dùng chung `products.js` |
| Cập nhật của nhóm | `main` có thêm phần giỏ hàng tại `d7e62c2`, gồm thay đổi ở `product.html`; bản ghép giữ CSS, script, liên kết `cart.html` và badge của phần này |
| Điểm nối sau render | Bổ sung ID trên thẻ và sự kiện `products:rendered`; điều chỉnh `cart-list.js` để gắn nút sau mỗi lần tìm/lọc/sắp xếp, tránh trùng listener click |

### Kiểm thử thực tế và giới hạn

| Nhóm kiểm tra | Kết quả đã có | Giới hạn |
|---|---|---|
| Hàm dữ liệu | 16 ca đạt trong Node.js, gồm tìm kiếm, danh mục, hai chiều giá, điều kiện kết hợp, dữ liệu rỗng và bảo toàn nguồn | Không phải kiểm thử bố cục trình duyệt |
| Ảnh thao tác tại máy | Xác nhận tìm kiếm, lọc/sắp xếp tăng giảm, không có kết quả, bố cục 390 × 544 px và hiển thị viền focus | P3-UI-01 đến P3-UI-06 ghi trước ghép; P3-UI-07 ghi sau ghép và xác nhận nút giỏ còn sau lọc |
| Phần ghép giỏ hàng | Tái hiện lỗi mất nút khi render lại, sau đó 12 ca tích hợp đạt trong Node.js + LinkeDOM; P3-UI-07 bổ sung ảnh bản ghép tại máy | Ảnh xác nhận danh mục + giá tăng và số lượng/badge nhất quán; mức tăng từng click và bố cục mobile của bản ghép chưa có xác nhận riêng |
| Bàn phím | Viền focus có trong ảnh; submit được `preventDefault` trong ca DOM mô phỏng | Chưa có xác nhận riêng cho toàn bộ chuỗi Tab và Enter trên trình duyệt thật |

Chi tiết từng ca và ảnh được đặt trong [bảng kiểm thử Buổi 3](KIEM_THU_BUOI3_TRUONG.md). Không ghi kết quả Node.js hoặc ảnh của bản trước thành kết quả đã kiểm thử toàn bộ bản ghép trên trình duyệt.

### Minh chứng được chọn

| Mã | Nội dung | Ảnh |
|---|---|---|
| P3-UI-01 | Tìm kiếm theo tên | [p3_01_tim_kiem_acrylic_desktop.png](minh-chung-truong/buoi3/p3_01_tim_kiem_acrylic_desktop.png) |
| P3-UI-02 | Danh mục và giá tăng dần | [p3_02_anh_in_gia_tang.png](minh-chung-truong/buoi3/p3_02_anh_in_gia_tang.png) |
| P3-UI-03 | Kết hợp ba điều kiện, giá tăng dần | [p3_03_ket_hop_gia_tang.png](minh-chung-truong/buoi3/p3_03_ket_hop_gia_tang.png) |
| P3-UI-04 | Kết hợp ba điều kiện, giá giảm dần | [p3_04_ket_hop_gia_giam.png](minh-chung-truong/buoi3/p3_04_ket_hop_gia_giam.png) |
| P3-UI-05 | Không có kết quả | [p3_05_khong_co_ket_qua.png](minh-chung-truong/buoi3/p3_05_khong_co_ket_qua.png) |
| P3-UI-06 | Bố cục màn hình hẹp và viền focus | [p3_06_mobile_390x544_focus.png](minh-chung-truong/buoi3/p3_06_mobile_390x544_focus.png) |
| P3-UI-07 | Bộ lọc và nút giỏ hàng trên bản ghép | [p3_07_loc_tang_dan_nut_gio_hang.png](minh-chung-truong/buoi3/p3_07_loc_tang_dan_nut_gio_hang.png) |

### Trạng thái bàn giao

Kết quả Terminal ngày 09/11/2026 xác nhận đã lưu tạm phần Prompt 3 bằng stash, cập nhật main fast-forward từ 384b263 đến d7e62c2 và áp dụng bộ file tích hợp. Các thay đổi vẫn ở working tree, chưa có kết quả xác nhận commit hoặc push bản ghép.


### Cập nhật kiểm tra tại máy ngày 09/11/2026

Ảnh P3-UI-07 ghi nhận từ khóa rỗng, danh mục Phụ kiện mica và giá tăng dần. Danh sách có Acrylic Keychain 75.000đ trước Acrylic Standee 130.000đ; cả hai vẫn có nút giỏ hàng. Nút Keychain hiển thị “CÓ 2 TRONG GIỎ HÀNG”, khớp badge 2 trên header.

Ảnh xác nhận nút được giữ sau lọc và trạng thái số lượng đang nhất quán. Một ảnh tĩnh không xác nhận riêng mức tăng sau từng lần click, toàn bộ chuỗi Tab hoặc hành vi Enter trên trình duyệt. Các giới hạn này tiếp tục được ghi trong bảng kiểm thử.

![P3-UI-07: Bộ lọc và nút giỏ hàng trên bản ghép](minh-chung-truong/buoi3/p3_07_loc_tang_dan_nut_gio_hang.png)

Các khoảng trắng cuối dòng trong phần nhật ký mới được chuẩn hóa để kiểm tra Git không báo trailing whitespace. Nội dung phản hồi Claude được giữ nguyên.


<!-- ICHIGO-MO-RONG-BUOI3-20261109 -->

## Bổ sung ngày 09/11/2026 – Đồng bộ header và mở rộng bộ lọc

### Phạm vi và công cụ

| Hạng mục | Công cụ hỗ trợ | Kết quả |
|---|---|---|
| Đồng bộ header theo About | ChatGPT/Codex | Dùng CSS chung cho năm trang; commit e5b012b |
| Lọc khoảng giá và đặt lại bộ lọc | Claude đề xuất; ChatGPT/Codex rà soát, kiểm tra và hỗ trợ điều chỉnh | Commit 91cad95 |

Header được thực hiện trong một chặng riêng. Phản hồi Claude dưới đây thuộc phần mở rộng bộ lọc, không được dùng làm bằng chứng Claude tạo phần header.

### Nguồn lưu prompt, mã đầu vào và phản hồi

Prompt được lưu theo nội dung đã chuẩn bị trong cuộc trao đổi. Năm file đầu vào được tái lập từ commit e5b012b theo đúng danh sách file trong lệnh gom prompt. Đây là ảnh chụp mã từ Git, không phải bản lưu độc lập của clipboard đã gửi Claude. Khoảng trắng cuối dòng của phần bổ sung được chuẩn hóa khi ghi Markdown.

Phản hồi Claude được giữ đầy đủ từ Pasted text(4).txt do người dùng cung cấp. Claude ghi rõ chưa chạy mã. Các kết quả Node.js và ảnh tại máy được ghi riêng ở phần kiểm tra sau phản hồi.

### Prompt đã chuẩn bị

<details>
<summary>Mở prompt và đủ năm file mã đầu vào</summary>

Tôi đang phát triển website Ichigo Printing bằng HTML, CSS và JavaScript thuần.

Phần việc được giao:
Trang danh sách sản phẩm có tìm kiếm, lọc và sắp xếp hoạt động đồng bộ với giao diện.

Hiện trạng:
- Đã tìm theo tên, lọc danh mục và sắp xếp giá.
- Các điều kiện đang hoạt động kết hợp.
- Danh sách được tạo bằng renderProducts(list).
- Giỏ hàng được tích hợp qua cart.js và cart-list.js.
- Header vừa được đồng bộ theo trang About và đã commit riêng.
- Dữ liệu hiện có gồm 8 sản phẩm trong products.js.

Yêu cầu lần này:
Bổ sung lọc khoảng giá và nút "Đặt lại bộ lọc", dựa trên mã nguồn đầy đủ ở cuối prompt.

1. Lọc khoảng giá
- Thêm hai ô "Giá từ (đ)" và "Giá đến (đ)".
- Dùng id min-price và max-price.
- Giá nhập là số nguyên không âm, đơn vị đồng.
- Bỏ trống một đầu nghĩa là không giới hạn đầu đó.
- Hai đầu cùng trống nghĩa là không giới hạn giá.
- Kết quả bao gồm cả hai mức giá biên.
- Khoảng giá phối hợp đồng thời với từ khóa, danh mục và sắp xếp.
- Cập nhật kết quả khi nhập hoặc thay đổi điều kiện.
- Không sửa dữ liệu hoặc thứ tự mảng products gốc.

2. Kiểm tra dữ liệu
- Phát hiện giá âm, số không hợp lệ và số thập phân.
- Với input type="number", kiểm tra cả validity.badInput:
  không được coi giá trị nhập sai là ô trống không giới hạn.
- Khi nhập đủ hai đầu, giá từ không được lớn hơn giá đến.
- Hiển thị lỗi tiếng Việt gần nhóm khoảng giá, dùng id price-error.
- Gắn aria-invalid cho ô có lỗi và liên kết thông báo bằng aria-describedby.
- Khi khoảng giá sai, xóa các thẻ kết quả và thông báo:
  "Vui lòng nhập khoảng giá hợp lệ để xem sản phẩm."
- Không dùng thông báo "Không có sản phẩm phù hợp" cho lỗi nhập liệu.
- Khi sửa lại hợp lệ, xóa lỗi và cập nhật kết quả bình thường.
- Nếu dùng kiểm tra tùy chỉnh, xử lý nhất quán với validation của form.

3. Đặt lại bộ lọc
- Thêm nút "Đặt lại bộ lọc", id reset-filters, type="button".
- Xóa từ khóa và hai ô giá.
- Đưa danh mục về "Tất cả danh mục".
- Đưa sắp xếp về "Mặc định".
- Xóa lỗi và trạng thái aria-invalid.
- Hiển thị lại đủ sản phẩm theo thứ tự gốc.
- Cập nhật đúng dòng đếm kết quả.
- Giữ nguyên dữ liệu giỏ hàng và số lượng đã thêm.

4. Giữ tích hợp hiện tại
- Giữ tên hàm renderProducts(list).
- Giữ data-product-id trên mỗi thẻ sản phẩm.
- Giữ sự kiện document "products:rendered" sau mỗi lần dựng lại danh sách,
  kể cả khi kết quả rỗng hoặc bị xóa do lỗi nhập liệu.
- Giữ class thẻ, cấu trúc footer thẻ và link chi tiết đúng product.id.
- Để cart-list.js tiếp tục gắn nút giỏ hàng sau mỗi lần lọc.
- Không tạo trùng nút, sự kiện click hoặc option danh mục.
- Nhấn Enter trong form không tải lại trang.
- Giữ nguyên thứ tự nạp các script hiện có.
- Không thay đổi header, footer, dữ liệu sản phẩm hoặc các module giỏ hàng.

5. Giao diện
- Giữ font Roboto, màu và phong cách hiện có.
- Giữ phần tìm kiếm, danh mục và sắp xếp ở hàng đầu trên desktop.
- Đặt khoảng giá và nút đặt lại thành hàng tiếp theo.
- Trên mobile 390px, các điều khiển xếp dọc và không tràn ngang.
- Có label đúng for/id, focus bàn phím rõ và thứ tự Tab tự nhiên.
- Tạo file css/product-filter.css cho phần bổ sung.
- CSS mới chỉ tác động khu vực bộ lọc và thông báo liên quan.
- Link CSS mới trong product.html trước css/header.css.
- Loại bỏ inline style của form/nhóm điều khiển nếu cần để CSS mới hoạt động.
- Không chỉnh css/style.css hoặc css/header.css.

6. Kiểm thử cần đối chiếu
Các kết quả dưới đây là kết quả MONG ĐỢI, không phải xác nhận đã chạy:

| Điều kiện | Kết quả mong đợi |
|---|---|
| Không chọn điều kiện | ID 1,2,3,4,5,6,7,8 theo thứ tự gốc |
| Giá 50000–100000, tăng dần | ID 6,5,8,3 |
| Giá 50000–100000, giảm dần | ID 3,8,5,6 |
| Chỉ giá từ 100000, mặc định | ID 1,2,7 |
| Chỉ giá đến 60000, mặc định | ID 4,5,6 |
| Hai đầu cùng 75000 | Chỉ ID 8 |
| acrylic + Phụ kiện mica + 50000–100000 | Chỉ Acrylic Keychain, ID 8 |
| Giá từ 200000 | 0/8, thông báo không có sản phẩm phù hợp |
| Giá từ 150000, giá đến 50000 | Báo lỗi khoảng giá, chưa hiển thị kết quả |
| Giá âm, thập phân hoặc badInput | Báo lỗi nhập liệu |
| Đặt lại sau khi lọc hoặc nhập sai | Đủ 8 sản phẩm, điều khiển và lỗi trở về ban đầu |
| Thêm vào giỏ sau lọc rồi đặt lại | Số lượng giỏ giữ nguyên, mỗi click chỉ tăng 1 |

Đầu ra:
A. Giải thích ngắn cách ghép vào mã hiện tại.
B. Toàn bộ ecommerce-project/product.html để thay file.
C. Toàn bộ js/module/search-filter.js để thay file.
D. Toàn bộ css/product-filter.css để tạo mới.
E. Bảng kiểm thử gồm thao tác, kết quả mong đợi và trạng thái thực tế.

Trả đầy đủ từng file, không dùng dấu ba chấm hoặc yêu cầu tự ghép đoạn.
Các file chỉ tham khảo phải được giữ nguyên.
Nếu chưa thực sự chạy kiểm thử, ghi "Chưa chạy".
Không tự tạo ảnh minh chứng, phản hồi AI khác hoặc nhật ký kiểm thử giả.

MÃ NGUỒN HIỆN TẠI:

### ecommerce-project/product.html
```html

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Khám phá các sản phẩm K-pop goods cá nhân hóa tại Ichigo Printing.">
    <title>Ichigo Printing | Sản phẩm</title>

    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/cart.css">

    <script src="../js/data/products.js" defer></script>
    <script src="../js/module/search-filter.js" defer></script>
    <script src="../js/module/cart.js" defer></script>
    <script src="../js/module/cart-list.js" defer></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/header.css">
</head>

<body>

    <!-- HEADER -->
<header class="header site-header">
  <div class="container header__inner">
    <a class="logo" href="index.html" aria-label="Ichigo Printing - Trang chủ">
      <img src="../images/logo.png" alt="Ichigo Printing" width="2000" height="2000">
    </a>
    <nav class="nav" aria-label="Điều hướng chính">
      <a href="index.html">Trang chủ</a>
      <a href="product.html" class="active" aria-current="page">Sản phẩm</a>
      <a href="about.html">Giới thiệu</a>
    </nav>
    <div class="header__icons">
      <a href="product.html" class="header__icon" aria-label="Tìm kiếm sản phẩm">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7"></circle>
          <line x1="16" y1="16" x2="21" y2="21"></line>
        </svg>
      </a>
      <a href="cart.html" class="header__icon cart-header-link" aria-label="Giỏ hàng">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6"></path>
          <circle cx="10" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
        </svg>
        <span class="cart-badge" data-cart-count hidden>0</span>
      </a>
    </div>
  </div>
</header>

    <main>

        <!-- PAGE INTRODUCTION -->
        <section class="section section--alt">
            <div class="container">
                <div class="section__head">
                    <p class="text-primary"><strong>ICHIGO PRINTING</strong></p>
                    <h1>Our Products</h1>
                    <p>
                        Khám phá bộ sưu tập K-pop goods được thiết kế
                        và cá nhân hóa theo phong cách riêng của bạn.
                    </p>
                </div>
            </div>
        </section>

        <!-- PRODUCT LIST -->
        <section class="section">
            <div class="container">

                <div class="section__head">
                    <h2>Danh sách sản phẩm</h2>
                    <p>
                        Các mẫu sản phẩm in ấn dành cho cộng đồng người hâm mộ K-pop.
                    </p>
                </div>

                <!-- SEARCH / FILTER / SORT -->
                <form id="filter-form" role="search"
                      aria-label="Tìm kiếm, lọc và sắp xếp sản phẩm"
                      style="display: flex; flex-wrap: wrap; gap: 16px; align-items: flex-end; margin-bottom: 16px;">

                    <div class="form-group" style="flex: 2 1 240px; margin-bottom: 0;">
                        <label for="search-input">Tìm theo tên sản phẩm</label>
                        <input type="text" id="search-input" name="keyword"
                               placeholder="Ví dụ: acrylic" autocomplete="off">
                    </div>

                    <div class="form-group" style="flex: 1 1 180px; margin-bottom: 0;">
                        <label for="category-select">Danh mục</label>
                        <select id="category-select" name="category">
                            <option value="all">Tất cả danh mục</option>
                        </select>
                    </div>

                    <div class="form-group" style="flex: 1 1 180px; margin-bottom: 0;">
                        <label for="sort-select">Sắp xếp theo giá</label>
                        <select id="sort-select" name="sort">
                            <option value="default">Mặc định</option>
                            <option value="asc">Giá tăng dần</option>
                            <option value="desc">Giá giảm dần</option>
                        </select>
                    </div>

                </form>

                <p id="filter-status" role="status" aria-live="polite"
                   style="margin-bottom: 16px; color: var(--ink-soft);"></p>

                <div class="grid grid--4" id="product-list"></div>

                <!-- PRICE NOTE -->
                <div class="alert" style="margin-top: 32px;">
                    <strong>Lưu ý:</strong>
                    Giá hiển thị là giá demo phục vụ mục đích minh họa giao diện.
                    Giá thực tế có thể thay đổi tùy theo kích thước, chất liệu,
                    số lượng và yêu cầu thiết kế.
                </div>

            </div>
        </section>

    </main>

    <!-- FOOTER -->
    <footer class="footer">
        <div class="container">
            <div class="footer__grid">

                <div>
                    <h3>ICHIGO PRINTING</h3>
                    <p>In dấu những khoảnh khắc đặc biệt.</p>
                </div>

                <div>
                    <h4>Liên kết</h4>
                    <p><a href="index.html">Trang chủ</a></p>
                    <p><a href="product.html">Sản phẩm</a></p>
                    <p><a href="about.html">Giới thiệu</a></p>
                </div>

                <div>
                    <h4>Theo dõi chúng tôi</h4>
                    <p>Instagram | X | TikTok | YouTube</p>
                </div>

            </div>

            <div class="footer__bottom">
                <p>© 2026 Ichigo Printing. All rights reserved.</p>
            </div>
        </div>
    </footer>

</body>
</html>
```

### js/module/search-filter.js
```javascript
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
```

### js/data/products.js
```javascript
// Dữ liệu dùng chung cho các trang sản phẩm. Giá được giữ từ bản demo hiện có.
const products = [
    {
        id: 1,
        name: "Fabric Slogan",
        price: 120000,
        category: "Slogan",
        image: "../images/product-1.jpg",
        description: "Slogan vải in theo thiết kế riêng"
    },
    {
        id: 2,
        name: "Custom Printed Slogan",
        price: 150000,
        category: "Slogan",
        image: "../images/product-2.jpg",
        description: "Slogan in theo mẫu cá nhân hóa"
    },
    {
        id: 3,
        name: "Uchiwa Fan",
        price: 85000,
        category: "Quạt",
        image: "../images/product-3.jpg",
        description: "Quạt cầm tay in hình thần tượng"
    },
    {
        id: 4,
        name: "Custom Badge",
        price: 45000,
        category: "Huy hiệu",
        image: "../images/product-4.jpg",
        description: "Huy hiệu in hình theo yêu cầu"
    },
    {
        id: 5,
        name: "Photocard Set",
        price: 60000,
        category: "Ảnh in",
        image: "../images/product-5.jpg",
        description: "Bộ ảnh photocard cá nhân hóa"
    },
    {
        id: 6,
        name: "Photo Print / Postcard",
        price: 50000,
        category: "Ảnh in",
        image: "../images/product-6.jpg",
        description: "Ảnh in và postcard lưu niệm"
    },
    {
        id: 7,
        name: "Acrylic Standee",
        price: 130000,
        category: "Phụ kiện mica",
        image: "../images/product-7.jpg",
        description: "Standee mica in hình cá nhân hóa"
    },
    {
        id: 8,
        name: "Acrylic Keychain",
        price: 75000,
        category: "Phụ kiện mica",
        image: "../images/product-8.jpg",
        description: "Móc khóa mica theo thiết kế riêng"
    }
];
```

### css/style.css
```css
/* ==========================================================
   WEBSITE ĐẶT IN SLOGAN / KHĂN (TOWEL)
   Màu chủ đạo: #991F37  |  Font: Roboto
   ----------------------------------------------------------
   Cách dùng: thêm vào <head> của trang HTML
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="style.css">
   ========================================================== */

/* ---------- 1. BIẾN MÀU & THÔNG SỐ (chỉnh tại đây) ---------- */
:root {
  /* Màu thương hiệu */
  --primary: #991F37;
  --primary-dark: #7A1829;
  --primary-light: #B8324D;
  --primary-soft: #F8E9EC;      /* nền nhạt cùng tông */

  /* Màu trung tính (hơi ấm để hợp với tông đỏ rượu) */
  --ink: #2A1E21;               /* chữ chính */
  --ink-soft: #6B5A5E;          /* chữ phụ */
  --line: #E8DEE0;              /* viền */
  --bg: #FFFFFF;
  --bg-alt: #FAF6F6;            /* nền xen kẽ các section */
  --white: #FFFFFF;

  /* Màu trạng thái */
  --success: #2E7D4F;
  --warning: #C9821A;
  --danger: #C62828;

  /* Typography */
  --font: 'Roboto', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif;
  --fs-xs: 0.8125rem;
  --fs-sm: 0.9375rem;
  --fs-base: 1rem;
  --fs-lg: 1.125rem;
  --fs-xl: 1.5rem;
  --fs-2xl: clamp(1.75rem, 3vw, 2.25rem);
  --fs-3xl: clamp(2.25rem, 5vw, 3.5rem);

  /* Bố cục */
  --container: 1200px;
  --gutter: 20px;
  --section-y: clamp(48px, 7vw, 96px);

  /* Bo góc, đổ bóng, chuyển động */
  --radius-sm: 4px;
  --radius: 8px;
  --radius-lg: 14px;
  --shadow-sm: 0 1px 3px rgba(42, 30, 33, 0.08);
  --shadow: 0 6px 20px rgba(42, 30, 33, 0.10);
  --shadow-lg: 0 14px 40px rgba(153, 31, 55, 0.18);
  --ease: 0.2s ease;
}

/* ---------- 2. RESET & NỀN TẢNG ---------- */
*, *::before, *::after { box-sizing: border-box; }

html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }

body {
  margin: 0;
  font-family: var(--font);
  font-size: var(--fs-base);
  line-height: 1.65;
  color: var(--ink);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
}

img, video, svg { max-width: 100%; height: auto; display: block; }

a {
  color: var(--primary);
  text-decoration: none;
  transition: color var(--ease);
}
a:hover { color: var(--primary-dark); }

ul, ol { margin: 0; padding: 0; list-style: none; }

h1, h2, h3, h4 {
  margin: 0 0 0.5em;
  line-height: 1.2;
  font-weight: 700;
  color: var(--ink);
}
h1 { font-size: var(--fs-3xl); font-weight: 900; letter-spacing: -0.01em; }
h2 { font-size: var(--fs-2xl); }
h3 { font-size: var(--fs-xl); }
h4 { font-size: var(--fs-lg); }
p  { margin: 0 0 1em; max-width: 70ch; }

:focus-visible {
  outline: 3px solid var(--primary-light);
  outline-offset: 2px;
}

::selection { background: var(--primary); color: var(--white); }

/* ---------- 3. TIỆN ÍCH BỐ CỤC ---------- */
.container {
  width: 100%;
  max-width: var(--container);
  margin-inline: auto;
  padding-inline: var(--gutter);
}

.section { padding-block: var(--section-y); }
.section--alt { background: var(--bg-alt); }
.section--primary { background: var(--primary); color: var(--white); }
.section--primary h2,
.section--primary h3 { color: var(--white); }

.section__head {
  max-width: 640px;
  margin: 0 auto 40px;
  text-align: center;
}
.section__head p { margin-inline: auto; color: var(--ink-soft); }

.grid { display: grid; gap: 24px; }
.grid--2 { grid-template-columns: repeat(2, 1fr); }
.grid--3 { grid-template-columns: repeat(3, 1fr); }
.grid--4 { grid-template-columns: repeat(4, 1fr); }

.flex { display: flex; gap: 16px; align-items: center; }
.text-center { text-align: center; }
.text-primary { color: var(--primary); }

/* ---------- 4. NÚT BẤM ---------- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 28px;
  font-family: inherit;
  font-size: var(--fs-base);
  font-weight: 500;
  line-height: 1.2;
  color: var(--white);
  background: var(--primary);
  border: 2px solid var(--primary);
  border-radius: var(--radius);
  cursor: pointer;
  transition: background var(--ease), border-color var(--ease),
              color var(--ease), transform var(--ease), box-shadow var(--ease);
}
.btn:hover {
  background: var(--primary-dark);
  border-color: var(--primary-dark);
  color: var(--white);
  box-shadow: var(--shadow-lg);
}
.btn:active { transform: translateY(1px); }
.btn:disabled { opacity: 0.5; cursor: not-allowed; box-shadow: none; }

.btn--outline { background: transparent; color: var(--primary); }
.btn--outline:hover { background: var(--primary); color: var(--white); }

.btn--light { background: var(--white); border-color: var(--white); color: var(--primary); }
.btn--light:hover { background: var(--primary-soft); border-color: var(--primary-soft); color: var(--primary-dark); }

.btn--lg { padding: 16px 36px; font-size: var(--fs-lg); }
.btn--sm { padding: 8px 16px; font-size: var(--fs-sm); }
.btn--block { display: flex; width: 100%; }

/* ---------- 5. HEADER & ĐIỀU HƯỚNG ---------- */
.topbar {
  background: var(--primary-dark);
  color: var(--white);
  font-size: var(--fs-xs);
  padding-block: 8px;
  text-align: center;
}
.topbar a { color: var(--white); text-decoration: underline; }

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--white);
  border-bottom: 1px solid var(--line);
}
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  min-height: 72px;
}
.nav {
    display: flex;
    gap: 25px;
}
.logo {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--primary);
  letter-spacing: -0.02em;
}

.nav { display: flex; gap: 28px; }
.nav a {
  position: relative;
  padding-block: 8px;
  font-weight: 500;
  color: var(--ink);
}
.nav a::after {
  content: '';
  position: absolute;
  left: 0; bottom: 0;
  width: 0; height: 2px;
  background: var(--primary);
  transition: width var(--ease);
}
.nav a:hover,
.nav a.active { color: var(--primary); }
.nav a:hover::after,
.nav a.active::after { width: 100%; }

.nav-toggle {
  display: none;
  background: none;
  border: 0;
  padding: 8px;
  font-size: 1.5rem;
  color: var(--primary);
  cursor: pointer;
}

/* ---------- 6. HERO ---------- */
.hero {
  background: linear-gradient(135deg, var(--primary-soft) 0%, var(--white) 60%);
  padding-block: clamp(56px, 9vw, 120px);
}
.hero__inner {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;
  align-items: center;
}
.hero h1 span { color: var(--primary); }
.hero__lead { font-size: var(--fs-lg); color: var(--ink-soft); }
.hero__actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
.hero__img { border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); }

/* ---------- 7. THẺ SẢN PHẨM ---------- */
.product {
  display: flex;
  flex-direction: column;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow var(--ease), border-color var(--ease);
}
.product:hover { box-shadow: var(--shadow); border-color: var(--primary-light); }

.product__thumb {
  position: relative;
  aspect-ratio: 1 / 1;
  background: var(--bg-alt);
  overflow: hidden;
}
.product__thumb img { width: 100%; height: 100%; object-fit: cover; }

.product__badge {
  position: absolute;
  top: 12px; left: 12px;
  padding: 4px 10px;
  font-size: var(--fs-xs);
  font-weight: 700;
  color: var(--white);
  background: var(--primary);
  border-radius: var(--radius-sm);
}

.product__body { display: flex; flex-direction: column; flex: 1; padding: 18px; }
.product__title { font-size: var(--fs-lg); margin-bottom: 6px; }
.product__meta { font-size: var(--fs-sm); color: var(--ink-soft); margin-bottom: 12px; }
.product__price { font-size: var(--fs-xl); font-weight: 700; color: var(--primary); }
.product__price del { margin-left: 8px; font-size: var(--fs-sm); font-weight: 400; color: var(--ink-soft); }
.product__footer { margin-top: auto; padding-top: 14px; }

/* ---------- 8. TRÌNH THIẾT KẾ / XEM TRƯỚC SẢN PHẨM IN ---------- */
.designer {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 32px;
  align-items: start;
}
.designer__preview {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 420px;
  padding: 24px;
  background: var(--bg-alt);
  border: 2px dashed var(--line);
  border-radius: var(--radius-lg);
}
.designer__panel {
  padding: 24px;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

/* Chọn màu khăn */
.swatches { display: flex; flex-wrap: wrap; gap: 10px; }
.swatch {
  width: 34px; height: 34px;
  border-radius: 50%;
  border: 2px solid var(--white);
  box-shadow: 0 0 0 1px var(--line);
  cursor: pointer;
  transition: transform var(--ease), box-shadow var(--ease);
}
.swatch:hover { transform: scale(1.1); }
.swatch.active { box-shadow: 0 0 0 3px var(--primary); }

/* Chọn kích thước / chất liệu */
.option-group { display: flex; flex-wrap: wrap; gap: 8px; }
.option {
  padding: 8px 16px;
  font-size: var(--fs-sm);
  color: var(--ink);
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--ease);
}
.option:hover { border-color: var(--primary); }
.option.active {
  color: var(--white);
  background: var(--primary);
  border-color: var(--primary);
}

/* ---------- 9. FORM ---------- */
.form-group { margin-bottom: 18px; }

label {
  display: block;
  margin-bottom: 6px;
  font-size: var(--fs-sm);
  font-weight: 500;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="number"],
select,
textarea {
  width: 100%;
  padding: 12px 14px;
  font-family: inherit;
  font-size: var(--fs-base);
  color: var(--ink);
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  transition: border-color var(--ease), box-shadow var(--ease);
}
textarea { min-height: 120px; resize: vertical; }

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(153, 31, 55, 0.15);
}
input.error, textarea.error { border-color: var(--danger); }
.form-error { margin-top: 4px; font-size: var(--fs-xs); color: var(--danger); }

input[type="checkbox"],
input[type="radio"] { accent-color: var(--primary); }

/* Ô tải file thiết kế lên */
.upload {
  padding: 32px 16px;
  text-align: center;
  color: var(--ink-soft);
  background: var(--primary-soft);
  border: 2px dashed var(--primary-light);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: background var(--ease);
}
.upload:hover { background: #F3DCE1; }

/* ---------- 10. BẢNG GIÁ ---------- */
.price-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--fs-sm);
}
.price-table th,
.price-table td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid var(--line);
}
.price-table thead th { color: var(--white); background: var(--primary); font-weight: 500; }
.price-table tbody tr:nth-child(even) { background: var(--bg-alt); }
.price-table tbody tr:hover { background: var(--primary-soft); }

/* ---------- 11. ƯU ĐIỂM / QUY TRÌNH ---------- */
.feature {
  padding: 28px 24px;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
}
.feature__icon {
  display: grid;
  place-items: center;
  width: 52px; height: 52px;
  margin-bottom: 16px;
  font-size: 1.5rem;
  color: var(--primary);
  background: var(--primary-soft);
  border-radius: var(--radius);
}

.steps { counter-reset: step; display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.step { position: relative; padding-top: 56px; }
.step::before {
  counter-increment: step;
  content: counter(step);
  position: absolute;
  top: 0; left: 0;
  display: grid;
  place-items: center;
  width: 40px; height: 40px;
  font-weight: 700;
  color: var(--white);
  background: var(--primary);
  border-radius: 50%;
}

/* ---------- 12. CTA & FOOTER ---------- */
.cta { text-align: center; }
.cta p { margin-inline: auto; opacity: 0.9; }

.footer {
  padding-top: 64px;
  color: #E9DADD;
  background: #2A1E21;
  font-size: var(--fs-sm);
}
.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  gap: 32px;
  padding-bottom: 40px;
}
.footer h4 { color: var(--white); margin-bottom: 14px; }
.footer a { color: #E9DADD; }
.footer a:hover { color: var(--white); text-decoration: underline; }
.footer li { margin-bottom: 8px; }
.footer__bottom {
  padding-block: 20px;
  text-align: center;
  font-size: var(--fs-xs);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

/* ---------- 13. THÀNH PHẦN PHỤ ---------- */
.badge {
  display: inline-block;
  padding: 3px 10px;
  font-size: var(--fs-xs);
  font-weight: 500;
  color: var(--primary);
  background: var(--primary-soft);
  border-radius: 999px;
}

.alert {
  padding: 14px 18px;
  border-left: 4px solid var(--primary);
  background: var(--primary-soft);
  border-radius: var(--radius-sm);
}
.alert--success { border-color: var(--success); background: #E8F4EC; }
.alert--danger  { border-color: var(--danger);  background: #FBEAEA; }

.breadcrumb { display: flex; gap: 8px; font-size: var(--fs-sm); color: var(--ink-soft); }
.breadcrumb li + li::before { content: '/'; margin-right: 8px; }

.pagination { display: flex; justify-content: center; gap: 6px; }
.pagination a {
  display: grid;
  place-items: center;
  min-width: 40px; height: 40px;
  color: var(--ink);
  border: 1px solid var(--line);
  border-radius: var(--radius);
}
.pagination a:hover,
.pagination a.active { color: var(--white); background: var(--primary); border-color: var(--primary); }

/* Nút liên hệ nổi (Zalo / hotline) */
.float-contact {
  position: fixed;
  right: 18px; bottom: 18px;
  z-index: 90;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.float-contact a {
  display: grid;
  place-items: center;
  width: 52px; height: 52px;
  color: var(--white);
  background: var(--primary);
  border-radius: 50%;
  box-shadow: var(--shadow-lg);
  transition: transform var(--ease);
}
.float-contact a:hover { transform: scale(1.08); color: var(--white); }

/* ---------- 14. RESPONSIVE ---------- */
@media (max-width: 992px) {
  .grid--4 { grid-template-columns: repeat(2, 1fr); }
  .grid--3 { grid-template-columns: repeat(2, 1fr); }
  .hero__inner,
  .designer { grid-template-columns: 1fr; }
  .steps { grid-template-columns: repeat(2, 1fr); }
  .footer__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .nav-toggle { display: block; }
  .nav {
    position: absolute;
    top: 100%; left: 0; right: 0;
    display: none;
    flex-direction: column;
    gap: 0;
    padding: 8px var(--gutter) 16px;
    background: var(--white);
    border-bottom: 1px solid var(--line);
    box-shadow: var(--shadow);
  }
  .nav.open { display: flex; }
  .nav a { padding-block: 12px; border-bottom: 1px solid var(--line); }
  .nav a::after { display: none; }
}

/* Giữ lại menu đối với kích thước 768px */
@media (min-width: 577px) and (max-width: 768px) {
  .nav-toggle {
    display: none;
  }

  .header__inner {
    gap: 16px;
  }

  .nav {
    position: static;
    display: flex;
    flex-direction: row;
    gap: 14px;
    padding: 0;
    background: transparent;
    border: none;
    box-shadow: none;
    flex-shrink: 0;
  }

  .nav a {
    padding-block: 8px;
    border-bottom: none;
    white-space: nowrap;
  }

  .nav a::after {
    display: block;
  }

  .header__icons {
    gap: 12px;
    flex-shrink: 0;
  }
}

@media (max-width: 576px) {
  :root { --gutter: 16px; }
  .grid--2, .grid--3, .grid--4,
  .steps, .footer__grid { grid-template-columns: 1fr; }
  .hero__actions .btn { width: 100%; }
  .price-table { display: block; overflow-x: auto; }
}

/* Giữ lại menu đối với kích thước 390px */
@media (max-width: 576px) {
  .header__inner {
    gap: 8px;
  }

  .logo img {
    max-width: 65px;
    height: auto;
  }

  .nav {
    position: static;
    display: flex;
    flex-direction: row;
    gap: 8px;
    padding: 0;
    background: transparent;
    border: none;
    box-shadow: none;
    flex-shrink: 1;
  }

  .nav a {
    font-size: 12px;
    padding: 6px 0;
    white-space: nowrap;
    border-bottom: none;
  }

  .nav a::after {
    display: block;
  }

  .header__icons {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
  }

  .header__icon svg {
    width: 19px;
    height: 19px;
  }
}

/* ---------- 15. TRUY CẬP & IN ẤN ---------- */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
}

@media print {
  .header, .topbar, .footer, .float-contact { display: none; }
  body { color: #000; }
}

/* PRODUCT DETAIL - PROMPT 6A */

.pd-page {
  padding: 32px 20px 64px;
  color: inherit;
}

.pd-container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.pd-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
  font-size: 14px;
}

.pd-breadcrumb a {
  color: inherit;
  text-decoration: underline;
}

.pd-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 40px;
  align-items: start;
}

.pd-media {
  margin: 0;
  min-width: 0;
}

.pd-image {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 12px;
}

.pd-media figcaption,
.pd-note {
  margin-top: 10px;
  font-size: 13px;
  color: #666;
}

.pd-info {
  min-width: 0;
}

.pd-category {
  font-size: 13px;
  letter-spacing: 2px;
}

.pd-info h1 {
  margin: 12px 0;
  font-size: clamp(24px, 3vw, 36px);
  line-height: 1.25;
}

.pd-price {
  margin: 20px 0;
  font-size: 22px;
}

.pd-price strong {
  color: var(--primary);
  font-weight: 700;
}

.pd-description {
  line-height: 1.7;
}

.pd-info h2 {
  margin: 24px 0 12px;
  font-size: 18px;
}

.pd-specs {
  display: grid;
  grid-template-columns: 130px minmax(0, 1fr);
  gap: 12px;
  margin: 0 0 28px;
}

.pd-specs dt {
  font-weight: 600;
}

.pd-specs dd {
  margin: 0;
}


.pd-buy-button {
  min-height: 48px;
  padding: 12px 28px;
  border: 2px solid var(--primary);
  border-radius: var(--radius);
  background: var(--primary);
  color: var(--white);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition: background-color var(--ease),
              border-color var(--ease),
              box-shadow var(--ease);
}


.pd-buy-button:hover {
  background: var(--primary-dark);
  border-color: var(--primary-dark);
  box-shadow: var(--shadow);
}


.pd-buy-button:focus-visible,
.pd-breadcrumb a:focus-visible {
  outline: 3px solid var(--primary-dark);
  outline-offset: 3px;
}

/* Tablet và điện thoại */
@media (max-width: 768px) {
  .pd-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .pd-page {
    padding: 20px 16px 40px;
  }

  .pd-buy-button {
    width: 100%;
  }
}

/* Điện thoại nhỏ */
@media (max-width: 390px) {
  .pd-specs {
    grid-template-columns: 1fr;
    gap: 6px;
  }
}

/* ========================================
   ĐIỀU CHỈNH GIAO DIỆN TRANG CHỦ
   ICHIGO PRINTING
   ======================================== */

/* 1. LOGO */
.logo img {
    display: block;
    width: 380px;
    height: 190px;
    object-fit: contain;
}

/* 2. HEADER ICONS */
.header__icons {
    display: flex;
    align-items: center;
    gap: 22px;
}

.header__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--ink);
    transition: color var(--ease);
}

.header__icon:hover {
    color: var(--primary);
}

/* 3. BANNER */
.hero__inner {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
    align-items: center;
    justify-content: flex-start;
    gap: 40px;
  }

.hero__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
}

.hero__eyebrow {
    margin-bottom: 12px;
    color: var(--primary);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.5px;
}

.hero__content h1 {
    margin-bottom: 18px;
}

.hero__content h1 span {
    display: block;
    color: var(--primary);
}

.hero__lead {
    font-size: var(--fs-lg);
    color: var(--ink-soft);
}

/* 4. NÚT KHÁM PHÁ SẢN PHẨM */
.hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 24px;
}

.hero__actions .btn {
    color: var(--white);
    background: var(--primary);
    border: 2px solid var(--primary);
    border-radius: var(--radius);
    padding: 16px 36px;
    font-weight: 700;
}

.hero__actions .btn:hover {
    color: var(--white);
    background: var(--primary-dark);
    border-color: var(--primary-dark);
}

/* 5. HÌNH ẢNH BANNER */
.hero__img {
    width: 100%;
    height: 380px;
    overflow: hidden;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
}

.hero__img img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

/* 6. HÌNH ẢNH SẢN PHẨM */
.product__thumb {
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background: var(--bg-alt);
}

.product__thumb img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform var(--ease);
}

.product:hover .product__thumb img {
    transform: scale(1.04);
}

/* 7. DANH MỤC SẢN PHẨM */
.category-card {
    display: flex;
    align-items: center;
    gap: 22px;
    padding: 20px;
    background: var(--white);
    border: 1px solid var(--line);
    border-radius: var(--radius-lg);
}

.category-card__image {
    flex: 0 0 42%;
    overflow: hidden;
    border-radius: var(--radius);
}

.category-card__image img {
    display: block;
    width: 100%;
    height: 170px;
    object-fit: cover;
}

.category-card__content {
    flex: 1;
}

.category-card__content h3 {
    margin-bottom: 10px;
    color: var(--primary);
}

.category-card__content p {
    margin-bottom: 15px;
    color: var(--ink-soft);
}

/* 8. GIỚI THIỆU DỊCH VỤ */
.intro-service {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    padding: 28px;
    border: 1px solid var(--line);
    border-radius: var(--radius-lg);
}

.intro-service__content {
    flex: 1;
}

.intro-service__content h3 {
    margin-bottom: 15px;
}

.intro-service__content p {
    margin-bottom: 12px;
    color: var(--ink-soft);
}

.intro-service__content .btn {
    margin-top: 10px;
}

.intro-service__image {
    flex: 0 0 38%;
    overflow: hidden;
    border-radius: var(--radius);
}

.intro-service__image img {
    display: block;
    width: 100%;
    height: 190px;
    object-fit: cover;
}

/* 9. HIỆU ỨNG MENU VÀ LIÊN KẾT */
.nav a,
.footer a {
    transition: color var(--ease);
}

.nav a:hover {
    color: var(--primary);
}

/* 10. RESPONSIVE TABLET */
@media (max-width: 992px) and (min-width: 769px) {
    .hero__inner {
        grid-template-columns: 1fr 0.9fr;
        gap: 24px;
    }

    .hero__img {
        height: 300px;
    }

    .logo img {
        width: 160px;
    }
}

/* 11. RESPONSIVE MOBILE */
@media (max-width: 768px) {
    .logo img {
        width: 145px;
        height: 65px;
    }

    .header__icons {
        gap: 14px;
    }

    .hero__inner {
        grid-template-columns: 1fr;
    }

    .hero__img {
        height: 280px;
    }

    .category-card,
    .intro-service {
        flex-direction: column;
        align-items: stretch;
    }

    .category-card__image,
    .intro-service__image {
        flex: 1;
        width: 100%;
    }

    .category-card__image img,
    .intro-service__image img {
        height: 220px;
    }
}

/* 12. RESPONSIVE ĐIỆN THOẠI NHỎ */
@media (max-width: 576px) {
    .hero__img {
        height: 220px;
    }

    .hero__actions .btn {
        width: 100%;
    }

    .product__thumb {
        aspect-ratio: 1 / 1;
    }

    .category-card,
    .intro-service {
        padding: 18px;
    }
}

/* TƯƠNG TÁC - PROMPT 8 */

.btn:focus-visible {
  outline: 3px solid var(--primary-dark);
  outline-offset: 3px;
}

.btn:active {
  transform: none;
}

.nav a:focus-visible {
  color: var(--primary);
  outline-offset: 4px;
  border-radius: var(--radius-sm);
}

.nav a:focus-visible::after {
  width: 100%;
}

.logo:focus-visible {
  outline-offset: 4px;
  border-radius: var(--radius-sm);
}

.header__icon {
  border-radius: 50%;
  transition: color var(--ease), box-shadow var(--ease);
}

.header__icon:focus-visible {
  color: var(--primary);
  outline-offset: 6px;
}

@media (hover: hover) {
  .header__icon:hover {
    box-shadow: 0 0 0 6px var(--primary-soft);
  }
}

.product:focus-within {
  border-color: var(--primary-light);
  box-shadow: var(--shadow);
}

.product__thumb:focus-visible {
  outline: 3px solid var(--primary-dark);
  outline-offset: -3px;
}

.product__thumb:focus-visible::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  border: 3px solid var(--primary-dark);
  box-shadow: inset 0 0 0 3px var(--white);
  pointer-events: none;
}

.footer a:focus-visible {
  color: var(--white);
  outline: 3px solid var(--white);
  outline-offset: 3px;
  border-radius: 2px;
  text-decoration: underline;
}
```

### js/module/cart-list.js
```javascript
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
```
</details>

### Phản hồi Claude – nội dung đầy đủ

<details>
<summary>Mở toàn bộ phản hồi Claude</summary>

Bổ sung lọc khoảng giá, kiểm tra nhập liệu và nút "Đặt lại bộ lọc" vào `product.html`, sửa 2 file, tạo 1 file CSS mới, giữ nguyên `renderProducts(list)` và các module giỏ hàng.

## A. Cách ghép vào mã hiện tại

### Phạm vi thay đổi

| File | Hành động |
|---|---|
| `ecommerce-project/product.html` | Thay file: dựng lại form thành 2 hàng, bỏ inline style của form và dòng trạng thái, thêm link CSS mới trước `header.css` |
| `js/module/search-filter.js` | Thay file: giữ nguyên `renderProducts`, thêm hàm khoảng giá, kiểm tra nhập liệu và đặt lại |
| `css/product-filter.css` | Tạo mới |
| `products.js`, `cart.js`, `cart-list.js`, `style.css`, `header.css`, `cart.css` | Không đổi (`cart.js`, `header.css`, `cart.css` bạn không đính kèm nên tôi không kiểm tra được) |

### Luồng xử lý

- Mọi điều khiển (từ khóa, danh mục, sắp xếp, giá từ, giá đến) đều gọi một hàm `applyFilters()`.
- `applyFilters()` đọc giá trị hai ô giá và gọi `validatePriceRange()` trước.
  - **Sai:** hiển thị lỗi, gắn `aria-invalid` và `aria-describedby`, rồi gọi `renderInvalidState()`. Hàm này xóa thẻ, hiện thông báo yêu cầu nhập khoảng giá hợp lệ và vẫn phát sự kiện `products:rendered`.
  - **Đúng:** xóa lỗi, chạy chuỗi `searchByName` → `filterByCategory` → `filterByPriceRange` → `sortByPrice`, rồi gọi `renderProducts(kết quả)`.
- Mỗi hàm lọc trả về mảng mới. Sắp xếp chạy trên bản sao, nên `products` gốc không bị đổi.

### Quyết định kỹ thuật

| Vấn đề | Cách xử lý | Lý do |
|---|---|---|
| `validity.badInput` | Kiểm tra trước giá trị. Nếu `true` thì coi là lỗi, không coi là ô trống | `input.value` trả về `""` khi nhập sai trong `type="number"`, dễ bị nhầm với "không giới hạn" |
| Định dạng số | Dùng regex `^\d+$` trên chuỗi, rồi `Number.isSafeInteger` | Loại âm, thập phân, ký hiệu mũ (`1e3`) và số quá lớn. Hệ quả: `1e3` bị báo lỗi dù trình duyệt coi là 1000 |
| Validation của form | Form có `novalidate`. Mỗi ô lỗi được gắn `setCustomValidity(message)`, hợp lệ thì xóa | Tránh hộp thoại native chồng lên thông báo tùy chỉnh. `form.checkValidity()` vẫn khớp với trạng thái hiển thị |
| Thông báo lỗi nhập liệu | Đặt trong lưới sản phẩm bằng `renderInvalidState()`; dòng đếm kết quả để trống | Tránh dùng "Không có sản phẩm phù hợp" cho lỗi. `price-error` (`role="alert"`) đã báo cho trình đọc màn hình, nên không lặp lại ở vùng `role="status"` |
| Option danh mục | Cờ `dataset.populated` trên `<select>` | Không tạo trùng option nếu hàm bị gọi lại |
| Nút giỏ hàng | Không sửa `cart-list.js` | Thẻ được dựng lại mỗi lần lọc nên nút mới được gắn một lần cho mỗi thẻ. Trạng thái bắt đầu từ `Cart.getCart()` nên không bị trùng |

### Thứ tự nạp script

`search-filter.js` chạy trước `cart.js` và `cart-list.js`, nên lần `products:rendered` đầu tiên phát ra khi `cart-list.js` chưa lắng nghe. Điều này vẫn ổn nếu `cart-list.js` tự khởi tạo khi nạp (đoạn `document.readyState` trong file bạn gửi có làm việc đó). Đây là suy luận từ mã đọc được, **chưa chạy xác nhận**.

## B. `ecommerce-project/product.html`

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Khám phá các sản phẩm K-pop goods cá nhân hóa tại Ichigo Printing.">
    <title>Ichigo Printing | Sản phẩm</title>

    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/cart.css">

    <script src="../js/data/products.js" defer></script>
    <script src="../js/module/search-filter.js" defer></script>
    <script src="../js/module/cart.js" defer></script>
    <script src="../js/module/cart-list.js" defer></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/product-filter.css">
  <link rel="stylesheet" href="../css/header.css">
</head>

<body>

    <!-- HEADER -->
<header class="header site-header">
  <div class="container header__inner">
    <a class="logo" href="index.html" aria-label="Ichigo Printing - Trang chủ">
      <img src="../images/logo.png" alt="Ichigo Printing" width="2000" height="2000">
    </a>
    <nav class="nav" aria-label="Điều hướng chính">
      <a href="index.html">Trang chủ</a>
      <a href="product.html" class="active" aria-current="page">Sản phẩm</a>
      <a href="about.html">Giới thiệu</a>
    </nav>
    <div class="header__icons">
      <a href="product.html" class="header__icon" aria-label="Tìm kiếm sản phẩm">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7"></circle>
          <line x1="16" y1="16" x2="21" y2="21"></line>
        </svg>
      </a>
      <a href="cart.html" class="header__icon cart-header-link" aria-label="Giỏ hàng">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6"></path>
          <circle cx="10" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
        </svg>
        <span class="cart-badge" data-cart-count hidden>0</span>
      </a>
    </div>
  </div>
</header>

    <main>

        <!-- PAGE INTRODUCTION -->
        <section class="section section--alt">
            <div class="container">
                <div class="section__head">
                    <p class="text-primary"><strong>ICHIGO PRINTING</strong></p>
                    <h1>Our Products</h1>
                    <p>
                        Khám phá bộ sưu tập K-pop goods được thiết kế
                        và cá nhân hóa theo phong cách riêng của bạn.
                    </p>
                </div>
            </div>
        </section>

        <!-- PRODUCT LIST -->
        <section class="section">
            <div class="container">

                <div class="section__head">
                    <h2>Danh sách sản phẩm</h2>
                    <p>
                        Các mẫu sản phẩm in ấn dành cho cộng đồng người hâm mộ K-pop.
                    </p>
                </div>

                <!-- SEARCH / FILTER / SORT -->
                <form id="filter-form" role="search" novalidate
                      aria-label="Tìm kiếm, lọc và sắp xếp sản phẩm">

                    <!-- Hàng 1: từ khóa, danh mục, sắp xếp -->
                    <div class="filter-row filter-row--main">
                        <div class="form-group filter-field filter-field--search">
                            <label for="search-input">Tìm theo tên sản phẩm</label>
                            <input type="text" id="search-input" name="keyword"
                                   placeholder="Ví dụ: acrylic" autocomplete="off">
                        </div>

                        <div class="form-group filter-field filter-field--select">
                            <label for="category-select">Danh mục</label>
                            <select id="category-select" name="category">
                                <option value="all">Tất cả danh mục</option>
                            </select>
                        </div>

                        <div class="form-group filter-field filter-field--select">
                            <label for="sort-select">Sắp xếp theo giá</label>
                            <select id="sort-select" name="sort">
                                <option value="default">Mặc định</option>
                                <option value="asc">Giá tăng dần</option>
                                <option value="desc">Giá giảm dần</option>
                            </select>
                        </div>
                    </div>

                    <!-- Hàng 2: khoảng giá và nút đặt lại -->
                    <div class="filter-row filter-row--price">
                        <div class="filter-price" role="group" aria-label="Khoảng giá">
                            <div class="form-group filter-field">
                                <label for="min-price">Giá từ (đ)</label>
                                <input type="number" id="min-price" name="minPrice"
                                       min="0" step="1" inputmode="numeric"
                                       placeholder="0" autocomplete="off">
                            </div>

                            <div class="form-group filter-field">
                                <label for="max-price">Giá đến (đ)</label>
                                <input type="number" id="max-price" name="maxPrice"
                                       min="0" step="1" inputmode="numeric"
                                       placeholder="Không giới hạn" autocomplete="off">
                            </div>
                        </div>

                        <div class="filter-actions">
                            <button type="button" id="reset-filters" class="btn btn--outline">
                                Đặt lại bộ lọc
                            </button>
                        </div>
                    </div>

                    <p id="price-error" class="filter-error" role="alert" hidden></p>
                </form>

                <p id="filter-status" role="status" aria-live="polite"></p>

                <div class="grid grid--4" id="product-list"></div>

                <!-- PRICE NOTE -->
                <div class="alert" style="margin-top: 32px;">
                    <strong>Lưu ý:</strong>
                    Giá hiển thị là giá demo phục vụ mục đích minh họa giao diện.
                    Giá thực tế có thể thay đổi tùy theo kích thước, chất liệu,
                    số lượng và yêu cầu thiết kế.
                </div>

            </div>
        </section>

    </main>

    <!-- FOOTER -->
    <footer class="footer">
        <div class="container">
            <div class="footer__grid">

                <div>
                    <h3>ICHIGO PRINTING</h3>
                    <p>In dấu những khoảnh khắc đặc biệt.</p>
                </div>

                <div>
                    <h4>Liên kết</h4>
                    <p><a href="index.html">Trang chủ</a></p>
                    <p><a href="product.html">Sản phẩm</a></p>
                    <p><a href="about.html">Giới thiệu</a></p>
                </div>

                <div>
                    <h4>Theo dõi chúng tôi</h4>
                    <p>Instagram | X | TikTok | YouTube</p>
                </div>

            </div>

            <div class="footer__bottom">
                <p>© 2026 Ichigo Printing. All rights reserved.</p>
            </div>
        </div>
    </footer>

</body>
</html>
```

## C. `js/module/search-filter.js`

```javascript
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

// Khi khoảng giá không hợp lệ: xóa các thẻ, hiện thông báo yêu cầu nhập lại.
// Không dùng thông báo "Không có sản phẩm phù hợp" cho lỗi nhập liệu.
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

/* ==========================================================
   TÌM KIẾM - LỌC DANH MỤC - LỌC KHOẢNG GIÁ - SẮP XẾP GIÁ
   Mọi hàm xử lý trả về MẢNG MỚI, không thay đổi mảng `products`.
   ========================================================== */

const ALL_CATEGORIES = "all";
const PRICE_PATTERN = /^\d+$/;

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

// Lọc theo khoảng giá, gồm cả hai mức biên. null/undefined = không giới hạn đầu đó.
function filterByPriceRange(list, minPrice, maxPrice) {
    const hasMin = minPrice !== null && minPrice !== undefined;
    const hasMax = maxPrice !== null && maxPrice !== undefined;

    return list.filter(function (product) {
        if (hasMin && product.price < minPrice) return false;
        if (hasMax && product.price > maxPrice) return false;
        return true;
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

// Kết hợp 4 điều kiện: tìm kiếm -> danh mục -> khoảng giá -> sắp xếp.
function getVisibleProducts(source, criteria) {
    const searched = searchByName(source, criteria.keyword);
    const byCategory = filterByCategory(searched, criteria.category);
    const byPrice = filterByPriceRange(byCategory, criteria.minPrice, criteria.maxPrice);
    return sortByPrice(byPrice, criteria.sort);
}

/* ---------- Kiểm tra khoảng giá (không phụ thuộc DOM) ---------- */

const MIN_PRICE_MESSAGE =
    "Giá từ phải là số nguyên không âm, đơn vị đồng (không có chữ hoặc dấu thập phân).";
const MAX_PRICE_MESSAGE =
    "Giá đến phải là số nguyên không âm, đơn vị đồng (không có chữ hoặc dấu thập phân).";
const RANGE_ORDER_MESSAGE = "Giá từ không được lớn hơn giá đến.";

// Trả về { valid, value }. Ô trống hợp lệ với value = null (không giới hạn).
// hasBadInput = true nghĩa là trình duyệt báo nhập sai: KHÔNG được coi là ô trống.
function parsePriceValue(rawValue, hasBadInput) {
    if (hasBadInput) {
        return { valid: false, value: null };
    }

    const text = String(rawValue === null || rawValue === undefined ? "" : rawValue).trim();

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

// raw = { min, max, minBadInput, maxBadInput }
// Trả về { valid, min, max, errors: [{ fields: ["min"|"max"], message }] }
function validatePriceRange(raw) {
    const min = parsePriceValue(raw.min, raw.minBadInput);
    const max = parsePriceValue(raw.max, raw.maxBadInput);
    const errors = [];

    if (!min.valid) {
        errors.push({ fields: ["min"], message: MIN_PRICE_MESSAGE });
    }

    if (!max.valid) {
        errors.push({ fields: ["max"], message: MAX_PRICE_MESSAGE });
    }

    if (min.valid && max.valid &&
        min.value !== null && max.value !== null &&
        min.value > max.value) {
        errors.push({ fields: ["min", "max"], message: RANGE_ORDER_MESSAGE });
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

// Chỉ thêm option một lần, tránh trùng nếu hàm bị gọi lại.
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

// Đồng bộ lỗi với giao diện: aria-invalid, aria-describedby, setCustomValidity, #price-error.
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

    const uniqueMessages = Array.from(new Set(result.errors.map(function (error) {
        return error.message;
    })));

    elements.priceError.textContent = uniqueMessages.join(" ");
    elements.priceError.hidden = false;
}

// Đọc điều khiển -> kiểm tra giá -> tính kết quả -> cập nhật giao diện.
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

// Đưa mọi điều khiển về mặc định. Không đụng tới dữ liệu giỏ hàng.
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

    // Nếu thiếu thành phần giao diện, vẫn hiển thị danh sách như trước.
    if (!elements.keyword || !elements.category || !elements.sort ||
        !elements.minPrice || !elements.maxPrice || !elements.priceError ||
        !elements.reset || !elements.form || !elements.status) {
        renderProducts(products);
        return;
    }

    populateCategoryOptions(elements.category, products);

    elements.keyword.addEventListener("input", applyFilters);
    elements.category.addEventListener("change", applyFilters);
    elements.sort.addEventListener("change", applyFilters);
    elements.minPrice.addEventListener("input", applyFilters);
    elements.minPrice.addEventListener("change", applyFilters);
    elements.maxPrice.addEventListener("input", applyFilters);
    elements.maxPrice.addEventListener("change", applyFilters);
    elements.reset.addEventListener("click", resetFilters);

    // Nhấn Enter trong form không được tải lại trang.
    elements.form.addEventListener("submit", function (event) {
        event.preventDefault();
        applyFilters();
    });

    applyFilters();
}

initSearchFilter();
```

## D. `css/product-filter.css`

```css
/* ==========================================================
   BỘ LỌC SẢN PHẨM - ICHIGO PRINTING
   Chỉ tác động form #filter-form, #price-error và #filter-status.
   Dùng biến màu và font đã khai báo trong style.css.
   ========================================================== */

/* ---------- Khung form ---------- */
#filter-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-end;
}

#filter-form .form-group {
  margin-bottom: 0;
  min-width: 0;
}

/* ---------- Hàng 1: từ khóa, danh mục, sắp xếp ---------- */
.filter-field--search { flex: 2 1 240px; }
.filter-field--select { flex: 1 1 180px; }

/* ---------- Hàng 2: khoảng giá và nút đặt lại ---------- */
.filter-price {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  flex: 2 1 320px;
}
.filter-price .filter-field { flex: 1 1 140px; }

.filter-actions { flex: 0 0 auto; }
.filter-actions .btn { min-height: 46px; white-space: nowrap; }

/* ---------- Focus bàn phím ---------- */
#filter-form input:focus-visible,
#filter-form select:focus-visible,
#filter-form .btn:focus-visible {
  outline: 3px solid var(--primary-dark);
  outline-offset: 2px;
}

/* ---------- Trạng thái lỗi ---------- */
#filter-form input[aria-invalid="true"] {
  border-color: var(--danger);
  box-shadow: 0 0 0 3px rgba(198, 40, 40, 0.15);
}

#filter-form input[aria-invalid="true"]:focus-visible {
  outline-color: var(--danger);
}

.filter-error {
  margin: 0;
  max-width: none;
  padding: 10px 14px;
  font-size: var(--fs-sm);
  color: var(--danger);
  background: #FBEAEA;
  border-left: 4px solid var(--danger);
  border-radius: var(--radius-sm);
}

/* ---------- Dòng đếm kết quả ---------- */
#filter-status {
  min-height: 1.65em;
  margin-bottom: 16px;
  color: var(--ink-soft);
}

/* ---------- Mobile: các điều khiển xếp dọc ---------- */
@media (max-width: 576px) {
  #filter-form .filter-row,
  #filter-form .filter-price {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
  }

  #filter-form .filter-field,
  #filter-form .filter-price,
  #filter-form .filter-actions {
    flex: 0 0 auto;
    width: 100%;
  }

  #filter-form .filter-actions .btn {
    width: 100%;
  }
}
```

## E. Bảng kiểm thử

**Trạng thái:** tôi **chưa chạy** bất kỳ kiểm thử nào, vì không có trình duyệt hay môi trường chạy trong phản hồi này. Cột "Mong đợi" là tính tay từ dữ liệu `products.js` bạn cung cấp. Cột "Thực tế" để bạn tự điền sau khi chạy.

### Lọc và sắp xếp

| # | Thao tác | Mong đợi | Thực tế |
|---|---|---|---|
| 1 | Không chọn điều kiện | ID 1,2,3,4,5,6,7,8 theo thứ tự gốc; dòng đếm "8 / 8" | Chưa chạy |
| 2 | Giá 50000–100000, tăng dần | ID 6,5,8,3 | Chưa chạy |
| 3 | Giá 50000–100000, giảm dần | ID 3,8,5,6 | Chưa chạy |
| 4 | Chỉ giá từ 100000, mặc định | ID 1,2,7 | Chưa chạy |
| 5 | Chỉ giá đến 60000, mặc định | ID 4,5,6 | Chưa chạy |
| 6 | Hai đầu cùng 75000 | Chỉ ID 8 | Chưa chạy |
| 7 | `acrylic` + Phụ kiện mica + 50000–100000 | Chỉ ID 8 (ID 7 giá 130000 bị loại) | Chưa chạy |
| 8 | Giá từ 0, bỏ trống giá đến | Đủ 8 sản phẩm | Chưa chạy |
| 9 | Giá đến 0 | 0 / 8, hiện "Không có sản phẩm phù hợp." | Chưa chạy |
| 10 | Giá từ 200000 | 0 / 8, hiện "Không có sản phẩm phù hợp." | Chưa chạy |

### Kiểm tra nhập liệu

| # | Thao tác | Mong đợi | Thực tế |
|---|---|---|---|
| 11 | Giá từ 150000, giá đến 50000 | Hiện `#price-error` "Giá từ không được lớn hơn giá đến."; cả 2 ô có `aria-invalid="true"` và `aria-describedby="price-error"`; lưới hiện "Vui lòng nhập khoảng giá hợp lệ để xem sản phẩm."; dòng đếm trống | Chưa chạy |
| 12 | Giá từ `-5` | Báo lỗi giá từ; không có thẻ sản phẩm | Chưa chạy |
| 13 | Giá từ `12.5` | Báo lỗi giá từ | Chưa chạy |
| 14 | Gõ ký tự `e` hoặc `-` vào ô giá (`badInput`) | Báo lỗi, không coi là ô trống, không hiện 8 sản phẩm | Chưa chạy |
| 15 | Gõ `1e3` | Báo lỗi (regex chặt, xem phần A) | Chưa chạy |
| 16 | Sau #11, sửa giá đến thành 200000 | Lỗi biến mất, `aria-invalid` và `aria-describedby` bị xóa, kết quả cập nhật | Chưa chạy |
| 17 | Lỗi chỉ ở giá từ, giá đến hợp lệ | Chỉ ô giá từ có `aria-invalid` | Chưa chạy |
| 18 | Nhấn Enter trong ô tìm kiếm hoặc ô giá | Trang không tải lại | Chưa chạy |

### Đặt lại và giỏ hàng

| # | Thao tác | Mong đợi | Thực tế |
|---|---|---|---|
| 19 | Lọc rồi bấm "Đặt lại bộ lọc" | Ô từ khóa và hai ô giá trống; danh mục "Tất cả danh mục"; sắp xếp "Mặc định"; đủ 8 sản phẩm theo thứ tự gốc; dòng đếm "8 / 8"; focus về ô tìm kiếm | Chưa chạy |
| 20 | Nhập sai (#11 hoặc #14) rồi đặt lại | Lỗi và `aria-invalid` biến mất, đủ 8 sản phẩm | Chưa chạy |
| 21 | Thêm sản phẩm vào giỏ sau khi lọc, rồi đặt lại | Số lượng giỏ giữ nguyên; thẻ dựng lại vẫn hiện đúng "CÓ n TRONG GIỎ HÀNG" | Chưa chạy |
| 22 | Mỗi click "Thêm vào giỏ" sau nhiều lần lọc và đặt lại | Số lượng tăng đúng 1 mỗi click | Chưa chạy |
| 23 | Kiểm tra DevTools sau nhiều lần lọc | Mỗi thẻ có đúng 1 `.cart-add-btn`; `#category-select` có đúng 5 option (1 "Tất cả" + 4 danh mục) | Chưa chạy |
| 24 | Phát sự kiện `products:rendered` | Có phát khi có kết quả, khi rỗng và khi lỗi nhập liệu (kiểm tra bằng `document.addEventListener("products:rendered", ...)` trong Console) | Chưa chạy |

### Giao diện và bàn phím

| # | Thao tác | Mong đợi | Thực tế |
|---|---|---|---|
| 25 | Desktop (từ 992px) | Hàng 1: tìm kiếm, danh mục, sắp xếp; hàng 2: giá từ, giá đến, nút đặt lại | Chưa chạy |
| 26 | Thu cửa sổ còn 390px | Các điều khiển xếp dọc, không có thanh cuộn ngang | Chưa chạy |
| 27 | Nhấn `Tab` từ đầu form | Thứ tự: tìm kiếm → danh mục → sắp xếp → giá từ → giá đến → Đặt lại → thẻ sản phẩm; mọi điều khiển có viền focus rõ | Chưa chạy |
| 28 | So độ cao ô giá và nút "Đặt lại bộ lọc" | Đáy cùng hàng; nếu lệch, chỉnh `min-height` của `.filter-actions .btn` (giá trị 46px là ước lượng, chưa đo) | Chưa chạy |

### Kiểm tra dữ liệu gốc không bị đổi (dán vào Console)

```javascript
const before = JSON.stringify(products);
const ids = function (criteria) {
    return getVisibleProducts(products, criteria).map(function (p) { return p.id; }).join(",");
};
const base = { keyword: "", category: "all", sort: "default", minPrice: null, maxPrice: null };

console.log(ids(Object.assign({}, base, { minPrice: 50000, maxPrice: 100000, sort: "asc" })));   // mong đợi: 6,5,8,3
console.log(ids(Object.assign({}, base, { minPrice: 50000, maxPrice: 100000, sort: "desc" })));  // mong đợi: 3,8,5,6
console.log(ids(Object.assign({}, base, { minPrice: 100000 })));                                  // mong đợi: 1,2,7
console.log(ids(Object.assign({}, base, { maxPrice: 60000 })));                                   // mong đợi: 4,5,6
console.log(ids(Object.assign({}, base, { minPrice: 75000, maxPrice: 75000 })));                  // mong đợi: 8

console.log(validatePriceRange({ min: "150000", max: "50000" }).valid);                           // mong đợi: false
console.log(validatePriceRange({ min: "", max: "", minBadInput: true }).valid);                   // mong đợi: false
console.log(validatePriceRange({ min: "12.5", max: "" }).valid);                                  // mong đợi: false
console.log(validatePriceRange({ min: "-5", max: "" }).valid);                                    // mong đợi: false
console.log(validatePriceRange({ min: "", max: "" }).valid);                                      // mong đợi: true

console.log(JSON.stringify(products) === before);                                                 // mong đợi: true
console.log(products.map(function (p) { return p.id; }).join(","));                               // mong đợi: 1,2,3,4,5,6,7,8
```

Ghi lại kết quả chạy thật vào cột "Thực tế" bằng số liệu bạn quan sát được.

## Giới hạn cần lưu ý

| Điểm | Mức độ | Ghi chú |
|---|---|---|
| `cart.js`, `cart.css`, `header.css` không có trong đầu vào | Trung bình | Tôi không kiểm tra được hành vi `Cart.addToCart` hay style nút giỏ; các nhận định ở A chỉ dựa trên `cart-list.js` |
| Xóa chữ đang nhập sai bằng `input.value = ""` | Thấp | Tôi không chắc mọi trình duyệt xóa sạch ký tự lỗi khi đặt lại; cần thử trên Chrome, Firefox và Safari |
| Biểu tượng kính lúp trên header vẫn trỏ về `product.html` | Thấp | Ngoài phạm vi bước này, giữ nguyên |

</details>

### Kiểm tra và điều chỉnh sau phản hồi

| Nội dung | Kết quả đối chiếu và điều chỉnh |
|---|---|
| Khoảng giá | Giữ lọc gồm cả hai biên, cho phép bỏ trống một hoặc hai đầu, kết hợp với từ khóa, danh mục và sắp xếp |
| Nhập liệu | Giữ kiểm tra số nguyên không âm, số nguyên an toàn, thứ tự hai biên và `validity.badInput`. Cách phân tích chỉ nhận chữ số, nên `1e3` bị từ chối |
| Giỏ hàng | Giữ `data-product-id`, cấu trúc thẻ và sự kiện `products:rendered`; không sửa các module giỏ hàng |
| Khởi tạo | Bổ sung cờ `data-filter-initialized` để tránh gắn lặp listener submit khi gọi lại hàm khởi tạo |
| Phạm vi CSS | Giới hạn các selector bổ sung trong `#filter-form`, dùng biến màu có sẵn và chiều cao tối thiểu thống nhất cho điều khiển |
| Lỗi mobile sau điều chỉnh CSS | Ảnh 390 × 544 cho thấy khoảng trống lớn trước nút đặt lại. Selector desktop của ô giá có độ ưu tiên cao hơn selector mobile. Bổ sung `#filter-form .filter-price .filter-field` vào quy tắc mobile để áp dụng `flex: 0 0 auto` |
| Số lựa chọn danh mục | Bảng của Claude ghi 5 option. Dữ liệu có 5 danh mục, vì vậy tổng đúng là 6 option khi tính cả “Tất cả danh mục” |
| Nguồn mã cuối | Bản cuối có thêm các điều chỉnh sau phản hồi. Không gán toàn bộ mã cuối cho phản hồi Claude ban đầu |

### Kiểm thử và minh chứng

| Nguồn kiểm tra | Kết quả | Giới hạn |
|---|---|---|
| Node.js + LinkeDOM do ChatGPT/Codex thực hiện | 19 ca đạt trên mã đọc lại từ commit `91cad95`; kiểm tra lọc, lỗi, đặt lại, liên kết, sự kiện và giỏ hàng | Không có bộ dựng bố cục. Validity của input được mô phỏng, không xác nhận cách gõ số trên trình duyệt thật |
| Ảnh desktop tại máy | Xác nhận khoảng giá 50.000–100.000đ có 4/8 kết quả; kết hợp acrylic và Phụ kiện mica còn Keychain; khoảng giá đảo ngược báo lỗi | Ảnh khoảng giá đang chọn Mặc định, không phải minh chứng giá tăng/giảm |
| Ảnh mobile 390 × 544 trước sửa | Xác nhận focus nút, đếm 8/8 và phát hiện khoảng trống lớn | Thuộc bản trước sửa selector mobile |
| Ảnh toàn trang sau sửa | Không còn khoảng trống lớn trước nút trong ảnh được cung cấp | Ảnh bị thu nhỏ còn 111 × 2047 pixel. Đây là kích thước tệp, không phải CSS viewport. Chỉ dùng đối chiếu bố cục tổng quát |
| Giỏ hàng trong ảnh | Ảnh kết hợp hiển thị Keychain số lượng 2 và badge 2 | Ảnh tĩnh không chứng minh mỗi click tăng đúng 1 hoặc đầy đủ quá trình đặt lại |

Chi tiết và ảnh được đặt tại [Bảng kiểm thử mở rộng Buổi 3](KIEM_THU_MO_RONG_BUOI3_TRUONG.md).

### Trạng thái Git đã xác nhận

| Commit | Nội dung | Xác nhận |
|---|---|---|
| `6591e798d18494afb8e97cc3a1f7426e8582cc39` | Tích hợp tìm kiếm, lọc, sắp xếp và giữ nút giỏ hàng | Đã đọc lại trên GitHub ở lượt trước |
| `e5b012b6779ebee1759d5abf8673e7bfb91a4e7e` | Đồng bộ header theo trang About | Đã đọc lại commit và các tệp liên quan trên GitHub |
| `91cad95b7817743a6c3816d46fbc7e81b2225f14` | Bổ sung lọc khoảng giá và đặt lại bộ lọc | Terminal xác nhận push lên `main`, working tree sạch. Đã đọc lại đủ ba file và kiểm tra lại 19 ca bằng DOM mô phỏng |

Các trạng thái “đang chuẩn bị” trong mục nhật ký trước là ghi nhận tại thời điểm đó. Bảng này bổ sung trạng thái đã commit và push sau khi có kết quả xác nhận.
