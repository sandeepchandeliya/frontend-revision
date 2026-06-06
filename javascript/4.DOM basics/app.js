const section = document.querySelector('section');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  section.classList.toggle('invisible');
});

// const h1 = document.getElementById('main-title');

// h1.textContent ="some new title";
// h1.style.color ='white';
// h1.style.backgroundColor ="black";

// const li = document.querySelector('li:last-of-type');
// li.textContent = li.textContent + '(changed!)';

// const listItemsElements = document.querySelectorAll('li');

// for (const listItemEl of listItemsElements) {
//   console.dir(listItemEl);
// }
