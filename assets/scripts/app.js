const toggleBackdrop = () => {
  document.getElementById("backdrop").classList.toggle('visible');
}

document.querySelector('header button').addEventListener('click', () => {
  // document.getElementById("add-modal").className = ".modal.visible";
  document.getElementById("add-modal").classList.toggle('visible');
  toggleBackdrop();
});