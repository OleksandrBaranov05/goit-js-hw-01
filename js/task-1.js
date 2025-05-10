function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
//   console.log('totalPrice =', totalPrice);
  const msg = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//   console.log('msg =', msg);
  return msg;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));