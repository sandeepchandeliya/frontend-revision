
/*----------------- REST PARAMETER(REST OPERATOR)-----------------*/

const sumUp = (...numbers) => {
  let sum =0;
  for(const num of numbers){
    sum += num;
  }
  return sum;
}

console.log(sumUp(1,2,5,7,68,8));
console.log(sumUp(1,2,5,7,68,81,56,224,67));