# Requirements – Ichigo Printing

**Dự án:** Ichigo Printing – K-pop Goods Printing Website  
**Môn học:** Phát triển ứng dụng TMĐT  
**Giảng viên:** TS Nguyễn Mạnh Tuấn – tuannm@ueh.edu.vn  
**Nhóm:** 7 thành viên | **Thời gian dự kiến:** 8 tuần


## 1. Mục tiêu dự án

### 1.1. Mục tiêu kinh doanh

Ichigo Printing là website thương mại điện tử cung cấp dịch vụ đặt in K-pop goods theo thiết kế cá nhân hóa, bao gồm slogan/towel vải, uchiwa và các sản phẩm liên quan.

Website vận hành theo mô hình Make-to-Order (MTO) kết hợp Pre-order, tiếp nhận yêu cầu đặt in, kiểm duyệt thiết kế, xác nhận báo giá, thanh toán và gom đơn để gửi sản xuất tại xưởng Hàn Quốc.

Dự án hướng đến các mục tiêu:

- Số hóa quy trình đặt in K-pop goods thay cho việc trao đổi thủ công qua Facebook và Instagram.
- Tập trung thông tin sản phẩm, thiết kế, báo giá và đơn hàng trên một hệ thống.
- Giảm sai sót trong quá trình tiếp nhận và xử lý yêu cầu đặt in.
- Hỗ trợ quản lý các đợt gom đơn pre-order.
- Minh bạch tiến độ xử lý, sản xuất và giao hàng.
- Hỗ trợ quản lý sản phẩm, khách hàng, đơn hàng và hoạt động kinh doanh.

### 1.2. Giá trị mang lại cho khách hàng

- **Tiện lợi:** Khách hàng có thể lựa chọn sản phẩm, tùy chỉnh quy cách và đặt in trực tuyến.
- **Cá nhân hóa:** Cho phép tải lên file thiết kế riêng và xem trước sản phẩm bằng mockup 2D.
- **Minh bạch:** Khách hàng được xác nhận báo giá, phí vận chuyển và tổng tiền trước khi thanh toán.
- **Dễ theo dõi:** Cập nhật trạng thái đơn hàng từ kiểm duyệt thiết kế đến sản xuất và giao hàng.
- **Tiết kiệm thời gian:** Hạn chế việc trao đổi nhiều lần qua các nền tảng mạng xã hội.

---

## 2. Phạm vi

### 2.1. Trong phạm vi

Các chức năng dự kiến triển khai trong đồ án bao gồm:

**Chức năng dành cho khách chưa đăng nhập:**
- Xem trang chủ, sản phẩm nổi bật và khuyến mãi.
- Xem danh mục, chi tiết sản phẩm và giá tham khảo.
- Tìm kiếm, sắp xếp và lọc sản phẩm.
- Xem thông tin pre-order, hướng dẫn đặt in và chính sách dịch vụ.
- Đăng ký tài khoản.

**Chức năng dành cho khách hàng:**
- Đăng nhập, đăng xuất và quản lý tài khoản.
- Quản lý địa chỉ giao hàng.
- Xem sản phẩm đã xem, đã mua và đánh giá sản phẩm.
- Chọn quy cách in và số lượng.
- Upload file thiết kế và tải lại khi cần chỉnh sửa.
- Xem trước mockup 2D.
- Quản lý giỏ hàng.
- Checkout và gửi yêu cầu đặt in.
- Xem và xác nhận báo giá, thiết kế cuối cùng.
- Áp dụng voucher, xem phí giao hàng và tổng tiền.
- Thanh toán qua phương thức tích hợp hoặc sandbox.
- Xem lịch sử, theo dõi và yêu cầu hủy đơn theo điều kiện.

**Chức năng dành cho nhân viên xử lý đơn:**
- Tiếp nhận và xử lý yêu cầu đặt in.
- Kiểm duyệt file thiết kế.
- Lập, điều chỉnh và gửi báo giá.
- Tra cứu trạng thái thanh toán.
- Quản lý các đợt pre-order.
- Gom đơn và xuất danh sách gửi xưởng.
- Cập nhật tiến độ sản xuất và giao hàng.

