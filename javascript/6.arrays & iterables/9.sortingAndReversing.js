//-->these methods mutate (change) the original array directly.
// If you want to keep your original array safe,
// you should use their modern, non-mutating alternatives:
// .toSorted() and .toReversed()
const heroes = ['Superman', 'Batman', 'Aquaman', 'Flash'];

heroes.sort();
// console.log(heroes);
// console.log(heroes.reverse());
// console.log(heroes)// mutated array

const arr = [3,56,7,9,1,546,4];
arr.sort((a, b) => a - b); // ascending order
// arr.sort((a, b) => b - a); // descending order
console.log(arr);
