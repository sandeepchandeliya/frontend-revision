// call  -> run now
// apply -> run now with array
// bind  -> return function for later

// BIND → Does NOT run immediately

// Instead, it returns a NEW function.
//SYNTAX --> function.bind(thisValue)

function greet() {
  console.log('Hello ', this.name);
}

const user = {
  name: 'Sandeep',
};

const newFun = greet.bind(user);
// newFun();

//CALL → “Call the function immediately”
// SYNTAX--->function.call(thisValue, arg1, arg2)

function greetWithLocation(city, country) {
  console.log('Hello ' + this.name + ' from ' + city + ' ,' + country);
}

const person1 = {
  name: 'Aditi',
};

// greetWithLocation.call(person1,"Jabalpur", "India");

//APPLY → Same as call, but arguments are passed in ARRAY
//SYNTAX--->function.apply(thisValue, [arg1, arg2])

function greet2(city, country) {
  console.log(`Hello ${this.name} from ${city} , ${country}!`);
}

const person2 = {
  name: 'Sandeep',
};

greet2.apply(person2, ["Jabalpue", "India"]);
