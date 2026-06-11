//----> SPREAD OPERATOR

//1-->copying an array
const numbers = [1, 2, 4, 56, 6, 7];
const copied = [...numbers];
// console.log(copied);

//2-->Merging Arrays

const frontend = ['html', 'css'];
const backend = ['node', 'mongoDB'];

const fullstack = [...frontend, ...backend];
// console.log(fullstack);

//3-->Adding Elements

const arr = [1, 2, 3];
const newArr = [...arr, 4];
// console.log(newArr);

//4--> Updating Object Properties
const user = {
  name: 'Sandeep',
  age: 30,
};

const updatedUser = {
  ...user,
  age: 31,
};

// console.log(user, updatedUser);

//4-->Complex Nested objected
const userDetails = {
  name: 'Sandeep',
  address: {
    city: 'Bhopal',
    state: 'MP',
  },
};

// const updatedUserDetail = {
//   ...userDetails,
//   address: {
//     city: 'Jabalpur', --> this is wrong u will lose state value
//   },
// };

const updatedUserDetail = {
  ...userDetails,
  address: {
    ...userDetails.address, // --> doing this will not lose the data
    city: 'Jabalpur',
  },
};
// console.log(updatedUserDetail);

//5--->⭐ The Most Common React Interview Example
const reactUsers = [
  { id: 1, name: 'Sandeep' },
  { id: 2, name: 'Rahul' },
];
//update rahul's name

const updatedReactUser = reactUsers.map((user) =>
  user.id === 2
    ? {
        ...user,
        name: 'amit',
      }
    : user,
);

console.log(reactUsers, updatedReactUser);
