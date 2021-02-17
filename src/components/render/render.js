import '../header/header.js';
import { getWatched, getQueue } from '../movieCard/movieCard.js';
import movie from '../../templates/movieCardsFromLocalStorage.hbs';
import removeLoader from '../loader/remove-loader.js';

refs.linkLibrary.addEventListener('click', renderLibrary);
refs.buttonWatch.addEventListener('click', renderWatched);
refs.buttonQueue.addEventListener('click', renderQueue);
const mainRefs = document.querySelector('.main-cont');

function renderLibrary () {
  mainRefs.innerHTML = `<div class="container"><div class="loader"></div><ul class="film-list"></ul></div><div id="pagDiv"></div>`;
  const markup = [];
  const watchedArr = getWatched();
  watchedArr.obj.forEach(data => {
    markup.push(movie(data));
  });
  setTimeout(() => rend(markup), 500);
}

function renderWatched () {
  const markup = [];
  const watchedArr = getWatched();
  watchedArr.obj.forEach(data => {
    markup.push(movie(data));
  });
  rend(markup);
  refs.buttonQueue.classList.remove('is-active');
  refs.buttonWatch.classList.add('is-active');
}

function renderQueue () {
  const markup = [];
  const queueArr = getQueue();
  queueArr.obj.forEach(data => {
    markup.push(movie(data));
  });
  rend(markup);
  refs.buttonQueue.classList.add('is-active');
  refs.buttonWatch.classList.remove('is-active');
}

function rend (data) {
  removeLoader();
  const ulRefs = document.querySelector('.film-list');
  ulRefs.innerHTML = '';
  data.forEach(item => ulRefs.insertAdjacentHTML('beforeend', item));
}
