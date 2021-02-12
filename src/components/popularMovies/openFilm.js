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
