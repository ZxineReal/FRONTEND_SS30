let choice;
let books = [];
let carts = [];

const showBooksByCategory = (array) => {
  if (array.length) {
    const bookCategoryInput = prompt("Mời bạn nhập thể loại sách: ");
    const checkCategory = array.filter(
      (book) => book.category === bookCategoryInput
    );
    if (checkCategory.length) {
      console.log(`Danh sách sách có thể loại ${bookCategoryInput}: `);
      console.table(checkCategory);
    } else {
      alert("Thể loại sách không tồn tại!");
    }
  } else {
    alert("Kho sách rỗng");
  }
};

const addBooks = (array) => {
  const bookName = prompt("Mời bạn nhập tên sách: ");
  const bookPrice = +prompt("Mời bạn nhập giá của sách: ");
  const bookQuantity = +prompt("Mời bạn nhập số lượng sách: ");
  const bookCategory = prompt("Mời bạn nhập thể loại sách: ");

  const newBook = {
    id: Math.ceil(Math.random() * 10000000),
    name: bookName,
    price: bookPrice,
    quantity: bookQuantity,
    category: bookCategory,
  };

  array.push(newBook);
  alert("Thêm sách thành công!");
};

const findBooks = (array) => {
  const findStyle = prompt(`
        a. Tìm kiếm theo tên
        b. Tìm kiếm theo id
        `);
  if (findStyle === "a") {
    const bookNameInput = prompt("Mời bạn nhập tên sách cần tìm: ");
    const bookNameFilter = array.filter((book) =>
      book.name.includes(bookNameInput)
    );
    if (bookNameFilter.length) {
      console.table(bookNameFilter);
    } else {
      alert("Không tìm thấy sách!");
    }
  } else if (findStyle === "b") {
    const bookIdInput = +prompt("Mời bạn nhập id sách: ");
    const findBookIndex = array.findIndex((book) => book.id === bookIdInput);
    if (findBookIndex !== -1) {
      console.table(array[findBookIndex]);
    } else {
      alert("Không tìm thấy sách");
    }
  } else {
    alert("Không hợp lệ!");
  }
};

const buyBook = (array, cart) => {
  console.log("Danh sách sách: ");
  console.table(array);
  const bookIdInput = +prompt("Mời bạn nhập id sách cần mua: ");
  const findBookIndex = array.findIndex((book) => book.id === bookIdInput);
  if (findBookIndex !== -1) {
    const bookBuyQuantity = +prompt("Mời bạn nhập số lượng sách cần mua: ");
    if (bookBuyQuantity > array[findBookIndex].quantity) {
      alert("Số lượng sách không đủ!");
    } else {
      const cartItem = {
        id: bookIdInput,
        name: array[findBookIndex].name,
        price: array[findBookIndex].price,
        quantity: bookBuyQuantity,
        category: array[findBookIndex].category,
      };
      cart.push(cartItem);
      array[findBookIndex].quantity -= bookBuyQuantity;
      alert("Thêm vào giỏ hàng thành công!");
    }
  } else {
    alert("Không tìm thấy sách!");
  }
};

const sortBook = (array) => {
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

const totalBookInCart = (array) => {
  let sum = 0;
  let bookQuantity = 0;
  if (array.length) {
    array.forEach((book) => {
      sum += book.price * book.quantity;
      bookQuantity += book.quantity;
    });
    console.log(` Tổng số sách trong giỏ hàng là: ${bookQuantity}`);
    console.log(` Tổng tiền trong giỏ hàng là: ${sum}`);
  } else {
    alert("Giỏ hàng trống!");
  }
};

const totalBookQuantity = (array) => {
  let totalBook = 0;
  if (array.length) {
    array.forEach((book) => {
      totalBook += book.quantity;
    });
    console.log(` Tổng số lượng sách trong kho là: ${totalBook}`);
  } else {
    alert("Số lượng sách trong kho trống");
  }
};

do {
  choice = +prompt(`
    Quản lý kho sách
    1. Hiển thị sách theo thể loại
    2. Thêm sách mới vào kho
    3. Tìm kiếm sách 
    4. Mua sách
    5. Sắp xếp sách theo giá
    6. Tính tổng lượng sách đã mua và in ra tổng tiền trong giỏ hàng
    7. Hiển thị tổng số lượng sách trong kho
    8. Thoát chương trình
    `);
  switch (choice) {
    case 1:
      showBooksByCategory(books);
      break;
    case 2:
      addBooks(books);
      break;
    case 3:
      findBooks(books);
      break;
    case 4:
      buyBook(books, carts);
      break;
    case 5:
      sortBook(books);
      break;
    case 6:
      totalBookInCart(carts);
      break;
    case 7:
      totalBookQuantity(books);
      break;
    case 8:
      alert("Thoát chương trình!");
      break;
    default:
      alert("Không hợp lệ!");
  }
} while (choice !== 8);
