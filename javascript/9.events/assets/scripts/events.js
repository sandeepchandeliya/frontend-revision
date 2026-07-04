const btn = document.querySelector('button');

const btnClickHandler = () => {
  console.log('button is clicked!!');
};

btn.addEventListener('click', btnClickHandler);

setTimeout(() => {
  btn.removeEventListener('click', btnClickHandler);
  console.log('event lisener removed!!');
}, 2000);
