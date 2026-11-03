# Kiểm thử trang Giới thiệu và hiệu ứng tương tác

Phạm vi: About và hiệu ứng tương tác. Mã đã push lên main tại af9171fbd589a6b569359c14d76168faf88b1e45.

| Hạng mục | Cách kiểm tra | Kết quả và minh chứng |
|---|---|---|
| About và ảnh | Mở trang trên máy | Đủ logo và ba ảnh. [Ảnh 14](minh-chung-truong/14_about_lien_he_dung_mau_desktop.png) |
| About màn hình hẹp | Device Toolbar theo thiết lập 390px | Bố cục dọc, đủ liên hệ. [Ảnh 26](minh-chung-truong/26_about_390px.png) |
| Menu | Hover và Tab | Có màu, gạch chân và vòng focus. [Ảnh 15](minh-chung-truong/15_menu_hover.png), [16](minh-chung-truong/16_menu_focus.png) |
| Xem chi tiết | Hover và Tab | Có trạng thái rõ. [Ảnh 18](minh-chung-truong/18_nut_xem_chi_tiet_focus.png), [24](minh-chung-truong/24_nut_xem_chi_tiet_hover.png) |
| Đặt in | Hover và Tab | Có phản hồi giao diện. [Ảnh 20](minh-chung-truong/20_nut_dat_in_focus.png), [21](minh-chung-truong/21_nut_dat_in_hover.png) |
| Ảnh và thẻ sản phẩm | Tab vào ảnh trong danh sách, hover thẻ | Vòng nằm trong khung, không thấy che thẻ bên cạnh. [Ảnh 22](minh-chung-truong/22_anh_san_pham_focus.png), [23](minh-chung-truong/23_the_san_pham_hover.png) |
| Footer | Tab đến liên kết trên nền tối | Vòng trắng rõ. [Ảnh 17](minh-chung-truong/17_footer_focus.png) |
| Liên kết bốn trang | Mở Trang chủ, Sản phẩm, Giới thiệu, Xem chi tiết | Đã kiểm tra tại máy. Tên cuối là product.html |
| Tích hợp sau push | Đối chiếu HTML, CSS và đường dẫn ảnh trên GitHub | Có bốn trang và tám sản phẩm, đường dẫn tài nguyên phù hợp |

## Vấn đề và cách xử lý

| Vấn đề hoặc đề xuất | Xử lý | Kết quả |
|---|---|---|
| Cover có thể cắt ảnh About | Dùng contain theo yêu cầu giữ đầy đủ sản phẩm | Thấy đầy đủ hình, không méo |
| Vòng focus chung trên footer tối | Dùng vòng trắng | Minh chứng [ảnh 17](minh-chung-truong/17_footer_focus.png) |
| Focus ảnh có thể bị cắt | Đưa vòng vào trong khung, dùng hai màu | Minh chứng [ảnh 22](minh-chung-truong/22_anh_san_pham_focus.png) |
| products.html đổi thành product.html | Đồng bộ menu, CTA và breadcrumb | Liên kết giữa các trang phù hợp |
| Header nằm giữa ảnh chụp toàn trang đầu tiên | Trở về đầu trang và chụp lại | [Ảnh 26](minh-chung-truong/26_about_390px.png) có header đúng vị trí. Không ghi thành sửa CSS |
| Push bị từ chối do main có cập nhật | Tích hợp cập nhật nhóm, xử lý xung đột CSS | Push thành công tại af9171f |

Không khẳng định đã đo tự động độ dịch chuyển bố cục. Kiểm thử đủ ba kích thước cho toàn website do Gia Khang tổng hợp. Nút Đặt in và tài khoản minh họa chưa phải chức năng đặt hàng hoặc kênh liên hệ đã vận hành.
