const btn = document.querySelector('button');
const form = document.querySelector('form');
// const btnClickHandler = () => {
//   console.log('button is clicked!!');
// };

// btn.addEventListener('click', btnClickHandler);

// setTimeout(() => {
//   btn.removeEventListener('click', btnClickHandler);
//   console.log('event lisener removed!!');
// }, 2000);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
});

btn.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('button clicked');
  console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('click', (event) => {
  console.log('div clicked');
  console.log(event);
});
