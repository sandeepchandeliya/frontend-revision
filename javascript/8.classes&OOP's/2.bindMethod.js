// Unlike call() and apply(),

// bind() DOES NOT execute the function.

// It returns a new function.


function greet(){
  console.log(this.name);
}

const person = {
  name: "John",
}

const newFunction = greet.bind(person);
console.log(newFunction);
newFunction();


