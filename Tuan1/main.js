/**
 * BÀI TẬP JAVASCRIPT - QUẢN LÝ SẢN PHẨM
 * =====================================
 */

// ===== CÂU 1: Constructor Function Product =====
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// ===== CÂU 2: Khởi tạo mảng products với ít nhất 6 sản phẩm, 2 danh mục khác nhau =====
const products = [
  new Product(1, 'Laptop Dell XPS 13', 25000000, 5, 'Electronics', true),
  new Product(2, 'iPhone 15 Pro', 32000000, 3, 'Electronics', true),
  new Product(3, 'Samsung Galaxy S24', 28000000, 7, 'Electronics', true),
  new Product(4, 'Tai nghe Bluetooth Sony', 4500000, 12, 'Accessories', true),
  new Product(5, 'Chuột Gaming Razer', 2500000, 8, 'Accessories', true),
  new Product(6, 'Bàn phím Cơ Corsair', 3200000, 0, 'Accessories', false),
  new Product(7, 'Monitor LG 27 inch', 8500000, 4, 'Electronics', true),
  new Product(8, 'Đế laptop Stand', 1200000, 15, 'Accessories', true),
];

console.log('='.repeat(60));
console.log('DANH SÁCH SẢN PHẨM BAN ĐẦU');
console.log('='.repeat(60));
console.table(products);

// ===== CÂU 3: Tạo chi nhánh mới chỉ chứa name, price =====
console.log('\n' + '='.repeat(60));
console.log('CÂU 3: Tạo chi nhánh mới (name, price)');
console.log('='.repeat(60));

const productSimple = products.map(p => ({
  name: p.name,
  price: p.price
}));
console.table(productSimple);

// ===== CÂU 4: Lọc ra các sản phẩm còn hàng (quantity > 0) =====
console.log('\n' + '='.repeat(60));
console.log('CÂU 4: Sản phẩm còn hàng (quantity > 0)');
console.log('='.repeat(60));

const availableProducts = products.filter(p => p.quantity > 0);
console.log(`Số sản phẩm còn hàng: ${availableProducts.length}`);
console.table(availableProducts);

// ===== CÂU 5: Kiểm tra xem có sản phẩm nào có giá trên 30.000.000 hay không =====
console.log('\n' + '='.repeat(60));
console.log('CÂU 5: Kiểm tra sản phẩm có giá trên 30.000.000');
console.log('='.repeat(60));

const expensiveProducts = products.filter(p => p.price >= 30000000);
if (expensiveProducts.length > 0) {
  console.log('✓ Có sản phẩm có giá >= 30.000.000:');
  console.table(expensiveProducts);
} else {
  console.log('✗ Không có sản phẩm nào có giá >= 30.000.000');
}

// ===== CÂU 6: Kiểm tra tất cả sản phẩm danh mục "Accessories" có isAvailable = true =====
console.log('\n' + '='.repeat(60));
console.log('CÂU 6: Kiểm tra sản phẩm danh mục "Accessories"');
console.log('='.repeat(60));

const accessoriesProducts = products.filter(p => p.category === 'Accessories');
const allAccessoriesAvailable = accessoriesProducts.every(p => p.isAvailable === true);

console.log('Sản phẩm Accessories:');
console.table(accessoriesProducts);
console.log(`\nTất cả sản phẩm Accessories có isAvailable = true? ${allAccessoriesAvailable ? '✓ CÓ' : '✗ KHÔNG'}`);

// ===== CÂU 7: Tính tổng giá trị kho hàng (price × quantity) =====
console.log('\n' + '='.repeat(60));
console.log('CÂU 7: Tính tổng giá trị kho hàng');
console.log('='.repeat(60));

const totalInventoryValue = products.reduce((sum, p) => {
  return sum + (p.price * p.quantity);
}, 0);

console.log('Chi tiết giá trị từng sản phẩm:');
products.forEach(p => {
  const value = p.price * p.quantity;
  console.log(`  ${p.name}: ${p.price.toLocaleString('vi-VN')} × ${p.quantity} = ${value.toLocaleString('vi-VN')} VND`);
});
console.log(`\n✓ Tổng giá trị kho hàng: ${totalInventoryValue.toLocaleString('vi-VN')} VND`);

// ===== CÂU 8: Dùng for...of duyệt mảng products =====
console.log('\n' + '='.repeat(60));
console.log('CÂU 8: Duyệt mảng dùng for...of');
console.log('='.repeat(60));

for (const product of products) {
  const status = product.isAvailable ? 'Còn bán' : 'Hết bán';
  console.log(`${product.id}. ${product.name} - Danh mục: ${product.category} - Trạng thái: ${status}`);
}

// ===== CÂU 9: Dùng for...in để in tên thuộc tính và giá trị =====
console.log('\n' + '='.repeat(60));
console.log('CÂU 9: Duyệt thuộc tính dùng for...in (sản phẩm đầu tiên)');
console.log('='.repeat(60));

const firstProduct = products[0];
console.log(`Thuộc tính của sản phẩm: ${firstProduct.name}`);
for (const key in firstProduct) {
  console.log(`  ${key}: ${firstProduct[key]}`);
}

// ===== CÂU 10: Lấy danh sách tên sản phẩm đang bán và còn hàng =====
console.log('\n' + '='.repeat(60));
console.log('CÂU 10: Danh sách tên sản phẩm đang bán và còn hàng');
console.log('='.repeat(60));

const availableProductNames = products
  .filter(p => p.isAvailable === true && p.quantity > 0)
  .map(p => p.name);

console.log('Danh sách sản phẩm đang bán và còn hàng:');
availableProductNames.forEach((name, index) => {
  console.log(`  ${index + 1}. ${name}`);
});
console.log(`\nTổng số: ${availableProductNames.length} sản phẩm`);

console.log('\n' + '='.repeat(60));
console.log('KẾT THÚC BÀI TẬP');
console.log('='.repeat(60));
