// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(allproduct, promotion) {
  // let totalPrice = allproduct.reduce(
  //   (acc, curr) => (acc += curr.price * curr.quantity),
  //   0
  // );
  let totalPrice = 0;
  for (let product of allproduct) {
    totalPrice += product.price * product.quantity;
  }
  switch (promotion) {
    case "SALE20":
      totalPrice *= 0.8;
      break;
    case "SALE50":
      totalPrice *= 0.5;
      break;
  }
  return totalPrice;
}

console.log(calculateTotalPrice(products, promotionCode));
