const backdrop = document.getElementById("backdrop");
const modal = document.getElementById("add-modal");
const cancelBtn = document.querySelector(".btn--passive");

// Function to toggle backdrop appearing
const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleModal = () => {
  modal.classList.toggle('visible');
  toggleBackdrop();
};

// Function/eventListener to show modal to add movie
document.querySelector('header button').addEventListener('click', () => {
  // document.getElementById("add-modal").className = ".modal.visible";
  toggleModal();
});

backdrop.addEventListener('click', toggleModal);
cancelBtn.addEventListener('click', toggleModal);