**Chức năng dành cho quản trị viên:**
- Quản lý sản phẩm, danh mục và quy cách in.
- Quản lý bảng giá tham khảo và phí giao hàng.
- Quản lý chương trình khuyến mãi và voucher.
- Quản lý tài khoản và phân quyền người dùng.
- Quản lý toàn bộ đơn hàng và đợt pre-order.
- Theo dõi thống kê doanh thu, đơn hàng, sản phẩm và khách hàng.

### 2.2. Ngoài phạm vi

Các chức năng chưa ưu tiên triển khai trong đồ án:

- Công cụ thiết kế đồ họa chuyên nghiệp tương tự Canva.
- Chỉnh sửa trực tiếp file PSD/AI bằng Smart Object trên server.
- Xem trước sản phẩm bằng mô hình 3D thời gian thực.
- Đồng bộ tự động dữ liệu sản xuất với xưởng Hàn Quốc qua API.
- Tích hợp API vận chuyển và theo dõi vận đơn tự động.
- Hệ thống marketplace kết nối nhiều xưởng sản xuất.
- AI tự động thiết kế hoặc kiểm tra chất lượng file in.
- Tự động dự đoán chính xác thời gian giao hàng quốc tế.

**Chức năng phát triển sau:**
- F36: Thông báo email khi báo giá hoặc trạng thái đơn thay đổi.
- F37: Lưu thiết kế và tạo yêu cầu đặt lại từ đơn cũ.

---

## 3. Người dùng

Hệ thống xác định bốn vai trò người dùng chính:

| Vai trò | Nhiệm vụ chính | Quyền hạn |
|---|---|---|
| Khách chưa đăng nhập (Guest) | Tìm kiếm và xem thông tin dịch vụ | Xem sản phẩm, giá tham khảo, thông tin pre-order, chính sách, tìm kiếm, lọc và đăng ký |
| Khách hàng (Customer) | Tùy chỉnh sản phẩm, đặt hàng và theo dõi đơn | Quản lý tài khoản, upload thiết kế, xem mockup, giỏ hàng, checkout, báo giá, voucher, thanh toán và theo dõi đơn |
| Nhân viên xử lý đơn (Staff) | Kiểm duyệt thiết kế, báo giá, xử lý đơn và pre-order | Tiếp nhận đơn, duyệt file, lập báo giá, kiểm tra thanh toán, gom đơn và cập nhật tiến độ |
| Quản trị viên (Admin) | Quản lý và giám sát hoạt động website | Quản lý sản phẩm, danh mục, bảng giá, phí ship, voucher, tài khoản, phân quyền, đơn hàng và thống kê |

**Quy ước:**
- Khách: Khách chưa đăng nhập.
- KH: Khách hàng.
- NV: Nhân viên xử lý đơn.
- QTV: Quản trị viên.

---

## 4. Yêu cầu chức năng

Mỗi yêu cầu được xác định bằng mã chức năng, mô tả, người sử dụng, mức độ ưu tiên và tiêu chí nghiệm thu.

### 4.1. Chức năng xem và tìm kiếm sản phẩm

| Mã | Chức năng | Mô tả | Người dùng | Ưu tiên | Tiêu chí nghiệm thu |
|---|---|---|---|---|---|
| F01 | Xem trang chủ | Hiển thị sản phẩm nổi bật và chương trình khuyến mãi | Khách, KH | Bắt buộc | Trang chủ hiển thị đúng sản phẩm nổi bật và khuyến mãi được cấu hình |
| F02 | Xem danh mục sản phẩm | Hiển thị danh mục và danh sách sản phẩm | Khách, KH | Bắt buộc | Người dùng mở được danh mục và xem đúng sản phẩm thuộc danh mục |
| F03 | Xem chi tiết sản phẩm | Hiển thị quy cách, giá tham khảo, đánh giá và sản phẩm liên quan | Khách, KH | Bắt buộc | Trang chi tiết hiển thị đầy đủ thông tin được lưu trên hệ thống |
| F04 | Tìm kiếm, lọc và sắp xếp | Tìm và lọc theo loại, kích thước, chất liệu, số mặt in và khoảng giá | Khách, KH | Bắt buộc | Kết quả tìm kiếm, lọc và sắp xếp phù hợp với điều kiện được chọn |
| F05 | Xem thông tin pre-order | Hiển thị các đợt pre-order, hướng dẫn đặt in và chính sách | Khách, KH | Bắt buộc | Người dùng xem được thông tin đợt nhận đơn và các chính sách liên quan |

### 4.2. Chức năng tài khoản khách hàng

