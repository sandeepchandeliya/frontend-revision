/*------------- ARROW FUNCTION ----------------*/

const greetUser = (name, timeOfDay) => {
  const greeting = `Good ${timeOfDay}, ${name}!`;
  return greeting;
};

// no argument parameter
() => {};

// exactly one para / arhument
(arg) => {};

// one expression body
(a, b) => a + b;

// more than one expression in function body
(a, b) => {
  a *= 2;
  return a + b;
};

//Function returns an object
const loadPerson = pName => ({name: pName });