const personData = [{ name: 'sandeep' }, { name: 'prateek' }];

// find does not copy the object/array
// it works with same object reference
const findPerson = personData.find((person, idx, persons) => {
  return person.name === 'prateek';
});

console.log(findPerson);

const findPersIndex = personData.findIndex((person) => {
  return person.name === 'sandeepy';
});
console.log(findPersIndex);
