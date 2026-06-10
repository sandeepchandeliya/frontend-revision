const movies = [
  'the dark knight',
  'matrix-trilogy',
  'lord of the rings',
  'superman',
  'justice league',
  'spiderman',
];

movies.forEach((movie, idx) => {
  console.log(`Index ${idx} : ${movie}`);
});

//1.--> Returns undefined: It does not create a new array;
//  it only performs actions on the existing elements.

//2.--> Cannot break: You cannot use break or continue to stop the loop early.
//  If you need to stop early, use a for...of loop instead.

//3.--> Skips empty slots: It will not execute for empty slots in sparse arrays.
