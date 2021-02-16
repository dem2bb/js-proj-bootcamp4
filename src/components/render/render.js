import '../header/header.js';
import { getWatched, getQueue } from '../movieCard/movieCard.js';
import movie from '../../templates/movieCardsFromLocalStorage.hbs';

refs.linkLibrary.addEventListener('click', renderWatched);
refs.buttonWatch.addEventListener('click', renderWatched);
refs.buttonQueue.addEventListener('click', renderQueue);
const pagDivRef = document.querySelector('#pagDiv');

function renderWatched() {
  pagDivRef.classList.add('is-hidden');
  const markup = [];
  const watchedArr = getWatched();
  watchedArr.obj.forEach(data => {
    markup.push(movie(data));
  });
  rend(markup);
}

function renderQueue() {
  const markup = [];
  const queueArr = getQueue();
  console.log(queueArr.obj);
  queueArr.obj.forEach(data => {
    markup.push(movie(data));
  });
  rend(markup);
}

function rend(data) {
  const ulRefs = document.querySelector('.film-list');
  ulRefs.innerHTML = '';
  data.forEach(item => ulRefs.insertAdjacentHTML('beforeend', item));
}
