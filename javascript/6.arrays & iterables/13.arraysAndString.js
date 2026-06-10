// SPLIT AND JOIN METHOD

// --> split() → String ➜ Array
// --> join() → Array ➜ String

const str = 'apple; bannana;orange; mango';
const fruitsArr = str.split(';');
// console.log(fruitsArr);

const nameFrag = ['sandeep', 'chandeliya'];
const name = nameFrag.join(' ');
console.log(name);
