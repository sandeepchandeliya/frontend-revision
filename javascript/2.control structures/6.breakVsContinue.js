//The break statement exits a loop entirely,
//  whereas the continue statement skips the current iteration
//  and jumps directly to the next one.

//BREAK

// A loop meant to count from 1 to 5
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // Stops the loop completely when i is 3
  }
  console.log(i);
}

// Output:
// 1
// 2

console.log('------------------')
// CONTINUE

// A loop meant to count from 1 to 5
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Skips the rest of this iteration when i is 3
  }
  console.log(i);
}

// Output:
// 1
// 2
// 4
// 5