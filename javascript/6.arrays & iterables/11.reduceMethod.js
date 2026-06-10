// REDUCE METHOD
// SYNTAX ---> array.reduce((accumulator, currentValue) => {
//   return updatedAccumulator;
// }, initialValue);

// 1 example -->
const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((prevValue, currValue) => {
  return prevValue + currValue;
}, 0);
// console.log(sum);

// 2 example common interview Question-->
const cart = [
  { name: 'Laptop', price: 50000 },
  { name: 'Mouse', price: 1000 },
  { name: 'Keyboard', price: 2000 },
];

const totalPrice = cart.reduce((prevPrice, currPrice) => {
  return prevPrice + currPrice.price;
  // console.log(currPrice.price)
}, 0);

// console.log(`Total price of cart is : ${totalPrice}`);

// 3 example Count occurrences of words. --->
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const result = fruits.reduce((acc, fruit) => {
  if (acc[fruit]) {
    acc[fruit]++;
  } else {
    acc[fruit] = 1;
  }
  return acc;
}, {});
console.log(result);

// before first iteration -->acc = {}
