const addMovieModal = document.getElementById('add-modal');
const addMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelBtn = document.querySelector('.modal__actions').firstElementChild;
const addMovieButton = cancelBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const deleteMovieHandler = (id) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === id) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const ul = document.getElementById('movie-list');
  ul.children[movieIndex].remove();
};

const renderMovieList = (id, title, imageUrl, rating) => {
  const ul = document.getElementById('movie-list');
  const li = document.createElement('li');
  li.className = 'movie-element';
  li.innerHTML = `
  <div class="movie-element__image">
  <img src="${imageUrl}" alt="${title}"/>
  </div>
  <div class="movie-element__info">
  <h2>${title}</h2>
  <p>${rating}/5 stars</p>
  </div>
  `;
  ul.append(li);
  li.addEventListener('click', deleteMovieHandler.bind(null, id));
};

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
    id: Math.random().toString(),
    title: titleValue,
    image: imageValue,
    rating: ratingValue,
  };

  movies.push(newMovies);
  console.log(movies);
  clearMovieInputs();
  toggleMovieModal();
  updateUI();
  renderMovieList(
    newMovies.id,
    newMovies.title,
    newMovies.image,
    newMovies.rating,
  );
};

addMovieBtn.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);

cancelBtn.addEventListener('click', () => {
  backdropClickHandler();
});

addMovieButton.addEventListener('click', addMovieHandler);
