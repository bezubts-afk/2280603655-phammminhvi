# Bài Tập JavaScript - Quản Lý Sản Phẩm

## 📝 Thông Tin Sinh Viên
- **Họ và Tên**: [Nhập tên của bạn]
- **MSSV**: [Nhập mã số sinh viên]
- **Lớp**: [Nhập lớp]
- **Ngày nộp**: 21/01/2026

## 📋 Mô Tả Bài Tập

Bài tập này yêu cầu xây dựng một hệ thống quản lý sản phẩm sử dụng JavaScript với các chức năng sau:

### Các Yêu Cầu:

1. **Câu 1**: Khái báo constructor function `Product` để tạo đối tượng sản phẩm
   - Các thuộc tính: `id`, `name`, `price`, `quantity`, `category`, `isAvailable`

2. **Câu 2**: Khởi tạo mảng `products` gồm ít nhất 6 sản phẩm, thuộc 2 danh mục khác nhau
   - Danh mục 1: Electronics (Thiết bị điện tử)
   - Danh mục 2: Accessories (Phụ kiện)

3. **Câu 3**: Tạo một chi nhánh mới chỉ chứa `name` và `price`

4. **Câu 4**: Lọc ra các sản phẩm còn hàng (`quantity > 0`)

5. **Câu 5**: Kiểm tra xem có sản phẩm nào có giá >= 30.000.000 hay không

6. **Câu 6**: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có `isAvailable = true` hay không

7. **Câu 7**: Tính tổng giá trị kho hàng (Giá trị = `price × quantity`)

8. **Câu 8**: Dùng vòng lặp `for...of` để duyệt mảng `products` và in ra:
   - Tên sản phẩm
   - Danh mục
   - Trạng thái (Còn bán / Hết bán)

9. **Câu 9**: Dùng vòng lặp `for...in` để in ra:
   - Tên thuộc tính
   - Giá trị tương ứng

10. **Câu 10**: Lấy danh sách tên các sản phẩm đang bán và còn hàng

## 📁 Cấu Trúc File

```
project/
├── index.html        # File HTML chính (tên có thể khác, xem test.html)
├── main.js           # File JavaScript chứa logic
└── README.md         # File này
```

## 🚀 Cách Chạy

### Trên Trình Duyệt:
1. Mở file `test.html` trên trình duyệt
2. Xem kết quả trực tiếp trên giao diện web

### Trên Node.js (xem kết quả console):
```bash
node main.js
```

## 💻 Công Nghệ Sử Dụng

- **JavaScript ES6+**
  - Constructor Function
  - Array methods: `filter()`, `map()`, `reduce()`, `every()`
  - Vòng lặp: `for...of`, `for...in`, `forEach()`

- **HTML5 & CSS3**
  - Responsive Design
  - CSS Flexbox
  - CSS Gradient

## 📊 Dữ Liệu Mẫu

Bài tập sử dụng 8 sản phẩm mẫu:

| ID | Tên Sản Phẩm | Giá | Số Lượng | Danh Mục | Trạng Thái |
|---|---|---|---|---|---|
| 1 | Laptop Dell XPS 13 | 25.000.000 | 5 | Electronics | Còn bán |
| 2 | iPhone 15 Pro | 32.000.000 | 3 | Electronics | Còn bán |
| 3 | Samsung Galaxy S24 | 28.000.000 | 7 | Electronics | Còn bán |
| 4 | Tai nghe Bluetooth Sony | 4.500.000 | 12 | Accessories | Còn bán |
| 5 | Chuột Gaming Razer | 2.500.000 | 8 | Accessories | Còn bán |
| 6 | Bàn phím Cơ Corsair | 3.200.000 | 0 | Accessories | Hết bán |
| 7 | Monitor LG 27 inch | 8.500.000 | 4 | Electronics | Còn bán |
| 8 | Đế laptop Stand | 1.200.000 | 15 | Accessories | Còn bán |

## 📝 Kết Quả Mong Đợi

### Câu 4: Sản phẩm còn hàng
- 7 sản phẩm (tất cả trừ Bàn phím Cơ Corsair)

### Câu 5: Sản phẩm có giá >= 30.000.000
- iPhone 15 Pro (32.000.000)

### Câu 6: Tất cả Accessories có isAvailable = true?
- **Không** (vì Bàn phím Cơ Corsair có isAvailable = false)

### Câu 7: Tổng giá trị kho hàng
- **Khoảng 600+ triệu VND**

### Câu 10: Sản phẩm đang bán và còn hàng
- 7 sản phẩm

## ✨ Tính Năng Bổ Sung

- Giao diện web đẹp mắt với CSS3
- Hiển thị giá tiền với định dạng tiền Việt Nam
- Bảng biểu dữ liệu rõ ràng
- Responsive design (tương thích di động)

## 📚 Tham Khảo

- [MDN Web Docs - JavaScript Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Web Docs - Constructor Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

## 📞 Liên Hệ & Hỗ Trợ

Nếu có vấn đề, vui lòng liên hệ với giảng viên hướng dẫn.

---

**Ngày tạo**: 21/01/2026  
**Trạng thái**: Hoàn thành ✓
