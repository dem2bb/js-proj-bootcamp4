import { apiMovieCard } from '../movieCard/movieCard.js';

const refs = {
  ul: document.querySelector('.film-list'),
};

function imgOpen(event) {
  if (event.target.parentNode.nodeName !== 'LI') {
    return;
  }
  let id = event.target.parentNode.dataset.id;
  apiMovieCard(id);
}

refs.ul.addEventListener('click', imgOpen);

function addBoxShadow(event) {
  if (event.target.parentNode.nodeName !== 'LI') {
    return;
  }
  event.target.parentNode.classList.add('box-shadow');
}
function removeBoxShadow(event) {
  event.target.parentNode.classList.remove('box-shadow');
}
refs.ul.addEventListener('mouseover', addBoxShadow);
refs.ul.addEventListener('mouseout', removeBoxShadow);
