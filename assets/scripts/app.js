const addMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById("backdrop");
const modal = document.getElementById("add-modal");
const cancelBtn = modal.querySelector(".btn--passive");
const addMovieToList = cancelBtn.nextElementSibling;
const userInputs = modal.querySelectorAll("input");

// Function to toggle backdrop appearing
const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

// Toggle modal appearing, along with backdrop
const toggleModal = () => {
  modal.classList.toggle('visible');
  toggleBackdrop();
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
};

// EventListeners for the page
addMovieBtn.addEventListener('click', toggleModal);
backdrop.addEventListener('click', toggleModal);
cancelBtn.addEventListener('click', toggleModal);
addMovieToList.addEventListener('click', addMovieHandler);