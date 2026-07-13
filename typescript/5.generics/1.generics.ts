let names: Array<string> = ['Max', 'Anna'];

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};
store.name = 'max';
store.isInstructor = true;
