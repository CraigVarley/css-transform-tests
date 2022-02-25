const card = document.querySelector('.card');
card.addEventListener('click', flipcard);

function flipcard() {
  card.classList.toggle('flipcard');
}
