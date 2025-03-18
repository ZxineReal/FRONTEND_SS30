let choice;
let carts = [];
let products = [
  {
    id: 1,
    name: "mèn mén",
    price: 20000,
    quantity: 20,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 2,
    name: "mứt",
    price: 80000,
    quantity: 21,
    category: "món ăn dân tộc Kinh",
  },
  {
    id: 3,
    name: "cơm lam",
    price: 40000,
    quantity: 15,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 4,
    name: "bánh đậu xanh",
    price: 60000,
    quantity: 30,
    category: "món ăn dân tộc Kinh",
  },
];

const showProductsByCategory = (array) => {
  const categoryInput = prompt("Mời bạn nhập tên danh mục: ");
  const checkCategory = array.filter(
    (value) => value.category === categoryInput
  );
  if (checkCategory.length) {
    console.log(`Danh sách ${categoryInput}: `);

    console.table(checkCategory);
  } else {
    alert("Danh mục không tồn tại");
  }
};

const buyProducts = (array) => {
  console.log("Danh sách sản phẩm: ");
  console.table(array);
  const productIdInput = +prompt("Mời bạn nhập id sản phẩm muốn mua: ");
  const findProductIndex = array.findIndex(
    (product) => product.id === productIdInput
  );
  if (findProductIndex !== -1) {
    const productBuyQuantity = +prompt("Mời bạn nhập số lượng muốn mua: ");
    if (productBuyQuantity > array[findProductIndex].quantity) {
      alert("Sản phẩm hiện không đủ số lượng!");
    } else {
      const cartItem = {
        id: productIdInput,
        name: array[findProductIndex].name,
        price: array[findProductIndex].price,
        quantity: productBuyQuantity,
        category: array[findProductIndex].category,
      };
      array[findProductIndex].quantity -= productBuyQuantity;
      carts.push(cartItem);

      alert("Thêm vào giỏ hàng thành công!");
    }
  } else {
    alert("Không tìm thấy sản phẩm");
  }
};

const sortProductByPrice = (array) => {
  const sortStyle = prompt(`
    a. Tăng dần
    b. Giảm dần
    `);
  if (sortStyle === "a") {
    array.sort((a, b) => a.price - b.price);
    alert("Sắp xếp thành công!");
    console.table(array);
  } else if (sortStyle === "b") {
    array.sort((a, b) => b.price - a.price);
    alert("Sắp xếp thành công!");
    console.table(array);
  } else {
    alert("Không hợp lệ!");
  }
};

const totalCarts = (array) => {
  let sum = 0;
  if (array.length) {
    array.forEach((product) => {
      sum += product.price * product.quantity;
    });
    console.log(` Tổng tiền trong giỏ hàng là: ${sum}`);
  } else {
    alert("Giỏ hàng trống!");
  }
};

do {
  choice = +prompt(`
        MENU
        1. Hiển thị các sản phẩm theo tên danh mục
        2. Chọn sản phẩm để mua
        3. Sắp xếp các sản phẩm theo giá
        4. Tính số tiền thanh toán trong giỏ hàng
        5. Thoát
        `);
  switch (choice) {
    case 1:
      showProductsByCategory(products);
      break;
    case 2:
      buyProducts(products);
      break;
    case 3:
      sortProductByPrice(products);
      break;
    case 4:
      totalCarts(carts);
      break;
    case 5:
      alert("Thoát chương trình");
      break;
    default:
      alert("Không hợp lệ!");
  }
} while (choice !== 5);
