const addMovieModal = document.getElementById('add-modal');
const addMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelBtn = document.querySelector('.modal__actions').firstElementChild;
const addMovieButton = cancelBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');

const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const backdropClickHandler = () => {
  toggleMovieModal();
  clearMovieInputs();
};

const clearMovieInputs = () => {
  for (const movieInput of userInputs) {
    movieInput.value = '';
  }
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid rating between 1 to 5.!');
    return;
  }

  const newMovies = {
    title: titleValue,
    image: imageValue,
    rating: ratingValue,
  };

  movies.push(newMovies);
  console.log(movies);
  clearMovieInputs();
  toggleMovieModal();
};

addMovieBtn.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);

cancelBtn.addEventListener('click', () => {
  backdropClickHandler();

});

addMovieButton.addEventListener('click', addMovieHandler);
