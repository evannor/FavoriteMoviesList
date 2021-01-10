const addMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById("backdrop");
const modal = document.getElementById("add-modal");
const cancelBtn = modal.querySelector(".btn--passive");
const addMovieToList = cancelBtn.nextElementSibling;
const userInputs = modal.querySelectorAll("input");

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
  // for(i = 0; i < userInputs.length; i++) {
  //   userInputs[i].value = "";
  // }
  clearUserInput();
};

// EventListeners for the page
addMovieBtn.addEventListener('click', toggleModal);
backdrop.addEventListener('click', toggleModal);
cancelBtn.addEventListener('click', toggleModal);
addMovieToList.addEventListener('click', addMovieHandler);