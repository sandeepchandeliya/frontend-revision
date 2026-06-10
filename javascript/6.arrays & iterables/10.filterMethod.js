//1--> filter method is like security guard outside a VIP club.
//he guard looks at every single person in line, checks if they meet a specific rule,
// and either lets them into the new VIP room or kicks them out.
//2-->It always returns a brand-new array
//3-->It never changes the original array
//4-->Your code inside must return true (let them in) or false (kick them out).

const movies = [
  'the dark knight',
  'matrix-trilogy',
  'lord of the rings',
  'superman',
  'justice league',
  'spiderman',
];

const superHeroMovies = movies.filter((movie, idx, arr) => {
  if (movie === 'matrix-trilogy' || movie === 'lord of the rings') {
    return false; //false means dropped from new arr
  } else {
    return true;
  }
});

console.log(superHeroMovies);