| Mã | Chức năng | Mô tả | Người dùng | Ưu tiên | Tiêu chí nghiệm thu |
|---|---|---|---|---|---|
| F06 | Đăng ký tài khoản | Tạo tài khoản khách hàng mới | Khách | Bắt buộc | Đăng ký thành công với dữ liệu hợp lệ; từ chối dữ liệu thiếu hoặc không hợp lệ |
| F07 | Đăng nhập, đăng xuất | Xác thực và truy cập hệ thống theo vai trò | KH, NV, QTV | Bắt buộc | Đăng nhập đúng thông tin; đăng xuất kết thúc phiên; người dùng chỉ truy cập được chức năng được cấp quyền |
| F08 | Quản lý thông tin cá nhân | Xem và cập nhật thông tin cá nhân, địa chỉ giao hàng | KH | Bắt buộc | Thông tin hợp lệ được lưu và hiển thị lại chính xác |
| F09 | Xem sản phẩm đã xem và đã mua | Hiển thị lịch sử sản phẩm đã xem và mua | KH | Bắt buộc | Khách hàng xem được danh sách sản phẩm tương ứng với tài khoản |
| F10 | Đánh giá sản phẩm | Chấm điểm và nhận xét sản phẩm đã mua | KH | Bắt buộc | Khách chỉ đánh giá sản phẩm đủ điều kiện đã mua; đánh giá hợp lệ được lưu và hiển thị |

### 4.3. Chức năng đặt in cá nhân hóa

| Mã | Chức năng | Mô tả | Người dùng | Ưu tiên | Tiêu chí nghiệm thu |
|---|---|---|---|---|---|
| F11 | Chọn quy cách in | Chọn kích thước, chất liệu, số mặt in và số lượng | KH | Bắt buộc | Hệ thống lưu đúng cấu hình sản phẩm và từ chối số lượng hoặc tùy chọn không hợp lệ |
| F12 | Tải file thiết kế | Upload file mặt trước/mặt sau và tải lại khi được yêu cầu | KH | Bắt buộc | File hợp lệ được lưu và liên kết đúng yêu cầu; file không hợp lệ bị từ chối; có thể tải lại khi cần chỉnh sửa |
| F13 | Xem mockup 2D | Hiển thị hình ảnh mô phỏng từ thiết kế tải lên | KH | Bắt buộc | Hình thiết kế xuất hiện trên mockup phù hợp với sản phẩm và mặt in được chọn |
| F14 | Quản lý giỏ hàng | Thêm sản phẩm đã cấu hình, thay đổi số lượng và xóa sản phẩm | KH | Bắt buộc | Giỏ hàng lưu đúng sản phẩm, quy cách, thiết kế và số lượng; cập nhật và xóa thành công |
| F15 | Checkout và gửi yêu cầu | Lưu thông tin liên hệ, địa chỉ và tạo yêu cầu đặt in | KH | Bắt buộc | Checkout hợp lệ tạo yêu cầu có mã đơn và trạng thái chờ xử lý/báo giá; chưa yêu cầu thanh toán ngay |
| F16 | Xác nhận báo giá và thiết kế | Xem báo giá, quy cách và phiên bản thiết kế cuối cùng | KH | Bắt buộc | Khách xem và xác nhận đúng báo giá, thiết kế; hệ thống lưu trạng thái xác nhận |

### 4.4. Chức năng thanh toán và đơn hàng

| Mã | Chức năng | Mô tả | Người dùng | Ưu tiên | Tiêu chí nghiệm thu |
|---|---|---|---|---|---|
| F17 | Áp dụng voucher | Kiểm tra và áp dụng mã giảm giá hợp lệ | KH | Bắt buộc | Voucher hợp lệ được áp dụng đúng; mã hết hạn hoặc không đạt điều kiện bị từ chối |
| F18 | Xem phí giao hàng và tổng tiền | Tính và hiển thị phí giao hàng, khuyến mãi và tổng tiền cuối | KH | Bắt buộc | Tổng tiền được tính chính xác theo báo giá đã xác nhận, voucher và bảng phí giao hàng |
| F19 | Thanh toán | Thanh toán qua phương thức tích hợp hoặc sandbox | KH | Bắt buộc | Tạo được giao dịch và xử lý đúng kết quả thành công, thất bại hoặc hủy; không ghi nhận thanh toán thành công khi chưa xác minh |
| F20 | Theo dõi đơn hàng | Xem lịch sử và tiến độ xử lý, sản xuất, giao hàng | KH | Bắt buộc | Khách chỉ xem được đơn của mình; trạng thái và thời điểm cập nhật khớp với dữ liệu hệ thống |
| F21 | Hủy yêu cầu đặt in | Cho phép hủy đơn chưa thanh toán theo điều kiện công bố | KH | Bắt buộc | Đơn đủ điều kiện được hủy; hệ thống từ chối hủy khi không đáp ứng điều kiện |

