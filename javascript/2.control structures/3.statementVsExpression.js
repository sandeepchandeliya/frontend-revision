// The core difference is that an expression produces a value,
// while a statement performs an action

// 1. The entire line below is a STATEMENT.
// It instructs the browser to create a variable.
// "5 * 10" is an EXPRESSION inside that statement that evaluates to 50.
let total = 5 * 10;

// 2. The entire block below is an If-Statement (controls program flow).
// "total > 40" is an EXPRESSION that evaluates to true.
if (total > 40) {
  // This line is an Expression Statement (a function call with side effects).
  console.log('High total!');
}
