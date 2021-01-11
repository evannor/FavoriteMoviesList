const addMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById("backdrop");
const modal = document.getElementById("add-modal");
const cancelBtn = modal.querySelector(".btn--passive");
const addMovieToList = cancelBtn.nextElementSibling;
const userInputs = modal.querySelectorAll("input");
const emptyMovieList = document.getElementById('entry-text');
const movieList = document.getElementById('movie-list');
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

// Function to toggle backdrop appearing
const addBackdrop = () => {
  backdrop.classList.add('visible');
};

// Created to tweak code and fix issue with showing addMovieModal if user clicks on backdrop
const closeMovieModal = () => {
  modal.classList.remove('visible');
  backdrop.classList.remove('visible');
};

// Toggle modal appearing, along with backdrop
const showMovieModal = () => {
  modal.classList.add('visible');
  addBackdrop();
  clearUserInput();
};

// clear user inputs in modal
const clearUserInput = () => {
  userInputs.forEach(input => input.value = "");
};

const updateUI = () => {
  if(movies.length > 0) {
    // Clears section display
    emptyMovieList.style.display = "none";
  } else {
    emptyMovieList.style.display = "block";
  }
};

const confirmRemoveMovie = (movieId) => {
  let movieIndex = 0;
  for(const movie of movies) {
    if(movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  // Remove element at specified index
  movies.splice(movieIndex, 1);
  movieList.children[movieIndex].remove();
  cancelMovieDeletion();
};

const cancelMovieDeletion = () => {
  deleteMovieModal.classList.remove("visible");
  backdrop.classList.remove('visible');
};

const removeMovie = (movieId) => {
  addBackdrop();
  deleteMovieModal.classList.add("visible");

  const cancelDeleteBtn = deleteMovieModal.querySelector(".btn--passive");
  const deleteBtn = deleteMovieModal.querySelector(".btn--danger");
  cancelDeleteBtn.addEventListener('click', cancelMovieDeletion);
  deleteBtn.addEventListener('click', confirmRemoveMovie.bind(null, movieId));
};

const renderMovieItem = (id, title, imageURL, rating) => {
  const newMovie = document.createElement('li');
  newMovie.className = "movie-element";
  newMovie.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageURL}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovie.addEventListener('click', removeMovie.bind(null, id));
  movieList.appendChild(newMovie);
};

// Takes userInput and verifies that correct input was provided from user
const addMovieHandler = () => {
  const movieTitle = userInputs[0].value;
  const imageURL = userInputs[1].value;
  const rating = userInputs[2].value;

  if (
    movieTitle.trim() === "" || 
    imageURL.trim() === "" || 
    rating.trim() === "" || 
    +rating < 1 || +rating > 5) {
      alert("Please enter valid values in the fields.");
      return;
  }

  // Creates movie object, adds to movie[], and clears inputs
  const newMovie = {
    // Can add check to make sure that id does not exist elsewhere
    id: Math.random().toString(),
    title: movieTitle,
    image: imageURL,
    rating: rating
  };
  movies.push(newMovie);
  backdrop.classList.remove('visible');
  modal.classList.remove('visible');
  clearUserInput();
  updateUI();
  renderMovieItem(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
};

const backdropClick = () => {
  closeMovieModal();
  cancelMovieDeletion();
};

// EventListeners for the page
addMovieBtn.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClick);
cancelBtn.addEventListener('click', closeMovieModal);
addMovieToList.addEventListener('click', addMovieHandler);