### 4.5. Chức năng nhân viên xử lý đơn

| Mã | Chức năng | Mô tả | Người dùng | Ưu tiên | Tiêu chí nghiệm thu |
|---|---|---|---|---|---|
| F22 | Tiếp nhận và xử lý đơn | Tra cứu, xem và xử lý yêu cầu đặt in | NV, QTV | Bắt buộc | Nhân viên xem được thông tin đơn và cập nhật trạng thái trong phạm vi quyền |
| F23 | Kiểm duyệt thiết kế | Kiểm tra file, duyệt hoặc yêu cầu khách chỉnh sửa | NV, QTV | Bắt buộc | File được ghi nhận kết quả duyệt; khi từ chối có lý do và khách có thể tải lại |
| F24 | Quản lý báo giá | Lập, điều chỉnh và gửi báo giá cho khách | NV, QTV | Bắt buộc | Báo giá được lưu đúng đơn; khách xem được báo giá mới và xác nhận trước thanh toán |
| F25 | Tra cứu thanh toán | Xem giao dịch và trạng thái thanh toán | NV, QTV | Bắt buộc | Hiển thị đúng giao dịch, số tiền và trạng thái thanh toán đã được xác minh |
| F26 | Quản lý đợt pre-order | Tạo, cập nhật, mở và đóng đợt gom đơn | NV, QTV | Bắt buộc | Tạo đợt hợp lệ với mã, thời hạn và trạng thái; không tiếp nhận thêm đơn vào đợt đã đóng |
| F27 | Gom đơn và xuất danh sách | Thêm đơn đủ điều kiện vào đợt và xuất danh sách gửi xưởng | NV, QTV | Bắt buộc | Chỉ đơn đã duyệt file, xác nhận báo giá và thanh toán thành công được gom; danh sách xuất khớp dữ liệu |
| F28 | Cập nhật tiến độ | Cập nhật tiến độ sản xuất, thông tin và trạng thái giao hàng | NV, QTV | Bắt buộc | Trạng thái mới được lưu và hiển thị cho khách; có ghi nhận thời điểm cập nhật |

### 4.6. Chức năng quản trị viên

| Mã | Chức năng | Mô tả | Người dùng | Ưu tiên | Tiêu chí nghiệm thu |
|---|---|---|---|---|---|
| F29 | Quản lý sản phẩm | Thêm, sửa, xóa hoặc ngừng hiển thị sản phẩm, hình ảnh và quy cách | QTV | Bắt buộc | Thao tác hợp lệ được lưu; dữ liệu sản phẩm hiển thị chính xác |
| F30 | Quản lý danh mục | Tạo, cập nhật và quản lý nhóm sản phẩm | QTV | Bắt buộc | Danh mục được lưu và liên kết chính xác với các sản phẩm |
| F31 | Quản lý bảng giá | Cập nhật giá tham khảo theo sản phẩm và quy cách | QTV | Bắt buộc | Giá tham khảo được cập nhật chính xác; không tự ý thay đổi báo giá đã xác nhận |
| F32 | Quản lý phí giao hàng | Thiết lập bảng phí theo khu vực | QTV | Bắt buộc | Phí giao hàng được tính đúng khu vực và lưu vào đơn |
| F33 | Quản lý khuyến mãi | Tạo và quản lý chương trình khuyến mãi, voucher | QTV | Bắt buộc | Lưu được điều kiện, thời hạn, mức giảm và giới hạn sử dụng; chỉ voucher hợp lệ được áp dụng |
| F34 | Quản lý tài khoản và phân quyền | Quản lý tài khoản, vai trò và quyền truy cập | QTV | Bắt buộc | Chỉ QTV có quyền quản trị tài khoản; các quyền truy cập được thực thi đúng |
| F35 | Thống kê hoạt động | Xem doanh thu, đơn hàng, sản phẩm bán chạy, đơn chờ giao và khách hàng | QTV | Bắt buộc | Dashboard hiển thị các chỉ số phù hợp với dữ liệu đơn hàng và giao dịch hợp lệ |

