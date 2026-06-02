//this is function expression
// this is hoisted to top of the file but not initializsd/defined
// cant be declared anywhere in the file 
const startGame = function () {
  console.log('Game is starting...');
};

//this is function declaration / fucntion statement
// this is hoisted to top of the file can be declared from anywhere
function startGame() {
  console.log('Game is starting soon....');
}
