let choice;
let phones = [];
let carts = [];

const showPhonesByCompany = (array) => {
  if (array.length) {
    const phoneCompanyInput = prompt("Mời bạn nhập hãng điện thoại:");
    const findPhoneCompany = array.find(
      (phone) => phone.company === phoneCompanyInput
    );
    if (findPhoneCompany !== -1) {
      console.log(` Danh sách điện thoại ${phoneCompanyInput}: `);
      console.table(findPhoneCompany);
    } else {
      alert("Không tìm thấy hãng điện thoại!");
    }
  } else {
    alert("Danh sách điện thoại trống!");
  }
};

const addPhone = (array) => {
  const phoneName = prompt("Mời bạn nhập tên điện thoại:");
  const phonePrice = +prompt("Mời bạn nhập giá điện thoại:");
  const phoneQuantity = +prompt("Mời bạn nhập số lượng điện thoại:");
  const phoneCompany = prompt("Mời bạn nhập hãng điện thoại:");

  const newPhone = {
    id: Math.ceil(Math.random() * 1000000),
    name: phoneName,
    price: phonePrice,
    quantity: phoneQuantity,
    company: phoneCompany,
  };
  array.push(newPhone);
  alert("Thêm điện thoại thành công!");
};

const findPhone = (array) => {
  const findStyle = `
        a. Tìm kiếm theo tên
        b. Tìm kiếm theo id
        `;
  if (findStyle === "a") {
    const phoneNameInput = prompt("Mời bạn nhập tên điện thoại:");
    const phoneNameFilter = array.filter(
      (phone) => phone.name === phoneNameInput
    );
    if (phoneNameFilter) {
      console.table(phoneNameFilter);
    } else {
      alert("Không tìm thấy điện thoại");
    }
  } else if (findStyle === "b") {
    const phoneIdInput = +prompt("Mời bạn nhập id điện thoại: ");
    const findPhoneIndex = array.findIndex(
      (phone) => phone.id === phoneIdInput
    );
    if (findPhoneIndex !== -1) {
      console.table(array[findPhoneIndex]);
    } else {
      alert("Không tìm thấy điện thoại");
    }
  } else {
    alert("Không hợp lệ");
  }
};

const buyPhone = (array, cart) => {
  const phoneIdInput = +prompt("Mời bạn nhập vào id điện thoại: ");
  const findPhoneIndex = array.findIndex((phone) => phone.id === phoneIdInput);
  if (findPhoneIndex !== -1) {
    const buyPhoneQuantity = +prompt("Mời bạn nhập số lượng cần mua: ");
    if (buyPhoneQuantity > cart[findPhoneIndex].quantity) {
      alert("Số lượng điện thoại trong kho không đủ");
    } else {
      const cartItem = {
        id: phoneIdInput,
        name: array[findPhoneIndex].name,
        price: array[findPhoneIndex].price,
        quantity: buyPhoneQuantity,
        company: array[findPhoneIndex].quantity,
      };
      cart.push(cartItem);
      array[findPhoneIndex].quantity -= buyPhoneQuantity;
      alert("Thêm sản phẩm vào giỏ hàng thành công");
    }
  } else {
    alert("Không tìm thấy điện thoại!");
  }
};

const payAllPhoneInCart = (cart) => {
  if (cart.length) {
    let sum = 0;
    cart.forEach((phone) => {
      sum += phone.price * phone.quantity;
    });
    console.log(` Tổng tiền trong giỏ hàng là: ${sum}`);
  } else {
    alert("Giỏ hàng trống!");
  }
};

const sortPhone = (array) => {
  const sortStyle = `
        a. Tăng dần
        b. Giảm dần
        `;
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

const showTotalPhone = (array) => {
  if (array.length) {
    let total = 0;
    array.forEach((phone) => {
      total += phone.price * phone.quantity;
    });
    console.log(` Tổng tiền của các điện thoại trong kho là: ${total}`);
  } else {
    alert("Không có điện thoại trong kho");
  }
};

do {
  choice = +prompt(`
        MENU
        1. Hiển thị danh sách điện thoại theo hãng
        2. Thêm điện thoại mới vào cửa hàng
        3. Tìm kiếm điện thoại 
        4. Mua điện thoại
        5. Thanh toán tất cả điện thoại trong giỏ hàng
        6. Sắp xếp điện thoại theo giá
        7. Hiển thị tổng số tiền của các điện thoại trong kho
        8. Hiển thị tổng số lượng điện thoại theo từng hàng
        9. Thoát chương trình
        `);
  switch (choice) {
    case 1:
      showPhonesByCompany(phones);
      break;
    case 2:
      addPhone(phones);
      break;
    case 3:
      findPhone(phones);
      break;
    case 4:
      buyPhone(phones, carts);
      break;
    case 5:
      payAllPhoneInCart(carts);
      break;
    case 6:
      sortPhone(phones);
      break;
    case 7:
      showTotalPhone(phones);
      break;
    case 8:
      break;
    case 9:
      alert("Thoát chương trình");
      break;
    default:
      alert("Không hợp lệ!");
  }
} while (choice !== 9);