### 4.7. Chức năng phát triển sau

| Mã | Chức năng | Mô tả | Người dùng | Ưu tiên | Tiêu chí nghiệm thu |
|---|---|---|---|---|---|
| F36 | Thông báo email | Gửi thông báo khi báo giá hoặc trạng thái đơn thay đổi | KH | Phát triển sau | Email được gửi đúng khách hàng, đúng nội dung và sự kiện khi chức năng được triển khai |
| F37 | Lưu và đặt lại thiết kế | Lưu thiết kế và tạo yêu cầu đặt lại từ đơn cũ | KH | Phát triển sau | Khách chọn được đơn cũ, sử dụng lại thiết kế và tạo yêu cầu mới với thông tin chính xác |

### 4.8. Quy tắc nghiệp vụ

**BR01 – Checkout và báo giá**
- Checkout là bước gửi yêu cầu đặt in, chưa thực hiện thanh toán.
- Nhân viên kiểm duyệt thiết kế và lập báo giá.
- Khách hàng xác nhận file, báo giá và tổng tiền cuối cùng trước khi thanh toán.

**BR02 – Giá, voucher và phí vận chuyển**
- Giá hiển thị ban đầu có thể là giá tham khảo.
- Tổng tiền thanh toán phải sử dụng báo giá đã được xác nhận.
- Hệ thống kiểm tra điều kiện voucher và phí giao hàng trước khi tạo giao dịch thanh toán.

**BR03 – Điều kiện gom đơn**
Chỉ đưa đơn vào danh sách sản xuất khi:
1. File thiết kế đã được duyệt.
2. Khách hàng đã xác nhận báo giá.
3. Thanh toán đã được xác nhận thành công.

**BR04 – Thay đổi thiết kế**
- Khi khách hàng thay đổi file hoặc quy cách sau khi xác nhận, hệ thống phải yêu cầu kiểm tra và xác nhận lại trước khi sản xuất.
- Không sử dụng nhầm phiên bản file thiết kế cũ.

**BR05 – Tiến độ sản xuất**
- Nhân viên cập nhật tiến độ trực tiếp trên website.
- Chưa thực hiện đồng bộ tự động dữ liệu với xưởng Hàn Quốc.
- Thời gian giao hàng chỉ mang tính dự kiến khi chưa được xác nhận.

**BR06 – Hủy đơn**
- Khách được yêu cầu hủy đơn chưa thanh toán theo chính sách công bố.
- Không mặc định cho phép hủy hoặc hoàn tiền sau khi đơn đã chuyển sản xuất.

**BR07 – Phân quyền**
- Khách hàng chỉ truy cập dữ liệu và đơn hàng của mình.
- Nhân viên chỉ được thao tác trong phạm vi nghiệp vụ được cấp.
- Quản trị viên quản lý tài khoản, cấu hình và các chức năng quản trị.

---

## 5. Yêu cầu phi chức năng

| Mã | Nhóm yêu cầu | Mô tả | Tiêu chí nghiệm thu |
|---|---|---|---|
| NFR01 | Responsive | Website tương thích desktop, tablet và mobile | Các trang chính hiển thị và thao tác được trên các kích thước màn hình kiểm thử |
| NFR02 | Hiệu năng | Tối ưu thời gian tải trang và hình ảnh sản phẩm | Mục tiêu tải trang chính trong khoảng 3 giây trên môi trường kiểm thử thống nhất |
| NFR03 | Input Validation | Kiểm tra dữ liệu đầu vào trên giao diện và backend | Từ chối dữ liệu không hợp lệ, hiển thị thông báo lỗi rõ ràng |
| NFR04 | Authentication | Bảo vệ tài khoản và phiên đăng nhập | Mật khẩu được băm an toàn; chức năng yêu cầu đăng nhập không truy cập được khi chưa xác thực |
| NFR05 | Authorization | Phân quyền theo Guest, Customer, Staff và Admin | Tài khoản không đủ quyền không thể truy cập dữ liệu hoặc chức năng bị hạn chế |
| NFR06 | Upload Security | Kiểm tra file thiết kế tải lên | Kiểm tra định dạng, nội dung và dung lượng; kiểm soát quyền truy cập file |
| NFR07 | Web Security | Phòng chống XSS, SQL Injection, CSRF và IDOR | Kiểm thử các tình huống tấn công tương ứng và xử lý an toàn |
| NFR08 | Data Integrity | Bảo đảm tính nhất quán dữ liệu đơn, báo giá và thanh toán | Không thay đổi trái phép thông tin đã xác nhận; trạng thái được lưu nhất quán |
| NFR09 | Usability | Giao diện dễ hiểu và có hướng dẫn thao tác | Form có nhãn, thông báo lỗi và phản hồi khi thao tác |
| NFR10 | Maintainability | Mã nguồn dễ đọc, dễ bảo trì và phát triển nhóm | Cấu trúc dự án rõ ràng, phân tách các thành phần, quản lý bằng Git |
| NFR11 | Secret Management | Bảo vệ thông tin nhạy cảm | Không công khai API key, mật khẩu, token hoặc file cấu hình chứa bí mật |
| NFR12 | Backup & Recovery | Hạn chế mất dữ liệu trong quá trình phát triển | Có phương án sao lưu và phục hồi dữ liệu demo trước nghiệm thu |

