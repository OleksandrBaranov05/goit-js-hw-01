function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
//   console.log('totalPrice =', totalPrice);
  const msg = `Shipping to ${country} will cost ${totalPrice} credits`;
//   console.log('msg =', msg);
  return msg;
}

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));
