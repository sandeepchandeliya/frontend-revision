// map() changes the shape of every item (turns raw potatoes into french fries).
const movies = [
  'the dark knight',
  'matrix-trilogy',
  'lord of the rings',
  'superman',
  'justice league',
  'spiderman',
];

const capMovies = movies.map((movie) => movie.toUpperCase());
console.log(capMovies);

// Why and How to Use map()
//1-->Immutability: It protects your data by creating
// a new array instead of rewriting your original data.

//2-->Clean Code: It eliminates the need to create empty arrays
//  and manually push items using a loop.

//3-->React Friendly:
// It is the standard way to render list items in modern frontend frameworks.
