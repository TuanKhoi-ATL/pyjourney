# PyJourney

Ứng dụng cá nhân theo dõi quá trình học và luyện tập Python mỗi ngày, hỗ trợ tiếng Việt và tiếng Anh.

## Tính năng

- Dashboard: chuỗi ngày học, thời gian tuần, số bài giải và mục tiêu tuần.
- Nhật ký học chi tiết theo ngày, chủ đề, thời lượng, cảm nhận và ghi chú.
- Ngân hàng bài tập theo 3 cấp độ, có thể tự thêm bài.
- Lộ trình Python 5 giai đoạn và thống kê thói quen học.
- Song ngữ Việt/Anh, giao diện sáng/tối, responsive cho điện thoại.
- PWA: cài như ứng dụng và tiếp tục dùng khi mất mạng.
- Dữ liệu local-first; xuất/nhập JSON để sao lưu.

## Chạy trên máy

Không cần Node.js. Tại thư mục dự án, chạy:

```bash
python3 -m http.server 8080
```

Mở `http://localhost:8080`. Không mở trực tiếp file `index.html`, vì PWA cần HTTP để hoạt động đúng.

## Đưa trang lên mạng lâu dài

### Netlify (đơn giản nhất)

1. Tạo một repository GitHub và đẩy toàn bộ thư mục này lên.
2. Đăng nhập Netlify, chọn **Add new site → Import an existing project**.
3. Kết nối repository. Để trống build command, publish directory là `.`.
4. Deploy. Mọi lần cập nhật lên nhánh chính sẽ tự động xuất bản.
5. Trong **Domain management**, thêm tên miền riêng nếu muốn.

File `netlify.toml` đã bao gồm cấu hình publish, SPA fallback và security headers.

### GitHub Pages

Repository → Settings → Pages → Deploy from branch → `main` / root. Các đường dẫn đều tương đối nên hoạt động được ở sub-path.

## Dữ liệu và giới hạn hiện tại

Dữ liệu được lưu bằng `localStorage` trên từng trình duyệt. Cách này riêng tư, không cần tài khoản và dùng ngay, nhưng không tự đồng bộ giữa điện thoại và máy tính. Hãy dùng **Cài đặt → Xuất dữ liệu** để sao lưu định kỳ.

Để có đăng nhập và đồng bộ đa thiết bị, bước mở rộng phù hợp là thêm Supabase (Auth + PostgreSQL). Không đưa khóa quản trị hoặc mật khẩu vào mã nguồn.

## Cập nhật

- Nội dung bài tập mẫu: `exercises` trong `app.js`.
- Nội dung lộ trình: `roadmap` trong `app.js`.
- Bản dịch: `i18n.vi` và `i18n.en` trong `app.js`.
- Màu sắc và giao diện: các biến ở đầu `styles.css`.

Chủ sở hữu: ttk1205tn@gmail.com
