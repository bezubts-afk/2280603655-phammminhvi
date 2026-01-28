# Tuan 2 - Quản Lý Posts và Comments với Soft Delete

## Mô Tả
Ứng dụng quản lý Posts và Comments với các tính năng:
- ✅ Xoá mềm (Soft Delete) - thêm trường `isDeleted`
- ✅ Hiển thị gạch ngang cho các item đã xoá
- ✅ ID tự tăng (maxId + 1) khi tạo mới
- ✅ ID lưu trong CSDL dưới dạng chuỗi
- ✅ Thực hiện đầy đủ CRUD cho Posts
- ✅ Thực hiện đầy đủ CRUD cho Comments
- ✅ Khôi phục (Restore) các item đã xoá

## Cấu Trúc
```
Tuan2/
├── index.html      - Giao diện web
├── app.js          - Xử lý CRUD operations
├── db.json         - Database (json-server)
└── README.md       - Tài liệu này
```

## Hướng Dẫn Chạy

### 1. Cài đặt json-server
```bash
npm install json-server
```

### 2. Khởi động JSON Server
```bash
cd Tuan2
npx json-server db.json
```

Server sẽ chạy tại: `http://localhost:3000`

### 3. Mở giao diện web
Mở file `index.html` trong trình duyệt hoặc sử dụng Live Server

## API Endpoints
- `GET /posts` - Lấy danh sách posts
- `POST /posts` - Tạo post mới
- `PATCH /posts/:id` - Cập nhật post
- `GET /comments` - Lấy danh sách comments
- `POST /comments` - Tạo comment mới
- `PATCH /comments/:id` - Cập nhật comment
- `GET /maxPostId` - Lấy maxPostId
- `GET /maxCommentId` - Lấy maxCommentId

## Tính Năng Chi Tiết

### Posts (Bài Viết)
- **Tạo**: Nhập tiêu đề và lượt xem, ID tự động tăng từ maxPostId + 1
- **Đọc**: Hiển thị danh sách tất cả posts
- **Cập nhật**: Xoá mềm (đánh dấu `isDeleted: true`)
- **Khôi phục**: Khôi phục post đã xoá

### Comments (Bình Luận)
- **Tạo**: Chọn Post, nhập nội dung, ID tự động tăng từ maxCommentId + 1
- **Đọc**: Hiển thị danh sách tất cả comments
- **Cập nhật**: Xoá mềm cho comments
- **Khôi phục**: Khôi phục comment đã xoá

## Ghi Chú
- Xoá mềm giúp bảo toàn dữ liệu lịch sử
- Các post đã xoá được hiển thị với gạch ngang
- ID được lưu dưới dạng chuỗi trong CSDL (JSON)
- Dropdown chọn Post chỉ hiển thị các post chưa xoá

## Sinh Viên
- **Họ và Tên**: Phạm Minh Vĩ
- **MSSV**: 2280603655
- **Ngày nộp**: 28/01/2026
