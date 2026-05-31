const obj = { name: 'max' };
const obj2 = { name: 'max' };
const obj3 = obj2;

// console.log(obj === obj2); //----> this gives false
// console.log(obj3 === obj2); //---> this will yield true cuz pointing to same address
console.log(obj.name === obj2.name);
// arrays and obj are special kind
//array is also kind of object in javascript


const hobbies = ['gaming', 'cricket', 'gym'];
const moreHobbies = ['gaming', 'cricket', 'gym'];
// console.log(hobbies === moreHobbies)
