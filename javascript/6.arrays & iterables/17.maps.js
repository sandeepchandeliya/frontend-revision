// WORKING WITH MAPS

const users = new Map();

users.set(1, 'Aditi');
users.set(2, 'Vinny');
users.set(3, 'Aarushi');

// console.log(users);

// console.log(users.get(2))

// console.log(users.has(3))
// console.log(users.size)

//--> LOOPING THROUGH A MAP

for (const [key, value] of users) {
  console.log(key, value);
}
