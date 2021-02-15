import { apiMovieCard } from '../movieCard/movieCard.js';
const inputFormRef = document.querySelector('.search-form');
const buttonWatchRef = document.querySelector('.button.watch');
const buttonQueueRef = document.querySelector('.button.queue');

const refs = {
  ul: document.querySelector('.film-list'),
};

function imgOpen (event) {
  if (event.target.parentNode.nodeName !== 'LI') {
    return;
  }
  let id = event.target.parentNode.dataset.id;
  apiMovieCard(id);
  inputFormRef.classList.add('is-hidden');
  buttonWatchRef.classList.add('is-hidden');
  buttonQueueRef.classList.add('is-hidden');
}

refs.ul.addEventListener('click', imgOpen);
