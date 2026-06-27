
//CALL METH0D
const person = {
  firstName: 'John',
  lastName: 'Doe',

  fullName() {
    console.log(this.firstName + ' ' + this.lastName);
  },
};

const fn = person.fullName;
fn.call(person);


// call() with parameters
// function introduce(city, country) {
//   console.log(
//     `I'm ${this.name} from ${city}, ${country}`
//   );
// }

// const person = {
//   name: "John"
// };

// introduce.call(person, "London", "UK");



// apply()

// apply() is almost identical.

// The only difference is how arguments are passed.

// Instead of

// call(person, "London", "UK")

// you write

// apply(person, ["London", "UK"])