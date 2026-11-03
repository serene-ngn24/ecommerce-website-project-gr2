
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