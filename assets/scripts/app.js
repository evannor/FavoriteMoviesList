document.querySelector('header button').addEventListener('click', () => {
  // document.getElementById("add-modal").className = ".modal.visible";
  document.getElementById("add-modal").classList.toggle('visible');
});