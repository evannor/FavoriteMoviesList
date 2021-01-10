const addMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById("backdrop");
const modal = document.getElementById("add-modal");
const cancelBtn = modal.querySelector(".btn--passive");
const addMovieToList = cancelBtn.nextElementSibling;
const userInputs = modal.querySelectorAll("input");
const emptyMovieList = document.getElementById('entry-text');
const movieList = document.getElementById('movie-list');

const movies = [];

// Function to toggle backdrop appearing
const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

// Toggle modal appearing, along with backdrop
const toggleModal = () => {
  modal.classList.toggle('visible');
  toggleBackdrop();
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

const renderMovieItem = (title, imageURL, rating) => {
  const newMovie = document.createElement('li');
  newMovie.className = "movie-element";
  newMovie.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageURL}" alt="${title}">
    </div>
    <div class="movie-element__infor">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;

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
    title: movieTitle,
    image: imageURL,
    rating: rating
  };
  movies.push(newMovie);
  toggleModal();
  clearUserInput();
  updateUI();
  renderMovieItem(newMovie.title, newMovie.image, newMovie.rating);
};

// EventListeners for the page
addMovieBtn.addEventListener('click', toggleModal);
backdrop.addEventListener('click', toggleModal);
cancelBtn.addEventListener('click', toggleModal);
addMovieToList.addEventListener('click', addMovieHandler);