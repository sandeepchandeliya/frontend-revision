//ARRAY DESTRUCTURING

const arr = ['red', 'green', 'blue'];
const [first, second, third] = arr;
// console.log(first, second, third);

//OBJECT DESTRUCTURING

const user = {
  name: 'Sandeep',
  age: 30,
  city: 'Bhopal',
};

const { name, age } = user;
// console.log(name, age);

//COMPLEX EXAMPLE ARRAY + OBJECT DESTRUCTURING

const updatedUser = [
  {
    id: 1,
    username: 'Sandeep',
    skills: ['HTML', 'CSS', 'React'],
  },
];

const [
  {
    username,
    skills: [firstSkill],
  },
] = updatedUser;

console.log(name);
console.log(firstSkill)
