// SETS

const ids = new Set(['hi', 'from', 'Sets!']);

ids.add(2);

if (ids.has('hi')) {
  ids.delete('hi');
}
for (const entry of ids.entries()) {
  // console.log(entry[0]);
}

//A Set is a collection of unique values.

//--->Complex Example (Interview Favorite)
// Find duplicate numbers.
const nums = [1, 2, 3, 2, 4, 5, 3];

const seen = new Set();
const duplicates = new Set();

for (const num of nums) {
  if (seen.has(num)) {
    duplicates.add(num);
  } else {
    seen.add(num);
  }
}

console.log([...duplicates]);