---

## 6. Giới hạn và giả định

### 6.1. Giới hạn

**Thời gian:**
- Dự án thực hiện trong một học phần, dự kiến khoảng 8 tuần.
- Ưu tiên các chức năng bắt buộc từ F01 đến F35.
- F36 và F37 chỉ triển khai khi nhóm có đủ thời gian và nguồn lực.

**Nhân sự:**
- Nhóm gồm 7 thành viên.
- Các thành viên cùng tham gia phân tích, thiết kế, lập trình, kiểm thử và hoàn thiện tài liệu.
- Phân công chi tiết được quản lý trong `PROJECT_PLAN.md`.

**Công nghệ:**
- Front-end, back-end và database được lựa chọn theo thống nhất của nhóm.
- Dự án quản lý mã nguồn bằng Git và GitHub.
- Mockup sử dụng hình ảnh 2D dựa trên thiết kế do khách hàng tải lên.
- Thanh toán sử dụng phương thức tích hợp hoặc môi trường sandbox.
- Chưa yêu cầu kết nối thực tế với hệ thống xưởng sản xuất tại Hàn Quốc.

**Nguồn lực:**
- Phạm vi được giới hạn theo khả năng triển khai trong học phần.
- Dữ liệu sản phẩm, bảng giá và đơn hàng có thể sử dụng dữ liệu giả lập để phục vụ kiểm thử.
- Không mặc định có quyền truy cập API hoặc dữ liệu nội bộ của xưởng Hàn Quốc.

### 6.2. Giả định

- Khách hàng cần đăng nhập để thực hiện các chức năng đặt in và quản lý đơn.
- Các sản phẩm ban đầu tập trung vào slogan/towel vải và uchiwa.
- Giá tham khảo có thể khác báo giá cuối cùng tùy quy cách, số lượng và yêu cầu in.
- Nhân viên có trách nhiệm kiểm duyệt file trước khi sản xuất.
- Mẫu mockup chỉ dùng để minh họa, không bảo đảm chính xác tuyệt đối màu sắc và chất liệu thực tế.
- Đơn hàng phải hoàn tất duyệt file, xác nhận báo giá và thanh toán trước khi được gom vào đợt sản xuất.
- Phí giao hàng được tính theo bảng phí khu vực do quản trị viên cấu hình.
- Tiến độ sản xuất và giao hàng được cập nhật thủ công bởi nhân viên.
- Thời gian giao hàng dự kiến có thể thay đổi do sản xuất và vận chuyển quốc tế.

### 6.3. Nội dung cần xác minh thêm

- Công nghệ back-end và hệ quản trị cơ sở dữ liệu chính thức.
- Cổng thanh toán hoặc sandbox sẽ sử dụng.
- Định dạng, dung lượng và yêu cầu kỹ thuật đối với file sản xuất.
- Bảng giá và quy cách in thực tế từ xưởng Hàn Quốc.
- Chính sách hủy đơn và hoàn tiền sau thanh toán.
- Quy định về thời hạn mở/đóng các đợt pre-order.
- Tiêu chuẩn hiệu năng và môi trường triển khai cuối cùng.

---

**Ichigo Printing – K-pop Goods Printing Website**  
Đồ án môn Phát triển ứng dụng TMĐT – UEH