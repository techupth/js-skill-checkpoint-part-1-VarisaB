// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minFruit = { quantity: Infinity };
for (item of inventory) {
  item.quantity < minFruit.quantity ? (minFruit = item) : minFruit;
}
console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minFruit.name} ซึ่งมี ${minFruit.quantity} ชิ้น`
);
