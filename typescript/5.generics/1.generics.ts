let names: Array<string> = ['Max', 'Anna'];

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};
store.name = 'max';
store.isInstructor = true;

function merge<T, U>(a: T, b: U) {
  return [a, b];
}

let ids = merge(1, 'max');

function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const merged = mergeObj({ userName: 'Sandeep' }, { age: 31 });
console.log(merged);

class User<T> {
  constructor(public id: T) {}
}

const newUser = new User('i1');

newUser.id 