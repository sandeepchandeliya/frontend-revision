const originalArray = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];

const sum = originalArray
  .map((obj) => obj.price)
  .reduce((prevValue, currValue) => {
    return prevValue + currValue;
  }, 0);

console.log(sum);

// We call .reduce() directly on the result of map()
//  (which produces an array, that's why this is possible).
//  Hence we can avoid storing the mapped array in a separate constant
//  or variable that we might not need in any other place.
