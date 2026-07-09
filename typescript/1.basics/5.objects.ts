let user: {
  name: string;
  age: number;
  hobbies: string[];
  role: {
    desc: string;
    id: number;
  };
} = {
  name: 'sand',
  age: 31,
  hobbies: ['sports', 'gaming'],
  role: {
    desc: 'cs stud',
    id: 119,
  },
};

// RECORD types
let data: Record<string, string | number>; 
// -> here record means object{}

data = {
  entry1: 1,
  entry2: 'some string',
};
