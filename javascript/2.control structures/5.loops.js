// FOR LOOP
//Use this when you know exactly how many times you
// want the loop to run. It groups initialization, condition, and incrementation together.

// Counts from 1 up to 3
for (let i = 1; i <= 3; i++) {
  // console.log("Count:", i);
}

// Output:
// Count: 1
// Count: 2
// Count: 3

// FOR OF LOOP
//Use this to iterate directly over the values of an iterable
// data structure like an Array, String, Map, or Set
const colors = ['red', 'black', 'yellow'];
for (const color of colors) {
  // console.log(`Color: ${color}`)
}

//FOR IN LOOP
//Use this to iterate over the keys (properties) of an object.
// While it can be used on arrays to get indices,
// it is best reserved for objects because it iterates over all enumerable properties

const user = { name: 'alex', age: 28, role: 'admin' };

for(const key in user){
  // console.log(`${key}: ${user[key]}`) // use ->objet[key] to acces the data
}


// WHILE LOOP
//Use this when you want the loop to continue running 
// as long as a specified condition evaluates to true.
//  You typically use this when you do not know the exact number of iterations in advance.

let stock =3;
while(stock >0){
  console.log("Item sold! remaining stock: ", stock);
  stock--;
}

