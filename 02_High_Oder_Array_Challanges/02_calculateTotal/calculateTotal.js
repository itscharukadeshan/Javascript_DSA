/** @format */

const productsArray = [
  { name: "Apple", price: 0.5, quantity: 5 },
  { name: "Banana", price: 0.6, quantity: 5 },
  { name: "Watermelon", price: 0.8, quantity: 8 },
];

const calculateTotal = (productsArray, taxRate) => {
  const totalSum = productsArray.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  const taxAmount = (totalSum * taxRate) / 100;

  const totalSumWithTax = totalSum + taxAmount;

  return parseFloat(totalSumWithTax.toFixed(2));
};

console.log(calculateTotal(productsArray, 8));
